import 'package:flutter/material.dart';
import '../../widgets/custom_button.dart';

import '../../services/api_service.dart';
import '../../data/location_data.dart';
import 'product_detail_screen.dart';

class AiCropAdvisorScreen extends StatefulWidget {
  const AiCropAdvisorScreen({super.key});

  @override
  State<AiCropAdvisorScreen> createState() => _AiCropAdvisorScreenState();
}

class _AiCropAdvisorScreenState extends State<AiCropAdvisorScreen> {
  final _formKey = GlobalKey<FormState>();
  final _districtController = TextEditingController();

  bool _isAnalyzing = false;
  bool _showResults = false;
  Map<String, dynamic>? _recommendations;

  // Form data matching web implementation
  String _selectedCrop = '';
  String _selectedSoil = '';
  String _selectedMoisture = '';
  String _selectedGrowthStage = '';
  String _selectedCountry = '';
  String _selectedState = '';
  String _selectedDistrict = '';

  // Available options matching web implementation
  final List<String> _crops = [
    'All Crops', 'Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 
    'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 
    'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming', 'Oilseeds', 
    'Legumes', 'Drought-Prone Crops', 'Greenhouse'
  ];

  final List<String> _soilTypes = [
    'All', 'Loam', 'Sandy', 'Silt', 'Hydroponics', 'Clay', 'Chalky', 'Peat', 
    'Alkaline', 'Acidic', 'Saline Soils', 'Compacted'
  ];

  final List<String> _moistureLevels = ['All', 'Low', 'Moderate', 'High'];

  final List<String> _growthStages = [
    'All Stages', 'Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Maturity'
  ];

  // Use complete location data from web app
  final List<PilotCountry> _pilotCountries = LocationData.pilotCountriesData;
  List<PilotLocation> _availableStates = [];
  List<String> _availableCities = [];

  @override
  void dispose() {
    _districtController.dispose();
    super.dispose();
  }

  void _onCountryChanged(String? countryCode) {
    setState(() {
      _selectedCountry = countryCode ?? '';
      _selectedState = '';
      _selectedDistrict = '';
      _availableStates = LocationData.getStatesByCountry(countryCode ?? '');
      _availableCities = [];
    });
  }

  void _onStateChanged(String? stateCode) {
    setState(() {
      _selectedState = stateCode ?? '';
      _selectedDistrict = '';
      
      // Find cities for selected state
      _availableCities = LocationData.getCitiesByState(_selectedCountry, stateCode ?? '');
    });
  }

  void _onCityChanged(String? city) {
    setState(() {
      _selectedDistrict = city ?? '';
    });
  }

  Future<void> _analyzeCropRecommendations() async {
    if (!_formKey.currentState!.validate()) return;

    final scaffoldMessenger = ScaffoldMessenger.of(context);

    setState(() {
      _isAnalyzing = true;
      _showResults = false;
    });

    try {
      // Prepare data in the format expected by the AI advisor (matching web implementation)
      final requestData = {
        'crop': _selectedCrop.toLowerCase(),
        'soil': _selectedSoil.toLowerCase(),
        'moisture': _selectedMoisture.toLowerCase(),
        'growthStage': _selectedGrowthStage.toLowerCase(),
        'region': _selectedState.isNotEmpty ? _selectedState : _selectedCountry,
        'country': _selectedCountry,
        'state': _selectedState.isNotEmpty ? _selectedState : null,
        'district': _selectedDistrict.isNotEmpty ? _selectedDistrict : null,
      };

      debugPrint('Sending request to real AI API with data: $requestData');

      // Call the REAL AI API endpoint (same as web app)
      // This connects to the Next.js backend which:
      // 1. Fetches products from MongoDB database
      // 2. Uses AI to generate recommendations
      // 3. Returns real product IDs that can be used to view product details
      final response = await ApiService().post('/ai-advisor', requestData);
      
      debugPrint('AI API Response: $response');
      
      setState(() {
        _recommendations = response;
        _showResults = true;
        _isAnalyzing = false;
      });
    } catch (error) {
      debugPrint('Error getting AI recommendations: $error');
      
      // Show error message to user
      scaffoldMessenger.showSnackBar(
        SnackBar(
          content: Text('Failed to get AI recommendations: ${error.toString()}'),
          backgroundColor: Colors.red,
          duration: const Duration(seconds: 5),
        ),
      );
      
      setState(() {
        _isAnalyzing = false;
      });
    }
  }



  void _resetForm() {
    _formKey.currentState?.reset();
    setState(() {
      _selectedCrop = '';
      _selectedSoil = '';
      _selectedMoisture = '';
      _selectedGrowthStage = '';
      _selectedCountry = '';
      _selectedState = '';
      _selectedDistrict = '';
      _availableStates = [];
      _availableCities = [];
      _showResults = false;
      _recommendations = null;
    });
  }

