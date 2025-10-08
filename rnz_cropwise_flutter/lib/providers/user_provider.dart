import 'package:flutter/foundation.dart';
import 'dart:io';
import '../models/user.dart';
import '../services/api_service.dart';
import '../services/mongodb_service.dart';

class UserProvider with ChangeNotifier {
  User? _user;
  bool _isLoading = false;
  String? _error;

  User? get currentUser => _user;
  bool get isLoading => _isLoading;
  String? get error => _error;

  Future<void> loadUserProfile() async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      // Load actual user data from MongoDB service
      final userData = await MongoDBService.getCurrentUser();
      if (userData != null) {
        _user = User.fromJson(userData);
        print('🔍 User profile loaded: ${_user?.fullName} (${_user?.email})');
      } else {
        print('❌ No user data found');
        _error = 'User not authenticated';
      }

      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> updateUserProfile(User user) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final success = await MongoDBService.updateUserProfile(user);
      if (success) {
        _user = user;
      } else {
        _error = 'Failed to update profile';
      }

      _isLoading = false;
      notifyListeners();
      return success;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  Future<bool> updateProfileImage(File imageFile) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      // Mock image upload for now
      if (_user != null) {
        _user = _user!.copyWith(
          profileImageUrl: 'https://example.com/profile.jpg',
        );
      }
      
      _isLoading = false;
      notifyListeners();
      return true;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  void setUser(User user) {
    _user = user;
    notifyListeners();
  }

  void clearUser() {
    _user = null;
    notifyListeners();
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }
}
