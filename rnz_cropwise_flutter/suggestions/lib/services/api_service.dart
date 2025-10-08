import 'dart:convert';
import 'package:http/http.dart' as http;
import '../utils/constants.dart';

class ApiService {
  static final ApiService _instance = ApiService._internal();
  factory ApiService() => _instance;
  ApiService._internal();

  final String baseUrl = AppConstants.baseUrl;
  String? _authToken;

  void setAuthToken(String token) {
    _authToken = token;
  }

  void clearAuthToken() {
    _authToken = null;
  }

  Map<String, String> get _headers {
    final headers = {
      'Content-Type': 'application/json',
    };
    
    if (_authToken != null) {
      headers['Authorization'] = 'Bearer $_authToken';
    }
    
    return headers;
  }

  Future<Map<String, dynamic>> get(String endpoint) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl$endpoint'),
        headers: _headers,
      );

      return _handleResponse(response);
    } catch (e) {
      throw Exception('Network error: $e');
    }
  }

  Future<Map<String, dynamic>> post(String endpoint, Map<String, dynamic> data) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl$endpoint'),
        headers: _headers,
        body: jsonEncode(data),
      );

      return _handleResponse(response);
    } catch (e) {
      throw Exception('Network error: $e');
    }
  }

  Future<Map<String, dynamic>> put(String endpoint, Map<String, dynamic> data) async {
    try {
      final response = await http.put(
        Uri.parse('$baseUrl$endpoint'),
        headers: _headers,
        body: jsonEncode(data),
      );

      return _handleResponse(response);
    } catch (e) {
      throw Exception('Network error: $e');
    }
  }

  Future<Map<String, dynamic>> delete(String endpoint) async {
    try {
      final response = await http.delete(
        Uri.parse('$baseUrl$endpoint'),
        headers: _headers,
      );

      return _handleResponse(response);
    } catch (e) {
      throw Exception('Network error: $e');
    }
  }

  Future<Map<String, dynamic>> uploadFile(
    String endpoint,
    List<int> fileBytes,
    String fileName,
    Map<String, String> fields,
  ) async {
    try {
      final request = http.MultipartRequest('POST', Uri.parse('$baseUrl$endpoint'));
      
      // Add headers
      request.headers.addAll(_headers);
      request.headers.remove('Content-Type'); // Let the browser set this for multipart
      
      // Add fields
      request.fields.addAll(fields);
      
      // Add file
      request.files.add(
        http.MultipartFile.fromBytes(
          'file',
          fileBytes,
          filename: fileName,
        ),
      );

      final streamedResponse = await request.send();
      final response = await http.Response.fromStream(streamedResponse);

      return _handleResponse(response);
    } catch (e) {
      throw Exception('Upload error: $e');
    }
  }

  Map<String, dynamic> _handleResponse(http.Response response) {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      if (response.body.isEmpty) {
        return {'success': true};
      }
      return jsonDecode(response.body);
    } else {
      final errorBody = response.body.isNotEmpty 
          ? jsonDecode(response.body) 
          : {'message': 'HTTP ${response.statusCode}'};
      throw Exception(errorBody['message'] ?? 'Request failed');
    }
  }

  // Brochure Request Methods
  Future<Map<String, dynamic>> createBrochureRequest(String productId) async {
    return await post('/brochure-requests', {
      'productId': productId,
    });
  }

  Future<Map<String, dynamic>> getBrochureRequests({String? status}) async {
    String endpoint = '/brochure-requests';
    if (status != null) {
      endpoint += '?status=$status';
    }
    return await get(endpoint);
  }

  Future<Map<String, dynamic>> trackBrochureDownload(String brochureId) async {
    return await post('/brochures/$brochureId/download', {});
  }

  // Brochure Request Status Management (Admin only)
  Future<Map<String, dynamic>> updateBrochureRequestStatus(String requestId, String status, {String? adminNotes}) async {
    final data = {'status': status};
    if (adminNotes != null) {
      data['adminNotes'] = adminNotes;
    }
    return await put('/brochure-requests/$requestId', data);
  }

  // Get user's brochure requests (for regular users)
  Future<Map<String, dynamic>> getUserBrochureRequests() async {
    return await get('/brochure-requests/user');
  }

  // Update FCM token
  Future<Map<String, dynamic>> updateFcmToken(String token) async {
    return await put('/users/fcm-token', {'fcmToken': token});
  }

  // Notification Methods
  Future<Map<String, dynamic>> getNotifications({int? limit, int? page}) async {
    String endpoint = '/notifications';
    final params = <String>[];
    if (limit != null) params.add('limit=$limit');
    if (page != null) params.add('page=$page');
    if (params.isNotEmpty) {
      endpoint += '?${params.join('&')}';
    }
    return await get(endpoint);
  }

  Future<Map<String, dynamic>> markNotificationAsRead(String notificationId) async {
    return await put('/notifications/$notificationId/read', {});
  }

  Future<Map<String, dynamic>> markAllNotificationsAsRead() async {
    return await put('/notifications/read-all', {});
  }

  Future<Map<String, dynamic>> deleteNotification(String notificationId) async {
    return await delete('/notifications/$notificationId');
  }

  // Quote Request Methods
  Future<Map<String, dynamic>> createQuoteRequest(Map<String, dynamic> quoteData) async {
    return await post('/quotes', quoteData);
  }

  Future<Map<String, dynamic>> getQuoteRequests() async {
    return await get('/quotes');
  }

  Future<Map<String, dynamic>> updateQuoteRequestStatus(String quoteId, String status) async {
    return await put('/quotes/$quoteId/status', {'status': status});
  }

  // FAQ Methods
  Future<Map<String, dynamic>> getFAQs() async {
    return await get('/faqs');
  }

  Future<Map<String, dynamic>> searchFAQs(String query) async {
    return await get('/faqs/search?q=$query');
  }

  // Support Ticket Methods
  Future<Map<String, dynamic>> getSupportTickets() async {
    return await get('/support');
  }

  Future<Map<String, dynamic>> createSupportTicket(Map<String, dynamic> ticketData) async {
    return await post('/support', ticketData);
  }

  Future<Map<String, dynamic>> getSupportTicket(String ticketId) async {
    return await get('/support/$ticketId');
  }

  Future<Map<String, dynamic>> addMessageToTicket(String ticketId, Map<String, dynamic> messageData) async {
    return await post('/support/$ticketId/messages', messageData);
  }

  Future<Map<String, dynamic>> updateTicketStatus(String ticketId, String status) async {
    return await put('/support/$ticketId/status', {'status': status});
  }

  // FAQ Suggester (AI-powered)
  Future<Map<String, dynamic>> getFAQSuggestions(String subject) async {
    return await post('/faq-suggester', {'subject': subject});
  }

  // Products Methods
  Future<Map<String, dynamic>> getProducts() async {
    return await get('/products');
  }

  // Favorites Methods
  Future<Map<String, dynamic>> getFavorites() async {
    return await get('/favorites');
  }

  Future<Map<String, dynamic>> addToFavorites(Map<String, dynamic> favoriteData) async {
    return await post('/favorites', favoriteData);
  }

  Future<Map<String, dynamic>> removeFromFavorites(String productId) async {
    return await delete('/favorites/$productId');
  }

  Future<Map<String, dynamic>> checkFavoriteStatus(String productId) async {
    return await get('/favorites/check/$productId');
  }

  // User Profile Methods
  Future<Map<String, dynamic>> updateUserProfile(Map<String, dynamic> profileData) async {
    return await put('/users/profile', profileData);
  }
}

