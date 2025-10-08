import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../models/notification_model.dart' as app_models;
import 'notification_service.dart';
import 'api_service.dart';
import 'firebase_service.dart';

class PushNotificationService {
  static final PushNotificationService _instance = PushNotificationService._internal();
  factory PushNotificationService() => _instance;
  PushNotificationService._internal();

  final FirebaseService _firebaseService = FirebaseService();
  final NotificationService _notificationService = NotificationService();
  final ApiService _apiService = ApiService();

  // Initialize push notification service
  Future<void> initialize() async {
    try {
      debugPrint('Initializing push notification service...');
      
      // Use the FirebaseService which handles platform detection
      await _firebaseService.initialize();
      
    } catch (e) {
      debugPrint('Error initializing push notifications: $e');
    }
  }





  // Subscribe to topics
  Future<void> subscribeToTopic(String topic) async {
    await _firebaseService.subscribeToTopic(topic);
  }

  // Unsubscribe from topics
  Future<void> unsubscribeFromTopic(String topic) async {
    await _firebaseService.unsubscribeFromTopic(topic);
  }

  // Get FCM token
  Future<String?> getToken() async {
    return await _firebaseService.getToken();
  }

  // Update FCM token on backend
  Future<void> updateTokenOnBackend(String token) async {
    await _firebaseService.updateTokenOnBackend(token);
  }
}
