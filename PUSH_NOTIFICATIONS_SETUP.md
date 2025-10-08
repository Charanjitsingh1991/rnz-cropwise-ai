# 🔔 Push Notifications Setup Guide for RNZ CropWise

## 📋 Overview

This guide explains how to set up and use push notifications in your RNZ CropWise application. The system allows admins to send notifications to all users, specific user segments, or individual users.

## 🏗️ What's Already Implemented

### ✅ **Frontend Components**
- **Admin Notifications Page** (`/admin/notifications`)
  - Send notifications to all users
  - Target specific user segments (admin/regular users)
  - Send to specific users by email
  - Schedule notifications (optional)
  - View notification history and statistics

### ✅ **Backend APIs**
- `POST /api/admin/notifications/send` - Send notifications
- `GET /api/admin/notifications` - Get notification history
- `GET /api/admin/users/count` - Get user statistics

### ✅ **Firebase Integration**
- FCM token storage in user profiles
- Service worker for web notifications
- Background message handling

## 🚀 Setup Requirements

### 1. **Firebase Service Account Key**

You need to generate a Firebase service account key:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your `rnz-cropwise` project
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate New Private Key**
5. Download the JSON file

### 2. **Environment Variables**

Add these to your `.env.local` file:

```env
# Firebase Admin SDK
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"rnz-cropwise",...}


# MongoDB (already configured)
MONGODB_URI=your_mongodb_connection_string

# NextAuth (already configured)
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=your_url
```

### 3. **Vercel Environment Variables**

For production deployment on Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add `FIREBASE_SERVICE_ACCOUNT_KEY` with the entire JSON content
4. Redeploy your application

## 📱 How It Works

### **User Side (Receiving Notifications)**

1. **Permission Request**: Users grant notification permission
2. **Token Generation**: FCM token is generated and stored in MongoDB
3. **Token Storage**: Token is saved to user profile via `/api/users/fcm-token`
4. **Notification Reception**: Users receive notifications via:
   - **Web**: Service worker (`firebase-messaging-sw.js`)
   - **Mobile**: Native FCM handling

### **Admin Side (Sending Notifications)**

1. **Access Admin Panel**: Go to `/admin/notifications`
2. **Compose Message**: Enter title and body
3. **Select Audience**:
   - **All Users**: Send to everyone with FCM tokens
   - **User Segment**: Target admin or regular users
   - **Specific Users**: Enter comma-separated emails
4. **Send**: Notification is sent via Firebase Admin SDK
5. **Track Results**: View delivery status and statistics

## 🎯 Notification Types

### **1. Broadcast Notifications**
- **Target**: All users with FCM tokens
- **Use Case**: App updates, general announcements, maintenance notices

### **2. Segment Notifications**
- **Target**: Admin users only or regular users only
- **Use Case**: 
  - **Admin**: System updates, admin-specific features
  - **Regular**: User-specific updates, promotions

### **3. Targeted Notifications**
- **Target**: Specific users by email
- **Use Case**: Individual support responses, personalized offers

### **4. Scheduled Notifications**
- **Target**: Any of the above with future delivery
- **Use Case**: Event reminders, scheduled announcements

## 🔧 Technical Implementation

### **Firebase Admin SDK**
```typescript
// Initialize Firebase Admin
import { initializeApp, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

// Send multicast notification
const response = await getMessaging().sendMulticast({
  tokens: fcmTokens,
  notification: { title, body },
  data: { type: 'admin_notification' },
  android: { priority: 'high' },
  apns: { payload: { aps: { sound: 'default' } } }
});
```

### **MongoDB Collections**
- **`users`**: Stores FCM tokens and user info
- **`notifications`**: Tracks sent notifications and delivery status

### **Service Worker**
- Handles background notifications
- Manages notification clicks
- Provides offline support

## 📊 Admin Dashboard Features

### **Statistics Cards**
- **Total Users**: Count of all registered users
- **Notifications Sent**: Total notifications sent
- **Success Rate**: Percentage of successful deliveries

### **Notification Form**
- **Title**: Notification headline (max 50 chars)
- **Body**: Notification message (max 200 chars)
- **Target Audience**: All, Segment, or Specific
- **Scheduling**: Optional future delivery

### **History Tracking**
- **Delivery Status**: Sent, Sending, Failed
- **Recipient Count**: Number of users targeted
- **Error Logging**: Detailed failure reasons
- **Timestamp**: When notification was sent

## 🚨 Troubleshooting

### **Common Issues**

1. **"No users found with valid FCM tokens"**
   - Users haven't granted notification permission
   - FCM tokens aren't being saved properly
   - Check `/api/users/fcm-token` endpoint

2. **"Firebase Admin initialization error"**
   - Service account key is missing or invalid
   - Check `FIREBASE_SERVICE_ACCOUNT_KEY` environment variable
   - Verify JSON format and content

3. **"Admin access required"**
   - User isn't marked as admin in database
   - Check user's `isAdmin` field in MongoDB

4. **Notifications not received**
   - Check browser console for FCM errors
   - Verify service worker is registered
   - Check notification permissions

### **Debug Steps**

1. **Check FCM Token Storage**
   ```javascript
   // In browser console
   const user = await fetch('/api/users/me').then(r => r.json());
   console.log('FCM Token:', user.fcmToken);
   ```

2. **Verify Service Worker**
   - Go to DevTools → Application → Service Workers
   - Check if `firebase-messaging-sw.js` is registered

3. **Test Notification Sending**
   - Use admin panel to send test notification
   - Check API response for errors
   - Monitor Firebase console for delivery status

## 🔒 Security Considerations

### **Admin Access Control**
- Only users with `isAdmin: true` can send notifications
- Session validation on all admin endpoints
- Rate limiting on notification sending

### **Data Privacy**
- FCM tokens are encrypted in transit
- User emails are validated before targeting
- Notification content is logged for audit purposes

### **Rate Limiting**
- Consider implementing rate limits on `/api/admin/notifications/send`
- Prevent spam notifications
- Monitor for abuse

## 📈 Best Practices

### **Notification Content**
- Keep titles under 50 characters
- Use clear, actionable language
- Include relevant data for deep linking

### **Targeting Strategy**
- Use segments for relevant content
- Avoid sending too many notifications
- Test with small groups first

### **Monitoring**
- Track delivery success rates
- Monitor user engagement
- Analyze notification effectiveness

## 🚀 Next Steps

### **Immediate Actions**
1. Generate Firebase service account key
2. Add environment variables
3. Test with admin account
4. Deploy to production

### **Future Enhancements**
- **Rich Notifications**: Images, buttons, actions
- **A/B Testing**: Test different notification content
- **Analytics**: Track open rates and engagement
- **Automation**: Scheduled notifications based on events
- **Templates**: Pre-defined notification templates

## 📞 Support

If you encounter issues:

1. Check this guide's troubleshooting section
2. Verify all environment variables are set
3. Check Firebase console for errors
4. Review browser console and network logs
5. Test with minimal notification content

---

**Note**: This push notification system works for both web and mobile apps. For mobile apps, the Capacitor integration will handle native FCM delivery automatically.
