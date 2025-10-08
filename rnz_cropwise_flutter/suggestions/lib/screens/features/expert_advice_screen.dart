import 'package:flutter/material.dart';
import '../../widgets/custom_button.dart';

class ExpertAdviceScreen extends StatefulWidget {
  const ExpertAdviceScreen({super.key});

  @override
  State<ExpertAdviceScreen> createState() => _ExpertAdviceScreenState();
}

class _ExpertAdviceScreenState extends State<ExpertAdviceScreen> {
  String _selectedCategory = 'All';

  final List<String> _categories = [
    'All',
    'Soil Management',
    'Crop Nutrition',
    'Pest Control',
    'Irrigation',
    'Harvesting',
    'Storage',
  ];

  final List<Map<String, dynamic>> _adviceData = [
    {
      'title': 'Soil Testing Best Practices',
      'category': 'Soil Management',
      'description': 'Regular soil testing is crucial for optimal crop production. Test your soil every 2-3 years to understand nutrient levels and pH.',
      'tips': [
        'Collect soil samples from multiple locations',
        'Test during the same season each year',
        'Focus on the root zone (0-6 inches)',
        'Consider both macro and micronutrients',
      ],
      'icon': Icons.science,
      'color': Colors.brown,
    },
    {
      'title': 'NPK Fertilizer Application',
      'category': 'Crop Nutrition',
      'description': 'Understanding NPK ratios helps in choosing the right fertilizer for your crops and growth stages.',
      'tips': [
        'Nitrogen (N) promotes leaf growth',
        'Phosphorus (P) supports root development',
        'Potassium (K) improves fruit quality',
        'Apply based on soil test results',
      ],
      'icon': Icons.eco,
      'color': Colors.green,
    },
    {
      'title': 'Integrated Pest Management',
      'category': 'Pest Control',
      'description': 'IPM combines biological, cultural, and chemical methods to control pests while minimizing environmental impact.',
      'tips': [
        'Monitor pest populations regularly',
        'Use beneficial insects when possible',
        'Rotate crops to break pest cycles',
        'Apply pesticides only when necessary',
      ],
      'icon': Icons.bug_report,
      'color': Colors.red,
    },
    {
      'title': 'Efficient Irrigation Methods',
      'category': 'Irrigation',
      'description': 'Proper irrigation ensures optimal water use and prevents water stress in crops.',
      'tips': [
        'Water early morning or evening',
        'Use drip irrigation for efficiency',
        'Monitor soil moisture levels',
        'Adjust based on weather conditions',
      ],
      'icon': Icons.water_drop,
      'color': Colors.blue,
    },
    {
      'title': 'Optimal Harvest Timing',
      'category': 'Harvesting',
      'description': 'Timing is crucial for harvesting to ensure maximum yield and quality.',
      'tips': [
        'Monitor crop maturity indicators',
        'Check weather forecasts',
        'Harvest during dry conditions',
        'Use appropriate harvesting tools',
      ],
      'icon': Icons.agriculture,
      'color': Colors.orange,
    },
    {
      'title': 'Post-Harvest Storage',
      'category': 'Storage',
      'description': 'Proper storage conditions prevent spoilage and maintain crop quality.',
      'tips': [
        'Clean storage facilities thoroughly',
        'Control temperature and humidity',
        'Monitor for pests and diseases',
        'Rotate stored products regularly',
      ],
      'icon': Icons.warehouse,
      'color': Colors.grey,
    },
    {
      'title': 'Organic Farming Practices',
      'category': 'Crop Nutrition',
      'description': 'Organic farming focuses on natural methods to maintain soil health and crop productivity.',
      'tips': [
        'Use compost and organic matter',
        'Practice crop rotation',
        'Employ natural pest control',
        'Maintain soil biodiversity',
      ],
      'icon': Icons.eco,
      'color': Colors.green,
    },
    {
      'title': 'Climate-Smart Agriculture',
      'category': 'Soil Management',
      'description': 'Adapt farming practices to changing climate conditions for sustainable production.',
      'tips': [
        'Choose climate-resilient varieties',
        'Implement water conservation',
        'Use precision agriculture',
        'Monitor climate data',
      ],
      'icon': Icons.wb_sunny,
      'color': Colors.yellow,
    },
  ];

