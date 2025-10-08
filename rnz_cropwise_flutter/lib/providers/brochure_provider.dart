import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

import '../models/brochure.dart';
import '../models/brochure_request.dart';
import '../services/api_service.dart';
import '../services/mongodb_service.dart';
import '../utils/constants.dart';

class BrochureProvider with ChangeNotifier {
  List<Brochure> _brochures = [];
  List<Brochure> _featuredBrochures = [];
  List<Brochure> _filteredBrochures = [];
  bool _isLoading = false;
  String? _error;
  bool _hasMore = true;
  int _currentPage = 1;
  final int _pageSize = 20;

  // Filter state
  String? _selectedCategory;
  String? _selectedCrop;
  String? _selectedRegion;
  String? _searchQuery;

  List<Brochure> get brochures => _brochures;
  List<Brochure> get featuredBrochures => _featuredBrochures;
  List<Brochure> get filteredBrochures => _filteredBrochures;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get hasMore => _hasMore;

  // Filter getters
  String? get selectedCategory => _selectedCategory;
  String? get selectedCrop => _selectedCrop;
  String? get selectedRegion => _selectedRegion;
  String? get searchQuery => _searchQuery;



  BrochureProvider() {
    _loadCachedData();
  }

  Future<void> _loadCachedData() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final cachedData = prefs.getString(StorageKeys.brochuresCache);
      
      if (cachedData != null) {
        final List<dynamic> brochuresData = json.decode(cachedData);
        _brochures = brochuresData.map((json) => Brochure.fromJson(json)).toList();
        _filteredBrochures = List.from(_brochures);
        notifyListeners();
      }
    } catch (e) {
      // Ignore cache errors
    }
  }

  Future<void> _cacheData() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final brochuresData = _brochures.map((brochure) => brochure.toJson()).toList();
      await prefs.setString(StorageKeys.brochuresCache, json.encode(brochuresData));
    } catch (e) {
      // Ignore cache errors
    }
  }

  Future<void> loadBrochures({bool refresh = false}) async {
    if (_isLoading) return;

    try {
      _isLoading = true;
      _error = null;
      
      if (refresh) {
        _currentPage = 1;
        _hasMore = true;
        _brochures.clear();
      }
      
      notifyListeners();

      // Use direct database access through MongoDB service
      final brochures = await MongoDBService.getBrochuresDirect();

      if (refresh) {
        _brochures = brochures;
      } else {
        _brochures.addAll(brochures);
      }

        _filteredBrochures = List.from(_brochures);
        _hasMore = brochures.length == _pageSize;
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

  Future<void> loadFeaturedBrochures() async {
    try {
      _isLoading = true;
      notifyListeners();

      final response = await ApiService.getBrochures();
      
      if (response['success'] == true) {
        final List<dynamic> brochuresData = response['data'];
        final brochures = brochuresData.map((json) => Brochure.fromJson(json)).toList();

        _featuredBrochures = brochures.where((brochure) => 
          brochure.isFeatured == true
        ).take(6).toList();
      }

      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<Brochure?> getBrochure(String id) async {
    try {
      // First check if we have it in cache
      final cachedBrochure = _brochures.firstWhere(
        (brochure) => brochure.id == id,
        orElse: () => throw Exception('Brochure not found'),
      );
      return cachedBrochure;
    } catch (e) {
      // If not in cache, fetch from API
      try {
        final brochureData = await ApiService.getProduct(id);
        if (brochureData != null) {
          final brochure = Brochure.fromJson(brochureData);
          // Add to cache
          _brochures.add(brochure);
          await _cacheData();
          return brochure;
        }
        return null;
      } catch (e) {
        _error = e.toString();
        notifyListeners();
        return null;
      }
    }
  }

  Future<List<Brochure>?> getBrochuresForProduct(String productId) async {
    try {
      final brochures = await MongoDBService.getBrochuresDirect(productId: productId);
      
      print('🔍 BrochureProvider loaded ${brochures.length} brochures for product $productId');
      
      return brochures;
    } catch (e) {
      print('❌ Error in getBrochuresForProduct: $e');
      _error = e.toString();
      notifyListeners();
      return [];
    }
  }

  Future<bool> requestBrochure(BrochureRequest request) async {
    try {
      _isLoading = true;
      notifyListeners();

      final response = await ApiService.requestBrochure(request.toJson());

      _isLoading = false;
      notifyListeners();
      return response['success'] == true;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  Future<bool> requestBrochureDirect(Map<String, dynamic> requestData) async {
    try {
      _isLoading = true;
      notifyListeners();

      // Use direct database access through MongoDB service
      final response = await MongoDBService.requestBrochureDirect(requestData);

      _isLoading = false;
      notifyListeners();
      return response['success'] == true;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  void applyFilters({
    String? category,
    String? crop,
    String? region,
    String? search,
  }) {
    _selectedCategory = category;
    _selectedCrop = crop;
    _selectedRegion = region;
    _searchQuery = search;

    _filteredBrochures = _brochures.where((brochure) {
      bool matches = true;

      if (category != null && category.isNotEmpty) {
        matches = matches && brochure.category == category;
      }

      if (crop != null && crop.isNotEmpty) {
        matches = matches && brochure.crops.contains(crop);
      }

      if (region != null && region.isNotEmpty) {
        matches = matches && brochure.regions.contains(region);
      }

      if (search != null && search.isNotEmpty) {
        final searchLower = search.toLowerCase();
        matches = matches && (
          brochure.title.toLowerCase().contains(searchLower) ||
          (brochure.description?.toLowerCase().contains(searchLower) ?? false) ||
          brochure.category.toLowerCase().contains(searchLower) ||
          brochure.tags.any((tag) => tag.toLowerCase().contains(searchLower))
        );
      }

      return matches;
    }).toList();

    notifyListeners();
  }

  void clearFilters() {
    _selectedCategory = null;
    _selectedCrop = null;
    _selectedRegion = null;
    _searchQuery = null;
    _filteredBrochures = List.from(_brochures);
    notifyListeners();
  }

  void refresh() {
    loadBrochures(refresh: true);
  }

  void loadMore() {
    if (!_isLoading && _hasMore) {
      loadBrochures();
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }

  List<String> getCategories() {
    final categories = <String>{};
    for (final brochure in _brochures) {
      categories.add(brochure.category);
    }
    return categories.toList()..sort();
  }

  List<String> getCrops() {
    final crops = <String>{};
    for (final brochure in _brochures) {
      crops.addAll(brochure.crops);
    }
    return crops.toList()..sort();
  }

  List<String> getRegions() {
    final regions = <String>{};
    for (final brochure in _brochures) {
      regions.addAll(brochure.regions);
    }
    return regions.toList()..sort();
  }
}
