import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

import '../services/notification_service.dart';

class NotificationProvider with ChangeNotifier {
  List<Map<String, dynamic>> _notifications = [];
  bool _isLoading = false;
  String? _error;
  bool _isEnabled = true;

  List<Map<String, dynamic>> get notifications => _notifications;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get isEnabled => _isEnabled;

  final NotificationService _notificationService = NotificationService();

  NotificationProvider() {
    _loadSettings();
    _loadNotifications();
  }

  Future<void> _loadSettings() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      _isEnabled = prefs.getBool('notifications_enabled') ?? true;
      notifyListeners();
    } catch (e) {
      // Ignore errors
    }
  }

  Future<void> _loadNotifications() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final notificationsData = prefs.getString('cached_notifications');
      
      if (notificationsData != null) {
        final List<dynamic> data = json.decode(notificationsData);
        _notifications = data.cast<Map<String, dynamic>>();
        notifyListeners();
      }
    } catch (e) {
      // Ignore cache errors
    }
  }

  Future<void> _saveNotifications() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('cached_notifications', json.encode(_notifications));
    } catch (e) {
      // Ignore save errors
    }
  }

  Future<void> initialize() async {
    try {
      _isLoading = true;
      notifyListeners();

      await _notificationService.initialize();
      
      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> requestPermission() async {
    try {
      final granted = await _notificationService.requestPermission();
      if (granted) {
        _isEnabled = true;
        await _saveSettings();
        notifyListeners();
      }
    } catch (e) {
      _error = e.toString();
      notifyListeners();
    }
  }

  Future<void> _saveSettings() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool('notifications_enabled', _isEnabled);
    } catch (e) {
      // Ignore save errors
    }
  }

  void toggleNotifications() {
    _isEnabled = !_isEnabled;
    _saveSettings();
    notifyListeners();
  }

  void addNotification(Map<String, dynamic> notification) {
    _notifications.insert(0, notification);
    _saveNotifications();
    notifyListeners();
  }

  void markAsRead(String notificationId) {
    final index = _notifications.indexWhere((n) => n['id'] == notificationId);
    if (index != -1) {
      _notifications[index]['isRead'] = true;
      _saveNotifications();
      notifyListeners();
    }
  }

  void clearNotifications() {
    _notifications.clear();
    _saveNotifications();
    notifyListeners();
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }

  int get unreadCount {
    return _notifications.where((n) => n['isRead'] != true).length;
  }
}
