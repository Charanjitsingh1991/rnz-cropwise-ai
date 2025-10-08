import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../providers/ai_advisor_provider.dart';
import '../../utils/constants.dart';
import '../../data/countries_data.dart'; // Pilot countries only for AI advisor
import '../../models/ai_advisor_output.dart';

class AIAdvisorScreen extends StatefulWidget {
  const AIAdvisorScreen({super.key});

  @override
  State<AIAdvisorScreen> createState() => _AIAdvisorScreenState();
}

class _AIAdvisorScreenState extends State<AIAdvisorScreen> {
  final _formKey = GlobalKey<FormState>();
  
  // Location fields
  PilotCountry? _selectedCountry;
  PilotLocation? _selectedState;
  String? _selectedCity;
  
  // Crop information fields
  String? _selectedCrop;
  String? _selectedSoil;
  String? _selectedMoisture;
  String? _selectedGrowthStage;

  // Filter options matching web app exactly
  final List<String> _cropOptions = [
    'All Crops', 'Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes',
    'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes',
    'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals',
    'Cereals', 'Legumes', 'Oilseeds', 'Hydroponics'
  ];

  final List<String> _soilOptions = [
    'All', 'Loam', 'Sandy', 'Silt', 'Clay', 'Peat', 'Hydroponics',
    'Chalky', 'Alkaline', 'Acidic'
  ];

  final List<String> _moistureOptions = [
    'All', 'Low', 'Moderate', 'High'
  ];

