import 'package:flutter/material.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class AiCropAdvisorScreen extends StatefulWidget {
  const AiCropAdvisorScreen({super.key});

  @override
  State<AiCropAdvisorScreen> createState() => _AiCropAdvisorScreenState();
}

class _AiCropAdvisorScreenState extends State<AiCropAdvisorScreen> {
  final _formKey = GlobalKey<FormState>();
  final _cropController = TextEditingController();
  final _soilController = TextEditingController();
  final _regionController = TextEditingController();
  final _moistureController = TextEditingController();
  final _growthStageController = TextEditingController();
  final _countryController = TextEditingController();
  final _stateController = TextEditingController();
  final _districtController = TextEditingController();

  bool _isAnalyzing = false;
  bool _showResults = false;
  Map<String, dynamic>? _recommendations;

  // Available options matching the web implementation
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

  final List<String> _pilotCountries = [
    'India', 'Pakistan', 'Sri Lanka', 'Bangladesh', 'United Arab Emirates', 
    'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'
  ];

  // Mock RNZ products database (simplified version of the 79 products)
  final List<Map<String, dynamic>> _rnzProducts = [
    {
      'name': 'NPK 19-19-19',
      'productId': 'prod-1',
      'description': 'High-purity fully soluble grades for quick uptake.',
      'category': 'Water Soluble NPK (100% Soluble Powders)',
      'crops': ['All crops', 'strong for vegetables', 'fruits', 'hydroponics'],
      'soilTypes': ['Loam', 'Sandy', 'Silt', 'Hydroponics'],
      'applicationMethod': 'Foliar/Fertigation',
      'dosage': '2-5 kg/ha',
      'timing': 'Every 7-15 days'
    },
    {
      'name': 'NPK 13-40-13',
      'productId': 'prod-2',
      'description': 'High-phosphorus formula for root development and flowering.',
      'category': 'Water Soluble NPK (100% Soluble Powders)',
      'crops': ['All crops'],
      'soilTypes': ['All'],
      'applicationMethod': 'Foliar/Fertigation',
      'dosage': '2-4 kg/ha',
      'timing': 'Pre-flowering stage'
    },
    {
      'name': 'NPK 13-00-45',
      'productId': 'prod-3',
      'description': 'High-potassium formula for fruit development and quality.',
      'category': 'Water Soluble NPK (100% Soluble Powders)',
      'crops': ['All crops'],
      'soilTypes': ['All'],
      'applicationMethod': 'Foliar/Fertigation',
      'dosage': '2-5 kg/ha',
      'timing': 'Fruiting stage'
    },
    {
      'name': 'Humic / Fulvic Acid',
      'productId': 'prod-4',
      'description': 'Organic soil conditioner and growth promoter.',
      'category': 'Bio/Organic Items',
      'crops': ['All crops'],
      'soilTypes': ['All'],
      'applicationMethod': 'Soil Application/Foliar',
      'dosage': '1-3 kg/ha',
      'timing': 'Throughout growth cycle'
    },
    {
      'name': 'Zinc Sulphate – Hepta & Mono',
      'productId': 'prod-5',
      'description': 'Essential micronutrient for plant growth and development.',
      'category': 'Micro Elements',
      'crops': ['All crops'],
      'soilTypes': ['All'],
      'applicationMethod': 'Foliar Spray',
      'dosage': '0.5-1 kg/ha',
      'timing': 'Vegetative stage'
    },
    {
      'name': 'Calcium Nitrate',
      'productId': 'prod-6',
      'description': 'Calcium and nitrogen source for cell strength and growth.',
      'category': 'Straights Items',
      'crops': ['All crops'],
      'soilTypes': ['All'],
      'applicationMethod': 'Foliar/Fertigation',
      'dosage': '2-4 kg/ha',
      'timing': 'Throughout growth cycle'
    }
  ];

