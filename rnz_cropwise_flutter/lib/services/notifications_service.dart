import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../models/notification.dart';
import '../utils/constants.dart';

class NotificationsService {
  static const String baseUrl = 'https://rnz-cropwise.vercel.app/api';

  // Get user's notifications from database
  static Future<List<AppNotification>> getUserNotifications() async {
    try {
      final token = await _getAuthToken();
      if (token == null) {
        return [];
      }

      final response = await http.get(
        Uri.parse('$baseUrl/notifications/user'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['notifications'] != null) {
          final notificationsList = data['notifications'] as List;
          return notificationsList
              .map((json) => AppNotification.fromJson(json))
              .toList();
        }
      }

      return [];
    } catch (e) {
      print('❌ Get notifications error: $e');
      return [];
    }
  }

  // Mark notification as read
  static Future<bool> markAsRead(String notificationId) async {
    try {
      final token = await _getAuthToken();
      if (token == null) {
        return false;
      }

      final response = await http.put(
        Uri.parse('$baseUrl/notifications/$notificationId/read'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      return response.statusCode == 200;
    } catch (e) {
      print('❌ Mark as read error: $e');
      return false;
    }
  }

  // Mark all notifications as read
  static Future<bool> markAllAsRead() async {
    try {
      final token = await _getAuthToken();
      if (token == null) {
        return false;
      }

      final response = await http.put(
        Uri.parse('$baseUrl/notifications/read-all'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      return response.statusCode == 200;
    } catch (e) {
      print('❌ Mark all as read error: $e');
      return false;
    }
  }

  // Delete notification
  static Future<bool> deleteNotification(String notificationId) async {
    try {
      final token = await _getAuthToken();
      if (token == null) {
        return false;
      }

      final response = await http.delete(
        Uri.parse('$baseUrl/notifications/$notificationId'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      return response.statusCode == 200;
    } catch (e) {
      print('❌ Delete notification error: $e');
      return false;
    }
  }

  // Get unread notifications count
  static Future<int> getUnreadCount() async {
    try {
      final token = await _getAuthToken();
      if (token == null) {
        return 0;
      }

      final response = await http.get(
        Uri.parse('$baseUrl/notifications/unread-count'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return data['count'] ?? 0;
      }

      return 0;
    } catch (e) {
      print('❌ Get unread count error: $e');
      return 0;
    }
  }

  static Future<String?> _getAuthToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('auth_token');
  }
}
