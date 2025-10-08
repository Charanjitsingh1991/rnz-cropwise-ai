import 'package:flutter/material.dart';
import '../../models/faq_model.dart';

import '../../widgets/custom_button.dart';
import 'package:intl/intl.dart';

class FAQScreen extends StatefulWidget {
  const FAQScreen({super.key});

  @override
  State<FAQScreen> createState() => _FAQScreenState();
}

class _FAQScreenState extends State<FAQScreen> {
  List<FAQ> _allFaqs = [];
  List<FAQ> _filteredFaqs = [];
  bool _isLoading = true;
  String? _error;
  String _searchQuery = '';
  String? _selectedCategory;
  final TextEditingController _searchController = TextEditingController();

  // Category order for display
  final List<String> _categoryOrder = [
    'Product Categories & General Use',
    'Crop-Specific Recommendations',
    'Soil Condition & Environment',
    'Nutrient Deficiency Solutions',
    'Special & Value-Added Products',
    'Application & Safety',
    'General',
  ];

  @override
  void initState() {
    super.initState();
    _loadFAQs();
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  Future<void> _loadFAQs() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      // Use static FAQ data instead of API call
      final List<Map<String, dynamic>> faqsData = [
        {
          'id': '1',
          'question': 'What are the different types of NPK fertilizers available?',
          'answer': 'We offer various NPK formulations including balanced NPK (15-15-15, 20-20-20), high nitrogen (28-14-14), high phosphorus (10-26-26), and high potassium (13-00-45) fertilizers. Each formulation is designed for specific crop needs and growth stages.',
          'category': 'Product Categories & General Use',
          'keywords': ['NPK', 'fertilizers', 'formulations', 'nutrients'],
          'createdAt': DateTime.now().subtract(const Duration(days: 30)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 5)),
        },
        {
          'id': '2',
          'question': 'How do I choose the right fertilizer for my crop?',
          'answer': 'Consider your crop type, growth stage, soil conditions, and nutrient deficiencies. Use our AI Crop Advisor for personalized recommendations based on your specific location and crop requirements.',
          'category': 'Crop-Specific Recommendations',
          'keywords': ['fertilizer selection', 'crop requirements', 'AI advisor'],
          'createdAt': DateTime.now().subtract(const Duration(days: 25)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 10)),
        },
        {
          'id': '3',
          'question': 'What are micronutrients and when should I use them?',
          'answer': 'Micronutrients like Zinc, Iron, Manganese, and Boron are essential in small quantities. Use them when soil tests show deficiencies or when crops show specific deficiency symptoms like yellowing leaves or stunted growth.',
          'category': 'Nutrient Deficiency Solutions',
          'keywords': ['micronutrients', 'zinc', 'iron', 'deficiency'],
          'createdAt': DateTime.now().subtract(const Duration(days: 20)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 8)),
        },
        {
          'id': '4',
          'question': 'How should I apply water-soluble fertilizers?',
          'answer': 'Water-soluble fertilizers can be applied through fertigation, foliar spray, or soil drenching. Follow the recommended dosage and application frequency for best results. Always test on a small area first.',
          'category': 'Application & Safety',
          'keywords': ['water-soluble', 'fertigation', 'foliar spray', 'application'],
          'createdAt': DateTime.now().subtract(const Duration(days: 18)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 3)),
        },
        {
          'id': '5',
          'question': 'What is the difference between granular and water-soluble NPK?',
          'answer': 'Granular NPK provides slow-release nutrients over time, while water-soluble NPK offers immediate nutrient availability. Granular is better for soil application, while water-soluble is ideal for fertigation and foliar feeding.',
          'category': 'Product Categories & General Use',
          'keywords': ['granular', 'water-soluble', 'slow-release', 'immediate'],
          'createdAt': DateTime.now().subtract(const Duration(days: 15)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 7)),
        },
        {
          'id': '6',
          'question': 'How do I identify nutrient deficiencies in my crops?',
          'answer': 'Look for visual symptoms like yellowing leaves (nitrogen deficiency), purple leaves (phosphorus deficiency), or brown leaf edges (potassium deficiency). Use our disease detection feature or consult with our experts for accurate diagnosis.',
          'category': 'Nutrient Deficiency Solutions',
          'keywords': ['deficiency symptoms', 'visual diagnosis', 'nutrient identification'],
          'createdAt': DateTime.now().subtract(const Duration(days: 12)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 2)),
        },
        {
          'id': '7',
          'question': 'What are the safety precautions when using fertilizers?',
          'answer': 'Always wear protective gear, follow recommended dosages, avoid application during windy conditions, and keep fertilizers away from water sources. Store in a cool, dry place and keep out of reach of children and animals.',
          'category': 'Application & Safety',
          'keywords': ['safety', 'protective gear', 'storage', 'precautions'],
          'createdAt': DateTime.now().subtract(const Duration(days: 10)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 1)),
        },
        {
          'id': '8',
          'question': 'How often should I apply fertilizers?',
          'answer': 'Application frequency depends on crop type, growth stage, and fertilizer type. Generally, apply at planting, during vegetative growth, and at flowering/fruiting stages. Follow specific product recommendations for best results.',
          'category': 'Application & Safety',
          'keywords': ['application frequency', 'growth stages', 'timing'],
          'createdAt': DateTime.now().subtract(const Duration(days: 8)),
          'updatedAt': DateTime.now(),
        },
      ];
      
      _allFaqs = faqsData
          .map((json) => FAQ.fromJson(json))
          .toList();
      _filteredFaqs = _allFaqs;
    } catch (error) {
      debugPrint('Error loading FAQs: $error');
      setState(() {
        _error = error.toString();
      });
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  void _filterFAQs() {
    setState(() {
      _filteredFaqs = _allFaqs.where((faq) {
        final matchesSearch = _searchQuery.isEmpty ||
            faq.question.toLowerCase().contains(_searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().contains(_searchQuery.toLowerCase()) ||
            faq.keywords.any((keyword) => keyword.toLowerCase().contains(_searchQuery.toLowerCase()));
        
        final matchesCategory = _selectedCategory == null || faq.category == _selectedCategory;
        
        return matchesSearch && matchesCategory;
      }).toList();
    });
  }

  void _onSearchChanged(String query) {
    setState(() {
      _searchQuery = query;
    });
    _filterFAQs();
  }

  void _onCategoryChanged(String? category) {
    setState(() {
      _selectedCategory = category;
    });
    _filterFAQs();
  }

  Map<String, List<FAQ>> _groupFAQsByCategory(List<FAQ> faqs) {
    final Map<String, List<FAQ>> grouped = {};
    
    for (final faq in faqs) {
      final category = faq.category ?? 'General';
      if (!grouped.containsKey(category)) {
        grouped[category] = [];
      }
      grouped[category]!.add(faq);
    }
    
    return grouped;
  }

  List<String> _getAvailableCategories() {
    final categories = _allFaqs.map((faq) => faq.category ?? 'General').toSet().toList();
    categories.sort((a, b) {
      final aIndex = _categoryOrder.indexOf(a);
      final bIndex = _categoryOrder.indexOf(b);
      if (aIndex == -1 && bIndex == -1) return a.compareTo(b);
      if (aIndex == -1) return 1;
      if (bIndex == -1) return -1;
      return aIndex.compareTo(bIndex);
    });
    return categories;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Frequently Asked Questions'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadFAQs,
          ),
        ],
      ),
      body: _isLoading
          ? const Center(
              child: CircularProgressIndicator(
                valueColor: AlwaysStoppedAnimation<Color>(Colors.green),
              ),
            )
          : _error != null
              ? _buildErrorState()
              : Column(
                  children: [
                    _buildSearchAndFilter(),
                    Expanded(
                      child: _filteredFaqs.isEmpty
                          ? _buildEmptyState()
                          : _buildFAQsList(),
                    ),
                  ],
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
            'Failed to load FAQs',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.red[700],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            _error ?? 'An error occurred',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[600],
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 24),
          CustomButton(
            text: 'Retry',
            onPressed: _loadFAQs,
            backgroundColor: Colors.green[600],
            textColor: Colors.white,
          ),
        ],
      ),
    );
  }

  Widget _buildSearchAndFilter() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withValues(alpha: 0.1),
            spreadRadius: 1,
            blurRadius: 3,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        children: [
          // Search Bar
          TextField(
            controller: _searchController,
            onChanged: _onSearchChanged,
            decoration: InputDecoration(
              hintText: 'Search FAQs...',
              prefixIcon: const Icon(Icons.search),
              suffixIcon: _searchQuery.isNotEmpty
                  ? IconButton(
                      icon: const Icon(Icons.clear),
                      onPressed: () {
                        _searchController.clear();
                        _onSearchChanged('');
                      },
                    )
                  : null,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(12),
                borderSide: BorderSide(color: Colors.grey[300]!),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(12),
                borderSide: BorderSide(color: Colors.green[600]!),
              ),
            ),
          ),
          const SizedBox(height: 12),
          
          // Category Filter
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                _buildCategoryChip(null, 'All'),
                const SizedBox(width: 8),
                ..._getAvailableCategories().map((category) => Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: _buildCategoryChip(category, category),
                )),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCategoryChip(String? category, String label) {
    final isSelected = _selectedCategory == category;
    return FilterChip(
      label: Text(label),
      selected: isSelected,
      onSelected: (selected) {
        _onCategoryChanged(selected ? category : null);
      },
      backgroundColor: Colors.grey[100],
      selectedColor: Colors.green[100],
      checkmarkColor: Colors.green[600],
      labelStyle: const TextStyle(
        color: Colors.grey,
        fontWeight: FontWeight.normal,
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.help_outline,
            size: 64,
            color: Colors.grey[400],
          ),
          const SizedBox(height: 16),
          Text(
            'No FAQs found',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.grey[600],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            _searchQuery.isNotEmpty
                ? 'Try adjusting your search terms'
                : 'Check back later for updated FAQs',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[500],
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

  Widget _buildFAQsList() {
    final groupedFaqs = _groupFAQsByCategory(_filteredFaqs);
    
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: groupedFaqs.length,
      itemBuilder: (context, index) {
        final category = groupedFaqs.keys.elementAt(index);
        final faqs = groupedFaqs[category]!;
        
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Category Header
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              child: Text(
                category,
                style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Colors.green[700],
                ),
              ),
            ),
            
            // FAQs in this category
            ...faqs.map((faq) => _buildFAQCard(faq)),
          ],
        );
      },
    );
  }

  Widget _buildFAQCard(FAQ faq) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: ExpansionTile(
        title: Text(
          faq.question,
          style: Theme.of(context).textTheme.titleMedium?.copyWith(
            fontWeight: FontWeight.w600,
            color: Colors.grey[800],
          ),
        ),
        subtitle: Padding(
          padding: const EdgeInsets.only(top: 8),
          child: Wrap(
            spacing: 4,
            runSpacing: 4,
            children: faq.keywords.take(3).map((keyword) => Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
              decoration: BoxDecoration(
                color: Colors.green[50],
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: Colors.green[200]!),
              ),
              child: Text(
                keyword,
                style: const TextStyle(
                  fontSize: 10,
                  color: Colors.green,
                  fontWeight: FontWeight.w500,
                ),
              ),
            )).toList(),
          ),
        ),
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  faq.answer,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Colors.grey[700],
                    height: 1.5,
                  ),
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    Icon(
                      Icons.schedule,
                      size: 14,
                      color: Colors.grey[500],
                    ),
                    const SizedBox(width: 4),
                    Text(
                      'Updated ${DateFormat('MMM dd, yyyy').format(faq.updatedAt ?? faq.createdAt)}',
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        color: Colors.grey[500],
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
  }
}
