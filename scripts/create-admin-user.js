const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

// Use your MongoDB Atlas connection string directly
const mongoUri = 'mongodb+srv://rnz-cropwise-admin:HaLDTNx9mLHwaSGG@rnz-cropwisecluster.o1ihdgd.mongodb.net/rnz-cropwise?retryWrites=true&w=majority';

async function createAdminUser() {
  const client = new MongoClient(mongoUri);
  
  try {
    await client.connect();
    const db = client.db();
    
    console.log('🚀 Creating admin user...');
    console.log(`📊 Connected to MongoDB Atlas: ${db.databaseName}`);
    
    // Check if admin already exists
    const existingAdmin = await db.collection('users').findOne({ email: 'admin@rnz-group.com' });
    
    if (existingAdmin) {
      console.log('⚠️ Admin user already exists!');
      console.log('📧 Email: admin@rnz-group.com');
      console.log('�� To change password, use the password change script or update directly in MongoDB');
      return;
    }
    
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10); // Default password: admin123
    
    const adminUser = {
      uid: 'admin-' + Date.now(),
      email: 'admin@rnz-group.com',
      displayName: 'admin',
      country: 'United Arab Emirates',
      phoneNumber: '+971557714245',
      password: hashedPassword,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await db.collection('users').insertOne(adminUser);
    
    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@rnz-group.com');
    console.log('🔑 Default Password: admin123');
    console.log('⚠️ IMPORTANT: Change this password immediately after first login!');
    console.log(`🆔 User ID: ${result.insertedId}`);
    
  } catch (error) {
    console.error('❌ Failed to create admin user:', error.message);
    if (error.message.includes('ECONNREFUSED')) {
      console.log('');
      console.log('�� Make sure you have internet connection and MongoDB Atlas is accessible');
    }
  } finally {
    await client.close();
  }
}

createAdminUser().catch(console.error);