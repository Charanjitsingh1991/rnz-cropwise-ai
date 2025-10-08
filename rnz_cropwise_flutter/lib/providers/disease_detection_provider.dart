import 'package:flutter/foundation.dart';
import 'dart:io';
import 'dart:convert';
import 'package:http/http.dart' as http;

import '../models/disease_detection_result.dart';
import '../services/expert_request_service.dart';

class DiseaseDetectionProvider with ChangeNotifier {
  DiseaseDetectionResult? _detectionResult;
  bool _isLoading = false;
  String? _error;

  DiseaseDetectionResult? get detectionResult => _detectionResult;
  bool get isLoading => _isLoading;
  String? get error => _error;

  Future<void> detectDisease(String photoDataUri, {String? cropType, String? symptoms}) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      // Call the actual disease detection API
      final response = await http.post(
        Uri.parse('https://rnz-cropwise.vercel.app/api/disease-detection'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'photoDataUri': photoDataUri,
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        _detectionResult = DiseaseDetectionResult.fromJson(data);
        _error = null;
      } else {
        throw Exception('Failed to analyze image: ${response.statusCode}');
      }
    } catch (e) {
      _error = 'Error: $e';
      _detectionResult = null;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void clearResult() {
    _detectionResult = null;
    _error = null;
    notifyListeners();
  }

  void reset() {
    _detectionResult = null;
    _error = null;
    _isLoading = false;
    notifyListeners();
  }
}
