import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:awesome_notifications/awesome_notifications.dart';
import '../models/notification_model.dart' as app_models;
import '../firebase_options.dart';
import 'notification_service.dart';
import 'api_service.dart';

class FirebaseService {
  static final FirebaseService _instance = FirebaseService._internal();
  factory FirebaseService() => _instance;
  FirebaseService._internal();

  final NotificationService _notificationService = NotificationService();
  final ApiService _apiService = ApiService();
  
  FirebaseMessaging? _firebaseMessaging;

  // Initialize Firebase service
  Future<void> initialize() async {
    try {
      debugPrint('Initializing Firebase service...');
      
      // Only initialize Firebase Messaging on mobile platforms
      if (!kIsWeb) {
        await _initializeMobileFirebase();
      } else {
        debugPrint('Firebase Messaging not available on web platform');
        // For web, we'll use a different approach
        await _initializeWebNotifications();
      }
    } catch (e) {
      debugPrint('Error initializing Firebase service: $e');
    }
  }

  // Initialize Firebase for mobile platforms
  Future<void> _initializeMobileFirebase() async {
    try {
      _firebaseMessaging = FirebaseMessaging.instance;

      // Request permission for iOS
      NotificationSettings settings = await _firebaseMessaging!.requestPermission(
        alert: true,
        badge: true,
        sound: true,
        provisional: false,
      );

      if (settings.authorizationStatus == AuthorizationStatus.authorized) {
        debugPrint('User granted permission for push notifications');
        
        // Get FCM token
        String? token = await _firebaseMessaging!.getToken();
        if (token != null) {
          debugPrint('FCM Token: $token');
          await updateTokenOnBackend(token);
        }

        // Initialize local notifications
        await _initializeLocalNotifications();

        // Set up notification listeners
        AwesomeNotifications().actionStream.listen(_onLocalNotificationTap);

        // Handle foreground messages
        FirebaseMessaging.onMessage.listen(_handleForegroundMessage);

        // Handle notification taps
        FirebaseMessaging.onMessageOpenedApp.listen(_handleNotificationTap);

        // Handle initial notification (app opened from terminated state)
        RemoteMessage? initialMessage = await _firebaseMessaging!.getInitialMessage();
        if (initialMessage != null) {
          _handleNotificationTap(initialMessage);
        }
      } else {
        debugPrint('User declined or has not accepted permission for push notifications');
      }
    } catch (e) {
      debugPrint('Error initializing mobile Firebase: $e');
    }
  }

  // Initialize web notifications (simplified approach)
  Future<void> _initializeWebNotifications() async {
    debugPrint('Initializing web notifications...');
    // For web, we'll use a simplified notification system
    // that doesn't rely on Firebase Messaging
  }

  // Initialize local notifications
  Future<void> _initializeLocalNotifications() async {
    await AwesomeNotifications().initialize(
      null, // null for default app icon
      [
        NotificationChannel(
          channelKey: 'brochure_notifications',
          channelName: 'Brochure Notifications',
          channelDescription: 'Notifications for brochure request updates',
          defaultColor: const Color(0xFF9D50DD),
          ledColor: Colors.white,
          importance: NotificationImportance.High,
        ),
        NotificationChannel(
          channelKey: 'general_notifications',
          channelName: 'General Notifications',
          channelDescription: 'General app notifications',
          defaultColor: const Color(0xFF9D50DD),
          ledColor: Colors.white,
          importance: NotificationImportance.Low,
        ),
      ],
    );
  }



  // Handle foreground messages
  void _handleForegroundMessage(RemoteMessage message) {
    debugPrint('Received foreground message: ${message.data}');
    
    // Add notification to local service
    final notification = _createAppNotificationFromMessage(message);
    _notificationService.addNotification(notification);

    // Show local notification
    _showLocalNotification(message);
  }

