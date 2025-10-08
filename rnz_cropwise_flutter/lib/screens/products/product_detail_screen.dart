import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../models/product.dart';
import '../../models/brochure.dart';
import '../../models/brochure_request.dart';
import '../../models/quote_request.dart';
import '../../providers/product_provider.dart';
import '../../providers/brochure_provider.dart';
import '../../providers/auth_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/loading_overlay.dart';
import '../../widgets/quote_request_form.dart';
import '../../services/quote_request_service.dart';

class ProductDetailScreen extends StatefulWidget {
  final String productId;

  const ProductDetailScreen({
    Key? key,
    required this.productId,
  }) : super(key: key);

  @override
  State<ProductDetailScreen> createState() => _ProductDetailScreenState();
}

class _ProductDetailScreenState extends State<ProductDetailScreen> {
  Product? _product;
  List<Brochure> _brochures = [];
  bool _isLoading = true;
  bool _isRequestingBrochure = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadProduct();
  }

  Future<void> _loadProduct() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      final product = await context.read<ProductProvider>().getProduct(widget.productId);
      if (product == null) {
        setState(() {
          _error = 'Product not found';
          _isLoading = false;
        });
        return;
      }

      print('🔍 Loading brochures for productId: ${widget.productId}');
      final brochureResponse = await context.read<BrochureProvider>().getBrochuresForProduct(widget.productId);
      final brochures = brochureResponse ?? [];
      
      print('🔍 Brochure response: $brochureResponse');
      print('🔍 Brochures count: ${brochures.length}');
      if (brochures.isNotEmpty) {
        print('🔍 First brochure: ${brochures.first.title}');
      }

      setState(() {
        _product = product;
        _brochures = brochures;
        _isLoading = false;
      });
    } catch (e) {
      setState(() {
        _error = e.toString();
        _isLoading = false;
      });
    }
  }

  Future<void> _requestBrochure() async {
    if (_product == null) return;

    final user = context.read<AuthProvider>().user;
    if (user == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Please log in to request a brochure'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    try {
      setState(() {
        _isRequestingBrochure = true;
      });

      print('🔍 Creating brochure request for product: ${_product!.id}');
      print('🔍 User details - ID: ${user.id}, Name: ${user.fullName}, Email: ${user.email}');
      
      // Check if user has valid details
      if (user.id.isEmpty || user.fullName.isEmpty || user.email.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Please complete your profile before requesting brochures'),
            backgroundColor: Colors.red,
          ),
        );
        return;
      }
      
      // Create request data matching web app structure
      final requestData = {
        'productId': _product!.id,
        'productName': _product!.name,
        'requestedBy': user.id,
        'userName': user.fullName,
        'userEmail': user.email,
        'status': 'pending',
      };

      print('🔍 Request data: $requestData');

      // Send the request data directly instead of using BrochureRequest model
      final success = await context.read<BrochureProvider>().requestBrochureDirect(requestData);

      if (success) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Brochure request submitted successfully! Admin will be notified.'),
            backgroundColor: Colors.green,
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(context.read<BrochureProvider>().error ?? 'Failed to submit request'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (e) {
      print('❌ Error requesting brochure: $e');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error: ${e.toString()}'),
          backgroundColor: Colors.red,
        ),
      );
    } finally {
      setState(() {
        _isRequestingBrochure = false;
      });
    }
  }

  Future<void> _openBrochure(Brochure brochure) async {
    try {
      final url = Uri.parse(brochure.fileUrl);
      if (await canLaunchUrl(url)) {
        await launchUrl(url, mode: LaunchMode.externalApplication);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Could not open brochure'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error opening brochure: ${e.toString()}'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  Future<void> _showQuoteRequestForm() async {
    if (_product == null) return;

    showDialog(
      context: context,
      builder: (context) => QuoteRequestForm(
        product: _product!,
        onSubmit: (quoteRequest) async {
          final success = await QuoteRequestService.submitQuoteRequest(quoteRequest);
          if (!success) {
            throw Exception('Failed to submit quote request');
          }
        },
      ),
    );
  }

  Future<void> _downloadBrochure(Brochure brochure) async {
    try {
      final url = Uri.parse(brochure.fileUrl);
      if (await canLaunchUrl(url)) {
        await launchUrl(url, mode: LaunchMode.externalApplication);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Opening ${brochure.title} for download'),
            backgroundColor: Colors.green,
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Could not download brochure'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error downloading brochure: ${e.toString()}'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  Widget _buildSpecificationSection(String title, List<String> items) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.titleMedium?.copyWith(
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 8),
        Wrap(
          spacing: 8,
          runSpacing: 4,
          children: items.map((item) => Chip(
            label: Text(
              item,
              style: TextStyle(
                color: Colors.green[800], // Dark green text
                fontWeight: FontWeight.w500,
              ),
            ),
            backgroundColor: Colors.green[50], // Light green background
            side: BorderSide(color: Colors.green[200]!), // Light green border
          )).toList(),
        ),
      ],
    );
  }

  Widget _buildBrochureSection() {
    print('🔍 Building brochure section with ${_brochures.length} brochures');
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.description, color: AppColors.primary),
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

            if (_brochures.isEmpty) ...[
              const Text('No brochures available for this product.'),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton.icon(
                  onPressed: _isRequestingBrochure ? null : _requestBrochure,
                  icon: _isRequestingBrochure
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Icon(Icons.request_page),
                  label: Text(_isRequestingBrochure ? 'Requesting...' : 'Request Brochure'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primary,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                  ),
                ),
              ),
            ] else ...[
              ..._brochures.map((brochure) => Card(
                margin: const EdgeInsets.only(bottom: 8),
                child: Padding(
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.picture_as_pdf, color: Colors.red, size: 24),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  brochure.title,
                                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                if (brochure.description != null && brochure.description!.isNotEmpty) ...[
                                  const SizedBox(height: 4),
                                  Text(
                                    brochure.description!,
                                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                                      color: Colors.grey[600],
                                    ),
                                  ),
                                ],
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      Row(
                        children: [
                          if (brochure.category.isNotEmpty) ...[
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              decoration: BoxDecoration(
                                color: AppColors.primary.withOpacity(0.1),
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: Text(
                                brochure.category,
                                style: TextStyle(
                                  fontSize: 12,
                                  color: AppColors.primary,
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                            const SizedBox(width: 8),
                          ],
                          if (brochure.language.isNotEmpty) ...[
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              decoration: BoxDecoration(
                                color: Colors.grey[200],
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: Text(
                                brochure.language,
                                style: TextStyle(
                                  fontSize: 12,
                                  color: Colors.grey[700],
                                ),
                              ),
                            ),
                          ],
                        ],
                      ),
                      const SizedBox(height: 12),
                      Row(
                        children: [
                          Expanded(
                            child: ElevatedButton.icon(
                              onPressed: () => _openBrochure(brochure),
                              icon: const Icon(Icons.visibility, size: 16),
                              label: const Text('View'),
                              style: ElevatedButton.styleFrom(
                                backgroundColor: AppColors.primary,
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(vertical: 8),
                              ),
                            ),
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: OutlinedButton.icon(
                              onPressed: () => _downloadBrochure(brochure),
                              icon: const Icon(Icons.download, size: 16),
                              label: const Text('Download'),
                              style: OutlinedButton.styleFrom(
                                foregroundColor: AppColors.primary,
                                side: BorderSide(color: AppColors.primary),
                                padding: const EdgeInsets.symmetric(vertical: 8),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              )).toList(),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildQuoteRequestSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.request_quote, color: AppColors.primary),
                const SizedBox(width: 8),
                Text(
                  'Request Quote',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(
              'Get a personalized quote for this product based on your requirements.',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: Colors.grey[600],
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton.icon(
                onPressed: _showQuoteRequestForm,
                icon: const Icon(Icons.request_quote),
                label: const Text('Request Quote'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_product?.name ?? 'Product Details'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
      ),
      body: LoadingOverlay(
        isLoading: _isLoading,
        child: _error != null
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.error_outline, size: 64, color: Colors.red.shade300),
                  const SizedBox(height: 16),
                  Text(
                    _error!,
                    style: Theme.of(context).textTheme.titleMedium,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: _loadProduct,
                    child: const Text('Retry'),
                  ),
                ],
              ),
            )
          : _product == null
            ? const Center(child: Text('Product not found'))
            : SingleChildScrollView(
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
                            if (_product!.imageUrl.isNotEmpty)
                              Center(
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(8),
                                  child: AspectRatio(
                                    aspectRatio: 1.0, // Square aspect ratio for 600x600 images
                                    child: Image.network(
                                      _product!.imageUrl,
                                      fit: BoxFit.cover,
                                      errorBuilder: (context, error, stackTrace) {
                                        return Container(
                                          color: Colors.grey.shade300,
                                          child: const Icon(Icons.image, size: 64),
                                        );
                                      },
                                    ),
                                  ),
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
                                    ),
                                  ),
                                ),
                                IconButton(
                                  onPressed: () {
                                    // TODO: Implement favorite toggle functionality
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(
                                        content: Text('Favorite functionality will be implemented'),
                                        backgroundColor: Colors.blue,
                                      ),
                                    );
                                  },
                                  icon: const Icon(
                                    Icons.favorite_border,
                                    color: Colors.red,
                                    size: 28,
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Text(
                              _product!.description,
                              style: Theme.of(context).textTheme.bodyLarge,
                            ),
                            if (_product!.longDescription.isNotEmpty) ...[
                              const SizedBox(height: 16),
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

                    // Specifications
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

                            if (_product!.category != null)
                              _buildSpecificationSection('Category', [_product!.category!]),

                            if (_product!.form != null) ...[
                              const SizedBox(height: 16),
                              _buildSpecificationSection('Form', [_product!.form!]),
                            ],

                            if (_product!.growthStage != null) ...[
                              const SizedBox(height: 16),
                              _buildSpecificationSection('Growth Stage', [_product!.growthStage!]),
                            ],

                            if (_product!.crops.isNotEmpty) ...[
                              const SizedBox(height: 16),
                              _buildSpecificationSection('Suitable Crops', _product!.crops),
                            ],

                            if (_product!.soilTypes.isNotEmpty) ...[
                              const SizedBox(height: 16),
                              _buildSpecificationSection('Suitable Soils', _product!.soilTypes),
                            ],

                            if (_product!.specifications != null) ...[
                              const SizedBox(height: 16),
                              Text(
                                'Technical Specifications',
                                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const SizedBox(height: 8),
                              if (_product!.specifications!['solubility'] != null)
                                Text('Solubility: ${_product!.specifications!['solubility']}'),
                              if (_product!.specifications!['npk'] != null) ...[
                                const SizedBox(height: 4),
                                Text('NPK: ${_product!.specifications!['npk']['nitrogen']}-${_product!.specifications!['npk']['phosphorus']}-${_product!.specifications!['npk']['potassium']}'),
                              ],
                            ],

                            if (_product!.application != null) ...[
                              const SizedBox(height: 16),
                              Text(
                                'Application',
                                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const SizedBox(height: 8),
                              Text('Method: ${(_product!.application!['method'] as List<dynamic>).join(', ')}'),
                              const SizedBox(height: 4),
                              Text('Rate: ${_product!.application!['rate']['min']}-${_product!.application!['rate']['max']} ${_product!.application!['rate']['unit']}'),
                              const SizedBox(height: 4),
                              Text('Frequency: ${_product!.application!['frequency']}'),
                              const SizedBox(height: 4),
                              Text('Timing: ${_product!.application!['timing']}'),
                            ],

                            // Pricing section hidden as requested
                            // if (_product!.pricing != null) ...[
                            //   const SizedBox(height: 16),
                            //   Text(
                            //     'Pricing',
                            //     style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            //       fontWeight: FontWeight.bold,
                            //     ),
                            //   ),
                            //   const SizedBox(height: 8),
                            //   Text('Retail: ${_product!.pricing!['currency']} ${_product!.pricing!['retail']}'),
                            //   const SizedBox(height: 4),
                            //   Text('Wholesale: ${_product!.pricing!['currency']} ${_product!.pricing!['wholesale']}'),
                            // ],
                          ],
                        ),
                      ),
                    ),

                    const SizedBox(height: 16),

                    // Brochures Section
                    _buildBrochureSection(),

                    const SizedBox(height: 16),

                    // Quote Request Section
                    _buildQuoteRequestSection(),

                    const SizedBox(height: 16),

                    // Tags
                    if (_product!.tags != null && _product!.tags!.isNotEmpty) ...[
                      Card(
                        child: Padding(
                          padding: const EdgeInsets.all(16),
                          child: _buildSpecificationSection('Tags', _product!.tags!),
                        ),
                      ),
                      const SizedBox(height: 16),
                    ],
                  ],
                ),
              ),
      ),
    );
  }
}