  @override
  void dispose() {
    _cropController.dispose();
    _soilController.dispose();
    _regionController.dispose();
    _moistureController.dispose();
    _growthStageController.dispose();
    _countryController.dispose();
    _stateController.dispose();
    _districtController.dispose();
    super.dispose();
  }

  void _analyzeCropRecommendations() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() {
      _isAnalyzing = true;
      _showResults = false;
    });

    // Simulate API call delay
    await Future.delayed(const Duration(seconds: 2));

    // Mock analysis logic matching the web implementation
    final recommendations = _getMockRecommendations();

    setState(() {
      _recommendations = recommendations;
      _showResults = true;
      _isAnalyzing = false;
    });
  }

  Map<String, dynamic> _getMockRecommendations() {
    final crop = _cropController.text;
    final soil = _soilController.text;
    final region = _regionController.text;
    final moisture = _moistureController.text;
    final growthStage = _growthStageController.text;
    final country = _countryController.text;

    // Check if country is in pilot countries
    final isPilotCountry = _pilotCountries.contains(country);
    
    if (!isPilotCountry && country.isNotEmpty) {
      return {
        'recommendedProducts': [],
        'explanation': 'Sorry, AI Crop Advisor is currently only available for pilot countries: India, Pakistan, Sri Lanka, Bangladesh, and GCC countries. Please contact support for access to other regions.',
        'regionalInsights': 'Service not available in your region.',
        'agriculturalData': {
          'hasRegionalData': false,
          'dataCompleteness': 'Not Available',
          'lastUpdated': DateTime.now().toIso8601String()
        }
      };
    }

    // Filter products based on inputs (simplified logic)
    final suitableProducts = _filterProducts(crop, soil, moisture, growthStage);
    
    // Select 2-3 most relevant products
    final recommendedProducts = suitableProducts.take(3).map((product) => {
      return {
        'name': product['name'],
        'productId': product['productId'],
        'description': product['description'],
        'applicationMethod': product['applicationMethod'],
        'dosage': product['dosage'],
        'timing': product['timing'],
        'expectedBenefit': _getExpectedBenefit(product, crop, growthStage, country),
        'regionalAdaptation': _getRegionalAdaptation(country),
        'category': product['category'],
      };
    }).toList();

    final explanation = _generateExplanation(crop, soil, region, growthStage, country, recommendedProducts);
    final regionalInsights = _getRegionalInsights(country, region);

    return {
      'recommendedProducts': recommendedProducts,
      'explanation': explanation,
      'regionalInsights': regionalInsights,
      'agriculturalData': {
        'hasRegionalData': isPilotCountry,
        'dataCompleteness': isPilotCountry ? 'Complete' : 'Not Available',
        'lastUpdated': DateTime.now().toIso8601String()
      }
    };
  }

  List<Map<String, dynamic>> _filterProducts(String crop, String soil, String moisture, String growthStage) {
    return _rnzProducts.where((product) {
      final productCrops = List<String>.from(product['crops'] ?? []);
      final productSoilTypes = List<String>.from(product['soilTypes'] ?? []);
      
      final matchesCrop = productCrops.isEmpty || 
                         productCrops.contains('All crops') ||
                         productCrops.contains(crop) ||
                         productCrops.any((c) => c.toLowerCase().contains('all'));
      
      final matchesSoil = productSoilTypes.isEmpty ||
                         productSoilTypes.contains('All') ||
                         productSoilTypes.contains(soil) ||
                         productSoilTypes.any((s) => s.toLowerCase().contains('all'));

      return matchesCrop && matchesSoil;
    }).toList();
  }

  String _getExpectedBenefit(Map<String, dynamic> product, String crop, String growthStage, String country) {
    final productName = product['name'] as String;
    final category = product['category'] as String;
    
    if (productName.contains('NPK')) {
      if (productName.contains('19-19-19')) {
        return 'Balanced nutrition for healthy vegetative and reproductive development in $crop during $growthStage stage.';
      } else if (productName.contains('13-40-13')) {
        return 'High phosphorus for strong root development and improved flowering in $crop.';
      } else if (productName.contains('13-00-45')) {
        return 'High potassium for enhanced fruit development and quality in $crop during $growthStage stage.';
      }
    } else if (productName.contains('Humic')) {
      return 'Organic soil conditioning and growth promotion for improved nutrient uptake in $crop.';
    } else if (productName.contains('Zinc')) {
      return 'Essential micronutrient for leaf development and enzyme activation in $crop.';
    } else if (productName.contains('Calcium')) {
      return 'Cell strength and calcium deficiency prevention for $crop during $growthStage stage.';
    }
    
    return 'Suitable for $crop cultivation in $country with proper application during $growthStage stage.';
  }

  String _getRegionalAdaptation(String country) {
    switch (country.toLowerCase()) {
      case 'india':
        return 'Optimized for Indian soil conditions and farming practices.';
      case 'pakistan':
        return 'Adapted for Pakistani agricultural patterns and climate.';
      case 'sri lanka':
        return 'Suitable for Sri Lankan tropical farming conditions.';
      case 'bangladesh':
        return 'Designed for Bangladeshi delta region agriculture.';
      case 'united arab emirates':
      case 'saudi arabia':
      case 'kuwait':
      case 'qatar':
      case 'bahrain':
      case 'oman':
        return 'Optimized for GCC desert agriculture and controlled environment farming.';
      default:
        return 'General agricultural application.';
    }
  }

  String _generateExplanation(String crop, String soil, String region, String growthStage, String country, List<dynamic> products) {
    final productNames = products.map((p) => p['name']).join(', ');
    
    return 'Based on your $crop cultivation in $soil soil with $moisture moisture levels during $growthStage stage, I recommend $productNames. These products are specifically selected for optimal performance in $country agricultural conditions, considering regional farming practices and climate factors.';
  }

  String _getRegionalInsights(String country, String region) {
    if (country.isEmpty) return '';
    
    switch (country.toLowerCase()) {
      case 'india':
        return '🌱 FOCUSED REGION: India - Major agricultural country with diverse crops including rice, wheat, cotton, sugarcane, and vegetables. Seasonal farming patterns.';
      case 'pakistan':
        return '🌱 FOCUSED REGION: Pakistan - Agricultural economy with wheat, rice, cotton, sugarcane, and fruits. Irrigation-dependent farming.';
      case 'sri lanka':
        return '🌱 FOCUSED REGION: Sri Lanka - Tropical agriculture with tea, rubber, coconut, rice, and spices. Monsoon-dependent farming.';
      case 'bangladesh':
        return '🌱 FOCUSED REGION: Bangladesh - Rice-based agriculture with jute, tea, and vegetables. Delta region farming.';
      case 'united arab emirates':
      case 'saudi arabia':
      case 'kuwait':
      case 'qatar':
      case 'bahrain':
      case 'oman':
        return '🌱 FOCUSED REGION: GCC - Modern agriculture with dates, vegetables, and dairy. Advanced farming technology and controlled environment farming.';
      default:
        return 'Agricultural region with diverse farming practices.';
    }
  }

  void _resetForm() {
    _formKey.currentState!.reset();
    setState(() {
      _showResults = false;
      _recommendations = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Crop Advisor'),
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
                  Icon(
                    Icons.psychology,
                    size: 48,
                    color: Colors.white,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'AI Crop Advisor',
                    style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Get personalized RNZ product recommendations based on your farming conditions',
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: Colors.white.withOpacity(0.9),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            if (!_showResults) ...[
              // Input Form
              Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Farm Conditions',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Crop Type
                    DropdownButtonFormField<String>(
                      value: _cropController.text.isEmpty ? null : _cropController.text,
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
                          _cropController.text = value ?? '';
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
                      value: _soilController.text.isEmpty ? null : _soilController.text,
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
                          _soilController.text = value ?? '';
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

                    // Region
                    CustomTextField(
                      controller: _regionController,
                      labelText: 'Region *',
                      prefixIcon: Icons.location_on,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter your region';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 16),

                    // Moisture Level
                    DropdownButtonFormField<String>(
                      value: _moistureController.text.isEmpty ? null : _moistureController.text,
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
                          _moistureController.text = value ?? '';
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
                      value: _growthStageController.text.isEmpty ? null : _growthStageController.text,
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
                          _growthStageController.text = value ?? '';
                        });
                      },
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please select growth stage';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 16),

                    // Country (Optional)
                    DropdownButtonFormField<String>(
                      value: _countryController.text.isEmpty ? null : _countryController.text,
                      decoration: const InputDecoration(
                        labelText: 'Country (Optional)',
                        border: OutlineInputBorder(),
                        prefixIcon: Icon(Icons.public),
                        helperText: 'For regional recommendations',
                      ),
                      items: [
                        const DropdownMenuItem<String>(
                          value: '',
                          child: Text('Select Country'),
                        ),
                        ..._pilotCountries.map((country) => DropdownMenuItem(
                          value: country,
                          child: Text(country),
                        )),
                      ],
                      onChanged: (value) {
                        setState(() {
                          _countryController.text = value ?? '';
                        });
                      },
                    ),
                    const SizedBox(height: 16),

                    // State (Optional)
                    CustomTextField(
                      controller: _stateController,
                      labelText: 'State/Province (Optional)',
                      prefixIcon: Icons.location_city,
                    ),
                    const SizedBox(height: 16),

                    // District (Optional)
                    CustomTextField(
                      controller: _districtController,
                      labelText: 'District/City (Optional)',
                      prefixIcon: Icons.location_city,
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
    final agriculturalData = _recommendations!['agriculturalData'] as Map<String, dynamic>;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Success Header
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.green[50],
            border: Border.all(color: Colors.green[200]!),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Icon(Icons.check_circle, color: Colors.green[600], size: 24),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  'Analysis Complete',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    color: Colors.green[800],
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 20),

        // Regional Insights
        if (regionalInsights != null && regionalInsights.isNotEmpty) ...[
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.blue[50],
              border: Border.all(color: Colors.blue[200]!),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(Icons.public, color: Colors.blue[600], size: 20),
                    const SizedBox(width: 8),
                    Text(
                      'Regional Insights',
                      style: Theme.of(context).textTheme.titleSmall?.copyWith(
                        color: Colors.blue[800],
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(
                  regionalInsights,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Colors.blue[700],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
        ],

        // Explanation
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.grey[50],
            border: Border.all(color: Colors.grey[300]!),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(Icons.lightbulb, color: Colors.orange[600], size: 20),
                  const SizedBox(width: 8),
                  Text(
                    'Recommendation Explanation',
                    style: Theme.of(context).textTheme.titleSmall?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                explanation,
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ],
          ),
        ),
        const SizedBox(height: 20),

        // Recommended Products
        Text(
          'Recommended RNZ Products',
          style: Theme.of(context).textTheme.titleLarge?.copyWith(
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 12),

        ...recommendedProducts.map((product) => _buildProductCard(product)).toList(),

        const SizedBox(height: 20),

        // Agricultural Data
        if (agriculturalData['hasRegionalData'] == true) ...[
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.green[50],
              border: Border.all(color: Colors.green[200]!),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              children: [
                Icon(Icons.data_usage, color: Colors.green[600], size: 20),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    'Regional agricultural data available',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.green[700],
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
        ],

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
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.green[100],
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    product['category'] ?? '',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.green[700],
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
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
            
            if (product['regionalAdaptation'] != null && product['regionalAdaptation'].isNotEmpty)
              _buildDetailRow('Regional Adaptation', product['regionalAdaptation']),
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

