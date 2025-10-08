const { MongoClient } = require('mongodb');

async function diagnosePushNotifications() {
  console.log('🔍 Diagnosing Push Notifications Setup...\n');

  try {
    // Check MongoDB connection
    console.log('📊 Checking MongoDB connection...');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('✅ MongoDB connected successfully\n');

    const db = client.db();

    // Check users with FCM tokens
    console.log('👥 Checking users with FCM tokens...');
    const usersWithTokens = await db.collection('users').find({
      fcmToken: { $exists: true, $ne: null }
    }).toArray();
    
    console.log(`📱 Found ${usersWithTokens.length} users with FCM tokens`);
    
    if (usersWithTokens.length > 0) {
      console.log('📋 Users with FCM tokens:');
      usersWithTokens.forEach(user => {
        console.log(`   - ${user.email} (Admin: ${user.isAdmin || false})`);
      });
    } else {
      console.log('❌ No users have FCM tokens stored');
      console.log('💡 This means users haven\'t granted notification permission or FCM tokens aren\'t being saved');
    }

    // Check admin users
    console.log('\n👑 Checking admin users...');
    const adminUsers = await db.collection('users').find({
      isAdmin: true
    }).toArray();
    
    console.log(`👑 Found ${adminUsers.length} admin users`);
    adminUsers.forEach(user => {
      console.log(`   - ${user.email} (FCM Token: ${user.fcmToken ? 'Yes' : 'No'})`);
    });

    // Check notification history
    console.log('\n📨 Checking notification history...');
    const notifications = await db.collection('notifications').find({}).sort({sentAt: -1}).limit(5).toArray();
    
    console.log(`📨 Found ${notifications.length} recent notifications`);
    notifications.forEach(notification => {
      console.log(`   - ${notification.title} (${notification.status}) - ${notification.successCount}/${notification.recipients} successful`);
    });

    await client.close();

    // Environment variables check
    console.log('\n🔧 Environment Variables Check:');
    console.log(`   - MONGODB_URI: ${process.env.MONGODB_URI ? '✅ Set' : '❌ Missing'}`);
    console.log(`   - FIREBASE_SERVICE_ACCOUNT_KEY: ${process.env.FIREBASE_SERVICE_ACCOUNT_KEY ? '✅ Set' : '❌ Missing'}`);
    console.log(`   - NEXTAUTH_SECRET: ${process.env.NEXTAUTH_SECRET ? '✅ Set' : '❌ Missing'}`);

    // Recommendations
    console.log('\n💡 Recommendations:');
    
    if (usersWithTokens.length === 0) {
      console.log('   1. Users need to grant notification permission');
      console.log('   2. Check FCM token generation in browser console');
      console.log('   3. Verify service worker registration');
    }
    
    if (adminUsers.length === 0) {
      console.log('   1. Set at least one user as admin in MongoDB');
    }
    
    if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      console.log('   1. Generate Firebase service account key');
      console.log('   2. Add to Vercel environment variables');
    }

    console.log('\n✅ Diagnosis complete!');

  } catch (error) {
    console.error('❌ Diagnosis failed:', error.message);
  }
}

// Run diagnosis if called directly
if (require.main === module) {
  require('dotenv').config();
  diagnosePushNotifications();
}

module.exports = { diagnosePushNotifications };












