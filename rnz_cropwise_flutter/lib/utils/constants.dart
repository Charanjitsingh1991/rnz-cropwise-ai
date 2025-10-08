import 'package:flutter/material.dart';

class AppColors {
  // Primary Colors
  static const Color primary = Color(0xFF2E7D32);
  static const Color primaryLight = Color(0xFF4CAF50);
  static const Color primaryDark = Color(0xFF1B5E20);
  
  // Secondary Colors
  static const Color secondary = Color(0xFFFF6F00);
  static const Color secondaryLight = Color(0xFFFF8F00);
  static const Color secondaryDark = Color(0xFFE65100);
  
  // Background Colors
  static const Color background = Color(0xFFFAFAFA);
  static const Color surface = Color(0xFFFFFFFF);
  static const Color cardBackground = Color(0xFFFFFFFF);
  
  // Text Colors
  static const Color textPrimary = Color(0xFF212121);
  static const Color textSecondary = Color(0xFF757575);
  static const Color textHint = Color(0xFFBDBDBD);
  
  // Status Colors
  static const Color success = Color(0xFF4CAF50);
  static const Color warning = Color(0xFFFF9800);
  static const Color error = Color(0xFFF44336);
  static const Color info = Color(0xFF2196F3);
  
  // Neutral Colors
  static const Color grey = Color(0xFF9E9E9E);
  static const Color lightGrey = Color(0xFFF5F5F5);
  static const Color darkGrey = Color(0xFF424242);
  static const Color border = Color(0xFFE0E0E0);
  
  // Gradient Colors
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [primary, primaryLight],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
  
  static const LinearGradient secondaryGradient = LinearGradient(
    colors: [secondary, secondaryLight],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
}

class AppSizes {
  // Padding & Margins
  static const double paddingSmall = 8.0;
  static const double paddingMedium = 16.0;
  static const double paddingLarge = 24.0;
  static const double paddingXLarge = 32.0;
  
  static const double xs = 4.0;
  static const double sm = 8.0;
  static const double md = 16.0;
  static const double lg = 24.0;
  static const double xl = 32.0;
  static const double xxl = 48.0;
  
  // Border Radius
  static const double radiusSmall = 8.0;
  static const double radiusMedium = 12.0;
  static const double radiusLarge = 16.0;
  
  static const double radiusXs = 4.0;
  static const double radiusSm = 8.0;
  static const double radiusMd = 12.0;
  static const double radiusLg = 16.0;
  static const double radiusXl = 24.0;
  
  // Icon Sizes
  static const double iconXs = 16.0;
  static const double iconSm = 20.0;
  static const double iconMd = 24.0;
  static const double iconLg = 32.0;
  static const double iconXl = 48.0;
  
  // Button Heights
  static const double buttonHeight = 48.0;
  static const double buttonHeightSmall = 36.0;
  
  // Card Heights
  static const double cardHeight = 200.0;
  static const double productCardHeight = 280.0;
  
  // Image Sizes
  static const double productImageHeight = 160.0;
  static const double avatarSize = 40.0;
  static const double avatarSizeLarge = 80.0;
}

class AppStrings {
  // App Info
  static const String appName = 'RNZ CropWise';
  static const String appVersion = '1.0.0';
  static const String appDescription = 'Your trusted partner for agricultural solutions';
  
  // Navigation
  static const String home = 'Home';
  static const String products = 'Products';
  static const String advisor = 'AI Advisor';
  static const String brochures = 'Brochures';
  static const String support = 'Support';
  static const String profile = 'Profile';
  static const String favorites = 'Favorites';
  
  // Authentication
  static const String login = 'Login';
  static const String signup = 'Sign Up';
  static const String logout = 'Logout';
  static const String email = 'Email';
  static const String password = 'Password';
  static const String confirmPassword = 'Confirm Password';
  static const String forgotPassword = 'Forgot Password?';
  static const String resetPassword = 'Reset Password';
  
  // Common Actions
  static const String save = 'Save';
  static const String cancel = 'Cancel';
  static const String delete = 'Delete';
  static const String edit = 'Edit';
  static const String add = 'Add';
  static const String remove = 'Remove';
  static const String search = 'Search';
  static const String searchProducts = 'Search Products';
  static const String searchBrochures = 'Search Brochures';
  static const String filter = 'Filter';
  static const String clear = 'Clear';
  static const String clearAll = 'Clear All';
  static const String apply = 'Apply';
  static const String applyFilters = 'Apply Filters';
  static const String submit = 'Submit';
  static const String view = 'View';
  static const String download = 'Download';
  static const String share = 'Share';
  static const String retry = 'Retry';
  
  // Messages
  static const String loading = 'Loading...';
  static const String noData = 'No data available';
  static const String errorOccurred = 'An error occurred';
  static const String networkError = 'Network error. Please check your connection.';
  static const String tryAgain = 'Please try again';
  static const String success = 'Success';
  static const String failed = 'Failed';
  
  // Product Related
  static const String productDetails = 'Product Details';
  static const String productCategories = 'Product Categories';
  static const String suitableCrops = 'Suitable Crops';
  static const String soilTypes = 'Soil Types';
  static const String applicationMethod = 'Application Method';
  static const String dosage = 'Dosage';
  static const String timing = 'Timing';
  
