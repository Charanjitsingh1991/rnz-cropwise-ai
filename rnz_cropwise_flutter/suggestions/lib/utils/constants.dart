import 'package:flutter/material.dart';

class AppColors {
  static const Color primary = Color(0xFF2E7D32);
  static const Color secondary = Color(0xFF4CAF50);
  static const Color accent = Color(0xFF8BC34A);
  static const Color background = Color(0xFFF5F5F5);
  static const Color surface = Colors.white;
  static const Color error = Color(0xFFD32F2F);
  static const Color warning = Color(0xFFFFA000);
  static const Color success = Color(0xFF388E3C);
  static const Color textPrimary = Color(0xFF212121);
  static const Color textSecondary = Color(0xFF757575);
  static const Color textLight = Color(0xFFBDBDBD);
}

class AppConstants {
  // API Base URL (localhost for development - will be changed to live URL later)
  static const String baseUrl = 'https://rnz-cropwise.vercel.app/api';
  
  // NOTE: Pilot countries moved to dedicated file: lib/data/countries_data.dart
  // This ensures single source of truth and prevents sync issues
  
  // Phone number validation patterns
  static const Map<String, List<int>> phoneLengths = {
    'IN': [10],
    'PK': [10],
    'LK': [9],
    'BD': [10, 11],
    'AE': [9],
    'SA': [9],
    'KW': [8],
    'QA': [8],
    'BH': [8],
    'OM': [8],
    // New countries phone lengths
    'MY': [10],
    'ZA': [9],
    'KE': [9],
    'BR': [11],
    'NZ': [9],
    'CA': [10],
    'EG': [10],
    'KH': [9],
    'CN': [11],
  };
  
  // Country phone codes
  static const Map<String, String> phoneCodes = {
    'IN': '+91',
    'PK': '+92',
    'LK': '+94',
    'BD': '+880',
    'AE': '+971',
    'SA': '+966',
    'KW': '+965',
    'QA': '+974',
    'BH': '+973',
    'OM': '+968',
    // New countries phone codes
    'MY': '+60',
    'ZA': '+27',
    'KE': '+254',
    'BR': '+55',
    'NZ': '+64',
    'CA': '+1',
    'EG': '+20',
    'KH': '+855',
    'CN': '+86',
  };
  
  // App Settings
  static const String appName = 'RNZ CropWise';
  static const String appVersion = '1.0.0';
  static const String appDescription = 'Agricultural AI Platform';
  
  // Storage Keys
  static const String userTokenKey = 'user_token';
  static const String userDataKey = 'user_data';
  static const String biometricEnabledKey = 'biometric_enabled';
  static const String savedEmailKey = 'saved_email';
  static const String savedPasswordKey = 'saved_password';
  
  // Animation Durations
  static const Duration shortAnimation = Duration(milliseconds: 200);
  static const Duration mediumAnimation = Duration(milliseconds: 300);
  static const Duration longAnimation = Duration(milliseconds: 500);
  
  // API Endpoints
  static const String authSignup = '/auth/signup';
  static const String authLogin = '/auth/login';
  static const String authVerifyEmail = '/auth/verify-email';
  static const String authResetPassword = '/auth/reset-password';
  static const String products = '/products';
  static const String brochures = '/brochures';
  static const String aiAdvisor = '/ai-advisor';
  static const String diseaseDetection = '/disease-detection';
  static const String expertRequest = '/expert-request';
  static const String notifications = '/notifications';
}

class AppText {
  static const String welcomeTitle = 'Welcome to RNZ CropWise';
  static const String welcomeSubtitle = 'Your Agricultural AI Companion';
  static const String loginTitle = 'Welcome Back';
  static const String signupTitle = 'Create Account';
  static const String biometricTitle = 'Enable Biometric Login';
  static const String biometricSubtitle = 'For faster and more secure access';
  
  // Error Messages
  static const String networkError = 'Network error. Please check your connection.';
  static const String serverError = 'Server error. Please try again later.';
  static const String invalidCredentials = 'Invalid email or password.';
  static const String emailAlreadyExists = 'Email already exists.';
  static const String weakPassword = 'Password is too weak.';
  static const String invalidEmail = 'Please enter a valid email.';
  static const String invalidPhone = 'Please enter a valid phone number.';
  static const String otpInvalid = 'Invalid OTP. Please try again.';
  static const String otpExpired = 'OTP has expired. Please request a new one.';
  
  // Success Messages
  static const String accountCreated = 'Account created successfully!';
  static const String loginSuccess = 'Login successful!';
  static const String otpSent = 'OTP sent to your email.';
  static const String otpVerified = 'Email verified successfully!';
  static const String biometricEnabled = 'Biometric login enabled!';
  
  // Button Texts
  static const String login = 'Log In';
  static const String signup = 'Sign Up';
  static const String continueText = 'Continue';
  static const String cancel = 'Cancel';
  static const String confirm = 'Confirm';
  static const String retry = 'Retry';
  static const String skip = 'Skip';
  static const String next = 'Next';
  static const String back = 'Back';
  static const String save = 'Save';
  static const String delete = 'Delete';
  static const String edit = 'Edit';
  static const String view = 'View';
  static const String download = 'Download';
  static const String share = 'Share';
}

