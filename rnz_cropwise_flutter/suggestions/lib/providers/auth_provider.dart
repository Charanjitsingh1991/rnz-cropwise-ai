import 'package:flutter/material.dart';
import '../models/user_model.dart';
import '../services/auth_service.dart';

class AuthProvider extends ChangeNotifier {
  final AuthService _authService = AuthService();
  
  User? _user;
  bool _isLoading = false;
  String? _error;
  bool _isInitialized = false;

  User? get user => _user;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get isAuthenticated => _user != null;
  bool get isInitialized => _isInitialized;

  Future<void> initialize() async {
    if (_isInitialized) return;
    
    try {
      await _authService.initialize();
      _user = _authService.currentUser;
      _isInitialized = true;
    } catch (e) {
      _setError('Failed to initialize: $e');
    }
  }

  Future<bool> signup({
    required String email,
    required String password,
    required String fullName,
    required String country,
    required String phoneNumber,
  }) async {
    _setLoading(true);
    _clearError();

    try {
      // Mock signup for testing - always succeed
      await Future.delayed(const Duration(seconds: 1)); // Simulate network delay
      return true;
    } catch (e) {
      _setError('Signup failed: $e');
      return false;
    } finally {
      _setLoading(false);
    }
  }

  Future<bool> verifyEmail({
    required String email,
    required String otp,
  }) async {
    _setLoading(true);
    _clearError();

    try {
      // Mock OTP verification - accept any 6-digit OTP
      await Future.delayed(const Duration(seconds: 1)); // Simulate network delay
      
      if (otp.length == 6 && RegExp(r'^\d{6}$').hasMatch(otp)) {
        // Create mock user data after successful verification
        _user = User(
          id: 'mock_user_123',
          email: email,
          fullName: email.split('@')[0], // Use email prefix as name
          displayName: email.split('@')[0], // Use email prefix as display name
          country: 'IN',
          phoneNumber: '+91 9876543210',
          isEmailVerified: true,
          createdAt: DateTime.now(),
          updatedAt: DateTime.now(),
        );
        
        notifyListeners();
        return true;
      } else {
        _setError('Please enter a valid 6-digit OTP');
        return false;
      }
    } catch (e) {
      _setError('Email verification failed: $e');
      return false;
    } finally {
      _setLoading(false);
    }
  }

  Future<bool> login({
    required String email,
    required String password,
  }) async {
    _setLoading(true);
    _clearError();

    try {
      // Mock login for testing - accept any email/password
      await Future.delayed(const Duration(seconds: 1)); // Simulate network delay
      
      // Create mock user data
      _user = User(
        id: 'mock_user_123',
        email: email,
        fullName: email.split('@')[0], // Use email prefix as name
        displayName: email.split('@')[0], // Use email prefix as display name
        country: 'IN',
        phoneNumber: '+91 9876543210',
        isEmailVerified: true,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      );
      
      notifyListeners();
      return true;
    } catch (e) {
      _setError('Login failed: $e');
      return false;
    } finally {
      _setLoading(false);
    }
  }

  Future<void> logout() async {
    _setLoading(true);
    
    try {
      await _authService.logout();
      _user = null;
      notifyListeners();
    } catch (e) {
      _setError('Logout failed: $e');
    } finally {
      _setLoading(false);
    }
  }

  Future<bool> resetPassword(String email) async {
    _setLoading(true);
    _clearError();

    try {
      // Mock password reset - always succeed
      await Future.delayed(const Duration(seconds: 1)); // Simulate network delay
      return true;
    } catch (e) {
      _setError('Password reset failed: $e');
      return false;
    } finally {
      _setLoading(false);
    }
  }

  Future<void> updateFcmToken(String fcmToken) async {
    try {
      await _authService.updateFcmToken(fcmToken);
      _user = _authService.currentUser;
      notifyListeners();
    } catch (e) {
      // Silently fail for FCM token updates
      debugPrint('Failed to update FCM token: $e');
    }
  }

  Future<bool> isBiometricEnabled() async {
    return await _authService.isBiometricEnabled();
  }

  Future<void> setBiometricEnabled(bool enabled) async {
    await _authService.setBiometricEnabled(enabled);
  }

  Future<void> saveCredentials(String email, String password) async {
    await _authService.saveCredentials(email, password);
  }

  Future<Map<String, String?>> getSavedCredentials() async {
    return await _authService.getSavedCredentials();
  }

  Future<void> clearSavedCredentials() async {
    await _authService.clearSavedCredentials();
  }

  Future<void> updateUserProfile(Map<String, dynamic> profileData) async {
    if (_user == null) return;
    
    try {
      // Update local user data
      _user = _user!.copyWith(
        displayName: profileData['displayName'] ?? _user!.displayName,
        phoneNumber: profileData['phoneNumber'] ?? _user!.phoneNumber,
        country: profileData['country'] ?? _user!.country,
        updatedAt: DateTime.now(),
      );
      
      notifyListeners();
    } catch (e) {
      _setError('Failed to update profile: $e');
    }
  }

  void _setLoading(bool loading) {
    _isLoading = loading;
    notifyListeners();
  }

  void _setError(String error) {
    _error = error;
    notifyListeners();
  }

  void _clearError() {
    _error = null;
    notifyListeners();
  }

  void clearError() {
    _clearError();
  }
}