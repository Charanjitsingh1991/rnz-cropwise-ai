# 🔔 Push Notifications Troubleshooting Guide

## 🚨 Common Issues & Solutions

### **1. Firebase Service Account Key Missing**
**Error:** "Firebase Admin initialization error"

**Solution:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your `rnz-cropwise` project
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate New Private Key**
5. Download the JSON file
6. Add to Vercel environment variables:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `FIREBASE_SERVICE_ACCOUNT_KEY` with the entire JSON content

### **2. No FCM Tokens Found**
**Error:** "No users found with valid FCM tokens"

**Solution:**
1. **Check if users have granted notification permission**
2. **Verify FCM token generation:**
   ```javascript
   // Check browser console for FCM token
   console.log('FCM Token:', fcmToken);
   ```
3. **Check MongoDB for stored tokens:**
   ```javascript
   // In MongoDB, check users collection
   db.users.find({fcmToken: {$exists: true}})
   ```

### **3. FCM Token Generation Issues**
**Error:** "No registration token available"

**Solution:**
1. **Check notification permissions:**
   ```javascript
   // Should return 'granted'
   console.log(Notification.permission);
   ```
2. **Verify VAPID key:**
   - Check if VAPID key is correct in `src/components/fcm-initializer.tsx`
3. **Check service worker registration**

### **4. Admin Access Issues**
**Error:** "Admin access required"

**Solution:**
1. **Check user admin status in MongoDB:**
   ```javascript
   db.users.findOne({email: "your-email@example.com"})
   ```
2. **Set user as admin:**
   ```javascript
   db.users.updateOne(
     {email: "your-email@example.com"},
     {$set: {isAdmin: true}}
   )
   ```

### **5. Environment Variables**
**Missing Variables:**
- `FIREBASE_SERVICE_ACCOUNT_KEY`
- `MONGODB_URI`
- `NEXTAUTH_SECRET`

## 🔧 Debug Steps

### **Step 1: Check Firebase Configuration**
```bash
# Verify Firebase project
echo "Project ID: rnz-cropwise"
echo "Web App ID: 1:244303809991:web:60e7c13fd6750561b85de2"
echo "Android App ID: 1:244303809991:android:fdfdda7d54e49f14b85de2"
```

### **Step 2: Check Environment Variables**
```bash
# In Vercel Dashboard
# Settings → Environment Variables
# Verify these are set:
# - FIREBASE_SERVICE_ACCOUNT_KEY
# - MONGODB_URI
# - NEXTAUTH_SECRET
```

### **Step 3: Test FCM Token Generation**
1. **Open browser console**
2. **Navigate to your app**
3. **Check for FCM token logs**
4. **Verify token is saved to MongoDB**

### **Step 4: Test Admin Panel**
1. **Login as admin user**
2. **Go to /admin/notifications**
3. **Try sending a test notification**
4. **Check response for errors**

## 🛠️ Quick Fix Scripts

### **Generate Service Account Key:**
1. Firebase Console → Project Settings → Service Accounts
2. Click "Generate New Private Key"
3. Download JSON file
4. Copy entire content to Vercel environment variable

### **Set User as Admin:**
```javascript
// In MongoDB shell or MongoDB Compass
db.users.updateOne(
  {email: "your-admin-email@example.com"},
  {$set: {isAdmin: true}}
)
```

### **Check FCM Tokens:**
```javascript
// In MongoDB
db.users.find({fcmToken: {$exists: true}}, {email: 1, fcmToken: 1})
```

## 📱 Testing Push Notifications

### **Web Testing:**
1. **Grant notification permission**
2. **Check FCM token generation**
3. **Send test notification from admin panel**
4. **Check browser console for errors**

### **Android Testing:**
1. **Install APK on device**
2. **Grant notification permission**
3. **Check FCM token generation**
4. **Send test notification**

## 🎯 Success Indicators

### **✅ Working Push Notifications:**
- FCM tokens are generated and stored
- Admin panel shows success count > 0
- Notifications appear on devices
- No errors in browser console

### **❌ Common Failures:**
- "No FCM tokens found"
- "Firebase Admin initialization error"
- "Admin access required"
- "No users found"

## 📞 Support

If issues persist:
1. Check browser console for errors
2. Verify all environment variables
3. Test with a simple notification first
4. Check Firebase Console for any errors












