const { MongoClient } = require('mongodb');

// Use your MongoDB Atlas connection string directly
const mongoUri = 'mongodb+srv://rnz-cropwise-admin:HaLDTNx9mLHwaSGG@rnz-cropwisecluster.o1ihdgd.mongodb.net/rnz-cropwise?retryWrites=true&w=majority';

async function checkAdminUser() {
  const client = new MongoClient(mongoUri);
  
  try {
    await client.connect();
    const db = client.db();
    
    console.log('🔍 Checking admin user data...');
    console.log(`📊 Connected to MongoDB Atlas: ${db.databaseName}`);
    
    // Find admin user
    const adminUser = await db.collection('users').findOne({ email: 'admin@rnz-group.com' });
    
    if (adminUser) {
      console.log('✅ Admin user found!');
      console.log('📧 Email:', adminUser.email);
      console.log('👤 Display Name:', adminUser.displayName);
      console.log('🌍 Country:', adminUser.country);
      console.log('📱 Phone Number:', adminUser.phoneNumber);
      console.log('👑 Is Admin:', adminUser.isAdmin);
      console.log('📅 Created:', adminUser.createdAt);
      console.log('🔄 Updated:', adminUser.updatedAt);
      console.log('🆔 User ID:', adminUser._id);
    } else {
      console.log('❌ Admin user not found!');
    }
    
  } catch (error) {
    console.error('❌ Failed to check admin user:', error.message);
  } finally {
    await client.close();
  }
}

checkAdminUser();
