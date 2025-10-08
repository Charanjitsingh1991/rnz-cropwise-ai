import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../models/product.dart';
import '../../providers/product_provider.dart';
import '../../providers/favorites_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/product_card.dart';
import 'product_detail_screen.dart';

class ProductsScreen extends StatefulWidget {
  const ProductsScreen({super.key});

  @override
  State<ProductsScreen> createState() => _ProductsScreenState();
}

class _ProductsScreenState extends State<ProductsScreen> {
  final _searchController = TextEditingController();
  String _selectedCategory = 'All Categories';
  String _selectedCrop = 'All Crops';
  String _selectedSoil = 'All';
  String _selectedRegion = 'All';
  bool _showFilters = false;

  // Dynamic filter options from database
  List<String> get _categories {
    final products = context.watch<ProductProvider>().products;
    final categories = <String>{'All Categories'};
    
    for (final product in products) {
      // Use both categories list and single category field
      if (product.categories.isNotEmpty) {
        categories.addAll(product.categories);
      } else if (product.category != null && product.category!.isNotEmpty) {
        categories.add(product.category!);
      }
    }
    
    final sortedCategories = categories.toList()..sort();
    return sortedCategories;
  }

  List<String> get _crops {
    final products = context.watch<ProductProvider>().products;
    final crops = <String>{'All Crops'};
    
    for (final product in products) {
      // Use both crops list and suitableCrops field
      if (product.crops.isNotEmpty) {
        crops.addAll(product.crops);
      } else if (product.suitableCrops != null && product.suitableCrops!.isNotEmpty) {
        // Split suitableCrops by semicolon and comma
        final cropList = product.suitableCrops!
            .split(RegExp(r'[;,]+'))
            .map((crop) => crop.trim())
            .where((crop) => crop.isNotEmpty);
        crops.addAll(cropList);
      }
    }
    
    return crops.toList()..sort();
  }

  List<String> get _soils {
    final products = context.watch<ProductProvider>().products;
    final soils = <String>{'All'};
    
    for (final product in products) {
      // Use both soilTypes list and suitableSoils field
      if (product.soilTypes.isNotEmpty) {
        soils.addAll(product.soilTypes);
      } else if (product.suitableSoils != null && product.suitableSoils!.isNotEmpty) {
        // Split suitableSoils by comma
        final soilList = product.suitableSoils!
            .split(',')
            .map((soil) => soil.trim())
            .where((soil) => soil.isNotEmpty);
        soils.addAll(soilList);
      }
    }
    
    return soils.toList()..sort();
  }