  void _openProductPage(String productId) {
    // Navigate to product detail page using the real product ID from MongoDB
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => ProductDetailScreen(productId: productId),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Crop Advisor 🌱'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header Section
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.green[400]!, Colors.green[600]!],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                children: [
                  const Icon(
                    Icons.psychology,
                    size: 48,
                    color: Colors.white,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'AI Crop Advisor 🌱',
                    style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Get intelligent recommendations for your crops using RNZ products in India, Pakistan, Sri Lanka, Bangladesh & GCC countries',
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: Colors.white.withValues(alpha: 0.9),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // Pilot Notice
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.blue[50],
                border: Border.all(color: Colors.blue[200]!),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Row(
                children: [
                  Icon(Icons.info, color: Colors.blue[600], size: 20),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Text(
                      '🌱 Pilot Program: Currently available for India, Pakistan, Sri Lanka, Bangladesh & GCC countries only',
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: Colors.blue[700],
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            if (!_showResults) ...[
              // Location Information Card
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.location_on, color: Colors.green[600], size: 20),
                          const SizedBox(width: 8),
                          Text(
                            'Location Information',
                            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),

                      // Country Dropdown
                      DropdownButtonFormField<String>(
                        initialValue: _selectedCountry.isEmpty ? null : _selectedCountry,
                        decoration: const InputDecoration(
                          labelText: 'Country *',
                          border: OutlineInputBorder(),
                          prefixIcon: Icon(Icons.public),
                        ),
                        items: _pilotCountries.map((country) => DropdownMenuItem<String>(
                          value: country.code,
                          child: Text('${country.name} 🌱'),
                        )).toList(),
                        onChanged: _onCountryChanged,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Please select a country';
                          }
                          return null;
                        },
                      ),
                      const SizedBox(height: 16),

                      // State Dropdown (only show if states available)
                      if (_availableStates.isNotEmpty) ...[
                        DropdownButtonFormField<String>(
                          initialValue: _selectedState.isEmpty ? null : _selectedState,
                          decoration: const InputDecoration(
                            labelText: 'State/Province',
                            border: OutlineInputBorder(),
                            prefixIcon: Icon(Icons.location_city),
                          ),
                          items: _availableStates.map((state) => DropdownMenuItem<String>(
                            value: state.code,
                            child: Text(state.name),
                          )).toList(),
                          onChanged: _onStateChanged,
                        ),
                        const SizedBox(height: 16),
                      ],

                      // City Dropdown
                      DropdownButtonFormField<String>(
                        initialValue: _selectedDistrict.isEmpty ? null : _selectedDistrict,
                        decoration: const InputDecoration(
                          labelText: 'City/District',
                          border: OutlineInputBorder(),
                          prefixIcon: Icon(Icons.location_city),
                        ),
                        items: _availableCities.map((city) => DropdownMenuItem<String>(
                          value: city,
                          child: Text(city),
                        )).toList(),
                        onChanged: _onCityChanged,
                      ),
                      const SizedBox(height: 16),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),

              // Crop Information Card
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.psychology, color: Colors.green[600], size: 20),
                          const SizedBox(width: 8),
                          Text(
                            'Crop Information',
                            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),

                      Form(
                        key: _formKey,
                        child: Column(
                          children: [
                            // Crop Type
                            DropdownButtonFormField<String>(
                              initialValue: _selectedCrop.isEmpty ? null : _selectedCrop,
                              decoration: const InputDecoration(
                                labelText: 'Crop Type *',
                                border: OutlineInputBorder(),
                                prefixIcon: Icon(Icons.agriculture),
                              ),
                              items: _crops.map((crop) => DropdownMenuItem(
                                value: crop,
                                child: Text(crop),
                              )).toList(),
                              onChanged: (value) {
                                setState(() {
                                  _selectedCrop = value ?? '';
                                });
                              },
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please select a crop type';
                                }
                                return null;
                              },
                            ),
                            const SizedBox(height: 16),

                            // Soil Type
                            DropdownButtonFormField<String>(
                              initialValue: _selectedSoil.isEmpty ? null : _selectedSoil,
                              decoration: const InputDecoration(
                                labelText: 'Soil Type *',
                                border: OutlineInputBorder(),
                                prefixIcon: Icon(Icons.landscape),
                              ),
                              items: _soilTypes.map((soil) => DropdownMenuItem(
                                value: soil,
                                child: Text(soil),
                              )).toList(),
                              onChanged: (value) {
                                setState(() {
                                  _selectedSoil = value ?? '';
                                });
                              },
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please select a soil type';
                                }
                                return null;
                              },
                            ),
                            const SizedBox(height: 16),

