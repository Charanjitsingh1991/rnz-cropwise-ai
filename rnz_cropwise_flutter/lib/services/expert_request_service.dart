import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../models/expert_request.dart';
import '../models/disease_detection_result.dart';
import '../utils/constants.dart';

class ExpertRequestService {
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

  /// Submit a new expert request
  static Future<Map<String, dynamic>> submitExpertRequest({
    required DiseaseDetectionResult diagnosisResult,
    required String plantImage,
  }) async {
    try {
      final headers = await _getHeaders();
      
      final response = await http.post(
        Uri.parse('$baseUrl/flutter-expert-request'),
        headers: headers,
        body: jsonEncode({
          'plantType': diagnosisResult.plantType,
          'isHealthy': diagnosisResult.isHealthy,
          'diseaseName': diagnosisResult.diseaseName,
          'diseaseSeverity': diagnosisResult.diseaseSeverity,
          'confidenceScore': diagnosisResult.confidenceScore,
          'plantImage': plantImage,
          'diagnosisResult': diagnosisResult.toJson(),
        }),
      );

      if (response.statusCode == 200 || response.statusCode == 201) {
        final data = jsonDecode(response.body);
        return {
          'success': true,
          'message': data['message'] ?? 'Expert request submitted successfully',
          'requestId': data['requestId'],
        };
      } else {
        final errorData = jsonDecode(response.body);
        return {
          'success': false,
          'message': errorData['error'] ?? 'Failed to submit expert request',
        };
      }
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }

  /// Get user's expert requests
  static Future<Map<String, dynamic>> getUserExpertRequests({
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

      final uri = Uri.parse('$baseUrl/flutter-expert-request').replace(queryParameters: queryParams);
      
      final response = await http.get(uri, headers: headers);

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final requests = (data['requests'] as List)
            .map((json) => ExpertRequest.fromJson(json))
            .toList();
            
        return {
          'success': true,
          'requests': requests,
          'pagination': data['pagination'],
        };
      } else {
        final errorData = jsonDecode(response.body);
        return {
          'success': false,
          'message': errorData['error'] ?? 'Failed to fetch expert requests',
        };
      }
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }

  /// Get a specific expert request by ID
  static Future<Map<String, dynamic>> getExpertRequest(String requestId) async {
    try {
      final headers = await _getHeaders();
      
      final response = await http.get(
        Uri.parse('$baseUrl/flutter-expert-request/$requestId'),
        headers: headers,
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final request = ExpertRequest.fromJson(data);
        return {
          'success': true,
          'request': request,
        };
      } else {
        final errorData = jsonDecode(response.body);
        return {
          'success': false,
          'message': errorData['error'] ?? 'Failed to fetch expert request',
        };
      }
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }

  /// Cancel an expert request
  static Future<Map<String, dynamic>> cancelExpertRequest(String requestId) async {
    try {
      final headers = await _getHeaders();
      
      final response = await http.put(
        Uri.parse('$baseUrl/flutter-expert-request/$requestId'),
        headers: headers,
        body: jsonEncode({
          'status': 'cancelled',
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        return {
          'success': true,
          'message': data['message'] ?? 'Expert request cancelled successfully',
        };
      } else {
        final errorData = jsonDecode(response.body);
        return {
          'success': false,
          'message': errorData['error'] ?? 'Failed to cancel expert request',
        };
      }
    } catch (e) {
      return {
        'success': false,
        'message': 'Network error: $e',
      };
    }
  }
}

