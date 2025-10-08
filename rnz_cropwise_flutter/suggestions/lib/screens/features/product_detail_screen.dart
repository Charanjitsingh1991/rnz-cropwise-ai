import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/quote_request_form.dart';
import '../../widgets/favorite_button.dart';
import '../../services/api_service.dart';
import '../../services/favorites_service.dart';
import '../../models/product_model.dart';
import '../../providers/auth_provider.dart';
import 'brochure_viewer_screen.dart';

class ProductDetailScreen extends StatefulWidget {
  final String productId;
  
  const ProductDetailScreen({
    super.key,
    required this.productId,
  });

  @override
  State<ProductDetailScreen> createState() => _ProductDetailScreenState();
}

class _ProductDetailScreenState extends State<ProductDetailScreen> {
  bool _isLoading = true;
  Product? _product;
  String? _error;
  List<Map<String, dynamic>> _brochures = [];
  bool _isRequestingBrochure = false;

  @override
  void initState() {
    super.initState();
    _loadProductDetails();
  }

  Future<void> _loadProductDetails() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      // Fetch product details from the API
      final response = await ApiService().get('/products/${widget.productId}');
      
      setState(() {
        _product = Product.fromJson(response);
        _isLoading = false;
      });

      // Load brochures for this product
      await _loadBrochures();
    } catch (error) {
      setState(() {
        _error = 'Failed to load product details: ${error.toString()}';
        _isLoading = false;
      });
    }
  }

  Future<void> _loadBrochures() async {
    try {
      debugPrint('Loading brochures for product: ${widget.productId}');
      final response = await ApiService().get('/brochures?productId=${widget.productId}');
      debugPrint('Brochure API response: $response');
      
      if (response['success'] == true) {
        setState(() {
          _brochures = List<Map<String, dynamic>>.from(response['data'] ?? []);
        });
        debugPrint('Loaded ${_brochures.length} brochures');
      } else {
        debugPrint('Brochure API returned error: ${response['error']}');
        // Don't show error to user for brochures - it's not critical
      }
    } catch (error) {
      debugPrint('Error loading brochures: $error');
      // Don't show error to user for brochures - it's not critical
      // Just set empty list
      setState(() {
        _brochures = [];
      });
    }
  }

  Future<void> _requestBrochure() async {
    if (_product == null) return;

    final scaffoldMessenger = ScaffoldMessenger.of(context);

    setState(() {
      _isRequestingBrochure = true;
    });

    try {
      debugPrint('Submitting brochure request for product: ${widget.productId}');
      
      // Check if user is authenticated
      final authProvider = Provider.of<AuthProvider>(context, listen: false);
      if (authProvider.user == null) {
        throw Exception('Please log in to request a brochure');
      }
      
      // Submit brochure request to API using the proper method
      final response = await ApiService().createBrochureRequest(widget.productId);

      debugPrint('Brochure request response: $response');

      if (response['success'] == true) {
        // Send notification to admin
        // TODO: Implement notification service for brochure requests
        debugPrint('Brochure request submitted successfully');

        scaffoldMessenger.showSnackBar(
          const SnackBar(
            content: Text('Brochure request submitted successfully! Admin will be notified.'),
            backgroundColor: Colors.green,
          ),
        );
      } else {
        throw Exception(response['error'] ?? 'Failed to submit request');
      }
    } catch (error) {
      debugPrint('Error requesting brochure: $error');
      
      String errorMessage = 'Failed to submit brochure request';
      if (error.toString().contains('Unauthorized') || error.toString().contains('Please log in')) {
        errorMessage = 'Please log in to request a brochure';
      } else if (error.toString().contains('already requested')) {
        errorMessage = 'You have already requested a brochure for this product';
      } else if (error.toString().contains('Network error')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.toString().contains('Product not found')) {
        errorMessage = 'Product not found. Please try again.';
      }
      
      scaffoldMessenger.showSnackBar(
        SnackBar(
          content: Text(errorMessage),
          backgroundColor: Colors.red,
        ),
      );
    } finally {
      setState(() {
        _isRequestingBrochure = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_product?.name ?? 'Product Details'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
              ? _buildErrorWidget()
              : _buildProductDetails(),
    );
  }

  Widget _buildErrorWidget() {
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
            'Error Loading Product',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.red[700],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            _error!,
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[600],
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 24),
          CustomButton(
            text: 'Retry',
            onPressed: _loadProductDetails,
            backgroundColor: Colors.green[600],
            textColor: Colors.white,
          ),
        ],
      ),
    );
  }

  Widget _buildProductDetails() {
    if (_product == null) {
      return const Center(
        child: Text('Product not found'),
      );
    }

    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Product Header
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Product Image
                  if (_product!.primaryImage.isNotEmpty)
                    ClipRRect(
                      borderRadius: BorderRadius.circular(12),
                      child: Image.network(
                        _product!.primaryImage,
                        width: double.infinity,
                        height: 200,
                        fit: BoxFit.cover,
                        errorBuilder: (context, error, stackTrace) {
                          return Container(
                            height: 200,
                            color: Colors.grey[200],
                            child: Icon(
                              Icons.image_not_supported,
                              size: 48,
                              color: Colors.grey[400],
                            ),
                          );
                        },
                      ),
                    ),
                  const SizedBox(height: 16),
                  
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          _product!.name,
                          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: Colors.green[700],
                          ),
                        ),
                      ),
                      Consumer<FavoritesService>(
                        builder: (context, favoritesService, child) {
                          return FavoriteButton(
                            productId: _product!.id,
                            isFavorite: favoritesService.isFavorite(_product!.id),
                            onToggle: () async {
                              await favoritesService.toggleFavorite(_product!.id);
                            },
                          );
                        },
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  if (_product!.category.isNotEmpty) ...[
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 8,
                        vertical: 4,
                      ),
                      decoration: BoxDecoration(
                        color: Colors.green[100],
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        _product!.category,
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: Colors.green[700],
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                    const SizedBox(height: 12),
                  ],
                  Text(
                    _product!.description,
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: Colors.grey[600],
                    ),
                  ),
                  if (_product!.longDescription.isNotEmpty) ...[
                    const SizedBox(height: 12),
                    Text(
                      _product!.longDescription,
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ],
                ],
              ),
            ),
          ),
          const SizedBox(height: 16),

          // Product Specifications
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Specifications',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 16),
                  _buildSpecificationRow('Category', _product!.category),
                  _buildSpecificationRow('Form', _product!.form),
                  _buildSpecificationRow('Growth Stage', _product!.growthStage),
                  _buildSpecificationRow('Suitable Crops', _product!.suitableCrops),
                  _buildSpecificationRow('Suitable Soils', _product!.suitableSoils),
                  
                  // Application Details
                  if (_product!.applicationMethods.isNotEmpty)
                    _buildSpecificationRow('Application Methods', _product!.applicationMethods.join(', ')),
                  if (_product!.applicationFrequency.isNotEmpty)
                    _buildSpecificationRow('Application Frequency', _product!.applicationFrequency),
                  if (_product!.applicationTiming.isNotEmpty)
                    _buildSpecificationRow('Application Timing', _product!.applicationTiming),
                ],
              ),
            ),
          ),
          const SizedBox(height: 16),

          // Brochures Section
          _buildBrochuresSection(),

          // Quote Request Section
          const SizedBox(height: 16),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(Icons.request_quote, color: Colors.green[600], size: 24),
                      const SizedBox(width: 8),
                      Text(
                        'Request Quote',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  QuoteRequestForm(product: _product!),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBrochuresSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.description, color: Colors.green[600], size: 24),
                const SizedBox(width: 8),
                Text(
                  'Brochures',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            
            if (_brochures.isNotEmpty) ...[
              // Display available brochures
              ..._brochures.map((brochure) => _buildBrochureCard(brochure)),
            ] else ...[
              // No brochures available - show request option
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.grey[50],
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: Colors.grey[200]!),
                ),
                child: Column(
                  children: [
                    Icon(
                      Icons.description_outlined,
                      size: 48,
                      color: Colors.grey[400],
                    ),
                    const SizedBox(height: 12),
                    Text(
                      'No Brochure Available',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                        color: Colors.grey[700],
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'We don\'t have a brochure for this product yet. Request one and we\'ll notify you when it\'s available.',
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: Colors.grey[600],
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 16),
                    CustomButton(
                      text: _isRequestingBrochure ? 'Requesting...' : 'Request Brochure',
                      onPressed: _isRequestingBrochure ? null : _requestBrochure,
                      backgroundColor: Colors.green[600],
                      textColor: Colors.white,
                    ),
                  ],
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildBrochureCard(Map<String, dynamic> brochure) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.green[50],
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.green[200]!),
      ),
      child: Row(
        children: [
          Icon(
            Icons.picture_as_pdf,
            color: Colors.red[600],
            size: 32,
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  brochure['title'] ?? 'Brochure',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                if (brochure['description'] != null) ...[
                  const SizedBox(height: 4),
                  Text(
                    brochure['description'],
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.grey[600],
                    ),
                  ),
                ],
              ],
            ),
          ),
          const SizedBox(width: 8),
          CustomButton(
            text: 'View',
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => BrochureViewerScreen(
                    title: brochure['title'] ?? 'Brochure',
                    url: brochure['fileUrl'],
                    brochureId: brochure['id'],
                  ),
                ),
              );
            },
            backgroundColor: Colors.green[600],
            textColor: Colors.white,
          ),
        ],
      ),
    );
  }

  Widget _buildSpecificationRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 120,
            child: Text(
              '$label:',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                fontWeight: FontWeight.w600,
                color: Colors.grey[700],
              ),
            ),
          ),
          Expanded(
            child: Text(
              value,
              style: Theme.of(context).textTheme.bodyMedium,
            ),
          ),
        ],
      ),
    );
  }
}
