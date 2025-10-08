#!/bin/bash

echo "🚀 Starting RNZ CropWise Android Build Process..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Build the Next.js app
echo "🔨 Building Next.js app..."
npm run build

# Step 3: Sync Capacitor
echo "🔄 Syncing Capacitor..."
npx cap sync

# Step 4: Build Android
echo "🤖 Building Android app..."
npx cap build android

echo "✅ Build process completed!"
echo "📱 Your APK is ready at: android/app/build/outputs/apk/debug/app-debug.apk"
echo "🎯 To open in Android Studio: npm run android:open"
echo "📲 To run on device: npm run android:run"












