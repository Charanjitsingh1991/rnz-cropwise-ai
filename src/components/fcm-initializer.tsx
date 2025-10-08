
'use client';

import { useEffect } from 'react';
import { getToken, onMessage, getMessaging } from 'firebase/messaging';
import { app } from '@/lib/firebase';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { Capacitor } from '@capacitor/core';

export function FcmInitializer() {
  const { user, userProfile, loading } = useAuth();
  const { toast } = useToast();

  const updateFcmToken = async (fcmToken: string) => {
    try {
      const response = await fetch('/api/users/fcm-token', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fcmToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to update FCM token');
      }
    } catch (error) {
      console.error('Error updating FCM token:', error);
    }
  };

  useEffect(() => {
    if (loading || !user || !userProfile) {
      return;
    }

    // Skip FCM initialization on native platforms (Capacitor)
    if (Capacitor.isNativePlatform()) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Skipping FCM initialization on native platform');
      }
      return;
    }

    // Only initialize FCM in web browser environment
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && 'Notification' in window) {
      const initializeFcm = async () => {
        try {
          const messaging = getMessaging(app);
          
          // Check current permission status first - DON'T request automatically
          const currentPermission = Notification.permission;
          
          if (currentPermission === 'granted') {
            // Permission already granted, get token
            const fcmToken = await getToken(messaging, {
              vapidKey: 'BFMmrs6dCljost1HcJQGAkfZQmre5INZLuONwX8V9Jy9_qYznnYxjZQcBlX3HtfxwzC6YeOczXtShLQDTtc7znk',
            });

            if (fcmToken) {
              if (process.env.NODE_ENV === 'development') {
                console.log('FCM Token:', fcmToken);
              }
              if (fcmToken !== userProfile.fcmToken) {
                 await updateFcmToken(fcmToken);
              }
            } else {
              if (process.env.NODE_ENV === 'development') {
                console.log('No registration token available with granted permission.');
              }
            }
          } else if (currentPermission === 'denied') {
            if (process.env.NODE_ENV === 'development') {
              console.log('Notification permission denied by user.');
            }
          } else {
            // Permission is 'default' - don't request automatically, let PushNotificationPermission handle it
            if (process.env.NODE_ENV === 'development') {
              console.log('Notification permission not yet requested.');
            }
          }

          // Always set up message listener for foreground messages (if permission is granted)
          if (currentPermission === 'granted') {
            onMessage(messaging, (payload) => {
              if (process.env.NODE_ENV === 'development') {
                console.log('Message received. ', payload);
              }
              toast({
                  title: payload.notification?.title,
                  description: payload.notification?.body,
              });
            });
          }
        } catch (error) {
          console.error('An error occurred while initializing FCM. ', error);
        }
      };

      initializeFcm();
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.log('FCM not supported in this environment');
      }
    }
  }, [loading, user, userProfile?.fcmToken, toast]);

  return null;
}
