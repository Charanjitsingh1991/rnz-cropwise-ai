'use client';

import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';
import { Capacitor } from '@capacitor/core';

export interface BiometricAuthResult {
  success: boolean;
  error?: string;
}

export const authenticateWithBiometrics = async (
  reason: string = 'Please authenticate to access RNZ CropWise'
): Promise<BiometricAuthResult> => {
  try {
    // Only proceed on native platforms
    if (!Capacitor.isNativePlatform()) {
      console.log('Biometric auth skipped: Not on native platform');
      return { success: false, error: 'Biometric authentication not supported on web' };
    }

    console.log('Starting biometric authentication with reason:', reason);

    const result = await BiometricAuth.authenticate({
      reason,
      subtitle: 'Use your fingerprint or face to sign in',
      fallbackTitle: 'Use PIN'
    });

    console.log('Raw biometric result:', result);
    console.log('Result type:', typeof result);
    console.log('Result keys:', result ? Object.keys(result) : 'null/undefined');

    // Handle different possible response formats
    if (result) {
      // Check for explicit success
      if (result.isAuthenticated === true) {
        console.log('Authentication successful: isAuthenticated = true');
        return { success: true };
      }
      
      // Some versions might return different properties
      if (result.success === true) {
        console.log('Authentication successful: success = true');
        return { success: true };
      }
      
      // Check if it's a boolean true (some versions might return just true)
      if (result === true) {
        console.log('Authentication successful: result = true');
        return { success: true };
      }
      
      // If result exists but doesn't have success indicators
      if (typeof result === 'object' && Object.keys(result).length > 0) {
        // Check if there are any error indicators
        if (result.error || result.cancelled || result.isAuthenticated === false) {
          console.log('Authentication failed: error indicators found');
          return { success: false, error: result.error || 'Authentication was cancelled or failed' };
        }
        
        // If no error indicators, assume success for non-empty object
        console.log('Authentication assumed successful: non-empty object with no error indicators');
        return { success: true };
      }
    } else if (result === undefined) {
      // WORKAROUND: Some versions of @aparajita/capacitor-biometric-auth v8.x return undefined on success
      // If we reach this point without an exception being thrown, it likely means authentication succeeded
      console.log('Authentication result is undefined - this may indicate success in some plugin versions');
      console.log('Assuming success due to undefined result (no exception thrown)');
      return { success: true };
    }

    // If we get here, authentication was not successful
    console.log('Authentication failed: no valid result and not undefined');
    return { success: false, error: 'Authentication was cancelled or failed' };

  } catch (error: any) {
    console.error('Biometric authentication error:', error);
    console.error('Error type:', typeof error);
    console.error('Error properties:', error ? Object.keys(error) : 'null/undefined');
    
    return { 
      success: false, 
      error: error.message || error.toString() || 'Biometric authentication failed' 
    };
  }
};

export const checkBiometricAvailability = async () => {
  try {
    if (!Capacitor.isNativePlatform()) {
      return { isAvailable: false, error: 'Not on native platform' };
    }

    const result = await BiometricAuth.checkBiometry();
    return result;
  } catch (error: any) {
    console.error('Biometric availability check failed:', error);
    return { isAvailable: false, error: error.message };
  }
};
