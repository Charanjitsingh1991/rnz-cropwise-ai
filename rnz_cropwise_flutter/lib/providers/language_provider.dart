import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../utils/constants.dart';

class LanguageProvider with ChangeNotifier {
  Locale _currentLocale = const Locale('en');
  bool _isLoading = false;

  Locale get currentLocale => _currentLocale;
  bool get isLoading => _isLoading;
  String get currentLanguageCode => _currentLocale.languageCode;

  // Available languages for pilot countries
  static const Map<String, String> availableLanguages = {
    'en': 'English',
    'hi': 'हिंदी (Hindi)',
    'ta': 'தமிழ் (Tamil)',
    'te': 'తెలుగు (Telugu)',
    'kn': 'ಕನ್ನಡ (Kannada)',
    'ml': 'മലയാളം (Malayalam)',
    'bn': 'বাংলা (Bengali)',
    'gu': 'ગુજરાતી (Gujarati)',
    'mr': 'मराठी (Marathi)',
    'pa': 'ਪੰਜਾਬੀ (Punjabi)',
    'or': 'ଓଡ଼ିଆ (Odia)',
    'as': 'অসমীয়া (Assamese)',
  };

  LanguageProvider() {
    _loadLanguage();
  }

  Future<void> _loadLanguage() async {
    try {
      _isLoading = true;
      notifyListeners();

      final prefs = await SharedPreferences.getInstance();
      final languageCode = prefs.getString(StorageKeys.languageCode);
      
      if (languageCode != null && availableLanguages.containsKey(languageCode)) {
        _currentLocale = Locale(languageCode);
      } else {
        // Default to English
        _currentLocale = const Locale('en');
      }
    } catch (e) {
      // Fallback to English on error
      _currentLocale = const Locale('en');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> setLanguage(String languageCode) async {
    if (!availableLanguages.containsKey(languageCode)) {
      throw ArgumentError('Unsupported language: $languageCode');
    }

    if (_currentLocale.languageCode == languageCode) return;

    try {
      _currentLocale = Locale(languageCode);
      notifyListeners();

      // Save to preferences
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(StorageKeys.languageCode, languageCode);
    } catch (e) {
      // Revert on error
      _currentLocale = const Locale('en');
      notifyListeners();
    }
  }

  String getLanguageName(String languageCode) {
    return availableLanguages[languageCode] ?? languageCode;
  }

  List<String> get availableLanguageCodes => availableLanguages.keys.toList();
}





