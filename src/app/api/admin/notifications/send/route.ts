import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { MongoClient } from 'mongodb';

// Firebase Admin SDK setup
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

// Initialize Firebase Admin if not already initialized
if (!getApps().length) {
  try {
    // For production, use service account key from environment
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      initializeApp({
        credential: cert(serviceAccount),
        projectId: 'rnz-cropwise'
      });
      console.log('✅ Firebase Admin initialized with service account');
    } else {
      // For development, use default credentials
      initializeApp({
        projectId: 'rnz-cropwise'
      });
      console.log('✅ Firebase Admin initialized with default credentials');
    }
  } catch (error) {
    console.error('❌ Firebase Admin initialization error:', error);
    // Try alternative initialization
    try {
      initializeApp({
        projectId: 'rnz-cropwise'
      });
      console.log('✅ Firebase Admin initialized with fallback method');
    } catch (fallbackError) {
      console.error('❌ Firebase Admin fallback initialization failed:', fallbackError);
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();
    
    const user = await db.collection('users').findOne({ email: session.user.email });
    if (!user?.isAdmin) {
      await client.close();
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const { title, body, targetAudience, userSegment, specificEmails, scheduledFor } = await request.json();

    if (!title || !body) {
      await client.close();
      return NextResponse.json({ error: 'Title and body are required' }, { status: 400 });
    }

    // Get target users based on audience selection
    let targetUsers: any[] = [];
    
    if (targetAudience === 'all') {
      // Get all users with FCM tokens
      targetUsers = await db.collection('users')
        .find({ fcmToken: { $exists: true, $ne: null } })
        .project({ fcmToken: 1, email: 1, displayName: 1 })
        .toArray();
    } else if (targetAudience === 'segment') {
      // Get users based on segment
      const query: any = { fcmToken: { $exists: true, $ne: null } };
      if (userSegment === 'admin') {
        query.isAdmin = true;
      } else if (userSegment === 'regular') {
        query.isAdmin = { $ne: true };
      }
      
      targetUsers = await db.collection('users')
        .find(query)
        .project({ fcmToken: 1, email: 1, displayName: 1 })
        .toArray();
    } else if (targetAudience === 'specific' && specificEmails) {
      // Get specific users by email
      const emails = specificEmails.split(',').map((email: string) => email.trim());
      targetUsers = await db.collection('users')
        .find({ 
          email: { $in: emails },
          fcmToken: { $exists: true, $ne: null }
        })
        .project({ fcmToken: 1, email: 1, displayName: 1 })
        .toArray();
    }

    if (targetUsers.length === 0) {
      await client.close();
      return NextResponse.json({ 
        error: 'No users found with valid FCM tokens for the selected audience' 
      }, { status: 400 });
    }

    // Extract FCM tokens
    const fcmTokens = targetUsers.map(user => user.fcmToken).filter(Boolean);
    
    if (fcmTokens.length === 0) {
      await client.close();
      return NextResponse.json({ 
        error: 'No valid FCM tokens found for the selected users' 
      }, { status: 400 });
    }

    // Send notifications
    let successCount = 0;
    let failureCount = 0;
    const errors: string[] = [];

    try {
      console.log(`📤 Attempting to send notification to ${fcmTokens.length} tokens`);
      
      // Verify Firebase Admin is initialized
      const apps = getApps();
      if (apps.length === 0) {
        throw new Error('Firebase Admin not initialized');
      }
      
      // Get messaging instance
      const messaging = getMessaging();
      console.log('✅ Firebase Messaging instance obtained');
      
      // Prepare the message
      const message = {
        tokens: fcmTokens,
        notification: {
          title,
          body,
        },
        data: {
          click_action: 'FLUTTER_NOTIFICATION_CLICK',
          type: 'admin_notification',
          timestamp: new Date().toISOString(),
        },
        android: {
          priority: 'high' as const,
          notification: {
            channelId: 'admin_notifications',
            priority: 'high' as const,
            defaultSound: true,
            defaultVibrateTimings: true,
          },
        },
        apns: {
          payload: {
            aps: {
              sound: 'default',
              badge: 1,
            },
          },
        },
      };
      
      console.log('📤 Sending multicast message...');
      
      // Send to all tokens using sendEachForMulticast or sendAll
      let response;
      if (typeof messaging.sendEachForMulticast === 'function') {
        response = await messaging.sendEachForMulticast(message);
      } else if (typeof messaging.sendMulticast === 'function') {
        response = await messaging.sendMulticast(message);
      } else {
        // Fallback: send individual messages
        console.log('⚠️ Using fallback: sending individual messages');
        const responses = await Promise.allSettled(
          fcmTokens.map(token => 
            messaging.send({
              token,
              notification: message.notification,
              data: message.data,
              android: message.android,
              apns: message.apns,
            })
          )
        );
        
        const successCount = responses.filter(r => r.status === 'fulfilled').length;
        const failureCount = responses.filter(r => r.status === 'rejected').length;
        
        response = {
          successCount,
          failureCount,
          responses: responses.map((r, idx) => ({
            success: r.status === 'fulfilled',
            messageId: r.status === 'fulfilled' ? r.value : undefined,
            error: r.status === 'rejected' ? { message: r.reason.message } : undefined
          }))
        };
      }

      successCount = response.successCount;
      failureCount = response.failureCount;
      
      console.log(`✅ FCM Response: ${successCount} successful, ${failureCount} failed`);

      // Log detailed results
      if (response.responses) {
        response.responses.forEach((resp, idx) => {
          if (!resp.success) {
            const errorMsg = `Token ${idx}: ${resp.error?.message || 'Unknown error'}`;
            errors.push(errorMsg);
            console.error(`❌ FCM Error for token ${idx}:`, resp.error);
          }
        });
      }
    } catch (error) {
      console.error('❌ FCM send error:', error);
      failureCount = fcmTokens.length;
      successCount = 0;
      const errorMsg = error instanceof Error ? error.message : 'Unknown FCM error';
      errors.push(errorMsg);
      console.error('❌ FCM Error details:', error);
    }

    // Save notification record
    const notificationRecord = {
      title,
      body,
      targetAudience,
      userSegment: userSegment || null,
      specificEmails: specificEmails || null,
      scheduledFor: scheduledFor || null,
      sentAt: new Date(),
      recipients: targetUsers.length,
      successCount,
      failureCount,
      errors: errors.length > 0 ? errors : [],
      status: failureCount === 0 ? 'sent' : (successCount > 0 ? 'partial' : 'failed'),
      sentBy: session.user.email,
    };

    await db.collection('notifications').insertOne(notificationRecord);

    await client.close();

    return NextResponse.json({
      message: 'Notifications sent successfully',
      recipients: targetUsers.length,
      successCount,
      failureCount,
      errors: errors.length > 0 ? errors : [],
    });

  } catch (error) {
    console.error('Notification send error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