  List<Map<String, dynamic>> get _filteredAdvice {
    if (_selectedCategory == 'All') {
      return _adviceData;
    }
    return _adviceData.where((advice) => advice['category'] == _selectedCategory).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Expert Advice'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
      ),
      body: Column(
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
            ),
            child: Column(
              children: [
                const Icon(
                  Icons.support_agent,
                  size: 48,
                  color: Colors.white,
                ),
                const SizedBox(height: 12),
                Text(
                  'Expert Agricultural Advice',
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Get professional tips and best practices for successful farming',
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Colors.white.withValues(alpha: 0.9),
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
          
          // Category Filter
          Container(
            padding: const EdgeInsets.all(16),
            child: SizedBox(
              height: 40,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: _categories.length,
                itemBuilder: (context, index) {
                  final category = _categories[index];
                  final isSelected = category == _selectedCategory;
                  
                  return Padding(
                    padding: const EdgeInsets.only(right: 8),
                    child: FilterChip(
                      label: Text(category),
                      selected: isSelected,
                      onSelected: (selected) {
                        if (selected) {
                          setState(() {
                            _selectedCategory = category;
                          });
                        }
                      },
                      selectedColor: Colors.green[100],
                      checkmarkColor: Colors.green[700],
                    ),
                  );
                },
              ),
            ),
          ),
          
          // Advice List
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: _filteredAdvice.length,
              itemBuilder: (context, index) {
                final advice = _filteredAdvice[index];
                return Card(
                  margin: const EdgeInsets.only(bottom: 16),
                  child: ExpansionTile(
                    leading: Container(
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                        color: (advice['color'] as Color).withValues(alpha: 0.1),
                        borderRadius: BorderRadius.circular(25),
                      ),
                      child: Icon(
                        advice['icon'] as IconData,
                        color: advice['color'] as Color,
                        size: 24,
                      ),
                    ),
                    title: Text(
                      advice['title'] as String,
                      style: const TextStyle(
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    subtitle: Text(
                      advice['category'] as String,
                      style: const TextStyle(
                        color: Colors.grey,
                        fontSize: 12,
                      ),
                    ),
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              advice['description'] as String,
                              style: const TextStyle(
                                fontSize: 14,
                                height: 1.4,
                              ),
                            ),
                            const SizedBox(height: 16),
                            Text(
                              'Key Tips:',
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.green,
                              ),
                            ),
                            const SizedBox(height: 8),
                            ...(advice['tips'] as List<String>).map((tip) {
                              return Padding(
                                padding: const EdgeInsets.only(bottom: 8),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Icon(
                                      Icons.check_circle,
                                      size: 16,
                                      color: Colors.green[600],
                                    ),
                                    const SizedBox(width: 8),
                                    Expanded(
                                      child: Text(
                                        tip,
                                        style: const TextStyle(
                                          fontSize: 14,
                                          height: 1.3,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              );
                            }),
                            const SizedBox(height: 16),
                            Row(
                              children: [
                                Expanded(
                                  child: CustomButton(
                                    text: 'Save for Later',
                                    onPressed: () {
                                      ScaffoldMessenger.of(context).showSnackBar(
                                        const SnackBar(
                                          content: Text('Advice saved to favorites!'),
                                          backgroundColor: Colors.green,
                                        ),
                                      );
                                    },
                                    isOutlined: true,
                                    backgroundColor: Colors.grey[100],
                                    textColor: Colors.grey[700],
                                  ),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: CustomButton(
                                    text: 'Share',
                                    onPressed: () {
                                      ScaffoldMessenger.of(context).showSnackBar(
                                        const SnackBar(
                                          content: Text('Sharing feature coming soon!'),
                                          backgroundColor: Colors.orange,
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
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
