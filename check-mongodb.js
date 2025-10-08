const { MongoClient } = require('mongodb');

async function checkMongoDB() {
  console.log('🔍 Checking MongoDB Data for Push Notifications...\n');

  try {
    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('✅ Connected to MongoDB\n');

    const db = client.db();

    // Check total users
    console.log('👥 Checking Users:');
    const totalUsers = await db.collection('users').countDocuments();
    console.log(`   Total users: ${totalUsers}`);

    // Check users with FCM tokens
    const usersWithTokens = await db.collection('users').find({
      fcmToken: { $exists: true, $ne: null }
    }).toArray();
    console.log(`   Users with FCM tokens: ${usersWithTokens.length}`);

    if (usersWithTokens.length > 0) {
      console.log('   📱 Users with FCM tokens:');
      usersWithTokens.forEach(user => {
        console.log(`      - ${user.email} (Admin: ${user.isAdmin || false})`);
      });
    } else {
      console.log('   ❌ No users have FCM tokens');
      console.log('   💡 This means users haven\'t granted notification permission');
    }

    // Check admin users
    console.log('\n👑 Checking Admin Users:');
    const adminUsers = await db.collection('users').find({
      isAdmin: true
    }).toArray();
    console.log(`   Admin users: ${adminUsers.length}`);

    if (adminUsers.length > 0) {
      adminUsers.forEach(user => {
        console.log(`      - ${user.email} (FCM Token: ${user.fcmToken ? 'Yes' : 'No'})`);
      });
    } else {
      console.log('   ❌ No admin users found');
      console.log('   💡 You need to set at least one user as admin');
    }

    // Check notification history
    console.log('\n📨 Checking Notification History:');
    const notifications = await db.collection('notifications').find({}).sort({sentAt: -1}).limit(5).toArray();
    console.log(`   Recent notifications: ${notifications.length}`);

    if (notifications.length > 0) {
      notifications.forEach(notification => {
        console.log(`      - ${notification.title} (${notification.status}) - ${notification.successCount}/${notification.recipients} successful`);
        if (notification.errors && notification.errors.length > 0) {
          console.log(`        Errors: ${notification.errors.join(', ')}`);
        }
      });
    } else {
      console.log('   📝 No notification history found');
    }

    await client.close();

    // Summary and recommendations
    console.log('\n📋 Summary:');
    console.log(`   ✅ MongoDB Connection: Working`);
    console.log(`   👥 Total Users: ${totalUsers}`);
    console.log(`   📱 Users with FCM Tokens: ${usersWithTokens.length}`);
    console.log(`   👑 Admin Users: ${adminUsers.length}`);
    console.log(`   📨 Notifications Sent: ${notifications.length}`);

    console.log('\n💡 Recommendations:');
    
    if (usersWithTokens.length === 0) {
      console.log('   1. Users need to grant notification permission in browser');
      console.log('   2. Check if FCM tokens are being generated');
      console.log('   3. Verify service worker registration');
    }
    
    if (adminUsers.length === 0) {
      console.log('   1. Set at least one user as admin in MongoDB');
      console.log('   2. Use this command: db.users.updateOne({email: "your-email"}, {$set: {isAdmin: true}})');
    }
    
    if (notifications.length > 0 && notifications[0].successCount === 0) {
      console.log('   1. Check Firebase service account key in Vercel');
      console.log('   2. Verify FCM tokens are valid');
      console.log('   3. Check Firebase Console for errors');
    }

    console.log('\n✅ MongoDB check complete!');

  } catch (error) {
    console.error('❌ MongoDB check failed:', error.message);
  }
}

// Run if called directly
if (require.main === module) {
  require('dotenv').config();
  checkMongoDB();
}

module.exports = { checkMongoDB };












