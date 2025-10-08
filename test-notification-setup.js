// Test script to verify push notification setup
require('dotenv').config();

console.log('🔍 Testing Push Notification Setup...\n');

// Check environment variables
console.log('📋 Environment Variables:');
console.log(`   MONGODB_URI: ${process.env.MONGODB_URI ? '✅ Set' : '❌ Missing'}`);
console.log(`   FIREBASE_SERVICE_ACCOUNT_KEY: ${process.env.FIREBASE_SERVICE_ACCOUNT_KEY ? '✅ Set' : '❌ Missing'}`);
console.log(`   NEXTAUTH_SECRET: ${process.env.NEXTAUTH_SECRET ? '✅ Set' : '❌ Missing'}`);

// Check Firebase service account key format
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    console.log(`   ✅ Service Account Key: Valid JSON (Project: ${serviceAccount.project_id})`);
    
    // Check required fields
    const requiredFields = ['type', 'project_id', 'private_key', 'client_email'];
    const missingFields = requiredFields.filter(field => !serviceAccount[field]);
    
    if (missingFields.length > 0) {
      console.log(`   ❌ Missing required fields: ${missingFields.join(', ')}`);
    } else {
      console.log(`   ✅ All required fields present`);
    }
  } catch (error) {
    console.log(`   ❌ Service Account Key: Invalid JSON - ${error.message}`);
  }
}

console.log('\n🔧 Firebase Configuration:');
console.log('   Project ID: rnz-cropwise');
console.log('   Web App ID: 1:244303809991:web:60e7c13fd6750561b85de2');

console.log('\n💡 Common Issues:');
console.log('   1. Missing FIREBASE_SERVICE_ACCOUNT_KEY in Vercel environment variables');
console.log('   2. Users haven\'t granted notification permission');
console.log('   3. User not set as admin in MongoDB');
console.log('   4. FCM tokens not being generated');

console.log('\n🎯 Next Steps:');
console.log('   1. Generate Firebase service account key from Firebase Console');
console.log('   2. Add FIREBASE_SERVICE_ACCOUNT_KEY to Vercel environment variables');
console.log('   3. Redeploy the application');
console.log('   4. Test notification permission in browser');
console.log('   5. Check MongoDB for admin users and FCM tokens');

console.log('\n📝 Quick Fix Commands:');
console.log('   1. Go to Firebase Console → Project Settings → Service Accounts');
console.log('   2. Generate new private key');
console.log('   3. Copy entire JSON content');
console.log('   4. Add to Vercel Environment Variables');
console.log('   5. Redeploy application');

console.log('\n✅ Test complete!');
