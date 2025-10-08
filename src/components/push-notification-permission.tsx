'use client';

import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { getToken, getMessaging } from 'firebase/messaging';
import { app } from '@/lib/firebase';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, BellOff, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function PushNotificationPermission() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [permissionStatus, setPermissionStatus] = useState<string>('');
  const [isRequesting, setIsRequesting] = useState(false);
  const [hasShownPrompt, setHasShownPrompt] = useState(false);
  const [isNativePlatform, setIsNativePlatform] = useState(false);

  useEffect(() => {
    // Check platform client-side to avoid hydration issues
    setIsNativePlatform(Capacitor.isNativePlatform());
  }, []);

  useEffect(() => {
    if (user) {
      checkNotificationPermission();
    }
  }, [user, isNativePlatform]);

  const checkNotificationPermission = async () => {
    try {
      // Check if we've already shown the prompt for this user
      const shown = localStorage.getItem(`notification_prompt_shown_${user?.uid}`);
      if (shown === 'true') {
        setHasShownPrompt(true);
        return;
      }

      // Also check if user explicitly dismissed it in this session
      const sessionDismissed = sessionStorage.getItem(`notification_dismissed_${user?.uid}`);
      if (sessionDismissed === 'true') {
        setHasShownPrompt(true);
        return;
      }

      if (isNativePlatform) {
        // Native platform - use Capacitor PushNotifications
        const status = await PushNotifications.checkPermissions();
        setPermissionStatus(status.receive);

        console.log('Mobile push notification status:', status.receive);

        // Only show prompt if permission is 'prompt' (not granted or denied)
        if (status.receive === 'prompt' || status.receive === 'prompt-with-rationale') {
          // Wait a bit for the app to fully load
          setTimeout(() => {
            if (!hasShownPrompt && !sessionStorage.getItem(`notification_dismissed_${user?.uid}`)) {
              setHasShownPrompt(true);
            }
          }, 3000); // Increased delay for mobile
        } else if (status.receive === 'granted') {
          // Permission already granted, register for notifications
          try {
            await PushNotifications.register();
          } catch (error) {
            console.error('Error registering for push notifications:', error);
          }
        }
      } else {
        // Web platform - use Notification API
        if (typeof window !== 'undefined' && 'Notification' in window) {
          const permission = Notification.permission;
          setPermissionStatus(permission);

          // If permission is not granted and not denied, show the prompt
          if (permission === 'default') {
            // Wait a bit for the app to fully load
            setTimeout(() => {
              if (!hasShownPrompt && !sessionStorage.getItem(`notification_dismissed_${user?.uid}`)) {
                setHasShownPrompt(true);
              }
            }, 2000);
          }
        }
      }
    } catch (error) {
      console.error('Error checking notification permissions:', error);
    }
  };

  const requestPermission = async () => {
    try {
      setIsRequesting(true);
      
      if (isNativePlatform) {
        // Native platform - use Capacitor PushNotifications
        const result = await PushNotifications.requestPermissions();
        
        if (result.receive === 'granted') {
          setPermissionStatus('granted');
          setHasShownPrompt(true);
          
          // Register for push notifications
          await PushNotifications.register();
          
          // Mark as shown for this user
          localStorage.setItem(`notification_prompt_shown_${user?.uid}`, 'true');
          
          toast({
            title: 'Notifications Enabled!',
            description: 'You will now receive push notifications.',
            variant: 'default',
          });

          // Listen for registration success
          PushNotifications.addListener('registration', (token) => {
            console.log('Push registration success:', token.value);
            // Store FCM token in database
            storeFCMToken(token.value);
          });

          // Listen for registration errors
          PushNotifications.addListener('registrationError', (error) => {
            console.error('Push registration failed:', error);
            toast({
              title: 'Notification Setup Failed',
              description: 'Please try again later.',
              variant: 'destructive',
            });
          });

        } else {
          setPermissionStatus('denied');
          setHasShownPrompt(true);
          localStorage.setItem(`notification_prompt_shown_${user?.uid}`, 'true');
          
          toast({
            title: 'Notifications Disabled',
            description: 'You can enable notifications later in your device settings.',
            variant: 'destructive',
          });
        }
      } else {
        // Web platform - use Notification API and Firebase
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
          setPermissionStatus('granted');
          setHasShownPrompt(true);
          localStorage.setItem(`notification_prompt_shown_${user?.uid}`, 'true');
          
          // Get FCM token for web
          const messaging = getMessaging(app);
          const fcmToken = await getToken(messaging, {
            vapidKey: 'BFMmrs6dCljost1HcJQGAkfZQmre5INZLuONwX8V9Jy9_qYznnYxjZQcBlX3HtfxwzC6YeOczXtShLQDTtc7znk',
          });
          
          if (fcmToken) {
            await storeFCMToken(fcmToken);
          }
          
          toast({
            title: 'Notifications Enabled!',
            description: 'You will now receive push notifications.',
            variant: 'default',
          });
        } else {
          setPermissionStatus('denied');
          setHasShownPrompt(true);
          localStorage.setItem(`notification_prompt_shown_${user?.uid}`, 'true');
          
          toast({
            title: 'Notifications Disabled',
            description: 'You can enable notifications later in your browser settings.',
            variant: 'destructive',
          });
        }
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      toast({
        title: 'Permission Request Failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsRequesting(false);
    }
  };

  const storeFCMToken = async (token: string) => {
    try {
      const response = await fetch('/api/users/fcm-token', {
        method: 'PUT', // Changed to PUT to match the API endpoint
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fcmToken: token }),
      });

      if (response.ok) {
        console.log('FCM token stored successfully');
      } else {
        console.error('Failed to store FCM token');
      }
    } catch (error) {
      console.error('Error storing FCM token:', error);
    }
  };

  const skipPermission = () => {
    setHasShownPrompt(true);
    // For mobile, use sessionStorage for "Maybe Later" so it shows again next app session
    // but localStorage for permanent dismissal
    if (isNativePlatform) {
      sessionStorage.setItem(`notification_dismissed_${user?.uid}`, 'true');
    } else {
      localStorage.setItem(`notification_prompt_shown_${user?.uid}`, 'true');
    }
  };

  const dontAskAgain = () => {
    setHasShownPrompt(true);
    localStorage.setItem(`notification_prompt_shown_${user?.uid}`, 'true');
  };

  // Don't show if no user, already shown, or permission already granted/denied
  if (!user || hasShownPrompt || permissionStatus === 'granted' || permissionStatus === 'denied') {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Bell className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl">Enable Notifications</CardTitle>
          <p className="text-sm text-muted-foreground">
            Stay updated with important updates, product information, and support responses
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Product updates and new features</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Support ticket responses</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Important announcements</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <Button 
              onClick={requestPermission} 
              disabled={isRequesting}
              className="w-full"
            >
              {isRequesting ? 'Enabling...' : 'Enable Notifications'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={skipPermission}
              className="w-full"
            >
              {isNativePlatform ? 'Maybe Later' : 'Maybe Later'}
            </Button>
            
            {isNativePlatform && (
              <Button 
                variant="ghost" 
                onClick={dontAskAgain}
                className="w-full text-xs text-muted-foreground"
              >
                Don't ask again
              </Button>
            )}
          </div>
          
          <div className="text-center text-xs text-muted-foreground">
            <AlertCircle className="inline h-3 w-3 mr-1" />
            You can change this later in your device settings
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
