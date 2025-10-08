import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../models/product_model.dart';
import '../../services/favorites_service.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/favorite_button.dart';
import 'product_detail_screen.dart';

class FavoritesScreen extends StatefulWidget {
  const FavoritesScreen({super.key});

  @override
  State<FavoritesScreen> createState() => _FavoritesScreenState();
}

class _FavoritesScreenState extends State<FavoritesScreen> {
  bool _isLoadingProducts = true;
  String? _productsError;
  List<Product> _allProducts = [];

  @override
  void initState() {
    super.initState();
    _loadProducts();
  }

  Future<void> _loadProducts() async {
    try {
      setState(() {
        _isLoadingProducts = true;
        _productsError = null;
      });

      // Load all products (in a real app, this would be from API)
      // For now, we'll use mock data
      _allProducts = [
        Product(
          id: 'npk-15-15-15',
          name: 'NPK 15-15-15',
          description: 'Balanced NPK fertilizer for general use',
          longDescription: 'A balanced NPK fertilizer containing 15% Nitrogen, 15% Phosphorus, and 15% Potassium. Suitable for most crops and soil types.',
          imageUrl: 'https://example.com/npk-15-15-15.jpg',
          images: ['https://example.com/npk-15-15-15.jpg'],
          crops: ['Wheat', 'Rice', 'Corn'],
          soilTypes: ['Loam', 'Clay', 'Sandy'],
          regions: ['Punjab', 'Haryana'],
          moistureLevels: ['Medium', 'High'],
          categories: ['NPK', 'Granular'],
          category: 'Granular NPK',
          suitableCrops: 'Wheat; Rice; Corn',
          suitableSoils: 'Loam; Clay; Sandy',
          form: 'Granular',
          growthStage: 'Vegetative',
          brochures: [],
          certifications: ['ISO 9001'],
          isActive: true,
          isFeatured: true,
          tags: ['balanced', 'general-purpose'],
          specifications: {
            'Nitrogen': '15%',
            'Phosphorus': '15%',
            'Potassium': '15%',
          },
          application: {
            'rate': '200-300 kg/ha',
            'method': 'Broadcast',
            'timing': 'Pre-planting',
          },
          availability: {
            'status': 'In Stock',
            'quantity': '1000 kg',
          },
          safety: {
            'handling': 'Handle with care, avoid contact with eyes',
            'storage': 'Store in cool, dry place',
          },
          pricing: {
            'unit': 'kg',
            'price': 25.0,
            'currency': 'INR',
          },
          createdAt: DateTime.now(),
          updatedAt: DateTime.now(),
        ),
        // Add more mock products as needed
      ];

      setState(() {
        _isLoadingProducts = false;
      });
    } catch (error) {
      // Log error for debugging purposes
      debugPrint('Error loading products: $error');
      setState(() {
        _isLoadingProducts = false;
        _productsError = error.toString();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Favorites'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () {
              _loadProducts();
            },
          ),
        ],
      ),
      body: Consumer<FavoritesService>(
        builder: (context, favoritesService, child) {
          if (_isLoadingProducts || favoritesService.isLoading) {
            return const Center(
              child: CircularProgressIndicator(
                valueColor: AlwaysStoppedAnimation<Color>(Colors.green),
              ),
            );
          }

          if (_productsError != null) {
            return _buildErrorState();
          }

          // Filter products to show only favorites
          final favoriteProducts = _allProducts.where((product) => 
            favoritesService.isFavorite(product.id)
          ).toList();

          if (favoriteProducts.isEmpty) {
            return _buildEmptyState();
          }

          return _buildFavoritesList(favoriteProducts, favoritesService);
        },
      ),
    );
  }

  Widget _buildErrorState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.error_outline,
            size: 64,
            color: Colors.red[300],
          ),
          const SizedBox(height: 16),
          Text(
            'Failed to load products',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.red[700],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            _productsError ?? 'An error occurred',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[600],
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 24),
          CustomButton(
            text: 'Retry',
            onPressed: _loadProducts,
            backgroundColor: Colors.green[600],
            textColor: Colors.white,
          ),
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.favorite_border,
            size: 64,
            color: Colors.grey[400],
          ),
          const SizedBox(height: 16),
          Text(
            'No favorites yet',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.grey[600],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'Tap the heart icon on any product to add it to your favorites',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[500],
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 24),
          CustomButton(
            text: 'Browse Products',
            onPressed: () {
              Navigator.pop(context);
            },
            backgroundColor: Colors.green[600],
            textColor: Colors.white,
          ),
        ],
      ),
    );
  }

  Widget _buildFavoritesList(List<Product> favoriteProducts, FavoritesService favoritesService) {
    return RefreshIndicator(
      onRefresh: _loadProducts,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: favoriteProducts.length,
        itemBuilder: (context, index) {
          final product = favoriteProducts[index];
          return _buildProductCard(product, favoritesService);
        },
      ),
    );
  }

  Widget _buildProductCard(Product product, FavoritesService favoritesService) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      elevation: 2,
      child: InkWell(
        onTap: () async {
          await Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ProductDetailScreen(productId: product.id),
            ),
          );
          // Refresh the list when returning from product detail
          if (context.mounted) {
            setState(() {});
          }
        },
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  // Product Image
                  ClipRRect(
                    borderRadius: BorderRadius.circular(8),
                    child: Image.network(
                      product.imageUrl,
                      width: 80,
                      height: 80,
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stackTrace) {
                        return Container(
                          width: 80,
                          height: 80,
                          color: Colors.grey[300],
                          child: Icon(
                            Icons.image_not_supported,
                            color: Colors.grey[600],
                          ),
                        );
                      },
                    ),
                  ),
                  const SizedBox(width: 16),
                  // Product Info
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          product.name,
                          style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          product.description,
                          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                            color: Colors.grey[600],
                          ),
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            Icon(
                              Icons.category,
                              size: 16,
                              color: Colors.grey[600],
                            ),
                            const SizedBox(width: 4),
                            Text(
                              product.category,
                              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                                color: Colors.grey[600],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  // Favorite Button
                  FavoriteButton(
                    productId: product.id,
                    isFavorite: favoritesService.isFavorite(product.id),
                    onToggle: () async {
                      await favoritesService.toggleFavorite(product.id);
                      if (context.mounted) {
                        setState(() {});
                      }
                    },
                  ),
                ],
              ),
              const SizedBox(height: 16),
              // Product Details
              Row(
                children: [
                  // Suitable Crops
                  if (product.suitableCrops.isNotEmpty) ...[
                    Expanded(
                      child: _buildDetailChip(
                        Icons.agriculture,
                        product.suitableCrops.split(';').first.trim(),
                      ),
                    ),
                    const SizedBox(width: 8),
                  ],
                  
                  // Form
                  if (product.form.isNotEmpty)
                    _buildDetailChip(
                      Icons.science,
                      product.form,
                    ),
                ],
              ),
              const SizedBox(height: 12),

              // Action Buttons
              Row(
                children: [
                  Expanded(
                    child: CustomButton(
                      text: 'View Details',
                      onPressed: () async {
                        await Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => ProductDetailScreen(productId: product.id),
                          ),
                        );
                        if (context.mounted) {
                          setState(() {});
                        }
                      },
                      backgroundColor: Colors.green[600],
                      textColor: Colors.white,
                    ),
                  ),
                  const SizedBox(width: 8),
                  if (product.hasBrochures)
                    CustomButton(
                      text: 'View Brochure',
                      onPressed: () {
                        // TODO: Open brochure viewer
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text('Opening brochure...'),
                            backgroundColor: Colors.green,
                          ),
                        );
                      },
                      isOutlined: true,
                      textColor: Colors.green[600],
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildDetailChip(IconData icon, String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: Colors.grey[100],
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            icon,
            size: 16,
            color: Colors.grey[600],
          ),
          const SizedBox(width: 4),
          Flexible(
            child: Text(
              label,
              style: const TextStyle(
                color: Colors.grey,
                fontSize: 12,
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ],
      ),
    );
  }
}
