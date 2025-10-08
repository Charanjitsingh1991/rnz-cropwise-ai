import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

import '../models/product.dart';
import '../services/api_service.dart';
import '../services/mongodb_service.dart';
import '../utils/constants.dart';

class ProductProvider with ChangeNotifier {
  List<Product> _products = [];
  List<Product> _featuredProducts = [];
  List<Product> _filteredProducts = [];
  bool _isLoading = false;
  String? _error;
  bool _hasMore = true;
  int _currentPage = 1;
  final int _pageSize = 20;

  // Filter state
  String? _selectedCategory;
  String? _selectedCrop;
  String? _selectedSoilType;
  String? _selectedRegion;
  String? _searchQuery;

  List<Product> get products => _products;
  List<Product> get featuredProducts => _featuredProducts;
  List<Product> get filteredProducts => _filteredProducts;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get hasMore => _hasMore;

  // Filter getters
  String? get selectedCategory => _selectedCategory;
  String? get selectedCrop => _selectedCrop;
  String? get selectedSoilType => _selectedSoilType;
  String? get selectedRegion => _selectedRegion;
  String? get searchQuery => _searchQuery;



  ProductProvider() {
    _loadCachedData();
  }

  Future<void> _loadCachedData() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final cachedData = prefs.getString(StorageKeys.productsCache);
      
      if (cachedData != null) {
        final List<dynamic> productsData = json.decode(cachedData);
        _products = productsData.map((json) => Product.fromJson(json)).toList();
        _filteredProducts = List.from(_products);
        notifyListeners();
      }
    } catch (e) {
      // Ignore cache errors
    }
  }

  Future<void> _cacheData() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final productsData = _products.map((product) => product.toJson()).toList();
      await prefs.setString(StorageKeys.productsCache, json.encode(productsData));
    } catch (e) {
      // Ignore cache errors
    }
  }

  Future<void> loadProducts({bool refresh = false}) async {
    if (_isLoading) return;

    try {
      _isLoading = true;
      _error = null;
      
      if (refresh) {
        _currentPage = 1;
        _hasMore = true;
        _products.clear();
      }
      
      notifyListeners();

      // Use direct database access through MongoDB service
      final products = await MongoDBService.getProductsDirect();
      print('📦 Loaded ${products.length} products from database');

      // Always replace products to avoid duplication
      _products = products;

        _filteredProducts = List.from(_products);
        _hasMore = products.length == _pageSize;
        _currentPage++;

        await _cacheData();

        _isLoading = false;
        notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> loadFeaturedProducts() async {
    try {
      _isLoading = true;
      notifyListeners();

      final response = await ApiService.getProducts();
      print('📦 Featured products response: $response');
      
      if (response['success'] == true) {
        final List<dynamic> productsData = response['data'];
        print('📦 Featured products data length: ${productsData.length}');
        final products = productsData.map((json) => Product.fromJson(json)).toList();
        print('📦 Featured parsed products length: ${products.length}');

        _featuredProducts = products.where((product) => 
          product.isFeatured == true
        ).take(6).toList();
        print('📦 Featured products count: ${_featuredProducts.length}');
      }

      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<Product?> getProduct(String id) async {
    try {
      // First check if we have it in cache
      final cachedProduct = _products.firstWhere(
        (product) => product.id == id,
        orElse: () => throw Exception('Product not found'),
      );
      return cachedProduct;
    } catch (e) {
      // If not in cache, fetch from MongoDB service
      try {
        final product = await MongoDBService.getProductDirect(id);
        if (product != null) {
          // Add to cache
          _products.add(product);
          await _cacheData();
          return product;
        }
        return null;
      } catch (e) {
        _error = e.toString();
        notifyListeners();
        return null;
      }
    }
  }

  void applyFilters({
    String? category,
    String? crop,
    String? soilType,
    String? region,
    String? search,
  }) {
    _selectedCategory = category;
    _selectedCrop = crop;
    _selectedSoilType = soilType;
    _selectedRegion = region;
    _searchQuery = search;

    _filteredProducts = _products.where((product) {
      bool matches = true;

      if (category != null && category.isNotEmpty && category != 'All Categories') {
        matches = matches && product.categories.contains(category);
      }

      if (crop != null && crop.isNotEmpty && crop != 'All Crops') {
        matches = matches && product.crops.contains(crop);
      }

      if (soilType != null && soilType.isNotEmpty && soilType != 'All') {
        matches = matches && product.soilTypes.contains(soilType);
      }

      if (region != null && region.isNotEmpty && region != 'Worldwide') {
        matches = matches && product.regions.contains(region);
      }

      if (search != null && search.isNotEmpty) {
        final searchLower = search.toLowerCase();
        matches = matches && (
          product.name.toLowerCase().contains(searchLower) ||
          product.description.toLowerCase().contains(searchLower) ||
          product.categories.any((cat) => cat.toLowerCase().contains(searchLower)) ||
          product.crops.any((crop) => crop.toLowerCase().contains(searchLower))
        );
      }

      return matches;
    }).toList();

    notifyListeners();
  }

  void clearFilters() {
    _selectedCategory = null;
    _selectedCrop = null;
    _selectedSoilType = null;
    _selectedRegion = null;
    _searchQuery = null;
    _filteredProducts = List.from(_products);
    notifyListeners();
  }

  void refresh() {
    loadProducts(refresh: true);
  }

  void loadMore() {
    if (!_isLoading && _hasMore) {
      loadProducts();
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }

  List<String> getCategories() {
    final categories = <String>{};
    for (final product in _products) {
      categories.addAll(product.categories);
    }
    return ['All Categories', ...categories.toList()..sort()];
  }

  List<String> getCrops() {
    final crops = <String>{};
    for (final product in _products) {
      crops.addAll(product.crops);
    }
    return ['All Crops', ...crops.toList()..sort()];
  }

  List<String> getSoilTypes() {
    final soilTypes = <String>{};
    for (final product in _products) {
      soilTypes.addAll(product.soilTypes);
    }
    return ['All', ...soilTypes.toList()..sort()];
  }

  List<String> getRegions() {
    final regions = <String>{};
    for (final product in _products) {
      regions.addAll(product.regions);
    }
    return ['Worldwide', ...regions.toList()..sort()];
  }
}
