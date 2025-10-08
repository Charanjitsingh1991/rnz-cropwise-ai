const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

// Use your MongoDB Atlas connection string
const mongoUri = 'mongodb+srv://rnz-cropwise-admin:HaLDTNx9mLHwaSGG@rnz-cropwisecluster.o1ihdgd.mongodb.net/rnz-cropwise?retryWrites=true&w=majority';

async function fixAdminPassword() {
  const client = new MongoClient(mongoUri);
  
  try {
    await client.connect();
    const db = client.db();
    
    console.log('🔧 Fixing admin password...');
    console.log(`📊 Connected to MongoDB Atlas: ${db.databaseName}`);
    
    // Find the admin user
    const adminUser = await db.collection('users').findOne({ email: 'admin@rnz-group.com' });
    
    if (!adminUser) {
      console.log('❌ Admin user not found!');
      return;
    }
    
    console.log('✅ Admin user found:', adminUser.email);
    console.log('🔑 Current password type:', typeof adminUser.password);
    
    // Check if password is already hashed
    if (adminUser.password.startsWith('$2b$')) {
      console.log('✅ Password is already hashed, no changes needed');
      return;
    }
    
    // Hash the plain text password
    const hashedPassword = await bcrypt.hash(adminUser.password, 10);
    
    // Update the admin user with hashed password
    const result = await db.collection('users').updateOne(
      { email: 'admin@rnz-group.com' },
      { 
        $set: { 
          password: hashedPassword,
          updatedAt: new Date()
        } 
      }
    );
    
    if (result.modifiedCount > 0) {
      console.log('✅ Admin password updated successfully!');
      console.log('🔑 New hashed password saved');
      console.log('📧 Email: admin@rnz-group.com');
      console.log('🔑 Password: admin123 (now hashed)');
      console.log('⚠️ You can now login with these credentials');
    } else {
      console.log('❌ Failed to update admin password');
    }
    
  } catch (error) {
    console.error('❌ Error fixing admin password:', error.message);
  } finally {
    await client.close();
  }
}

// Run the function
fixAdminPassword();
