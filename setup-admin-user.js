// Script to set up an admin user for testing push notifications
require('dotenv').config();
const { MongoClient } = require('mongodb');

async function setupAdminUser() {
  console.log('👑 Setting up Admin User for Push Notifications...\n');

  try {
    if (!process.env.MONGODB_URI) {
      console.log('❌ MONGODB_URI environment variable is missing');
      console.log('💡 Please add MONGODB_URI to your environment variables');
      return;
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('✅ Connected to MongoDB\n');

    const db = client.db();

    // Check existing admin users
    const adminUsers = await db.collection('users').find({ isAdmin: true }).toArray();
    console.log(`👑 Found ${adminUsers.length} existing admin users:`);
    
    adminUsers.forEach(user => {
      console.log(`   - ${user.email} (FCM Token: ${user.fcmToken ? 'Yes' : 'No'})`);
    });

    // Check all users
    const allUsers = await db.collection('users').find({}).toArray();
    console.log(`\n👥 Total users in database: ${allUsers.length}`);
    
    if (allUsers.length > 0) {
      console.log('📋 Available users:');
      allUsers.forEach(user => {
        console.log(`   - ${user.email} (Admin: ${user.isAdmin || false}, FCM: ${user.fcmToken ? 'Yes' : 'No'})`);
      });
    }

    // Interactive admin setup
    console.log('\n🎯 To set up an admin user:');
    console.log('   1. Go to your application and sign up/login');
    console.log('   2. Grant notification permission when prompted');
    console.log('   3. Run this command to make a user admin:');
    console.log('      node -e "require(\'mongodb\').MongoClient.connect(process.env.MONGODB_URI).then(client => client.db().collection(\'users\').updateOne({email: \'your-email@example.com\'}, {\$set: {isAdmin: true}}).then(() => console.log(\'✅ User set as admin\')).finally(() => client.close()))"');

    await client.close();

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Run the setup
setupAdminUser();
