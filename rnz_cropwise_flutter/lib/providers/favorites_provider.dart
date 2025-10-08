import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

import '../models/product.dart';
import '../models/brochure.dart';

class FavoritesProvider with ChangeNotifier {
  List<Product> _favoriteProducts = [];
  List<Brochure> _favoriteBrochures = [];
  List<Map<String, dynamic>> _aiHistory = [];
  bool _isLoading = false;

  List<Product> get favoriteProducts => _favoriteProducts;
  List<Brochure> get favoriteBrochures => _favoriteBrochures;
  List<Map<String, dynamic>> get aiHistory => _aiHistory;
  bool get isLoading => _isLoading;

  FavoritesProvider() {
    _loadFavorites();
  }

  Future<void> _loadFavorites() async {
    try {
      _isLoading = true;
      notifyListeners();

      final prefs = await SharedPreferences.getInstance();
      
      // Load favorite products
      final productsData = prefs.getString('favorite_products');
      if (productsData != null) {
        final List<dynamic> products = json.decode(productsData);
        _favoriteProducts = products.map((json) => Product.fromJson(json)).toList();
      }

      // Load favorite brochures
      final brochuresData = prefs.getString('favorite_brochures');
      if (brochuresData != null) {
        final List<dynamic> brochures = json.decode(brochuresData);
        _favoriteBrochures = brochures.map((json) => Brochure.fromJson(json)).toList();
      }

      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> _saveFavorites() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      
      // Save favorite products
      final productsData = _favoriteProducts.map((product) => product.toJson()).toList();
      await prefs.setString('favorite_products', json.encode(productsData));
      
      // Save favorite brochures
      final brochuresData = _favoriteBrochures.map((brochure) => brochure.toJson()).toList();
      await prefs.setString('favorite_brochures', json.encode(brochuresData));
    } catch (e) {
      // Ignore save errors
    }
  }

  bool isProductFavorite(String productId) {
    return _favoriteProducts.any((product) => product.id == productId);
  }

  bool isBrochureFavorite(String brochureId) {
    return _favoriteBrochures.any((brochure) => brochure.id == brochureId);
  }

  void toggleProductFavorite(String productId) {
    // Mock implementation for now
    // In real app, you would find the product and toggle it
    notifyListeners();
  }

  void toggleBrochureFavorite(Brochure brochure) {
    final index = _favoriteBrochures.indexWhere((b) => b.id == brochure.id);
    
    if (index != -1) {
      _favoriteBrochures.removeAt(index);
    } else {
      _favoriteBrochures.add(brochure);
    }
    
    _saveFavorites();
    notifyListeners();
  }

  void removeProductFavorite(String productId) {
    _favoriteProducts.removeWhere((product) => product.id == productId);
    _saveFavorites();
    notifyListeners();
  }

  void removeBrochureFavorite(String brochureId) {
    _favoriteBrochures.removeWhere((brochure) => brochure.id == brochureId);
    _saveFavorites();
    notifyListeners();
  }

  void removeFromAIHistory(String historyId) {
    _aiHistory.removeWhere((history) => history['id'] == historyId);
    notifyListeners();
  }

  Future<void> loadFavorites() async {
    await _loadFavorites();
  }

  void clearAllFavorites() {
    _favoriteProducts.clear();
    _favoriteBrochures.clear();
    _saveFavorites();
    notifyListeners();
  }

  int get totalFavorites {
    return _favoriteProducts.length + _favoriteBrochures.length;
  }
}
