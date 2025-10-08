'use client';

import { useEffect } from 'react';
import { App as CapacitorApp, AppState } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

export function CapacitorEventHandler() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Handle the back button for Android
      CapacitorApp.addListener('backButton', ({ canGoBack }) => {
        if (canGoBack) {
          window.history.back();
        } else {
          CapacitorApp.exitApp();
        }
      });

      // Configure status bar for a light background
      const configureStatusBar = async () => {
        try {
          // Set the style to dark icons
          await StatusBar.setStyle({ style: Style.Dark });
          // Set the background color to match app's light background
          await StatusBar.setBackgroundColor({ color: '#E5F5FA' });
          // Ensure status bar overlays content properly
          await StatusBar.setOverlaysWebView({ overlay: true });
        } catch (e) {
            console.error("Failed to set status bar style", e);
        }
      };

      configureStatusBar();

      // Handle app state changes for biometric authentication
      const handleAppStateChange = (state: AppState) => {
        if (state.isActive) {
          // App became active (resumed from background)
          // Trigger biometric authentication check
          window.dispatchEvent(new CustomEvent('app-resumed'));
        }
      };

      // Listen for app state changes
      CapacitorApp.addListener('appStateChange', handleAppStateChange);

      // Setup push notification listeners for mobile
      const setupPushNotificationListeners = () => {
        // Listen for registration success
        PushNotifications.addListener('registration', (token) => {
          console.log('📱 Mobile push registration success:', token.value);
          // Store FCM token in database
          if (user) {
            storeFCMTokenMobile(token.value);
          }
        });

        // Listen for registration errors
        PushNotifications.addListener('registrationError', (error) => {
          console.error('📱 Mobile push registration failed:', error);
        });

        // Listen for push notification received
        PushNotifications.addListener('pushNotificationReceived', (notification) => {
          console.log('📱 Mobile push notification received:', notification);
        });

        // Listen for push notification action performed
        PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
          console.log('📱 Mobile push notification action performed:', notification);
          
          // Handle notification tap - navigate to relevant screen
          const data = notification.notification.data;
          if (data && data.type) {
            switch (data.type) {
              case 'admin_notification':
                router.push('/');
                break;
              case 'support_ticket':
                if (data.ticketId) {
                  router.push(`/support/${data.ticketId}`);
                }
                break;
              default:
                router.push('/');
            }
          }
        });
      };

      setupPushNotificationListeners();

      // Cleanup listeners
      return () => {
        CapacitorApp.removeAllListeners();
        PushNotifications.removeAllListeners();
      };
    }
  }, [router, user]);

  const storeFCMTokenMobile = async (token: string) => {
    try {
      const response = await fetch('/api/users/fcm-token', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fcmToken: token }),
      });

      if (response.ok) {
        console.log('📱 Mobile FCM token stored successfully');
      } else {
        console.error('📱 Failed to store mobile FCM token');
      }
    } catch (error) {
      console.error('📱 Error storing mobile FCM token:', error);
    }
  };

  return null; // This component does not render anything
}