  // AI Advisor
  static const String aiAdvisor = 'AI Crop Advisor';
  static const String cropType = 'Crop Type';
  static const String soilType = 'Soil Type';
  static const String region = 'Region';
  static const String moistureLevel = 'Moisture Level';
  static const String growthStage = 'Growth Stage';
  static const String getRecommendations = 'Get Recommendations';
  static const String recommendations = 'Recommendations';
  
  // Support
  static const String supportCenter = 'Support Center';
  static const String faq = 'FAQ';
  static const String contactSupport = 'Contact Support';
  static const String createTicket = 'Create Support Ticket';
  static const String ticketSubject = 'Subject';
  static const String ticketMessage = 'Message';
  static const String ticketStatus = 'Status';
  
  // Brochures
  static const String brochureLibrary = 'Brochure Library';
  static const String downloadBrochure = 'Download Brochure';
  static const String viewBrochure = 'View Brochure';
  static const String brochureRequest = 'Request Brochure';
  
  // Profile
  static const String personalInfo = 'Personal Information';
  static const String fullName = 'Full Name';
  static const String phoneNumber = 'Phone Number';
  static const String country = 'Country';
  static const String address = 'Address';
  static const String notifications = 'Notifications';
  static const String settings = 'Settings';
  static const String about = 'About';
  static const String privacyPolicy = 'Privacy Policy';
  static const String termsOfService = 'Terms of Service';
}

class ApiEndpoints {
  // Base URL - Replace with your actual API URL
  static const String baseUrl = 'https://rnz-cropwise.vercel.app/api';
  
  // Authentication
  static const String login = '/auth/signin';
  static const String signup = '/auth/signup';
  static const String logout = '/auth/signout';
  static const String resetPassword = '/auth/reset-password';
  static const String verifyEmail = '/auth/verify-email';
  
  // Products
  static const String products = '/products';
  static const String productById = '/products/';
  static const String uploadProduct = '/products/upload';
  
  // AI Advisor
  static const String aiAdvisor = '/ai-advisor';
  static const String diseaseDetection = '/disease-detection';
  static const String generateDescription = '/generate-product-description';
  static const String faqSuggester = '/faq-suggester';
  
  // Brochures
  static const String brochures = '/brochures';
  static const String brochureById = '/brochures/';
  static const String brochureRequests = '/brochure-requests';
  
  // Support
  static const String support = '/support';
  static const String supportTickets = '/support/tickets';
  static const String faqs = '/support/faqs';
  
  // Users
  static const String users = '/users';
  static const String userProfile = '/users/profile';
  static const String updateProfile = '/users/update';
  
  // Notifications
  static const String notifications = '/notifications';
  static const String sendNotification = '/notifications/send';
  
  // Quotes
  static const String quotes = '/quotes';
  static const String requestQuote = '/quotes/request';
  
  // Expert Requests
  static const String expertRequests = '/expert-request';
}

class StorageKeys {
  // User Data
  static const String userToken = 'user_token';
  static const String userData = 'user_data';
  static const String userProfile = 'user_profile';
  
  // App Settings
  static const String themeMode = 'theme_mode';
  static const String language = 'language';
  static const String notificationsEnabled = 'notifications_enabled';
  static const String biometricEnabled = 'biometric_enabled';
  static const String biometricCredentials = 'biometric_credentials';
  static const String languageCode = 'language_code';
  
  // Cache Data
  static const String productsCache = 'products_cache';
  static const String brochuresCache = 'brochures_cache';
  static const String faqsCache = 'faqs_cache';
  static const String filterOptionsCache = 'filter_options_cache';
  
  // Favorites
  static const String favoriteProducts = 'favorite_products';
  static const String favoriteBrochures = 'favorite_brochures';
  
  // App State
  static const String lastSyncTime = 'last_sync_time';
  static const String appVersion = 'app_version';
  static const String onboardingCompleted = 'onboarding_completed';
}

class NotificationChannels {
  static const String general = 'general';
  static const String products = 'products';
  static const String support = 'support';
  static const String aiAdvisor = 'ai_advisor';
  static const String brochures = 'brochures';
}

class AppConfig {
  // API Configuration
  static const int apiTimeout = 30000; // 30 seconds
  static const int maxRetries = 3;
  
  // Cache Configuration
  static const int cacheExpiryHours = 24;
  static const int maxCacheSize = 50; // MB
  
  // Pagination
  static const int defaultPageSize = 20;
  static const int maxPageSize = 100;
  
  // Image Configuration
  static const int maxImageSize = 5; // MB
  static const List<String> allowedImageTypes = ['jpg', 'jpeg', 'png', 'webp'];
  
  // File Configuration
  static const int maxFileSize = 10; // MB
  static const List<String> allowedFileTypes = ['pdf', 'doc', 'docx'];
  
  // Location Configuration
  static const double defaultLatitude = 0.0;
  static const double defaultLongitude = 0.0;
  static const int locationTimeout = 10000; // 10 seconds
  
  // Biometric Configuration
  static const String biometricTitle = 'Authenticate';
  static const String biometricSubtitle = 'Please authenticate to continue';
  static const String biometricCancel = 'Cancel';
}
