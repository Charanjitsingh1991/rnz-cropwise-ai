import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/auth_provider.dart';


class AnalyticsScreen extends StatefulWidget {
  const AnalyticsScreen({super.key});

  @override
  State<AnalyticsScreen> createState() => _AnalyticsScreenState();
}

class _AnalyticsScreenState extends State<AnalyticsScreen> {

  
  bool _isLoading = true;
  String? _error;
  Map<String, dynamic> _analytics = {};

  @override
  void initState() {
    super.initState();
    _loadAnalytics();
  }

  Future<void> _loadAnalytics() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      // For now, we'll use mock data since the backend might not have analytics endpoints
      // In a real app, you would call: final response = await _apiService.get('/analytics');
      
      // Mock analytics data
      _analytics = {
        'totalRecommendations': 45,
        'totalProductsViewed': 128,
        'totalBrochuresDownloaded': 23,
        'totalQuoteRequests': 12,
        'totalSupportTickets': 8,
        'favoriteProducts': 15,
        'recentActivity': [
          {
            'type': 'recommendation',
            'title': 'AI Crop Advisor used',
            'description': 'Got recommendations for tomatoes',
            'timestamp': DateTime.now().subtract(const Duration(hours: 2)),
          },
          {
            'type': 'product',
            'title': 'Product viewed',
            'description': 'Viewed NPK 15-15-15',
            'timestamp': DateTime.now().subtract(const Duration(hours: 4)),
          },
          {
            'type': 'brochure',
            'title': 'Brochure downloaded',
            'description': 'Downloaded NPK 10-10-40+ brochure',
            'timestamp': DateTime.now().subtract(const Duration(days: 1)),
          },
          {
            'type': 'quote',
            'title': 'Quote requested',
            'description': 'Requested quote for NPK 13-00-45',
            'timestamp': DateTime.now().subtract(const Duration(days: 2)),
          },
        ],
        'topProducts': [
          {'name': 'NPK 15-15-15', 'views': 25},
          {'name': 'NPK 10-10-40+', 'views': 18},
          {'name': 'NPK 13-00-45', 'views': 15},
          {'name': 'Fe EDTA 12%', 'views': 12},
          {'name': 'Zn EDTA 15%', 'views': 10},
        ],
        'cropRecommendations': [
          {'crop': 'Tomatoes', 'count': 12},
          {'crop': 'Wheat', 'count': 8},
          {'crop': 'Rice', 'count': 6},
          {'crop': 'Cotton', 'count': 5},
          {'crop': 'Grapes', 'count': 4},
        ],
      };
    } catch (error) {
      setState(() {
        _error = error.toString();
      });
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Analytics'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadAnalytics,
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
              ? _buildErrorState()
              : SingleChildScrollView(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Welcome Section
                      Consumer<AuthProvider>(
                        builder: (context, authProvider, child) {
                          return Container(
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
                                  Icons.analytics,
                                  size: 48,
                                  color: Colors.white,
                                ),
                                const SizedBox(height: 12),
                                Text(
                                  'Your Activity Overview',
                                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                const SizedBox(height: 8),
                                Text(
                                  'Track your farming journey with RNZ CropWise',
                                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                                    color: Colors.white.withValues(alpha: 0.9),
                                  ),
                                  textAlign: TextAlign.center,
                                ),
                              ],
                            ),
                          );
                        },
                      ),
                      
                      const SizedBox(height: 24),
                      
                      // Statistics Cards
                      Text(
                        'Statistics',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 16),
                      
                      GridView.count(
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        crossAxisCount: 2,
                        crossAxisSpacing: 16,
                        mainAxisSpacing: 16,
                        childAspectRatio: 1.2,
                        children: [
                          _buildStatCard(
                            'AI Recommendations',
                            _analytics['totalRecommendations']?.toString() ?? '0',
                            Icons.psychology,
                            Colors.blue,
                          ),
                          _buildStatCard(
                            'Products Viewed',
                            _analytics['totalProductsViewed']?.toString() ?? '0',
                            Icons.visibility,
                            Colors.green,
                          ),
                          _buildStatCard(
                            'Brochures Downloaded',
                            _analytics['totalBrochuresDownloaded']?.toString() ?? '0',
                            Icons.download,
                            Colors.orange,
                          ),
                          _buildStatCard(
                            'Quote Requests',
                            _analytics['totalQuoteRequests']?.toString() ?? '0',
                            Icons.request_quote,
                            Colors.purple,
                          ),
                        ],
                      ),
                      
                      const SizedBox(height: 24),
                      
                      // Top Products
                      Text(
                        'Most Viewed Products',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 16),
                      
                      Card(
                        child: Padding(
                          padding: const EdgeInsets.all(16),
                          child: Column(
                            children: [
                              ...(_analytics['topProducts'] as List<dynamic>? ?? []).map((product) {
                                return Padding(
                                  padding: const EdgeInsets.symmetric(vertical: 4),
                                  child: Row(
                                    children: [
                                      Expanded(
                                        child: Text(
                                          product['name'] ?? '',
                                          style: const TextStyle(
                                            fontWeight: FontWeight.w500,
                                          ),
                                        ),
                                      ),
                                      Container(
                                        padding: const EdgeInsets.symmetric(
                                          horizontal: 8,
                                          vertical: 2,
                                        ),
                                        decoration: BoxDecoration(
                                          color: Colors.green[100],
                                          borderRadius: BorderRadius.circular(12),
                                        ),
                                        child: Text(
                                          '${product['views']} views',
                                          style: const TextStyle(
                                            fontSize: 12,
                                            color: Colors.green,
                                            fontWeight: FontWeight.w500,
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                );
                              }),
                            ],
                          ),
                        ),
                      ),
                      
                      const SizedBox(height: 24),
                      
                      // Crop Recommendations
                      Text(
                        'Crop Recommendations',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 16),
                      
                      Card(
                        child: Padding(
                          padding: const EdgeInsets.all(16),
                          child: Column(
                            children: [
                              ...(_analytics['cropRecommendations'] as List<dynamic>? ?? []).map((crop) {
                                return Padding(
                                  padding: const EdgeInsets.symmetric(vertical: 4),
                                  child: Row(
                                    children: [
                                      Expanded(
                                        child: Text(
                                          crop['crop'] ?? '',
                                          style: const TextStyle(
                                            fontWeight: FontWeight.w500,
                                          ),
                                        ),
                                      ),
                                      Container(
                                        padding: const EdgeInsets.symmetric(
                                          horizontal: 8,
                                          vertical: 2,
                                        ),
                                        decoration: BoxDecoration(
                                          color: Colors.blue[100],
                                          borderRadius: BorderRadius.circular(12),
                                        ),
                                        child: Text(
                                          '${crop['count']} times',
                                          style: const TextStyle(
                                            fontSize: 12,
                                            color: Colors.blue,
                                            fontWeight: FontWeight.w500,
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                );
                              }),
                            ],
                          ),
                        ),
                      ),
                      
                      const SizedBox(height: 24),
                      
                      // Recent Activity
                      Text(
                        'Recent Activity',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 16),
                      
                      Card(
                        child: Padding(
                          padding: const EdgeInsets.all(16),
                          child: Column(
                            children: [
                              ...(_analytics['recentActivity'] as List<dynamic>? ?? []).map((activity) {
                                final timestamp = activity['timestamp'] as DateTime?;
                                return ListTile(
                                  leading: _getActivityIcon(activity['type']),
                                  title: Text(
                                    activity['title'] ?? '',
                                    style: const TextStyle(
                                      fontWeight: FontWeight.w600,
                                    ),
                                  ),
                                  subtitle: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(activity['description'] ?? ''),
                                      if (timestamp != null)
                                        Text(
                                          _formatTimestamp(timestamp),
                                          style: const TextStyle(
                                            fontSize: 12,
                                            color: Colors.grey,
                                          ),
                                        ),
                                    ],
                                  ),
                                );
                              }),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
    );
  }

  Widget _buildStatCard(String title, String value, IconData icon, Color color) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: 32,
              color: color,
            ),
            const SizedBox(height: 8),
            Text(
              value,
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                fontWeight: FontWeight.bold,
                color: color,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              title,
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Colors.grey[600],
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  Widget _getActivityIcon(String? type) {
    IconData icon;
    Color color;
    
    switch (type) {
      case 'recommendation':
        icon = Icons.psychology;
        color = Colors.blue;
        break;
      case 'product':
        icon = Icons.inventory;
        color = Colors.green;
        break;
      case 'brochure':
        icon = Icons.description;
        color = Colors.orange;
        break;
      case 'quote':
        icon = Icons.request_quote;
        color = Colors.purple;
        break;
      default:
        icon = Icons.info;
        color = Colors.grey;
    }
    
    return Container(
      width: 40,
      height: 40,
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Icon(
        icon,
        size: 20,
        color: color,
      ),
    );
  }

  String _formatTimestamp(DateTime timestamp) {
    final now = DateTime.now();
    final difference = now.difference(timestamp);
    
    if (difference.inDays > 0) {
      return '${difference.inDays} day${difference.inDays == 1 ? '' : 's'} ago';
    } else if (difference.inHours > 0) {
      return '${difference.inHours} hour${difference.inHours == 1 ? '' : 's'} ago';
    } else if (difference.inMinutes > 0) {
      return '${difference.inMinutes} minute${difference.inMinutes == 1 ? '' : 's'} ago';
    } else {
      return 'Just now';
    }
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
            'Failed to load analytics',
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
          ElevatedButton.icon(
            onPressed: _loadAnalytics,
            icon: const Icon(Icons.refresh),
            label: const Text('Retry'),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.green[600],
              foregroundColor: Colors.white,
            ),
          ),
        ],
      ),
    );
  }
}
