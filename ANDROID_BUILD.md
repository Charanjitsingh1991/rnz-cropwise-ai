# 📱 RNZ CropWise Android Build Guide

## 🚀 Quick Build Commands

### For Windows Users:
```bash
# Run the automated build script
build-android.bat

# Or use npm commands
npm run android:build
```

### For Mac/Linux Users:
```bash
# Run the automated build script
chmod +x build-android.sh
./build-android.sh

# Or use npm commands
npm run android:build
```

## 📋 Manual Build Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Next.js App
```bash
npm run build
```

### 3. Sync Capacitor
```bash
npx cap sync
```

### 4. Build Android APK
```bash
npx cap build android
```

## 📱 Available NPM Scripts

- `npm run cap:sync` - Sync web assets to native projects
- `npm run cap:build` - Build web app and sync to native
- `npm run android:build` - Complete Android build process
- `npm run android:run` - Run app on connected device/emulator
- `npm run android:open` - Open project in Android Studio

## 🔥 Firebase Configuration

✅ **google-services.json** is now properly configured at `android/app/google-services.json`

**Project Details:**
- **Project ID:** `rnz-cropwise`
- **Package Name:** `com.rnz.cropwise`
- **Android App ID:** `1:244303809991:android:fdfdda7d54e49f14b85de2`

## 📦 What's Included

### Firebase Services:
- ✅ **Push Notifications** (FCM)
- ✅ **Authentication**
- ✅ **Firestore Database**

### Capacitor Plugins:
- ✅ **Push Notifications**
- ✅ **Splash Screen**
- ✅ **Status Bar**
- ✅ **App**
- ✅ **HTTP**

## 📍 APK Location

After successful build, your APK will be located at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

## 🎯 Next Steps

1. **Test the APK** on your device
2. **Deploy to Vercel** (if needed): `git push` (if connected to Vercel)
3. **Generate Release APK** (optional):
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

## 🔧 Troubleshooting

### Common Issues:

1. **Build fails with Firebase errors:**
   - Ensure `google-services.json` is in `android/app/`
   - Check Firebase project configuration

2. **Push notifications not working:**
   - Verify FCM token generation
   - Check notification permissions

3. **App crashes on startup:**
   - Check Capacitor sync: `npx cap sync`
   - Verify all plugins are installed

## 📞 Support

If you encounter issues:
1. Check the build logs
2. Verify Firebase configuration
3. Ensure all dependencies are installed