  // Handle notification taps
  void _handleNotificationTap(RemoteMessage message) {
    debugPrint('Notification tapped: ${message.data}');
    
    // Handle navigation based on notification type
    final data = message.data;
    final type = data['type'];
    
    switch (type) {
      case 'brochure_request':
      case 'brochure_uploaded':
        // Navigate to brochure requests screen
        _navigateToBrochureRequests();
        break;
      case 'support_ticket':
        // Navigate to support tickets
        _navigateToSupportTickets();
        break;
      case 'quote_request':
        // Navigate to quote requests
        _navigateToQuoteRequests();
        break;
      default:
        // Navigate to notifications screen
        _navigateToNotifications();
        break;
    }
  }

  // Handle local notification taps
  void _onLocalNotificationTap(ReceivedAction receivedAction) {
    debugPrint('Local notification tapped: ${receivedAction.payload}');
    
    // Parse payload and handle navigation
    if (receivedAction.payload != null) {
      // Handle navigation based on payload
    }
  }

  // Show local notification
  Future<void> _showLocalNotification(RemoteMessage message) async {
    final data = message.data;
    final type = data['type'] ?? 'general';
    
    String channelKey = 'general_notifications';
    if (type == 'brochure_request' || type == 'brochure_uploaded') {
      channelKey = 'brochure_notifications';
    }

    await AwesomeNotifications().createNotification(
      content: NotificationContent(
        id: DateTime.now().millisecondsSinceEpoch.remainder(100000),
        channelKey: channelKey,
        title: message.notification?.title ?? 'New Notification',
        body: message.notification?.body ?? '',
        payload: Map<String, String>.from(message.data),
      ),
    );
  }

  // Create AppNotification from RemoteMessage
  app_models.AppNotification _createAppNotificationFromMessage(RemoteMessage message) {
    final data = message.data;
    
    return app_models.AppNotification(
      id: data['notificationId'] ?? DateTime.now().millisecondsSinceEpoch.toString(),
      userId: data['userId'] ?? '',
      title: message.notification?.title ?? data['title'] ?? 'New Notification',
      message: message.notification?.body ?? data['message'] ?? '',
      type: data['type'] ?? 'general',
      relatedId: data['relatedId'],
      relatedModel: data['relatedModel'],
      isRead: false,
      sentAt: DateTime.now(),
    );
  }

  // Navigation methods (these would need to be implemented with proper navigation)
  void _navigateToBrochureRequests() {
    // TODO: Implement navigation to brochure requests screen
    debugPrint('Navigate to brochure requests');
  }

  void _navigateToSupportTickets() {
    // TODO: Implement navigation to support tickets screen
    debugPrint('Navigate to support tickets');
  }

  void _navigateToQuoteRequests() {
    // TODO: Implement navigation to quote requests screen
    debugPrint('Navigate to quote requests');
  }

  void _navigateToNotifications() {
    // TODO: Implement navigation to notifications screen
    debugPrint('Navigate to notifications');
  }

  // Subscribe to topics (mobile only)
  Future<void> subscribeToTopic(String topic) async {
    if (_firebaseMessaging != null && !kIsWeb) {
      await _firebaseMessaging!.subscribeToTopic(topic);
      debugPrint('Subscribed to topic: $topic');
    } else {
      debugPrint('Topic subscription not available on web platform');
    }
  }

  // Unsubscribe from topics (mobile only)
  Future<void> unsubscribeFromTopic(String topic) async {
    if (_firebaseMessaging != null && !kIsWeb) {
      await _firebaseMessaging!.unsubscribeFromTopic(topic);
      debugPrint('Unsubscribed from topic: $topic');
    } else {
      debugPrint('Topic unsubscription not available on web platform');
    }
  }

  // Get FCM token (mobile only)
  Future<String?> getToken() async {
    if (_firebaseMessaging != null && !kIsWeb) {
      return await _firebaseMessaging!.getToken();
    }
    return null;
  }

  // Update FCM token on backend
  Future<void> updateTokenOnBackend(String token) async {
    try {
      await _apiService.updateFcmToken(token);
      debugPrint('FCM token updated on backend: $token');
    } catch (e) {
      debugPrint('Error updating FCM token on backend: $e');
    }
  }

  // Check if Firebase is available
  bool get isFirebaseAvailable => _firebaseMessaging != null && !kIsWeb;
}
