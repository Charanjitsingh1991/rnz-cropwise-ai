import 'package:flutter/services.dart';
import 'package:local_auth/local_auth.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/foundation.dart';

class BiometricAuthService {
  static final LocalAuthentication _localAuth = LocalAuthentication();
  static const String _biometricEnabledKey = 'biometric_enabled';
  static const String _pinCodeKey = 'pin_code';
  static const String _credentialsKey = 'stored_credentials';

  /// Check if biometric authentication is available
  static Future<bool> isBiometricAvailable() async {
    if (kIsWeb) {
      return false; // Not available on web
    }
    
    try {
      final isAvailable = await _localAuth.canCheckBiometrics;
      final isDeviceSupported = await _localAuth.isDeviceSupported();
      return isAvailable && isDeviceSupported;
    } catch (e) {
      print('Check biometric available failed: $e');
      return false;
    }
  }

  /// Get available biometric types
  static Future<List<BiometricType>> getAvailableBiometrics() async {
    if (kIsWeb) {
      return []; // Not available on web
    }
    
    try {
      return await _localAuth.getAvailableBiometrics();
    } catch (e) {
      print('Get available biometrics failed: $e');
      return [];
    }
  }

  /// Check if biometric authentication is enabled for the user
  static Future<bool> isBiometricEnabled() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getBool(_biometricEnabledKey) ?? false;
    } catch (e) {
      print('Check biometric enabled failed: $e');
      return false;
    }
  }

  /// Enable biometric authentication
  static Future<bool> enableBiometric() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_biometricEnabledKey, true);
      return true;
    } catch (e) {
      print('Enable biometric failed: $e');
      return false;
    }
  }

  /// Disable biometric authentication
  static Future<bool> disableBiometric() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_biometricEnabledKey, false);
      return true;
    } catch (e) {
      print('Disable biometric failed: $e');
      return false;
    }
  }

  /// Authenticate using biometrics
  static Future<bool> authenticateWithBiometrics({
    String reason = 'Please authenticate to continue',
  }) async {
    if (kIsWeb) {
      return false; // Not available on web
    }
    
    try {
      final isAvailable = await isBiometricAvailable();
      if (!isAvailable) {
        print('Biometric not available');
        return false;
      }

      final result = await _localAuth.authenticate(
        localizedReason: reason,
        options: const AuthenticationOptions(
          biometricOnly: true,
          stickyAuth: true,
        ),
      );

      print('Biometric auth result: $result');
      return result;
    } catch (e) {
      print('Biometric authentication failed: $e');
      return false;
    }
  }

  /// Set PIN code as fallback
  static Future<bool> setPinCode(String pinCode) async {
    try {
      if (pinCode.length != 4) {
        throw Exception('PIN code must be 4 digits');
      }

      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_pinCodeKey, pinCode);
      print('PIN code set successfully');
      return true;
    } catch (e) {
      print('Set PIN code failed: $e');
      return false;
    }
  }

  /// Verify PIN code
  static Future<bool> verifyPinCode(String pinCode) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final storedPin = prefs.getString(_pinCodeKey);
      final isValid = storedPin == pinCode;
      print('PIN verification: $isValid');
      return isValid;
    } catch (e) {
      print('Verify PIN code failed: $e');
      return false;
    }
  }

  /// Check if PIN code is set
  static Future<bool> isPinCodeSet() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final storedPin = prefs.getString(_pinCodeKey);
      final isSet = storedPin != null && storedPin.isNotEmpty;
      print('PIN code is set: $isSet');
      return isSet;
    } catch (e) {
      print('Check PIN code failed: $e');
      return false;
    }
  }

  /// Store credentials for biometric/PIN authentication
  static Future<bool> storeCredentials({
    required String email,
    required String password,
  }) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      // Store email and password separately for easier retrieval
      await prefs.setString('${_credentialsKey}_email', email);
      await prefs.setString('${_credentialsKey}_password', password);
      await prefs.setString('${_credentialsKey}_timestamp', DateTime.now().toIso8601String());
      print('🔍 Credentials stored successfully for email: $email');
      return true;
    } catch (e) {
      print('Store credentials failed: $e');
      return false;
    }
  }

  /// Retrieve stored credentials
  static Future<Map<String, String>?> getStoredCredentials() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final email = prefs.getString('${_credentialsKey}_email');
      final password = prefs.getString('${_credentialsKey}_password');
      
      print('🔍 Retrieved email: $email');
      print('🔍 Retrieved password: ${password != null ? '***' : 'null'}');
      
      if (email != null && password != null) {
        print('🔍 Credentials found, returning map');
        return {'email': email, 'password': password};
      }
      print('🔍 No credentials found');
      return null;
    } catch (e) {
      print('Get stored credentials failed: $e');
      return null;
    }
  }

  /// Clear stored credentials
  static Future<bool> clearStoredCredentials() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove('${_credentialsKey}_email');
      await prefs.remove('${_credentialsKey}_password');
      await prefs.remove('${_credentialsKey}_timestamp');
      print('Credentials cleared successfully');
      return true;
    } catch (e) {
      print('Clear credentials failed: $e');
      return false;
    }
  }

  /// Get biometric type string
  static String getBiometricTypeString(List<BiometricType> biometrics) {
    if (biometrics.contains(BiometricType.face)) {
      return 'Face ID';
    } else if (biometrics.contains(BiometricType.fingerprint)) {
      return 'Fingerprint';
    } else if (biometrics.contains(BiometricType.iris)) {
      return 'Iris';
    } else {
      return 'Biometric';
    }
  }

  /// Authenticate with biometric or PIN fallback
  static Future<bool> authenticate({
    String reason = 'Please authenticate to continue',
  }) async {
    try {
      final biometricEnabled = await isBiometricEnabled();

      if (biometricEnabled) {
        final biometricAvailable = await isBiometricAvailable();

        if (biometricAvailable) {
          final authenticated = await authenticateWithBiometrics(reason: reason);
          if (authenticated) {
            return true;
          }
        }
      }

      // Fallback to PIN if biometric fails or is not available
      final isPinSet = await isPinCodeSet();
      if (isPinSet) {
        // This will be handled by the UI layer
        return false;
      }

      return false;
    } catch (e) {
      print('Authentication failed: $e');
      return false;
    }
  }

  /// Clear all biometric and PIN data
  static Future<bool> clearAllAuthData() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(_biometricEnabledKey);
      await prefs.remove(_pinCodeKey);
      await prefs.remove(_credentialsKey);
      print('All auth data cleared successfully');
      return true;
    } catch (e) {
      print('Clear auth data failed: $e');
      return false;
    }
  }
}
