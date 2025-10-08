import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/product_model.dart';

class FavoritesService extends ChangeNotifier {
  static final FavoritesService _instance = FavoritesService._internal();
  factory FavoritesService() => _instance;
  FavoritesService._internal();

  static const String _favoritesKey = 'favorites';
  List<String> _favoriteProductIds = [];
  bool _isLoading = false;

  List<String> get favoriteProductIds => List.unmodifiable(_favoriteProductIds);
  bool get isLoading => _isLoading;

  Future<void> initialize() async {
    _setLoading(true);
    try {
      final prefs = await SharedPreferences.getInstance();
      final favoritesJson = prefs.getString(_favoritesKey);
      if (favoritesJson != null) {
        final List<dynamic> favorites = json.decode(favoritesJson);
        _favoriteProductIds = favorites.cast<String>();
      }
    } catch (e) {
      debugPrint('Error loading favorites: $e');
    } finally {
      _setLoading(false);
    }
  }

  Future<void> addToFavorites(String productId) async {
    if (!_favoriteProductIds.contains(productId)) {
      _favoriteProductIds.add(productId);
      await _saveFavorites();
      notifyListeners();
    }
  }

  Future<void> removeFromFavorites(String productId) async {
    if (_favoriteProductIds.contains(productId)) {
      _favoriteProductIds.remove(productId);
      await _saveFavorites();
      notifyListeners();
    }
  }

  bool isFavorite(String productId) {
    return _favoriteProductIds.contains(productId);
  }

  Future<void> toggleFavorite(String productId) async {
    if (isFavorite(productId)) {
      await removeFromFavorites(productId);
    } else {
      await addToFavorites(productId);
    }
  }

  Future<void> clearFavorites() async {
    _favoriteProductIds.clear();
    await _saveFavorites();
    notifyListeners();
  }

  Future<void> _saveFavorites() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final favoritesJson = json.encode(_favoriteProductIds);
      await prefs.setString(_favoritesKey, favoritesJson);
    } catch (e) {
      debugPrint('Error saving favorites: $e');
    }
  }

  void _setLoading(bool loading) {
    _isLoading = loading;
    notifyListeners();
  }

  // Mock method for getting favorite products (in real app, this would fetch from API)
  Future<List<Product>> getFavoriteProducts() async {
    // This is a mock implementation
    // In a real app, you would fetch the actual product data from your API
    return [];
  }
}
