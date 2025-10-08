import 'dart:convert';
import 'dart:async';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../models/support_ticket.dart';
import '../utils/constants.dart';

class SupportTicketService {
  static const String baseUrl = 'https://rnz-cropwise.vercel.app/api';

  static Future<String?> _getAuthToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('auth_token');
  }

  static Future<Map<String, String>> _getHeaders() async {
    final token = await _getAuthToken();
    return {
      'Content-Type': 'application/json',
      if (token != null) 'Authorization': 'Bearer $token',
    };
  }

  static Map<String, dynamic> _safeDecode(String body) {
    try {
      return jsonDecode(body) as Map<String, dynamic>;
    } catch (_) {
      return {'error': 'Unexpected response'};
    }
  }

  /// Create a new support ticket
  static Future<Map<String, dynamic>> createSupportTicket({
    required String subject,
    required String message,
  }) async {
    try {
      final headers = await _getHeaders();

      final response = await http
          .post(
            Uri.parse('$baseUrl/flutter-support'),
            headers: headers,
            body: jsonEncode({
              'subject': subject,
              'message': message,
            }),
          )
          .timeout(const Duration(seconds: 20));

      if (response.statusCode == 200 || response.statusCode == 201) {
        final data = _safeDecode(response.body);
        final ticketJson = data['ticket'] as Map<String, dynamic>?;
        return {
          'success': true,
          'message': (data['message'] ?? 'Support ticket created successfully').toString(),
          if (ticketJson != null) 'ticket': SupportTicket.fromJson(ticketJson),
        };
      } else {
        final errorData = _safeDecode(response.body);
        return {
          'success': false,
          'message': (errorData['error'] ?? 'Failed to create support ticket').toString(),
        };
      }
    } on http.ClientException catch (e) {
      return {
        'success': false,
        'message': 'Network error: ${e.message}',
      };
    } on TimeoutException {
      return {
        'success': false,
        'message': 'Request timed out. Please try again.',
      };
    } catch (e) {
      return {
        'success': false,
        'message': 'Unexpected error: $e',
      };
    }
  }

  /// Get user's support tickets
  static Future<Map<String, dynamic>> getUserSupportTickets({
    String? status,
    int limit = 10,
    int page = 1,
  }) async {
    try {
      final headers = await _getHeaders();

      final queryParams = <String, String>{
        'limit': limit.toString(),
        'page': page.toString(),
      };

      if (status != null) {
        queryParams['status'] = status;
      }

      final uri = Uri.parse('$baseUrl/flutter-support').replace(queryParameters: queryParams);

      final response = await http.get(uri, headers: headers).timeout(const Duration(seconds: 20));

      if (response.statusCode == 200) {
        final data = _safeDecode(response.body);
        final ticketsList = (data['tickets'] as List?) ?? [];
        final tickets = ticketsList
            .whereType<Map<String, dynamic>>()
            .map((json) => SupportTicket.fromJson(json))
            .toList();

        return {
          'success': true,
          'tickets': tickets,
          'pagination': data['pagination'],
        };
      } else {
        final errorData = _safeDecode(response.body);
        return {
          'success': false,
          'message': (errorData['error'] ?? 'Failed to fetch support tickets').toString(),
        };
      }
    } on TimeoutException {
      return {
        'success': false,
        'message': 'Request timed out while fetching tickets',
      };
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }

  /// Get a specific support ticket by ID
  static Future<Map<String, dynamic>> getSupportTicket(String ticketId) async {
    try {
      final headers = await _getHeaders();

      final response = await http
          .get(
            Uri.parse('$baseUrl/flutter-support/$ticketId'),
            headers: headers,
          )
          .timeout(const Duration(seconds: 20));

      if (response.statusCode == 200) {
        final data = _safeDecode(response.body);
        final ticket = SupportTicket.fromJson(data['ticket']);
        return {
          'success': true,
          'ticket': ticket,
        };
      } else {
        final errorData = _safeDecode(response.body);
        return {
          'success': false,
          'message': (errorData['error'] ?? 'Failed to fetch support ticket').toString(),
        };
      }
    } on TimeoutException {
      return {
        'success': false,
        'message': 'Request timed out while loading ticket',
      };
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }

  /// Update support ticket status
  static Future<Map<String, dynamic>> updateSupportTicket({
    required String ticketId,
    String? status,
    bool? isReadByUser,
  }) async {
    try {
      final headers = await _getHeaders();

      final updateData = <String, dynamic>{};
      if (status != null) updateData['status'] = status;
      if (isReadByUser != null) updateData['isReadByUser'] = isReadByUser;

      final response = await http
          .put(
            Uri.parse('$baseUrl/flutter-support/$ticketId'),
            headers: headers,
            body: jsonEncode(updateData),
          )
          .timeout(const Duration(seconds: 20));

      if (response.statusCode == 200) {
        final data = _safeDecode(response.body);
        return {
          'success': true,
          'message': (data['message'] ?? 'Support ticket updated successfully').toString(),
          'ticket': SupportTicket.fromJson(data['ticket']),
        };
      } else {
        final errorData = _safeDecode(response.body);
        return {
          'success': false,
          'message': (errorData['error'] ?? 'Failed to update support ticket').toString(),
        };
      }
    } on TimeoutException {
      return {
        'success': false,
        'message': 'Request timed out while updating ticket',
      };
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }

  /// Add a message to support ticket
  static Future<Map<String, dynamic>> addMessageToTicket({
    required String ticketId,
    required String message,
  }) async {
    try {
      final headers = await _getHeaders();

      final response = await http
          .post(
            Uri.parse('$baseUrl/flutter-support/$ticketId'),
            headers: headers,
            body: jsonEncode({
              'message': message,
            }),
          )
          .timeout(const Duration(seconds: 20));

      if (response.statusCode == 200) {
        final data = _safeDecode(response.body);
        return {
          'success': true,
          'message': (data['message'] ?? 'Message added successfully').toString(),
          'ticket': SupportTicket.fromJson(data['ticket']),
        };
      } else {
        final errorData = _safeDecode(response.body);
        return {
          'success': false,
          'message': (errorData['error'] ?? 'Failed to add message').toString(),
        };
      }
    } on TimeoutException {
      return {
        'success': false,
        'message': 'Request timed out while adding message',
      };
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }

  /// Mark ticket as read
  static Future<Map<String, dynamic>> markTicketAsRead(String ticketId) async {
    return updateSupportTicket(
      ticketId: ticketId,
      isReadByUser: true,
    );
  }

  /// Close support ticket
  static Future<Map<String, dynamic>> closeTicket(String ticketId) async {
    return updateSupportTicket(
      ticketId: ticketId,
      status: 'Closed',
    );
  }
}
