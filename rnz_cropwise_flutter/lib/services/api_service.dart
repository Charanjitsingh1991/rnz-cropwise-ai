import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../models/user.dart';
import '../models/product.dart';
import '../models/brochure.dart';
import '../models/support.dart';
import '../models/faq.dart';
import '../models/ai_advisor_input.dart';
import '../models/ai_advisor_output.dart';
import '../models/disease_detection_input.dart';
import '../models/disease_detection_output.dart';
import '../models/brochure_request.dart';
import '../data/countries_data.dart';
import 'mongodb_service.dart';

class ApiService {
  static const String baseUrl = 'https://rnz-cropwise.vercel.app/api';
  
  // For development, we'll use mock data but structure it like the real API
  static const bool useMockData = false;

  // HTTP Methods
  static Future<Map<String, dynamic>> get(String endpoint) async {
    if (useMockData) {
      return _getMockResponse(endpoint);
    }
    
    final response = await http.get(Uri.parse('$baseUrl$endpoint'));
    return json.decode(response.body);
  }

  static Future<Map<String, dynamic>> post(String endpoint, Map<String, dynamic> data) async {
    if (useMockData) {
      return _getMockResponse(endpoint, data: data);
    }
    
    final response = await http.post(
      Uri.parse('$baseUrl$endpoint'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(data),
    );
    return json.decode(response.body);
  }

  static Future<Map<String, dynamic>> put(String endpoint, Map<String, dynamic> data) async {
    if (useMockData) {
      return _getMockResponse(endpoint, data: data);
    }
    
    final response = await http.put(
      Uri.parse('$baseUrl$endpoint'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(data),
    );
    return json.decode(response.body);
  }

  static Future<Map<String, dynamic>> delete(String endpoint) async {
    if (useMockData) {
      return _getMockResponse(endpoint);
    }
    
    final response = await http.delete(Uri.parse('$baseUrl$endpoint'));
    return json.decode(response.body);
  }

  // Authentication Methods - Using Direct Database Access
  static Future<Map<String, dynamic>> login(String email, String password) async {
    if (useMockData) {
      await Future.delayed(const Duration(seconds: 1));
      
      // Mock login - any valid email format will work
      if (email.contains('@') && password.length >= 6) {
        return {
          'success': true,
          'token': 'mock_jwt_token_${DateTime.now().millisecondsSinceEpoch}',
          'user': {
            'id': 'user_${DateTime.now().millisecondsSinceEpoch}',
            'fullName': 'Test User',
            'email': email,
            'phone': '+1234567890',
            'location': 'Test Location',
            'farmSize': '5 hectares',
            'cropType': 'Mixed',
            'experience': 'Intermediate',
            'profileImageUrl': 'https://placehold.co/200x200.png?text=User',
            'createdAt': DateTime.now().toIso8601String(),
            'updatedAt': DateTime.now().toIso8601String(),
          }
        };
      } else {
        return {
          'success': false,
          'error': 'Invalid email or password'
        };
      }
    }
    
    // Use direct database access through MongoDB service
    return await MongoDBService.loginDirect(email, password);
  }

  static Future<Map<String, dynamic>> signup(String fullName, String email, String phone, String password, String country) async {
    if (useMockData) {
      await Future.delayed(const Duration(seconds: 1));
      
      return {
        'success': true,
        'message': 'Account created successfully',
        'user': {
          'id': 'user_${DateTime.now().millisecondsSinceEpoch}',
          'fullName': fullName,
          'email': email,
          'phone': phone,
          'location': 'Test Location',
          'farmSize': '5 hectares',
          'cropType': 'Mixed',
          'experience': 'Beginner',
          'profileImageUrl': 'https://placehold.co/200x200.png?text=User',
          'createdAt': DateTime.now().toIso8601String(),
          'updatedAt': DateTime.now().toIso8601String(),
        }
      };
    }
    
    // Use direct database access through MongoDB service
    return await MongoDBService.signupDirect(fullName, email, phone, password, country);
  }

  static Future<Map<String, dynamic>> sendOTP(String email) async {
    await Future.delayed(const Duration(seconds: 1));
    return {
      'success': true,
      'message': 'OTP sent successfully',
      'otp': '123456' // Mock OTP for testing
    };
  }

  static Future<Map<String, dynamic>> verifyOTP(String email, String otp) async {
    await Future.delayed(const Duration(seconds: 1));
    
    if (otp == '123456') {
      return {
        'success': true,
        'message': 'OTP verified successfully'
      };
    } else {
      return {
        'success': false,
        'error': 'Invalid OTP'
      };
    }
  }

  static Future<Map<String, dynamic>> resetPassword(String email) async {
    try {
      print('🔐 Calling reset password API for email: $email');
      
      final response = await http.post(
        Uri.parse('$baseUrl/auth/reset-password'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'email': email}),
      );
      
      print('🔐 Reset password API response: ${response.statusCode} - ${response.body}');
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return {
          'success': true,
          'message': data['message'] ?? 'Password reset link generated successfully',
          'resetUrl': data['resetUrl'] ?? '',
          'token': data['token'] ?? ''
        };
      } else {
        final errorData = json.decode(response.body);
        return {
          'success': false,
          'error': errorData['error'] ?? 'Failed to send reset email'
        };
      }
    } catch (e) {
      print('❌ Reset password API error: $e');
      return {
        'success': false,
        'error': 'Network error: ${e.toString()}'
      };
    }
  }

