import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../models/quote_request.dart';
import '../utils/constants.dart';

class QuoteRequestService {
  static const String _baseUrl = ApiEndpoints.baseUrl;

  static Future<String?> _getAuthToken() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getString('auth_token');
    } catch (e) {
      print('❌ Error getting auth token: $e');
      return null;
    }
  }

  static Future<List<QuoteRequest>> getQuoteRequests(String userEmail) async {
    try {
      final token = await _getAuthToken();
      final headers = {
        'Content-Type': 'application/json',
      };
      
      if (token != null) {
        headers['Authorization'] = 'Bearer $token';
      }

      final response = await http.get(
        Uri.parse('$_baseUrl/quotes'),
        headers: headers,
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        if (data['success'] == true) {
          final List<dynamic> quoteRequestsJson = data['quoteRequests'];
          return quoteRequestsJson.map((json) => QuoteRequest.fromJson(json)).toList();
        }
      }
      return [];
    } catch (e) {
      print('Error fetching quote requests: $e');
      return [];
    }
  }

  static Future<bool> submitQuoteRequest(QuoteRequest quoteRequest) async {
    try {
      final token = await _getAuthToken();
      final headers = {
        'Content-Type': 'application/json',
      };
      
      if (token != null) {
        headers['Authorization'] = 'Bearer $token';
      }

      final response = await http.post(
        Uri.parse('$_baseUrl/quotes'),
        headers: headers,
        body: jsonEncode(quoteRequest.toJson()),
      );

      print('Quote request response: ${response.statusCode} - ${response.body}');
      
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        return data['success'] == true;
      } else {
        print('Quote request failed with status: ${response.statusCode}');
        print('Response body: ${response.body}');
      }
      return false;
    } catch (e) {
      print('Error submitting quote request: $e');
      return false;
    }
  }
}
