import 'package:flutter/foundation.dart';
import '../services/api_service.dart';
import '../models/ai_advisor_input.dart';
import '../models/ai_advisor_output.dart';

class AIAdvisorProvider with ChangeNotifier {
  AIAdvisorOutput? _recommendations;
  String? _error;
  bool _isLoading = false;

  AIAdvisorOutput? get recommendations => _recommendations;
  String? get error => _error;
  bool get isLoading => _isLoading;

  Future<void> getRecommendations({
    required String crop,
    required String soil,
    required String region,
    required String moisture,
    required String growthStage,
    String? country,
    String? state,
    String? district,
  }) async {
    _isLoading = true;
    _error = null;
    _recommendations = null;
    notifyListeners();

    try {
      final input = AIAdvisorInput(
        crop: crop,
        soil: soil,
        region: region,
        moisture: moisture,
        growthStage: growthStage,
        country: country,
        state: state,
        district: district,
      );

      // Call the real AI advisor API endpoint (same as web app)
      final response = await ApiService.getAIRecommendations(input);

      if (response['success'] == true) {
        _recommendations = AIAdvisorOutput.fromJson(response);
        _error = null;
      } else {
        _error = response['error'] ?? 'Failed to get recommendations';
        _recommendations = null;
      }
    } catch (e) {
      _error = 'An error occurred: ${e.toString()}';
      _recommendations = null;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void clearResults() {
    _recommendations = null;
    _error = null;
    notifyListeners();
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }
}