  // AI Advisor Methods - Matching web app structure
  static Future<Map<String, dynamic>> getAIRecommendations(AIAdvisorInput input) async {
    if (useMockData) {
      await Future.delayed(const Duration(seconds: 2));
      
      // Check if user's country is in pilot countries
      final userCountry = input.country ?? '';
      final isPilotCountry = pilotCountriesData.any((country) => 
        country.code == userCountry || country.name == userCountry
      );
      
      if (!isPilotCountry) {
        return {
          'success': false,
          'error': 'AI Crop Advisor is currently only available for pilot countries: ${pilotCountriesData.map((c) => c.name).join(', ')}',
          'recommendedProducts': [],
          'explanation': 'Service not available in your region.',
          'regionalInsights': 'Service not available in your region.',
          'agriculturalData': {
            'hasRegionalData': false,
            'dataCompleteness': 'Not Available',
            'lastUpdated': DateTime.now().toIso8601String()
          }
        };
      }

      // Generate recommendations based on input
      final recommendations = _generateProductRecommendations(input);
      
      return {
        'success': true,
        'recommendedProducts': recommendations['products'],
        'explanation': recommendations['explanation'],
        'regionalInsights': recommendations['regionalInsights'],
        'agriculturalData': {
          'hasRegionalData': true,
          'dataCompleteness': 'Complete',
          'lastUpdated': DateTime.now().toIso8601String()
        }
      };
    }
    
    try {
      print('🔍 Calling AI Advisor API with input: $input');
      
      // Call the real AI Advisor API
      final response = await http.post(
        Uri.parse('$baseUrl/ai-advisor'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'crop': input.crop,
          'soil': input.soil,
          'region': input.region,
          'moisture': input.moisture,
          'growthStage': input.growthStage,
          'country': input.country,
          'state': input.state ?? '',
          'district': input.district ?? '',
        }),
      );
      
      print('🔍 AI Advisor API response: ${response.statusCode} - ${response.body}');
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return {
          'success': true,
          'recommendedProducts': data['recommendedProducts'] ?? [],
          'explanation': data['explanation'] ?? '',
          'regionalInsights': data['regionalInsights'] ?? '',
          'agriculturalData': data['agriculturalData'] ?? {
            'hasRegionalData': true,
            'dataCompleteness': 'Complete',
            'lastUpdated': DateTime.now().toIso8601String()
          }
        };
      } else {
        final errorData = json.decode(response.body);
        return {
          'success': false,
          'error': errorData['error'] ?? 'Failed to get AI recommendations',
          'recommendedProducts': [],
          'explanation': '',
          'regionalInsights': '',
          'agriculturalData': {
            'hasRegionalData': false,
            'dataCompleteness': 'Error',
            'lastUpdated': DateTime.now().toIso8601String()
          }
        };
      }
    } catch (e) {
      print('❌ AI Advisor API error: $e');
      return {
        'success': false,
        'error': 'Network error: $e',
        'recommendedProducts': [],
        'explanation': '',
        'regionalInsights': '',
        'agriculturalData': {
          'hasRegionalData': false,
          'dataCompleteness': 'Error',
          'lastUpdated': DateTime.now().toIso8601String()
        }
      };
    }
  }

  // Product Methods - Using actual web app data structure
  static Future<Map<String, dynamic>> getProducts() async {
    if (useMockData) {
      await Future.delayed(const Duration(seconds: 1));
      return {
        'success': true,
        'data': _getMockProducts()
      };
    }
    
    try {
      print('🔍 Fetching products from: $baseUrl/products');
      final response = await http.get(Uri.parse('$baseUrl/products'));
      print('📡 Response status: ${response.statusCode}');
      print('📄 Response body: ${response.body}');
      
      final data = json.decode(response.body);
      print('📦 Raw API data: $data');
      
      // Handle the response format from the web app
      if (data['success'] == true && data['data'] != null) {
        return {
          'success': true,
          'products': data['data']  // Convert 'data' to 'products' for compatibility
        };
      }
      
      return data;
    } catch (e) {
      print('❌ API Error: $e');
      return {
        'success': false,
        'error': e.toString()
      };
    }
  }

  static Future<Map<String, dynamic>> getProduct(String id) async {
    if (useMockData) {
      await Future.delayed(const Duration(seconds: 1));
      
      final products = _getMockProducts();
      final product = products.firstWhere(
        (p) => p['id'] == id || p['_id'] == id,
        orElse: () => <String, dynamic>{},
      );
      
      if (product.isNotEmpty) {
        return {
          'success': true,
          'data': product
        };
      } else {
        return {
          'success': false,
          'error': 'Product not found'
        };
      }
    }
    
    try {
      final response = await http.get(Uri.parse('$baseUrl/products/$id'));
      final data = json.decode(response.body);
      
      if (data['success'] == true && data['data'] != null) {
        final product = data['data'];
        
        // Handle crops - split by semicolon and comma
        List<String> crops = [];
        if (product['suitableCrops'] != null) {
          crops = product['suitableCrops']
              .toString()
              .split(RegExp(r'[;,]+'))
              .map((crop) => crop.trim())
              .where((crop) => crop.isNotEmpty)
              .toList();
        }
        
        // Handle soil types - split by comma
        List<String> soilTypes = [];
        if (product['suitableSoils'] != null) {
          soilTypes = product['suitableSoils']
              .toString()
              .split(',')
              .map((soil) => soil.trim())
              .where((soil) => soil.isNotEmpty)
              .toList();
        }
        
        // Handle categories
        List<String> categories = [];
        if (product['category'] != null) {
          categories = [product['category'].toString()];
        }
        
        final transformedProduct = {
          ...product,
          'id': product['_id']?.toString() ?? product['id'] ?? '',
          'categories': categories,
          'crops': crops,
          'soilTypes': soilTypes,
          'regions': product['regions'] ?? [],
          'moistureLevels': product['moistureLevels'] ?? [],
          'images': product['images'] ?? [],
          'longDescription': product['longDescription'] ?? product['description'] ?? '',
          'isActive': product['isActive'] ?? true,
          'isFeatured': product['isFeatured'] ?? false,
          'imageUrl': product['imageUrl'] ?? product['images']?.isNotEmpty == true ? product['images'][0] : '',
        };
        
        return {
          'success': true,
          'data': transformedProduct
        };
      }
      
      return data;
    } catch (e) {
      return {
        'success': false,
        'error': e.toString()
      };
    }
  }

  // Brochure Methods - Integrated with products
  static Future<Map<String, dynamic>> getBrochures({String? productId}) async {
    if (useMockData) {
      await Future.delayed(const Duration(seconds: 1));
      
      final brochures = _getMockBrochures();
      
      if (productId != null) {
        // Filter brochures for specific product
        final productBrochures = brochures.where((b) => 
          b['assignedProducts']?.contains(productId) == true
        ).toList();
        
        return {
          'success': true,
          'data': productBrochures
        };
      }
      
      return {
        'success': true,
        'data': brochures
      };
    }
    
    try {
      print('🔍 Fetching brochures for productId: $productId');
      String url = '$baseUrl/brochures';
      if (productId != null) {
        url += '?productId=$productId';
      }
      
      print('🔍 Brochure API URL: $url');
      final response = await http.get(Uri.parse(url));
      print('🔍 Brochure API Response: ${response.statusCode} - ${response.body}');
      
      final data = json.decode(response.body);
      
      // Transform MongoDB data to match our model
      if (data['success'] == true && data['data'] != null) {
        final List<dynamic> brochures = data['data'];
        print('🔍 Found ${brochures.length} brochures');
        
        // Filter brochures for the specific product if productId is provided
        List<dynamic> filteredBrochures = brochures;
        if (productId != null) {
          print('🔍 Filtering brochures for productId: $productId');
          filteredBrochures = brochures.where((brochure) {
            final linkedProducts = brochure['linkedProducts'] as List<dynamic>?;
            if (linkedProducts == null) return false;
            
            // Check if any linked product matches the productId
            return linkedProducts.any((linkedProduct) {
              String linkedProductId;
              if (linkedProduct is Map) {
                if (linkedProduct['\$oid'] != null) {
                  linkedProductId = linkedProduct['\$oid'].toString();
                } else if (linkedProduct['_id'] != null) {
                  linkedProductId = linkedProduct['_id'].toString();
                } else {
                  linkedProductId = linkedProduct.toString();
                }
              } else {
                linkedProductId = linkedProduct.toString();
              }
              print('🔍 Comparing linkedProductId: $linkedProductId with productId: $productId');
              return linkedProductId == productId;
            });
          }).toList();
          print('🔍 Filtered brochures count: ${filteredBrochures.length}');
        }
        
        final transformedBrochures = filteredBrochures.map((brochure) {
          return {
            ...brochure,
            'id': brochure['_id']?.toString() ?? brochure['id'] ?? '',
            'linkedProducts': brochure['linkedProducts']?.map((p) => p.toString()).toList() ?? [],
            'regions': brochure['regions'] ?? [],
            'crops': brochure['crops'] ?? [],
            'tags': brochure['tags'] ?? [],
            'isFeatured': brochure['isFeatured'] ?? false,
            'status': brochure['status'] ?? 'published',
          };
        }).toList();
        
        return {
          'success': true,
          'data': transformedBrochures
        };
      }
      
      return data;
    } catch (e) {
      print('❌ Error fetching brochures: $e');
      return {
        'success': false,
        'error': e.toString()
      };
    }
  }

  static Future<Map<String, dynamic>> requestBrochure(Map<String, dynamic> request) async {
    if (useMockData) {
      await Future.delayed(const Duration(seconds: 1));
      
      return {
        'success': true,
        'message': 'Brochure request submitted successfully',
        'requestId': 'req_${DateTime.now().millisecondsSinceEpoch}'
      };
    }
    
    try {
      print('🔍 Submitting brochure request: $request');
      
      // Get auth token from storage or provider
      final authToken = await _getAuthToken();
      final headers = {
        'Content-Type': 'application/json',
      };
      
      if (authToken != null) {
        headers['Authorization'] = 'Bearer $authToken';
      }
      
      final response = await http.post(
        Uri.parse('$baseUrl/brochure-requests'),
        headers: headers,
        body: json.encode(request),
      );
      
      print('🔍 Brochure request response: ${response.statusCode} - ${response.body}');
      final data = json.decode(response.body);
      return data;
    } catch (e) {
      print('❌ Error submitting brochure request: $e');
      return {
        'success': false,
        'error': e.toString()
      };
    }
  }

  static Future<String?> _getAuthToken() async {
    try {
      // Try to get token from SharedPreferences
      final prefs = await SharedPreferences.getInstance();
      return prefs.getString('auth_token');
    } catch (e) {
      print('❌ Error getting auth token: $e');
      return null;
    }
  }

  // Support Methods
  static Future<Map<String, dynamic>> getSupportTickets() async {
    await Future.delayed(const Duration(seconds: 1));
    
    return {
      'success': true,
      'data': _getMockSupportTickets()
    };
  }

  static Future<Map<String, dynamic>> createSupportTicket(Map<String, dynamic> ticket) async {
    await Future.delayed(const Duration(seconds: 1));
    
    return {
      'success': true,
      'message': 'Support ticket created successfully',
      'ticketId': 'ticket_${DateTime.now().millisecondsSinceEpoch}'
    };
  }

  static Future<Map<String, dynamic>> getMockFAQs() async {
    await Future.delayed(const Duration(seconds: 1));
    
    return {
      'success': true,
      'data': _getMockFAQs()
    };
  }

  // User Profile Methods
  static Future<Map<String, dynamic>> getUserProfile() async {
    await Future.delayed(const Duration(seconds: 1));
    
    return {
      'success': true,
      'data': _getMockUser()
    };
  }

  static Future<Map<String, dynamic>> updateUserProfile(Map<String, dynamic> profile) async {
    await Future.delayed(const Duration(seconds: 1));
    
    return {
      'success': true,
      'message': 'Profile updated successfully',
      'data': profile
    };
  }

  // Disease Detection Methods
  static Future<Map<String, dynamic>> detectDisease(DiseaseDetectionInput input) async {
    await Future.delayed(const Duration(seconds: 2));
    
    return {
      'success': true,
      'data': {
        'disease': 'Leaf Blight',
        'confidence': 0.85,
        'description': 'This appears to be a fungal disease affecting the leaves.',
        'recommendations': [
          'Apply fungicide treatment',
          'Improve air circulation',
          'Remove affected leaves'
        ],
        'products': [
          {
            'name': 'Copper Sulphate',
            'description': 'Effective fungicide for leaf diseases',
            'applicationMethod': 'Foliar spray',
            'dosage': '2-3 kg/ha',
            'timing': 'Apply every 7-10 days'
          }
        ]
      }
    };
  }

  // Mock Response Handler
  static Future<Map<String, dynamic>> _getMockResponse(String endpoint, {Map<String, dynamic>? data}) async {
    // This method handles all mock responses based on endpoint
    switch (endpoint) {
              case '/login':
          return await login(data?['email'] ?? '', data?['password'] ?? '');
        case '/signup':
          return await signup(
            data?['fullName'] ?? '',
            data?['email'] ?? '',
            data?['phone'] ?? '',
            data?['password'] ?? '',
            'India'
          );
        case '/send-otp':
          return await sendOTP(data?['email'] ?? '');
        case '/verify-otp':
          return await verifyOTP(data?['email'] ?? '', data?['otp'] ?? '');
        case '/reset-password':
          return await resetPassword(data?['email'] ?? '');
        case '/ai-advisor':
          return await getAIRecommendations(AIAdvisorInput.fromJson(data ?? {}));
        case '/products':
          return await getProducts();
        case '/brochures':
          return await getBrochures(productId: data?['productId']);
        case '/support-tickets':
          return await getSupportTickets();
        case '/create-support-ticket':
          return await createSupportTicket(data ?? {});
        case '/faqs':
          return await getMockFAQs();
        case '/user-profile':
          return await getUserProfile();
        case '/update-profile':
          return await updateUserProfile(data ?? {});
        case '/disease-detection':
          return await detectDisease(DiseaseDetectionInput.fromJson(data ?? {}));
      default:
        return {
          'success': false,
          'error': 'Endpoint not found: $endpoint'
        };
    }
  }

  // Mock Data Generators
  static List<Map<String, dynamic>> _getMockProducts() {
    return [
      {
        "id": "prod-1",
        "name": "NPK 19-19-19",
        "description": "High-purity fully soluble grades for quick uptake.",
        "longDescription": "NPK 19-19-19 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
        "imageUrl": "https://placehold.co/600x400.png?text=NPK%2019-19-19",
        "crops": ["All crops", "strong for vegetables", "fruits", "hydroponics"],
        "soilTypes": ["Loam", "Sandy", "Silt", "Hydroponics"],
        "regions": ["Worldwide"],
        "moistureLevels": ["All"],
        "categories": ["Water Soluble NPK (100% Soluble Powders)"],
        "isActive": true,
        "isFeatured": true,
        "tags": ["all-crops", "fruits", "hydroponics", "loam", "sandy", "silt", "strong-for-vegetables", "water-soluble-npk-100-soluble-powders", "wsf-powder"],
        "specifications": {
          "npk": {"nitrogen": 19, "phosphorus": 19, "potassium": 19},
          "solubility": "Fully soluble",
          "ph": {"min": 5.5, "max": 6.5}
        },
        "application": {
          "method": ["Foliar", "Fertigation"],
          "rate": {"min": 2, "max": 5, "unit": "kg/ha"},
          "frequency": "Every 7-15 days",
          "timing": "Vegetative to flowering; fertigation/foliar"
        },
        "pricing": {
          "retail": 850,
          "wholesale": 765.0,
          "currency": "INR"
        },
        "availability": {
          "inStock": true,
          "quantity": 1000,
          "unit": "kg"
        },
        "brochures": ["brochure-1"],
        "createdAt": "2025-08-18T13:25:40.499Z",
        "updatedAt": "2025-08-18T13:25:40.499Z"
      },
      {
        "id": "prod-2",
        "name": "NPK 13-40-13",
        "description": "High-purity fully soluble grades for quick uptake.",
        "longDescription": "NPK 13-40-13 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
        "imageUrl": "https://placehold.co/600x400.png?text=NPK%2013-40-13",
        "crops": ["All crops", "strong for vegetables", "fruits", "hydroponics"],
        "soilTypes": ["Loam", "Sandy", "Silt", "Hydroponics"],
        "regions": ["Worldwide"],
        "moistureLevels": ["All"],
        "categories": ["Water Soluble NPK (100% Soluble Powders)"],
        "isActive": true,
        "isFeatured": true,
        "tags": ["all-crops", "fruits", "hydroponics", "loam", "sandy", "silt", "strong-for-vegetables", "water-soluble-npk-100-soluble-powders", "wsf-powder"],
        "specifications": {
          "npk": {"nitrogen": 13, "phosphorus": 40, "potassium": 13},
          "solubility": "Fully soluble",
          "ph": {"min": 5.5, "max": 6.5}
        },
        "application": {
          "method": ["Foliar", "Fertigation"],
          "rate": {"min": 2, "max": 5, "unit": "kg/ha"},
          "frequency": "Every 7-15 days",
          "timing": "Vegetative to flowering; fertigation/foliar"
        },
        "pricing": {
          "retail": 900,
          "wholesale": 810.0,
          "currency": "INR"
        },
        "availability": {
          "inStock": true,
          "quantity": 800,
          "unit": "kg"
        },
        "brochures": ["brochure-2"],
        "createdAt": "2025-08-18T13:25:40.499Z",
        "updatedAt": "2025-08-18T13:25:40.499Z"
      },
      {
        "id": "prod-3",
        "name": "NPK 13-00-45",
        "description": "High-purity fully soluble grades for quick uptake.",
        "longDescription": "NPK 13-00-45 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
        "imageUrl": "https://placehold.co/600x400.png?text=NPK%2013-00-45",
        "crops": ["All crops", "strong for vegetables", "fruits", "hydroponics"],
        "soilTypes": ["Loam", "Sandy", "Silt", "Hydroponics"],
        "regions": ["Worldwide"],
        "moistureLevels": ["All"],
        "categories": ["Water Soluble NPK (100% Soluble Powders)"],
        "isActive": true,
        "isFeatured": false,
        "tags": ["all-crops", "fruits", "hydroponics", "loam", "sandy", "silt", "strong-for-vegetables", "water-soluble-npk-100-soluble-powders", "wsf-powder"],
        "specifications": {
          "npk": {"nitrogen": 13, "phosphorus": 0, "potassium": 45},
          "solubility": "Fully soluble",
          "ph": {"min": 5.5, "max": 6.5}
        },
        "application": {
          "method": ["Foliar", "Fertigation"],
          "rate": {"min": 2, "max": 5, "unit": "kg/ha"},
          "frequency": "Every 7-15 days",
          "timing": "Flowering and fruiting stages"
        },
        "pricing": {
          "retail": 950,
          "wholesale": 855.0,
          "currency": "INR"
        },
        "availability": {
          "inStock": true,
          "quantity": 600,
          "unit": "kg"
        },
        "brochures": [],
        "createdAt": "2025-08-18T13:25:40.499Z",
        "updatedAt": "2025-08-18T13:25:40.499Z"
      }
    ];
  }

  static List<Map<String, dynamic>> _getMockBrochures() {
    return [
      {
        "id": "brochure-1",
        "title": "NPK 19-19-19 Product Brochure",
        "description": "Complete guide for NPK 19-19-19 application and benefits",
        "fileUrl": "https://example.com/brochures/npk-19-19-19.pdf",
        "thumbnailUrl": "https://placehold.co/200x250.png?text=Brochure",
        "fileSize": 2048576, // 2MB
        "downloads": 150,
        "views": 300,
        "category": "Product Information",
        "language": "English",
        "assignedProducts": ["prod-1"],
        "createdAt": "2025-01-15T10:30:00Z"
      },
      {
        "id": "brochure-2",
        "title": "NPK 13-40-13 Application Guide",
        "description": "Detailed application guide for NPK 13-40-13",
        "fileUrl": "https://example.com/brochures/npk-13-40-13.pdf",
        "thumbnailUrl": "https://placehold.co/200x250.png?text=Brochure",
        "fileSize": 1536000, // 1.5MB
        "downloads": 89,
        "views": 200,
        "category": "Application Guide",
        "language": "English",
        "assignedProducts": ["prod-2"],
        "createdAt": "2025-01-20T14:45:00Z"
      }
    ];
  }

  static List<Map<String, dynamic>> _getMockSupportTickets() {
    return [
      {
        "id": "ticket-1",
        "userId": "user-123",
        "userName": "John Farmer",
        "subject": "Product recommendation for tomatoes",
        "status": "Open",
        "createdAt": "2025-01-15T10:30:00Z",
        "updatedAt": "2025-01-15T10:30:00Z",
        "messages": [
          {
            "id": "msg-1",
            "author": "user",
            "authorName": "John Farmer",
            "timestamp": "2025-01-15T10:30:00Z",
            "content": "I need help selecting the right fertilizer for my tomato crop. I have a 2-hectare field with sandy loam soil."
          }
        ],
        "isReadByUser": false,
      }
    ];
  }

  static List<Map<String, dynamic>> _getMockFAQs() {
    return [
      {
        "id": "faq-1",
        "question": "What is the best NPK ratio for tomatoes?",
        "answer": "For tomatoes, a balanced NPK ratio like 19-19-19 works well during vegetative growth, while 13-40-13 is excellent during flowering and fruit set.",
        "category": "Product Usage",
        "keywords": ["npk", "tomatoes", "fertilizer"],
      },
      {
        "id": "faq-2", 
        "question": "How often should I apply water-soluble fertilizers?",
        "answer": "Water-soluble fertilizers can be applied every 7-14 days depending on crop needs and growth stage. Always follow the recommended application rates.",
        "category": "Application",
        "keywords": ["application", "frequency", "water-soluble"],
      },
    ];
  }

  static Map<String, dynamic> _getMockUser() {
    return {
      "id": "user-123",
      "fullName": "John Farmer",
      "email": "john@example.com",
      "phone": "+1234567890",
      "location": "Punjab, India",
      "farmSize": "5 hectares",
      "cropType": "Mixed",
      "experience": "Intermediate",
      "profileImageUrl": "https://placehold.co/200x200.png?text=User",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-15T10:30:00Z",
    };
  }

  static Future<Map<String, dynamic>> getMockUser() async {
    await Future.delayed(const Duration(seconds: 1));
    return {
      'success': true,
      'data': _getMockUser()
    };
  }

  static Map<String, dynamic> _generateProductRecommendations(AIAdvisorInput input) {
    // Generate recommendations based on input parameters
    final products = _getMockProducts();
    final recommendedProducts = <Map<String, dynamic>>[];
    
    // Simple recommendation logic based on crop and soil type
    for (final product in products) {
      final productCrops = List<String>.from(product['crops'] ?? []);
      final productSoils = List<String>.from(product['soilTypes'] ?? []);
      
      if (productCrops.contains(input.crop) || productCrops.contains('All crops')) {
        if (productSoils.contains(input.soil) || productSoils.contains('All')) {
          recommendedProducts.add({
            'name': product['name'],
            'productId': product['id'],
            'description': product['description'],
            'applicationMethod': product['application']['method'].join(', '),
            'dosage': '${product['application']['rate']['min']}-${product['application']['rate']['max']} ${product['application']['rate']['unit']}',
            'timing': product['application']['timing'],
            'expectedBenefit': 'Improved growth and yield for ${input.crop}',
            'regionalAdaptation': 'Suitable for ${input.region}',
            'category': product['categories'][0],
          });
        }
      }
    }
    
    return {
      'products': recommendedProducts,
      'explanation': 'Based on your ${input.crop} crop in ${input.soil} soil, we recommend these products for optimal growth during the ${input.growthStage} stage.',
      'regionalInsights': 'These recommendations are tailored for ${input.region} region with ${input.moisture} moisture conditions.'
    };
  }
}
