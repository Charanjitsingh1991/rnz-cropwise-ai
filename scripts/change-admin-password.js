const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const readline = require('readline');

// Use your MongoDB Atlas connection string directly
const mongoUri = 'mongodb+srv://rnz-cropwise-admin:HaLDTNx9mLHwaSGG@rnz-cropwisecluster.o1ihdgd.mongodb.net/rnz-cropwise?retryWrites=true&w=majority';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function changeAdminPassword() {
  const client = new MongoClient(mongoUri);
  
  try {
    await client.connect();
    const db = client.db();
    
    console.log('🔐 Admin Password Change Tool');
    console.log('==============================');
    
    // Get new password from user
    const newPassword = await new Promise((resolve) => {
      rl.question('Enter new password for admin@rnz-group.com: ', (password) => {
        resolve(password);
      });
    });
    
    if (!newPassword || newPassword.length < 6) {
      console.log('❌ Password must be at least 6 characters long');
      return;
    }
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    // Update admin user
    const result = await db.collection('users').updateOne(
      { email: 'admin@rnz-group.com' },
      { 
        $set: { 
          password: hashedPassword,
          updatedAt: new Date()
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      console.log('❌ Admin user not found! Run create-admin-user.js first');
    } else if (result.modifiedCount === 0) {
      console.log('⚠️ Password was not changed (same password or no changes)');
    } else {
      console.log('✅ Admin password updated successfully!');
      console.log('📧 Email: admin@rnz-group.com');
      console.log('🔑 New password has been set');
    }
    
  } catch (error) {
    console.error('❌ Failed to change password:', error.message);
  } finally {
    await client.close();
    rl.close();
  }
}

changeAdminPassword().catch(console.error);