  final List<String> _growthStageOptions = [
    'All Stages', 'Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Maturity'
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Crop Advisor'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header Section
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(AppSizes.paddingLarge),
                decoration: BoxDecoration(
                  gradient: AppColors.primaryGradient,
                  borderRadius: BorderRadius.circular(AppSizes.radiusLarge),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Icon(
                          Icons.psychology,
                          color: Colors.white,
                          size: 32,
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            'AI Crop Advisor',
                            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Get intelligent recommendations for your crops based on location and conditions',
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: Colors.white.withValues(alpha: 0.9),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: AppSizes.paddingLarge),

              // Pilot Countries Notice
              Container(
                padding: const EdgeInsets.all(AppSizes.paddingMedium),
                decoration: BoxDecoration(
                  color: Colors.orange.shade50,
                  borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
                  border: Border.all(color: Colors.orange.shade200),
                ),
                child: Row(
                  children: [
                    Icon(
                      Icons.info_outline,
                      color: Colors.orange.shade700,
                      size: 20,
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        'Currently available in pilot countries: ${pilotCountriesData.map((c) => c.name).join(', ')}',
                        style: TextStyle(
                          color: Colors.orange.shade700,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: AppSizes.paddingLarge),

              // Location Information Section - Card Layout
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(AppSizes.paddingLarge),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.location_on, color: AppColors.primary),
                          const SizedBox(width: 8),
                          Text(
                            'Location Information',
                            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: AppSizes.paddingMedium),

                      // Country Selection
                      DropdownButtonFormField<PilotCountry>(
                        value: _selectedCountry,
                        decoration: const InputDecoration(
                          labelText: 'Country *',
                          border: OutlineInputBorder(),
                          prefixIcon: Icon(Icons.public),
                        ),
                        isExpanded: true,
                        items: pilotCountriesData.map((country) {
                          return DropdownMenuItem<PilotCountry>(
                            value: country,
                            child: Text('${country.flag} ${country.name}'),
                          );
                        }).toList(),
                        onChanged: (PilotCountry? value) {
                          setState(() {
                            _selectedCountry = value;
                            _selectedState = null;
                            _selectedCity = null;
                          });
                        },
                        validator: (value) {
                          if (value == null) {
                            return 'Please select a country';
                          }
                          return null;
                        },
                      ),

                      const SizedBox(height: AppSizes.paddingMedium),

                      // State Selection
                      if (_selectedCountry != null)
                        DropdownButtonFormField<PilotLocation>(
                          value: _selectedState,
                          decoration: const InputDecoration(
                            labelText: 'State/Province *',
                            border: OutlineInputBorder(),
                            prefixIcon: Icon(Icons.location_city),
                          ),
                          isExpanded: true,
                          items: _selectedCountry!.states.map((state) {
                            return DropdownMenuItem<PilotLocation>(
                              value: state,
                              child: Text(state.name),
                            );
                          }).toList(),
                          onChanged: (PilotLocation? value) {
                            setState(() {
                              _selectedState = value;
                              _selectedCity = null;
                            });
                          },
                          validator: (value) {
                            if (value == null) {
                              return 'Please select a state/province';
                            }
                            return null;
                          },
                        ),

                      const SizedBox(height: AppSizes.paddingMedium),

                      // City Selection
                      if (_selectedState != null && _selectedState!.cities != null)
                        DropdownButtonFormField<String>(
                          value: _selectedCity,
                          decoration: const InputDecoration(
                            labelText: 'City/District',
                            border: OutlineInputBorder(),
                            prefixIcon: Icon(Icons.location_on),
                          ),
                          isExpanded: true,
                          items: _selectedState!.cities!.map((city) {
                            return DropdownMenuItem<String>(
                              value: city,
                              child: Text(city),
                            );
                          }).toList(),
                          onChanged: (String? value) {
                            setState(() {
                              _selectedCity = value;
                            });
                          },
                        ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: AppSizes.paddingLarge),

              // Crop Information Section - Card Layout
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(AppSizes.paddingLarge),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.psychology, color: AppColors.primary),
                          const SizedBox(width: 8),
                          Text(
                            'Crop Information',
                            style: Theme.of(context).textTheme.titleMedium?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: AppSizes.paddingMedium),

                      // Mobile-optimized crop information fields
                      Column(
                        children: [
                          // Crop Type
                          DropdownButtonFormField<String>(
                            value: _selectedCrop,
                            decoration: const InputDecoration(
                              labelText: 'Crop Type *',
                              border: OutlineInputBorder(),
                              prefixIcon: Icon(Icons.agriculture),
                            ),
                            isExpanded: true,
                            items: _cropOptions.map((crop) {
                              return DropdownMenuItem<String>(
                                value: crop,
                                child: Text(
                                  crop,
                                  overflow: TextOverflow.ellipsis,
                                  maxLines: 1,
                                ),
                              );
                            }).toList(),
                            onChanged: (String? value) {
                              setState(() {
                                _selectedCrop = value;
                              });
                            },
                            validator: (value) {
                              if (value == null) {
                                return 'Please select a crop';
                              }
                              return null;
                            },
                          ),
                          const SizedBox(height: AppSizes.paddingMedium),

                          // Soil Type
                          DropdownButtonFormField<String>(
                            value: _selectedSoil,
                            decoration: const InputDecoration(
                              labelText: 'Soil Type *',
                              border: OutlineInputBorder(),
                              prefixIcon: Icon(Icons.terrain),
                            ),
                            isExpanded: true,
                            items: _soilOptions.map((soil) {
                              return DropdownMenuItem<String>(
                                value: soil,
                                child: Text(
                                  soil,
                                  overflow: TextOverflow.ellipsis,
                                  maxLines: 1,
                                ),
                              );
                            }).toList(),
                            onChanged: (String? value) {
                              setState(() {
                                _selectedSoil = value;
                              });
                            },
                            validator: (value) {
                              if (value == null) {
                                return 'Please select soil type';
                              }
                              return null;
                            },
                          ),
                          const SizedBox(height: AppSizes.paddingMedium),
                          
                          // Moisture Level
                          DropdownButtonFormField<String>(
                            value: _selectedMoisture,
                            decoration: const InputDecoration(
                              labelText: 'Moisture Level *',
                              border: OutlineInputBorder(),
                              prefixIcon: Icon(Icons.water_drop),
                            ),
                            isExpanded: true,
                            items: _moistureOptions.map((moisture) {
                              return DropdownMenuItem<String>(
                                value: moisture,
                                child: Text(
                                  moisture,
                                  overflow: TextOverflow.ellipsis,
                                  maxLines: 1,
                                ),
                              );
                            }).toList(),
                            onChanged: (String? value) {
                              setState(() {
                                _selectedMoisture = value;
                              });
                            },
                            validator: (value) {
                              if (value == null) {
                                return 'Please select moisture level';
                              }
                              return null;
                            },
                          ),
                          const SizedBox(height: AppSizes.paddingMedium),

                          // Growth Stage
                          DropdownButtonFormField<String>(
                            value: _selectedGrowthStage,
                            decoration: const InputDecoration(
                              labelText: 'Growth Stage *',
                              border: OutlineInputBorder(),
                              prefixIcon: Icon(Icons.trending_up),
                            ),
                            isExpanded: true,
                            items: _growthStageOptions.map((stage) {
                              return DropdownMenuItem<String>(
                                value: stage,
                                child: Text(
                                  stage,
                                  overflow: TextOverflow.ellipsis,
                                  maxLines: 1,
                                ),
                              );
                            }).toList(),
                            onChanged: (String? value) {
                              setState(() {
                                _selectedGrowthStage = value;
                              });
                            },
                            validator: (value) {
                              if (value == null) {
                                return 'Please select growth stage';
                              }
                              return null;
                            },
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: AppSizes.paddingLarge),

              // Get Recommendations Button
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _getRecommendations,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primary,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
                    ),
                  ),
                  child: const Text(
                    'Get AI Recommendations',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                ),
              ),

              const SizedBox(height: AppSizes.paddingLarge),

              // Results Section - Card Layout
              Consumer<AIAdvisorProvider>(
                builder: (context, provider, child) {
                  if (provider.isLoading) {
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(AppSizes.paddingLarge),
                        child: const Center(
                          child: Column(
                            children: [
                              CircularProgressIndicator(),
                              SizedBox(height: 16),
                              Text('Analyzing your requirements...'),
                            ],
                          ),
                        ),
                      ),
                    );
                  }

                  if (provider.error != null) {
                    return Card(
                      child: Padding(
                        padding: const EdgeInsets.all(AppSizes.paddingLarge),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Icon(Icons.error_outline, color: Colors.red.shade700),
                                const SizedBox(width: 8),
                                Text(
                                  'Error',
                                  style: TextStyle(
                                    color: Colors.red.shade700,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Text(
                              provider.error!,
                              style: TextStyle(color: Colors.red.shade700),
                            ),
                          ],
                        ),
                      ),
                    );
                  }

                  if (provider.recommendations != null) {
                    return _buildResultsSection(provider);
                  }

                  return const SizedBox.shrink();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildResultsSection(AIAdvisorProvider provider) {
    final recommendations = provider.recommendations!;
    
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Results Header
            Text(
              'Recommendations',
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: AppSizes.paddingMedium),

            // Explanation
            if (recommendations.explanation.isNotEmpty) ...[
              Text(
                recommendations.explanation,
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  color: Colors.grey[600],
                ),
              ),
              const SizedBox(height: AppSizes.paddingMedium),
            ],

            // Regional Insights
            if (recommendations.regionalInsights != null && recommendations.regionalInsights!.isNotEmpty) ...[
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(AppSizes.paddingMedium),
                decoration: BoxDecoration(
                  color: Colors.blue[50],
                  border: Border.all(color: Colors.blue[200]!),
                  borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
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
                      recommendations.regionalInsights!,
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        color: Colors.blue[700],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: AppSizes.paddingMedium),
            ],

            // Recommended Products
            if (recommendations.recommendedProducts.isNotEmpty) ...[
              ...recommendations.recommendedProducts.map((product) => _buildProductCard(product)),
            ],

            // New Analysis Button
            const SizedBox(height: AppSizes.paddingMedium),
            SizedBox(
              width: double.infinity,
              child: OutlinedButton.icon(
                onPressed: () => provider.clearResults(),
                icon: const Icon(Icons.refresh),
                label: const Text('New Analysis'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppColors.primary,
                  side: BorderSide(color: AppColors.primary),
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildProductCard(RecommendedProduct product) {
    print('🔍 Building product card - Name: ${product.name}, Product ID: ${product.productId}');
    return Card(
      margin: const EdgeInsets.only(bottom: AppSizes.paddingMedium),
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingMedium),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Product Header with View Product Button
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: Text(
                    product.name,
                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                if (product.productId != null && product.productId!.isNotEmpty)
                  IconButton(
                    onPressed: () => _viewProduct(product.productId!),
                    icon: const Icon(Icons.open_in_new, size: 20),
                    style: IconButton.styleFrom(
                      foregroundColor: AppColors.primary,
                      side: BorderSide(color: AppColors.primary),
                      padding: const EdgeInsets.all(8),
                    ),
                    tooltip: 'View Product',
                  ),
              ],
            ),
            const SizedBox(height: 8),

            // Product Description
            Text(
              product.description,
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Colors.grey[600],
              ),
            ),
            const SizedBox(height: 12),

            // Product Details
            Column(
              children: [
                _buildDetailRow('Application', product.applicationMethod),
                _buildDetailRow('Dosage', product.dosage),
                _buildDetailRow('Timing', product.timing),
                _buildDetailRow('Expected Benefit', product.expectedBenefit),
                if (product.category != null && product.category!.isNotEmpty)
                  _buildDetailRow('Category', product.category!),
                if (product.regionalAdaptation != null && product.regionalAdaptation!.isNotEmpty)
                  _buildDetailRow('Regional Notes', product.regionalAdaptation!),
              ],
            ),
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
                fontWeight: FontWeight.bold,
                color: Colors.grey[700],
              ),
            ),
          ),
          Expanded(
            child: Text(
              value,
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Colors.grey[600],
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _viewProduct(String productId) {
    print('🔍 View Product clicked - Product ID: $productId');
    Navigator.pushNamed(
      context,
      '/product-detail',
      arguments: productId,
    );
  }

  void _getRecommendations() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    // Validate pilot country
    if (_selectedCountry == null) {
      _showErrorSnackBar('Please select a pilot country');
      return;
    }

    // Since we're using pilotCountriesData for the dropdown, all selected countries are valid
    final region = _selectedCity ?? _selectedState?.name ?? _selectedCountry!.name;
    
    await context.read<AIAdvisorProvider>().getRecommendations(
      country: _selectedCountry!.name,
      state: _selectedState?.name ?? '',
      region: region,
      crop: _selectedCrop!,
      soil: _selectedSoil!,
      moisture: _selectedMoisture!,
      growthStage: _selectedGrowthStage!,
    );
  }

  void _showErrorSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Colors.red,
        behavior: SnackBarBehavior.floating,
      ),
    );
  }
}
