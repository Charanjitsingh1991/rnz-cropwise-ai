@echo off
echo 🔍 Checking Push Notifications Setup...
echo.

echo 📋 Environment Variables Check:
echo.

if defined MONGODB_URI (
    echo ✅ MONGODB_URI: Set
) else (
    echo ❌ MONGODB_URI: Not set
)

if defined FIREBASE_SERVICE_ACCOUNT_KEY (
    echo ✅ FIREBASE_SERVICE_ACCOUNT_KEY: Set
) else (
    echo ❌ FIREBASE_SERVICE_ACCOUNT_KEY: Not set
)

if defined NEXTAUTH_SECRET (
    echo ✅ NEXTAUTH_SECRET: Set
) else (
    echo ❌ NEXTAUTH_SECRET: Not set
)

echo.
echo 🔧 Firebase Configuration:
echo    Project ID: rnz-cropwise
echo    Web App ID: 1:244303809991:web:60e7c13fd6750561b85de2
echo    Android App ID: 1:244303809991:android:fdfdda7d54e49f14b85de2

echo.
echo 📱 Next Steps:
echo    1. Check if users have granted notification permission
echo    2. Verify FCM tokens are being generated
echo    3. Check if user is set as admin in MongoDB
echo    4. Test sending notification from admin panel

echo.
echo 💡 To test push notifications:
echo    1. Open your app in browser
echo    2. Grant notification permission
echo    3. Check browser console for FCM token
echo    4. Go to /admin/notifications
echo    5. Send a test notification

pause












