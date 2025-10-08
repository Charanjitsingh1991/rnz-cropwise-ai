import 'package:flutter/material.dart';
import '../models/notification_model.dart' as app_models;
import 'api_service.dart';

class NotificationService extends ChangeNotifier {
  static final NotificationService _instance = NotificationService._internal();
  factory NotificationService() => _instance;
  NotificationService._internal();

  final ApiService _apiService = ApiService();
  
  List<app_models.AppNotification> _notifications = [];
  bool _isLoading = false;
  int _unreadCount = 0;

  List<app_models.AppNotification> get notifications => _notifications;
  bool get isLoading => _isLoading;
  int get unreadCount => _unreadCount;

  // Load notifications from API
  Future<void> loadNotifications({int? limit, int? page}) async {
    try {
      _isLoading = true;
      notifyListeners();

      final response = await _apiService.getNotifications(limit: limit, page: page);
      
      if (response['success'] == true) {
        final List<dynamic> notificationsData = response['data'] ?? [];
        _notifications = notificationsData
            .map((json) => app_models.AppNotification.fromJson(json))
            .toList();
        
        _updateUnreadCount();
      }
    } catch (error) {
      debugPrint('Error loading notifications: $error');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  // Mark notification as read
  Future<void> markAsRead(String notificationId) async {
    try {
      final response = await _apiService.markNotificationAsRead(notificationId);
      
      if (response['success'] == true) {
        final index = _notifications.indexWhere((n) => n.id == notificationId);
        if (index != -1) {
          _notifications[index] = _notifications[index].copyWith(
            isRead: true,
            readAt: DateTime.now(),
          );
          _updateUnreadCount();
          notifyListeners();
        }
      }
    } catch (error) {
      debugPrint('Error marking notification as read: $error');
    }
  }

  // Mark all notifications as read
  Future<void> markAllAsRead() async {
    try {
      final response = await _apiService.markAllNotificationsAsRead();
      
      if (response['success'] == true) {
        _notifications = _notifications.map((notification) {
          if (!notification.isRead) {
            return notification.copyWith(
              isRead: true,
              readAt: DateTime.now(),
            );
          }
          return notification;
        }).toList();
        
        _updateUnreadCount();
        notifyListeners();
      }
    } catch (error) {
      debugPrint('Error marking all notifications as read: $error');
    }
  }

  // Delete notification
  Future<void> deleteNotification(String notificationId) async {
    try {
      final response = await _apiService.deleteNotification(notificationId);
      
      if (response['success'] == true) {
        _notifications.removeWhere((n) => n.id == notificationId);
        _updateUnreadCount();
        notifyListeners();
      }
    } catch (error) {
      debugPrint('Error deleting notification: $error');
    }
  }

  // Add new notification (for real-time updates)
  void addNotification(app_models.AppNotification notification) {
    _notifications.insert(0, notification);
    _updateUnreadCount();
    notifyListeners();
  }

  // Update unread count
  void _updateUnreadCount() {
    _unreadCount = _notifications.where((n) => !n.isRead).length;
  }

  // Clear all notifications
  void clearAll() {
    _notifications.clear();
    _unreadCount = 0;
    notifyListeners();
  }

  // Get notifications by type
  List<app_models.AppNotification> getNotificationsByType(String type) {
    return _notifications.where((n) => n.type == type).toList();
  }

  // Get unread notifications
  List<app_models.AppNotification> get unreadNotifications {
    return _notifications.where((n) => !n.isRead).toList();
  }

  // Get read notifications
  List<app_models.AppNotification> get readNotifications {
    return _notifications.where((n) => n.isRead).toList();
  }
}
