import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:local_auth/local_auth.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import '../models/user.dart';
import '../services/api_service.dart';
import '../services/mongodb_service.dart';
import '../services/biometric_auth_service.dart';
import '../utils/constants.dart';

class AuthProvider with ChangeNotifier {
  User? _user;
  bool _isLoading = false;
  String? _error;
  bool _isAuthenticated = false;

  User? get user => _user;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get isAuthenticated => _isAuthenticated;
  Future<String?> getUserToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString(StorageKeys.userToken);
  }

  Future<Map<String, String?>> getSavedCredentials() async {
    return await BiometricAuthService.getStoredCredentials() ?? {};
  }



  AuthProvider() {
    checkAuthStatus();
  }

  Future<bool> checkAuthStatus() async {
    try {
      _isLoading = true;
      notifyListeners();

      // Check if we have a stored token
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString(StorageKeys.userToken);

      if (token != null) {
        // Check if biometric or PIN is enabled
        final biometricEnabled = await isBiometricEnabled();
        final pinSet = await BiometricAuthService.isPinCodeSet();
        
        if (biometricEnabled || pinSet) {
          // User has biometric/PIN enabled, they need to authenticate
          _isAuthenticated = false;
          _user = null;
        } else {
          // No biometric/PIN, auto-login with token
          final userData = await MongoDBService.getCurrentUser();
          if (userData != null) {
            final user = User.fromJson(userData);
            _user = user;
            _isAuthenticated = true;
            _error = null;
          } else {
            // Token is invalid, clear it
            await _clearStoredData();
          }
        }
      } else {
        _isAuthenticated = false;
      }

      _isLoading = false;
      notifyListeners();
      return _isAuthenticated;
    } catch (e) {
      _isLoading = false;
      _error = e.toString();
      _isAuthenticated = false;
      notifyListeners();
      return false;
    }
  }

  Future<bool> login(String email, String password) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final response = await MongoDBService.loginDirect(email, password);

      if (response['success'] == true) {
        // Get user profile from the response
        final userData = response['user'];
        final token = response['token'];
        
        if (userData != null && token != null) {
          final user = User.fromJson(userData);
          _user = user;
          _isAuthenticated = true;
          
          // Store user data and token
          await _storeUserData(user);
          await _storeToken(token);
          
          // Store credentials for biometric/PIN authentication
          print('🔍 Storing credentials for biometric auth...');
          final storeResult = await BiometricAuthService.storeCredentials(
            email: email,
            password: password,
          );
          print('🔍 Credential storage result: $storeResult');
          
          _isLoading = false;
          notifyListeners();
          return true;
        }
      }

      _error = response['error'] ?? 'Login failed';
      _isLoading = false;
      notifyListeners();
      return false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  Future<bool> signup(String fullName, String email, String phone, String password, String country) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      // Use MongoDBService which sends OTP
      final response = await MongoDBService.signupDirect(fullName, email, phone, password, country);

      if (response['success'] == true && response['requiresOTP'] == true) {
        _isLoading = false;
        notifyListeners();
        return true;
      }

      _error = response['error'] ?? 'Failed to send verification code';
      _isLoading = false;
      notifyListeners();
      return false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  Future<void> sendOTP(String email) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final response = await ApiService.sendOTP(email);

      if (response['success'] != true) {
        throw Exception(response['error'] ?? 'Failed to send OTP');
      }
    } catch (e) {
      _error = e.toString();
      throw e;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> verifyOTP(String email, String otp, Map<String, dynamic> signupData) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      // New flow: Verify OTP and create user in one call
      final response = await MongoDBService.verifySignupOTP(email, otp);

      if (response['success'] == true && response['user'] != null) {
        // User created successfully, auto-login
        _user = User.fromJson(response['user']);
        _isAuthenticated = true; // Set authentication state
        
        // Store user data locally
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('user', json.encode(response['user']));
        await prefs.setBool('isLoggedIn', true);
        
        // Store auth token if provided
        if (response['token'] != null) {
          await prefs.setString('auth_token', response['token']);
        }
        
        _isLoading = false;
        notifyListeners();
        return true;
      } else {
        _error = response['error'] ?? 'Invalid OTP or signup failed';
        _isLoading = false;
        notifyListeners();
        return false;
      }
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  Future<void> logout() async {
    try {
      _isLoading = true;
      notifyListeners();

      // Mock logout - clear local data
    await Future.delayed(const Duration(seconds: 1));
      await _clearStoredData();

      _user = null;
      _isAuthenticated = false;
      _error = null;
      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> authenticateWithBiometrics() async {
    try {
      // Check if biometrics are available
      final isAvailable = await BiometricAuthService.isBiometricAvailable();
      if (!isAvailable) {
        _error = 'Biometric authentication not available on this device';
        notifyListeners();
        return false;
      }

      // Authenticate with biometrics
      final authenticated = await BiometricAuthService.authenticateWithBiometrics(
        reason: 'Please authenticate to login',
      );

      if (authenticated) {
        // Retrieve stored credentials and auto-login
        final credentials = await BiometricAuthService.getStoredCredentials();
        if (credentials != null) {
          final success = await login(credentials['email']!, credentials['password']!);
          return success;
        }
      }

      _error = 'Biometric authentication failed';
      notifyListeners();
      return false;
    } catch (e) {
      _error = 'Biometric authentication error: $e';
      notifyListeners();
      return false;
    }
  }

  Future<bool> authenticateWithPin(String pinCode) async {
    try {
      final isValidPin = await BiometricAuthService.verifyPinCode(pinCode);
      if (isValidPin) {
        // Get stored credentials and auto-login
        final credentials = await BiometricAuthService.getStoredCredentials();
        if (credentials != null) {
          final success = await login(credentials['email']!, credentials['password']!);
          return success;
        }
      }

      _error = 'Invalid PIN code';
      notifyListeners();
      return false;
    } catch (e) {
      _error = 'PIN authentication error: $e';
      notifyListeners();
      return false;
    }
  }

  Future<bool> enableBiometricAuth() async {
    try {
      final localAuth = LocalAuthentication();
      
      // Check if biometrics are available
      final canCheckBiometrics = await localAuth.canCheckBiometrics;
      if (!canCheckBiometrics) {
        _error = 'Biometric authentication not available';
        notifyListeners();
        return false;
      }

      // Authenticate to enable biometric auth
      final authenticated = await localAuth.authenticate(
        localizedReason: 'Please authenticate to enable biometric login',
        options: const AuthenticationOptions(
          stickyAuth: true,
          biometricOnly: true,
        ),
      );

      if (authenticated) {
        // Store biometric auth preference
        final prefs = await SharedPreferences.getInstance();
        await prefs.setBool(StorageKeys.biometricEnabled, true);
        
        // Store current credentials for biometric auth
        if (_user != null) {
          await _storeCredentialsForBiometric();
        }
        
        return true;
      }

      _error = 'Biometric authentication failed';
      notifyListeners();
      return false;
    } catch (e) {
      _error = e.toString();
      notifyListeners();
      return false;
    }
  }

  Future<bool> isBiometricEnabled() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(StorageKeys.biometricEnabled) ?? false;
  }

  // Forgot Password - Send OTP to email
  Future<bool> forgotPassword(String email) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final response = await http.post(
        Uri.parse('${ApiEndpoints.baseUrl}/auth/forgot-password'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'email': email}),
      );

      final data = json.decode(response.body);

      if (data['success'] == true) {
        _isLoading = false;
        notifyListeners();
        return true;
      }

      _error = data['error'] ?? 'Failed to send verification code';
      _isLoading = false;
      notifyListeners();
      return false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  Future<bool> updateProfile(Map<String, dynamic> profileData) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final response = await ApiService.updateUserProfile(profileData);

      if (response['success'] == true) {
        // Update local user data
        final updatedUserData = await ApiService.getUserProfile();
        if (updatedUserData != null) {
          final updatedUser = User.fromJson(updatedUserData);
          _user = updatedUser;
          await _storeUserData(updatedUser);
        }

        _isLoading = false;
        notifyListeners();
        return true;
      }

      _error = response['error'] ?? 'Profile update failed';
      _isLoading = false;
      notifyListeners();
      return false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  Future<void> _storeUserData(User user) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(StorageKeys.userData, user.toJson().toString());
  }

  Future<void> _storeToken(String token) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(StorageKeys.userToken, token);
  }

  Future<void> _storeCredentialsForBiometric() async {
    final prefs = await SharedPreferences.getInstance();
    // Store encrypted credentials for biometric auth
    // In production, use flutter_secure_storage for better security
    await prefs.setString(StorageKeys.biometricCredentials, 'enabled');
  }

  Future<bool> _retrieveStoredCredentials() async {
    try {
      // Check if we have stored credentials
      final prefs = await SharedPreferences.getInstance();
      final hasStoredCredentials = prefs.getString(StorageKeys.biometricCredentials) != null;
      
      if (hasStoredCredentials) {
        // Auto-login with stored credentials
        return await checkAuthStatus();
      }
      
      return false;
    } catch (e) {
      return false;
    }
  }

  Future<void> _clearStoredData() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(StorageKeys.userToken);
    await prefs.remove(StorageKeys.userData);
    await prefs.remove(StorageKeys.biometricCredentials);
    await prefs.remove(StorageKeys.biometricEnabled);
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }
}
