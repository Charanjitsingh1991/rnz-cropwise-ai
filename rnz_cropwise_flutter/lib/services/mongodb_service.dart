import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../models/user.dart';
import '../models/product.dart';
import '../models/brochure.dart';
import '../models/expert_request.dart';
import '../models/brochure_request.dart';
import '../utils/constants.dart';

class MongoDBService {
  // MongoDB connection string - replace with your actual connection string
  static const String mongoDbUri = 'mongodb+srv://rnz-cropwise:rnz-cropwise@cluster0.mongodb.net/rnz-cropwise?retryWrites=true&w=majority';
  
  static const String baseUrl = 'https://rnz-cropwise.vercel.app/api';

  // Authentication Methods - Using custom API endpoints that directly access MongoDB
  static Future<Map<String, dynamic>> loginDirect(String email, String password) async {
    try {
      print('🔍 Attempting direct login for: $email');
      
      // Use a custom login endpoint that directly accesses MongoDB
      final response = await http.post(
        Uri.parse('$baseUrl/flutter-login'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'email': email,
          'password': password,
        }),
      );
      
      print('🔍 Direct login response: ${response.statusCode} - ${response.body}');
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        
        if (data['success'] == true) {
          // Store the auth token
          final prefs = await SharedPreferences.getInstance();
          await prefs.setString('auth_token', data['token'] ?? '');
          await prefs.setString('user_email', email);
          
          return {
            'success': true,
            'token': data['token'],
            'user': data['user']
          };
        } else {
          return {
            'success': false,
            'error': data['error'] ?? 'Login failed'
          };
        }
      } else {
        final errorData = json.decode(response.body);
        return {
          'success': false,
          'error': errorData['error'] ?? 'Login failed'
        };
      }
    } catch (e) {
      print('❌ Direct login error: $e');
      return {
        'success': false,
        'error': 'Network error: $e'
      };
    }
  }

  static Future<Map<String, dynamic>> signupDirect(String fullName, String email, String phone, String password, String country) async {
    try {
      print('🔍 Attempting direct signup for: $email');
      
      final response = await http.post(
        Uri.parse('$baseUrl/auth/signup'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'fullName': fullName,
          'email': email,
          'phoneNumber': phone,
          'password': password,
          'country': country,
        }),
      );
      
      print('🔍 Direct signup response: ${response.statusCode} - ${response.body}');
      
      final data = json.decode(response.body);
      
      if (response.statusCode == 200 && data['success'] == true) {
        // New flow: OTP sent successfully
        return {
          'success': true,
          'message': data['message'] ?? 'Verification code sent to your email',
          'email': data['email'],
          'requiresOTP': true,
        };
      } else if (response.statusCode == 201) {
        // Old flow fallback (shouldn't happen with new API)
        return {
          'success': true,
          'message': data['message'],
          'user': data['user']
        };
      } else {
        return {
          'success': false,
          'error': data['error'] ?? 'Signup failed'
        };
      }
    } catch (e) {
      print('❌ Direct signup error: $e');
      return {
        'success': false,
        'error': 'Network error: $e'
      };
    }
  }

  // Verify signup OTP and create user
  static Future<Map<String, dynamic>> verifySignupOTP(String email, String otp) async {
    try {
      print('🔍 Attempting to verify signup OTP for: $email');
      
      final response = await http.post(
        Uri.parse('$baseUrl/auth/verify-signup-otp'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'email': email,
          'otp': otp,
        }),
      );
      
      print('🔍 Verify signup OTP response: ${response.statusCode} - ${response.body}');
      
      final data = json.decode(response.body);
      
      if (data['success'] == true) {
        // Store token if provided
        if (data['token'] != null) {
          final prefs = await SharedPreferences.getInstance();
          await prefs.setString('auth_token', data['token']);
        }
        
        return {
          'success': true,
          'message': data['message'] ?? 'Account created successfully',
          'user': data['user'],
          'token': data['token'],
        };
      } else {
        return {
          'success': false,
          'error': data['error'] ?? 'OTP verification failed'
        };
      }
    } catch (e) {
      print('❌ Verify signup OTP error: $e');
      return {
        'success': false,
        'error': 'Network error: $e'
      };
    }
  }

  // Get current user from JWT token
  static Future<Map<String, dynamic>?> getCurrentUser() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('auth_token');
      
      if (token == null) {
        return null;
      }
      
      // Verify JWT token and get user details
      final response = await http.get(
        Uri.parse('$baseUrl/flutter-auth/verify'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );
      
      print('🔍 Verify token response: ${response.statusCode} - ${response.body}');
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['user'] != null) {
          return data['user'];
        }
      }
      
      return null;
    } catch (e) {
      print('❌ Get current user error: $e');
      return null;
    }
  }

  // Logout - clear stored session
  static Future<void> logout() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove('auth_token');
      await prefs.remove('user_email');
    } catch (e) {
      print('❌ Logout error: $e');
    }
  }

  // Get auth token for API calls (JWT token)
  static Future<String?> getAuthToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('auth_token');
  }

  // Products - Direct Database Access
  static Future<List<Product>> getProductsDirect() async {
    try {
      print('🔍 Fetching products directly from database');
      
      final response = await http.get(
        Uri.parse('$baseUrl/products'),
        headers: {'Content-Type': 'application/json'},
      );
      
      print('🔍 Products response: ${response.statusCode}');
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        print('🔍 Raw products response: $data');
        
        // Handle both response formats
        List<dynamic> productsList;
        if (data['products'] != null) {
          productsList = data['products'] as List;
        } else if (data['data'] != null) {
          productsList = data['data'] as List;
        } else {
          print('❌ No products found in response');
          return [];
        }
        
        final products = productsList
            .map((json) => Product.fromJson(json))
            .toList();
        
        print('🔍 Loaded ${products.length} products from database');
        return products;
      } else {
        print('❌ Failed to load products: ${response.statusCode}');
        return [];
      }
    } catch (e) {
      print('❌ Get products error: $e');
      return [];
    }
  }

  static Future<Product?> getProductDirect(String id) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/products/$id'),
        headers: {'Content-Type': 'application/json'},
      );
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return Product.fromJson(data['product']);
      }
      
      return null;
    } catch (e) {
      print('❌ Get product error: $e');
      return null;
    }
  }

  // Brochures - Direct Database Access
  static Future<List<Brochure>> getBrochuresDirect({String? productId}) async {
    try {
      print('🔍 Fetching brochures directly from database');
      
      String url = '$baseUrl/brochures';
      if (productId != null) {
        url += '?productId=$productId';
      }
      
      final response = await http.get(
        Uri.parse(url),
        headers: {'Content-Type': 'application/json'},
      );
      
      print('🔍 Brochures response: ${response.statusCode}');
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        print('🔍 Raw brochures response: $data');
        
        // Handle both response formats
        List<dynamic> brochuresList;
        if (data['brochures'] != null) {
          brochuresList = data['brochures'] as List;
        } else if (data['data'] != null) {
          brochuresList = data['data'] as List;
        } else {
          print('❌ No brochures found in response');
          return [];
        }
        
        final brochures = brochuresList
            .map((json) => Brochure.fromJson(json))
            .toList();
        
        print('🔍 Loaded ${brochures.length} brochures from database');
        return brochures;
      } else {
        print('❌ Failed to load brochures: ${response.statusCode}');
        return [];
      }
    } catch (e) {
      print('❌ Get brochures error: $e');
      return [];
    }
  }

  // Brochure Requests - Direct Database Access
  static Future<Map<String, dynamic>> requestBrochureDirect(Map<String, dynamic> requestData) async {
    try {
      final token = await getAuthToken();
      if (token == null) {
        return {
          'success': false,
          'error': 'User not authenticated'
        };
      }
      
      print('🔍 Submitting brochure request directly to database');
      
             final response = await http.post(
         Uri.parse('$baseUrl/flutter-brochure-requests'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: json.encode(requestData),
      );
      
      print('🔍 Brochure request response: ${response.statusCode} - ${response.body}');
      
             if (response.statusCode == 200 || response.statusCode == 201) {
         final data = json.decode(response.body);
         return {
           'success': true,
           'message': data['message'] ?? 'Brochure request submitted successfully',
           'requestId': data['data']?['_id'] ?? data['requestId']
         };
       } else {
         final errorData = json.decode(response.body);
         return {
           'success': false,
           'error': errorData['error'] ?? 'Request failed'
         };
       }
    } catch (e) {
      print('❌ Brochure request error: $e');
      return {
        'success': false,
        'error': 'Network error: $e'
      };
    }
  }

  static Future<bool> updateUserProfile(User user) async {
    try {
      final token = await getAuthToken();
      if (token == null) {
        return false;
      }

      print('🔍 Updating user profile for: ${user.email}');

      final response = await http.put(
        Uri.parse('$baseUrl/flutter-profile-update'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: json.encode({
          'name': user.name,
          'fullName': user.fullName,
          'phoneNumber': user.phone,
          'country': user.location,
          'state': user.farmSize, // Using farmSize field for state temporarily
          'city': user.cropType, // Using cropType field for city temporarily
        }),
      );

      print('🔍 Profile update response: ${response.statusCode} - ${response.body}');

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return data['success'] == true;
      }

      return false;
    } catch (e) {
      print('❌ Profile update error: $e');
      return false;
    }
  }
}
