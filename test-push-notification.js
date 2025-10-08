// Simple test script to check push notification setup
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
  } catch (error) {
    console.log(`   ❌ Service Account Key: Invalid JSON - ${error.message}`);
  }
}

console.log('\n🔧 Firebase Configuration:');
console.log('   Project ID: rnz-cropwise');
console.log('   Web App ID: 1:244303809991:web:60e7c13fd6750561b85de2');
console.log('   Android App ID: 1:244303809991:android:fdfdda7d54e49f14b85de2');

console.log('\n💡 Common Issues:');
console.log('   1. Missing FIREBASE_SERVICE_ACCOUNT_KEY in Vercel environment variables');
console.log('   2. Users haven\'t granted notification permission');
console.log('   3. User not set as admin in MongoDB');
console.log('   4. FCM tokens not being generated');

console.log('\n🎯 Next Steps:');
console.log('   1. Check Vercel environment variables');
console.log('   2. Test notification permission in browser');
console.log('   3. Check MongoDB for admin users and FCM tokens');
console.log('   4. Try sending a test notification');

console.log('\n✅ Test complete!');












