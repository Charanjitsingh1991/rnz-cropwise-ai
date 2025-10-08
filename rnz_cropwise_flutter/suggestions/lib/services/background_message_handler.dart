import 'package:flutter/foundation.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

// This function must be a top-level function
@pragma('vm:entry-point')
Future<void> firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  // Skip background message handling on web platform
  if (kIsWeb) {
    print('Background message handling not supported on web platform');
    return;
  }
  
  // Handle background messages here
  print('Handling a background message: ${message.messageId}');
  print('Message data: ${message.data}');
  
  // You can perform background tasks here like:
  // - Updating local storage
  // - Syncing data
  // - Logging analytics
  
  // Note: You cannot show UI elements in background handlers
  // Local notifications will be handled by the system automatically
}
