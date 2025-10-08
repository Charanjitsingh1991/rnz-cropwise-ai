import 'package:flutter/material.dart';
import '../../models/quote_request_model.dart';

import '../../widgets/custom_button.dart';
import 'package:intl/intl.dart';

class QuoteRequestsScreen extends StatefulWidget {
  const QuoteRequestsScreen({super.key});

  @override
  State<QuoteRequestsScreen> createState() => _QuoteRequestsScreenState();
}

class _QuoteRequestsScreenState extends State<QuoteRequestsScreen> {
  List<QuoteRequest> _quoteRequests = [];
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadQuoteRequests();
  }

  Future<void> _loadQuoteRequests() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      // Use static quote request data instead of API call
      final List<Map<String, dynamic>> requestsData = [
        {
          'id': '1',
          'productId': 'npk-15-15-15',
          'productName': 'NPK 15-15-15',
          'userName': 'John Doe',
          'userEmail': 'john@example.com',
          'location': 'Punjab, India',
          'quantity': '50 bags',
          'message': 'Need bulk order for wheat farming season',
          'status': 'Pending',
          'createdAt': DateTime.now().subtract(const Duration(days: 5)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 5)),
        },
        {
          'id': '2',
          'productId': 'npk-13-00-45',
          'productName': 'NPK 13-00-45',
          'userName': 'Jane Smith',
          'userEmail': 'jane@example.com',
          'location': 'Haryana, India',
          'quantity': '25 bags',
          'message': 'Looking for high potassium fertilizer for fruit crops',
          'status': 'Approved',
          'createdAt': DateTime.now().subtract(const Duration(days: 10)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 8)),
        },
        {
          'id': '3',
          'productId': 'fe-edta-12',
          'productName': 'Fe EDTA 12%',
          'userName': 'Mike Johnson',
          'userEmail': 'mike@example.com',
          'location': 'Uttar Pradesh, India',
          'quantity': '10 kg',
          'message': 'Need iron supplement for citrus trees',
          'status': 'Rejected',
          'createdAt': DateTime.now().subtract(const Duration(days: 15)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 12)),
        },
      ];
      
      _quoteRequests = requestsData
          .map((json) => QuoteRequest.fromJson(json))
          .toList();
    } catch (error) {
      debugPrint('Error loading quote requests: $error');
      setState(() {
        _error = error.toString();
      });
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  Color _getStatusColor(String status) {
    switch (status) {
      case 'Pending':
        return Colors.orange[600]!;
      case 'Contacted':
        return Colors.blue[600]!;
      case 'Closed':
        return Colors.grey[600]!;
      default:
        return Colors.grey[600]!;
    }
  }

  String _formatDate(DateTime date) {
    return DateFormat('MMM dd, yyyy').format(date);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Quote Requests'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadQuoteRequests,
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
              : _quoteRequests.isEmpty
                  ? _buildEmptyState()
                  : _buildQuoteRequestsList(),
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
            'Failed to load quote requests',
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
            onPressed: _loadQuoteRequests,
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
            Icons.request_quote_outlined,
            size: 64,
            color: Colors.grey[400],
          ),
          const SizedBox(height: 16),
          Text(
            'No quote requests yet',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.grey[600],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'Your quote requests will appear here once you submit them',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[500],
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

  Widget _buildQuoteRequestsList() {
    return RefreshIndicator(
      onRefresh: _loadQuoteRequests,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _quoteRequests.length,
        itemBuilder: (context, index) {
          final request = _quoteRequests[index];
          return _buildQuoteRequestCard(request);
        },
      ),
    );
  }

  Widget _buildQuoteRequestCard(QuoteRequest request) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header with product info and status
            Row(
              children: [
                // Product Image
                ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: Image.network(
                    request.productImageUrl,
                    width: 50,
                    height: 50,
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return Container(
                        width: 50,
                        height: 50,
                        color: Colors.grey[200],
                        child: Icon(
                          Icons.image_not_supported,
                          color: Colors.grey[400],
                          size: 24,
                        ),
                      );
                    },
                  ),
                ),
                const SizedBox(width: 12),
                
                // Product Details
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        request.productName,
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          fontWeight: FontWeight.bold,
                          color: Colors.green[700],
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Quantity: ${request.quantity} units',
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: Colors.grey[600],
                        ),
                      ),
                    ],
                  ),
                ),
                
                // Status Badge
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: _getStatusColor(request.status),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    request.status,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
            
            const SizedBox(height: 16),
            
            // Request Details
            _buildDetailRow('Requested by', request.userName),
            _buildDetailRow('Email', request.userEmail),
            _buildDetailRow('Location', request.location),
            _buildDetailRow('Date', _formatDate(request.createdAt)),
            
            const SizedBox(height: 16),
            
            // Status-specific message
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: _getStatusColor(request.status).withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(
                  color: _getStatusColor(request.status).withValues(alpha: 0.3),
                ),
              ),
              child: Row(
                children: [
                  Icon(
                    _getStatusIcon(request.status),
                    color: _getStatusColor(request.status),
                    size: 20,
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      _getStatusMessage(request.status),
                      style: const TextStyle(
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
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
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Colors.grey[800],
              ),
            ),
          ),
        ],
      ),
    );
  }

  IconData _getStatusIcon(String status) {
    switch (status) {
      case 'Pending':
        return Icons.schedule;
      case 'Contacted':
        return Icons.phone;
      case 'Closed':
        return Icons.check_circle;
      default:
        return Icons.info;
    }
  }

  String _getStatusMessage(String status) {
    switch (status) {
      case 'Pending':
        return 'Your quote request is being reviewed. We will contact you soon.';
      case 'Contacted':
        return 'Our sales team has contacted you. Please check your email or phone.';
      case 'Closed':
        return 'This quote request has been completed.';
      default:
        return 'Quote request status updated.';
    }
  }
}
