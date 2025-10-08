import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/user_model.dart';
import '../utils/constants.dart';
import 'api_service.dart';

class AuthService {
  static final AuthService _instance = AuthService._internal();
  factory AuthService() => _instance;
  AuthService._internal();

  final ApiService _apiService = ApiService();
  User? _currentUser;
  String? _authToken;

  User? get currentUser => _currentUser;
  String? get authToken => _authToken;
  bool get isAuthenticated => _authToken != null && _currentUser != null;

  Future<void> initialize() async {
    await _loadStoredAuth();
  }

  Future<void> _loadStoredAuth() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString(AppConstants.userTokenKey);
    final userData = prefs.getString(AppConstants.userDataKey);

    if (token != null && userData != null) {
      try {
        _authToken = token;
        _currentUser = User.fromJson(jsonDecode(userData));
        _apiService.setAuthToken(token);
      } catch (e) {
        await _clearStoredAuth();
      }
    }
  }

  Future<void> _storeAuth(String token, User user) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(AppConstants.userTokenKey, token);
    await prefs.setString(AppConstants.userDataKey, jsonEncode(user.toJson()));
    
    _authToken = token;
    _currentUser = user;
    _apiService.setAuthToken(token);
  }

  Future<void> _clearStoredAuth() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(AppConstants.userTokenKey);
    await prefs.remove(AppConstants.userDataKey);
    
    _authToken = null;
    _currentUser = null;
    _apiService.clearAuthToken();
  }

  Future<Map<String, dynamic>> signup({
    required String email,
    required String password,
    required String fullName,
    required String country,
    required String phoneNumber,
  }) async {
    try {
      final response = await _apiService.post(AppConstants.authSignup, {
        'email': email,
        'password': password,
        'fullName': fullName,
        'country': country,
        'phoneNumber': phoneNumber,
      });

      return response;
    } catch (e) {
      throw Exception('Signup failed: $e');
    }
  }

  Future<Map<String, dynamic>> verifyEmail({
    required String email,
    required String otp,
  }) async {
    try {
      final response = await _apiService.post(AppConstants.authVerifyEmail, {
        'email': email,
        'otp': otp,
      });

      if (response['success'] == true && response['token'] != null) {
        final user = User.fromJson(response['user']);
        await _storeAuth(response['token'], user);
      }

      return response;
    } catch (e) {
      throw Exception('Email verification failed: $e');
    }
  }

  Future<Map<String, dynamic>> login({
    required String email,
    required String password,
  }) async {
    try {
      final response = await _apiService.post(AppConstants.authLogin, {
        'email': email,
        'password': password,
      });

      if (response['success'] == true && response['token'] != null) {
        final user = User.fromJson(response['user']);
        await _storeAuth(response['token'], user);
      }

      return response;
    } catch (e) {
      throw Exception('Login failed: $e');
    }
  }

  Future<void> logout() async {
    await _clearStoredAuth();
  }

  Future<Map<String, dynamic>> resetPassword({
    required String email,
  }) async {
    try {
      final response = await _apiService.post(AppConstants.authResetPassword, {
        'email': email,
      });

      return response;
    } catch (e) {
      throw Exception('Password reset failed: $e');
    }
  }

  Future<void> updateFcmToken(String fcmToken) async {
    if (_currentUser == null) return;

    try {
      await _apiService.put('/users/fcm-token', {
        'fcmToken': fcmToken,
      });

      // Update local user data
      _currentUser = _currentUser!.copyWith(fcmToken: fcmToken);
      await _storeAuth(_authToken!, _currentUser!);
    } catch (e) {
      // Silently fail for FCM token updates
      debugPrint('Failed to update FCM token: $e');
    }
  }

  Future<bool> isBiometricEnabled() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(AppConstants.biometricEnabledKey) ?? false;
  }

  Future<void> setBiometricEnabled(bool enabled) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(AppConstants.biometricEnabledKey, enabled);
  }

  Future<void> saveCredentials(String email, String password) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(AppConstants.savedEmailKey, email);
    await prefs.setString(AppConstants.savedPasswordKey, password);
  }

  Future<Map<String, String?>> getSavedCredentials() async {
    final prefs = await SharedPreferences.getInstance();
    return {
      'email': prefs.getString(AppConstants.savedEmailKey),
      'password': prefs.getString(AppConstants.savedPasswordKey),
    };
  }

  Future<void> clearSavedCredentials() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(AppConstants.savedEmailKey);
    await prefs.remove(AppConstants.savedPasswordKey);
  }
}

