'use client';

import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Fingerprint, Shield, AlertTriangle } from 'lucide-react';

export function BiometricGuard() {
  const { user } = useAuth();
  const router = useRouter();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [biometricType, setBiometricType] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (user && Capacitor.isNativePlatform()) {
      console.log('BiometricGuard: User authenticated, checking biometric status...');
      console.log('User UID:', user.uid);
      checkBiometricStatus();
    } else if (!user && Capacitor.isNativePlatform()) {
      console.log('BiometricGuard: No user found, skipping biometric check');
    }
  }, [user]);

  const checkBiometricStatus = async () => {
    try {
      // Check if biometric is available
      const available = await BiometricAuth.isAvailable();
      console.log('Biometric availability check:', available);
      
      if (available.has) {
        // Check if user has enabled biometric in profile
        const userBiometricEnabled = localStorage.getItem(`biometric_enabled_${user?.uid}`);
        console.log('User biometric enabled:', userBiometricEnabled);
        
        if (userBiometricEnabled === 'true') {
          setBiometricType(available.biometryType || 'Biometric');
          // Wait a bit for the app to fully load before prompting
          setTimeout(() => {
            promptBiometric();
          }, 1000);
        } else {
          setIsAuthenticated(true);
        }
      } else {
        console.log('Biometric not available on this device');
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error('Biometric check failed:', err);
      setIsAuthenticated(true);
    }
  };

  const promptBiometric = async () => {
    try {
      setIsAuthenticating(true);
      setError('');
      
      console.log('Starting biometric authentication...');
      
      const result = await BiometricAuth.authenticate({
        title: 'Authenticate to continue',
        subtitle: 'Please verify your identity',
        description: 'Use your biometric to access the app',
        fallbackTitle: 'Use PIN',
        allowDeviceCredential: true,
      });
      
      console.log('Biometric authentication result:', result);
      console.log('Result type:', typeof result);
      console.log('Result keys:', result ? Object.keys(result) : 'null/undefined');

      // Handle different result structures from the plugin
      let isSuccess = false;
      
      if (result) {
        // Check for different possible success indicators
        if (result.isAuthenticated === true) {
          isSuccess = true;
        } else if (result === true) {
          isSuccess = true;
        } else if (typeof result === 'object' && !result.error && !result.cancelled) {
          // Assume success if no error indicators
          isSuccess = true;
        } else if (result === undefined) {
          // Some versions return undefined on success
          isSuccess = true;
        }
      }
      
      if (isSuccess) {
        setIsAuthenticated(true);
        // Store authentication timestamp
        localStorage.setItem(`biometric_auth_${user?.uid}`, Date.now().toString());
      } else {
        setError('Authentication failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Biometric authentication error:', err);
      if (err.code === 'USER_CANCELLED') {
        setError('Authentication cancelled. Please authenticate to continue.');
      } else {
        setError('Biometric authentication failed. Please try again.');
      }
    } finally {
      setIsAuthenticating(false);
    }
  };

  const retryAuthentication = () => {
    setError('');
    promptBiometric();
  };

  const skipBiometric = () => {
    // Allow user to skip for this session
    setIsAuthenticated(true);
    localStorage.setItem(`biometric_skip_${user?.uid}`, Date.now().toString());
  };

  // Don't show anything if not authenticated or not on native platform
  if (!user || !Capacitor.isNativePlatform() || isAuthenticated) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Fingerprint className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl">Biometric Authentication</CardTitle>
          <p className="text-sm text-muted-foreground">
            Please authenticate using your {biometricType.toLowerCase()}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-destructive">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <Button 
              onClick={retryAuthentication} 
              disabled={isAuthenticating}
              className="w-full"
            >
              {isAuthenticating ? 'Authenticating...' : `Use ${biometricType}`}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={skipBiometric}
              className="w-full"
            >
              Skip for this session
            </Button>
          </div>
          
          <div className="text-center text-xs text-muted-foreground">
            <Shield className="inline h-3 w-3 mr-1" />
            Your biometric data is stored securely on your device
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