  List<String> get _regions {
    final products = context.watch<ProductProvider>().products;
    final regions = <String>{'All'};
    
    for (final product in products) {
      regions.addAll(product.regions);
    }
    
    return regions.toList()..sort();
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<ProductProvider>().loadProducts();
    });
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  // Filtered products based on search and filters
  List<Product> get filteredProducts {
    final products = context.watch<ProductProvider>().products;
    
    return products.where((product) {
      // Search filter
      final searchQuery = _searchController.text.toLowerCase();
      if (searchQuery.isNotEmpty) {
        final matchesSearch = product.name.toLowerCase().contains(searchQuery) ||
            (product.description?.toLowerCase().contains(searchQuery) ?? false) ||
            (product.category?.toLowerCase().contains(searchQuery) ?? false);
        if (!matchesSearch) return false;
      }
      
      // Category filter
      if (_selectedCategory != 'All Categories') {
        if (!product.categories.contains(_selectedCategory) && 
            product.category != _selectedCategory) {
          return false;
        }
      }
      
      // Crop filter
      if (_selectedCrop != 'All Crops') {
        if (!product.crops.contains(_selectedCrop) && 
            (product.suitableCrops == null || 
             !product.suitableCrops!.toLowerCase().contains(_selectedCrop.toLowerCase()))) {
          return false;
        }
      }
      
      // Soil filter
      if (_selectedSoil != 'All') {
        if (!product.soilTypes.contains(_selectedSoil) && 
            (product.suitableSoils == null || 
             !product.suitableSoils!.toLowerCase().contains(_selectedSoil.toLowerCase()))) {
          return false;
        }
      }
      
      // Region filter
      if (_selectedRegion != 'All') {
        if (!product.regions.contains(_selectedRegion)) {
          return false;
        }
      }
      
      return true;
    }).toList();
  }

  void _clearFilters() {
    setState(() {
      _selectedCategory = 'All Categories';
      _selectedCrop = 'All Crops';
      _selectedSoil = 'All';
      _selectedRegion = 'All';
    });
  }

  void _showFilterDialog() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) => _buildFilterDialog(),
    );
  }

  Widget _buildFilterDialog() {
    return Container(
      padding: const EdgeInsets.all(AppSizes.paddingLarge),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Filters',
                style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              Row(
                children: [
                  TextButton(
                    onPressed: _clearFilters,
                    child: const Text('Clear All'),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: const Icon(Icons.close),
                  ),
                ],
              ),
            ],
          ),
          const SizedBox(height: 20),
          
          // Category Filter
          Text(
            'Category',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _selectedCategory,
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            ),
            isExpanded: true,
            items: _categories.map((category) {
              return DropdownMenuItem<String>(
                value: category,
                child: Text(
                  category,
                  overflow: TextOverflow.ellipsis,
                  maxLines: 1,
                ),
              );
            }).toList(),
            onChanged: (value) {
              setState(() {
                _selectedCategory = value!;
              });
            },
          ),
          const SizedBox(height: 16),
          
          // Crop Filter
          Text(
            'Crop',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _selectedCrop,
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            ),
            isExpanded: true,
            items: _crops.map((crop) {
              return DropdownMenuItem<String>(
                value: crop,
                child: Text(
                  crop,
                  overflow: TextOverflow.ellipsis,
                  maxLines: 1,
                ),
              );
            }).toList(),
            onChanged: (value) {
              setState(() {
                _selectedCrop = value!;
              });
            },
          ),
          const SizedBox(height: 16),
          
          // Soil Filter
          Text(
            'Soil',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _selectedSoil,
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            ),
            isExpanded: true,
            items: _soils.map((soil) {
              return DropdownMenuItem<String>(
                value: soil,
                child: Text(
                  soil,
                  overflow: TextOverflow.ellipsis,
                  maxLines: 1,
                ),
              );
            }).toList(),
            onChanged: (value) {
              setState(() {
                _selectedSoil = value!;
              });
            },
          ),
          const SizedBox(height: 16),
          
          // Region Filter
          Text(
            'Region',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _selectedRegion,
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            ),
            isExpanded: true,
            items: _regions.map((region) {
              return DropdownMenuItem<String>(
                value: region,
                child: Text(
                  region,
                  overflow: TextOverflow.ellipsis,
                  maxLines: 1,
                ),
              );
            }).toList(),
            onChanged: (value) {
              setState(() {
                _selectedRegion = value!;
              });
            },
          ),
          const SizedBox(height: 24),
          
          // Apply Button
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
                setState(() {});
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primary,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 16),
              ),
              child: const Text('Apply Filters'),
            ),
          ),
          const SizedBox(height: 16),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Products'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.filter_list),
            onPressed: _showFilterDialog,
            tooltip: 'Filters',
          ),
        ],
      ),
      body: Column(
        children: [
          // Search Bar Only
          Container(
            padding: const EdgeInsets.all(AppSizes.paddingMedium),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.1),
                  blurRadius: 4,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                hintText: 'Search products...',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
                ),
                contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              ),
              onChanged: (value) => setState(() {}),
            ),
          ),

          // Products Grid
          Expanded(
            child: Consumer<ProductProvider>(
              builder: (context, productProvider, child) {
                if (productProvider.isLoading) {
                  return const Center(child: CircularProgressIndicator());
                }

                if (productProvider.error != null) {
                  return Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.error_outline,
                          size: 64,
                          color: Colors.grey.shade400,
                        ),
                        const SizedBox(height: 16),
                        Text(
                          'Error loading products',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 8),
                        Text(
                          productProvider.error!,
                          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                            color: Colors.grey.shade600,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 16),
                        ElevatedButton(
                          onPressed: () => productProvider.loadProducts(),
                          child: const Text('Retry'),
                        ),
                      ],
                    ),
                  );
                }

                final products = filteredProducts;

                if (products.isEmpty) {
                  return Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.search_off,
                          size: 64,
                          color: Colors.grey.shade400,
                        ),
                        const SizedBox(height: 16),
                        Text(
                          'No products found',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Try adjusting your search or filters',
                          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                            color: Colors.grey.shade600,
                          ),
                        ),
                      ],
                    ),
                  );
                }

                return GridView.builder(
                  padding: const EdgeInsets.all(AppSizes.paddingMedium),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    childAspectRatio: 0.85, // Reduced to give more height and prevent overflow
                    crossAxisSpacing: AppSizes.paddingMedium,
                    mainAxisSpacing: AppSizes.paddingMedium,
                  ),
                  itemCount: products.length,
                  itemBuilder: (context, index) {
                    final product = products[index];
                    return ProductCard(
                      product: product,
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => ProductDetailScreen(productId: product.id),
                          ),
                        );
                      },
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