                            // Moisture Level
                            DropdownButtonFormField<String>(
                              initialValue: _selectedMoisture.isEmpty ? null : _selectedMoisture,
                              decoration: const InputDecoration(
                                labelText: 'Moisture Level *',
                                border: OutlineInputBorder(),
                                prefixIcon: Icon(Icons.water_drop),
                              ),
                              items: _moistureLevels.map((moisture) => DropdownMenuItem(
                                value: moisture,
                                child: Text(moisture),
                              )).toList(),
                              onChanged: (value) {
                                setState(() {
                                  _selectedMoisture = value ?? '';
                                });
                              },
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please select moisture level';
                                }
                                return null;
                              },
                            ),
                            const SizedBox(height: 16),

                            // Growth Stage
                            DropdownButtonFormField<String>(
                              initialValue: _selectedGrowthStage.isEmpty ? null : _selectedGrowthStage,
                              decoration: const InputDecoration(
                                labelText: 'Growth Stage *',
                                border: OutlineInputBorder(),
                                prefixIcon: Icon(Icons.trending_up),
                              ),
                              items: _growthStages.map((stage) => DropdownMenuItem(
                                value: stage,
                                child: Text(stage),
                              )).toList(),
                              onChanged: (value) {
                                setState(() {
                                  _selectedGrowthStage = value ?? '';
                                });
                              },
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please select growth stage';
                                }
                                return null;
                              },
                            ),
                            const SizedBox(height: 24),

                            // Get Recommendations Button
                            SizedBox(
                              width: double.infinity,
                              child: CustomButton(
                                text: _isAnalyzing ? 'Analyzing...' : 'Get Recommendations',
                                onPressed: _isAnalyzing ? null : _analyzeCropRecommendations,
                                isLoading: _isAnalyzing,
                                backgroundColor: Colors.green[600],
                                textColor: Colors.white,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ] else ...[
              // Results Section
              _buildResultsSection(),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildResultsSection() {
    if (_recommendations == null) return const SizedBox.shrink();

    final recommendedProducts = _recommendations!['recommendedProducts'] as List<dynamic>;
    final explanation = _recommendations!['explanation'] as String;
    final regionalInsights = _recommendations!['regionalInsights'] as String?;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Results Header
        Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Recommendations',
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 12),

                // Explanation
                if (explanation.isNotEmpty) ...[
                  Text(
                    explanation,
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: Colors.grey[600],
                    ),
                  ),
                  const SizedBox(height: 16),
                ],

                // Regional Insights
                if (regionalInsights != null && regionalInsights.isNotEmpty) ...[
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.blue[50],
                      border: Border.all(color: Colors.blue[200]!),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Regional Insights',
                          style: Theme.of(context).textTheme.titleSmall?.copyWith(
                            color: Colors.blue[800],
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          regionalInsights,
                          style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            color: Colors.blue[700],
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),
                ],

                // Recommended Products
                ...recommendedProducts.map((product) => _buildProductCard(product)),
              ],
            ),
          ),
        ),

        const SizedBox(height: 20),

        // Action Buttons
        Row(
          children: [
            Expanded(
              child: CustomButton(
                text: 'New Analysis',
                onPressed: _resetForm,
                isOutlined: true,
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: CustomButton(
                text: 'Save Report',
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Report saved successfully!'),
                      backgroundColor: Colors.green,
                    ),
                  );
                },
                backgroundColor: Colors.green[600],
                textColor: Colors.white,
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildProductCard(Map<String, dynamic> product) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.inventory, color: Colors.green[600], size: 20),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    product['name'] ?? '',
                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Colors.green[700],
                    ),
                  ),
                ),
                // View Product Button (matching web implementation)
                if (product['productId'] != null) ...[
                  CustomButton(
                    text: 'View Product',
                    onPressed: () => _openProductPage(product['productId']),
                    isOutlined: true,
                    textColor: Colors.green[600],
                  ),
                ],
              ],
            ),
            const SizedBox(height: 8),
            Text(
              product['description'] ?? '',
              style: Theme.of(context).textTheme.bodyMedium,
            ),
            const SizedBox(height: 12),
            
            // Product Details
            _buildDetailRow('Application', product['applicationMethod'] ?? ''),
            _buildDetailRow('Dosage', product['dosage'] ?? ''),
            _buildDetailRow('Timing', product['timing'] ?? ''),
            _buildDetailRow('Expected Benefit', product['expectedBenefit'] ?? ''),
            
            if (product['category'] != null && product['category'].isNotEmpty)
              _buildDetailRow('Category', product['category']),
            
            if (product['regionalAdaptation'] != null && product['regionalAdaptation'].isNotEmpty)
              _buildDetailRow('Regional Notes', product['regionalAdaptation']),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 100,
            child: Text(
              '$label:',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                fontWeight: FontWeight.w600,
                color: Colors.grey[600],
              ),
            ),
          ),
          Expanded(
            child: Text(
              value,
              style: Theme.of(context).textTheme.bodySmall,
            ),
          ),
        ],
      ),
    );
  }
}

