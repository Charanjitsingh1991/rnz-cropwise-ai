import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../services/api_service.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';
import 'brochure_viewer_screen.dart';

class BrochureRequestsScreen extends StatefulWidget {
  const BrochureRequestsScreen({super.key});

  @override
  State<BrochureRequestsScreen> createState() => _BrochureRequestsScreenState();
}

class _BrochureRequestsScreenState extends State<BrochureRequestsScreen> {
  bool _isLoading = true;
  String? _error;
  List<Map<String, dynamic>> _brochureRequests = [];
  List<Map<String, dynamic>> _downloadedBrochures = [];

  @override
  void initState() {
    super.initState();
    _loadBrochureRequests();
  }

  Future<void> _loadBrochureRequests() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      // Load user's brochure requests
      final requestsResponse = await ApiService().getUserBrochureRequests();
      
      if (requestsResponse['success'] == true) {
        setState(() {
          _brochureRequests = List<Map<String, dynamic>>.from(requestsResponse['data'] ?? []);
        });
      }

      // Load downloaded brochures (if available)
      final downloadsResponse = await ApiService().get('/brochures/downloaded');
      if (downloadsResponse['success'] == true) {
        setState(() {
          _downloadedBrochures = List<Map<String, dynamic>>.from(downloadsResponse['data'] ?? []);
        });
      }

      setState(() {
        _isLoading = false;
      });
    } catch (error) {
      setState(() {
        _error = 'Failed to load brochure requests: ${error.toString()}';
        _isLoading = false;
      });
    }
  }

  String _getStatusColor(String status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return '#FFA000'; // Orange
      case 'approved':
        return '#388E3C'; // Green
      case 'rejected':
        return '#D32F2F'; // Red
      case 'completed':
        return '#1976D2'; // Blue
      default:
        return '#757575'; // Grey
    }
  }

  String _getStatusText(String status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'Pending Review';
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Brochure Requests'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadBrochureRequests,
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
              ? _buildErrorState()
              : RefreshIndicator(
                  onRefresh: _loadBrochureRequests,
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Downloaded Brochures Section
                        if (_downloadedBrochures.isNotEmpty) ...[
                          _buildSectionTitle('Downloaded Brochures'),
                          const SizedBox(height: 16),
                          ..._downloadedBrochures.map((brochure) => _buildDownloadedBrochureCard(brochure)),
                          const SizedBox(height: 24),
                        ],

                        // Brochure Requests Section
                        _buildSectionTitle('My Requests'),
                        const SizedBox(height: 16),
                        
                        if (_brochureRequests.isNotEmpty) ...[
                          ..._brochureRequests.map((request) => _buildRequestCard(request)),
                        ] else ...[
                          _buildEmptyState(),
                        ],
                      ],
                    ),
                  ),
                ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Text(
      title,
      style: Theme.of(context).textTheme.titleLarge?.copyWith(
        fontWeight: FontWeight.bold,
        color: Colors.green[700],
      ),
    );
  }

  Widget _buildDownloadedBrochureCard(Map<String, dynamic> brochure) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: ListTile(
        leading: Container(
          width: 48,
          height: 48,
          decoration: BoxDecoration(
            color: Colors.red[50],
            borderRadius: BorderRadius.circular(8),
          ),
          child: Icon(
            Icons.picture_as_pdf,
            color: Colors.red[600],
            size: 24,
          ),
        ),
        title: Text(
          brochure['title'] ?? 'Brochure',
          style: const TextStyle(fontWeight: FontWeight.w600),
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(brochure['productName'] ?? 'Unknown Product'),
            if (brochure['downloadedAt'] != null)
              Text(
                'Downloaded: ${_formatDate(brochure['downloadedAt'])}',
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.grey[600],
                ),
              ),
          ],
        ),
        trailing: CustomButton(
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
      ),
    );
  }

  Widget _buildRequestCard(Map<String, dynamic> request) {
    final status = request['status'] ?? 'pending';
    final statusColor = _getStatusColor(status);
    final statusText = _getStatusText(status);

    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        request['productName'] ?? 'Unknown Product',
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Requested: ${_formatDate(request['createdAt'])}',
                        style: TextStyle(
                          color: Colors.grey[600],
                          fontSize: 12,
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Color(int.parse(statusColor.replaceAll('#', '0xFF'))),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    statusText,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
            
            if (request['adminMessage'] != null) ...[
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.blue[50],
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: Colors.blue[200]!),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Admin Response:',
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        color: Colors.blue[700],
                        fontSize: 12,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      request['adminMessage'],
                      style: TextStyle(
                        color: Colors.blue[800],
                        fontSize: 14,
                      ),
                    ),
                  ],
                ),
              ),
            ],

            if (status == 'approved' && request['brochureUrl'] != null) ...[
              const SizedBox(height: 12),
              CustomButton(
                text: 'Download Brochure',
                onPressed: () {
                                   Navigator.push(
                   context,
                   MaterialPageRoute(
                     builder: (context) => BrochureViewerScreen(
                       title: request['productName'] ?? 'Brochure',
                       url: request['brochureUrl'],
                       brochureId: request['brochureId'],
                     ),
                   ),
                 );
                },
                backgroundColor: Colors.green[600],
                textColor: Colors.white,
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildEmptyState() {
    return Container(
      padding: const EdgeInsets.all(32),
      child: Column(
        children: [
          Icon(
            Icons.description_outlined,
            size: 64,
            color: Colors.grey[400],
          ),
          const SizedBox(height: 16),
          Text(
            'No Brochure Requests',
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.bold,
              color: Colors.grey[700],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'You haven\'t requested any brochures yet. Browse products and request brochures to see them here.',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[600],
            ),
            textAlign: TextAlign.center,
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
            'Failed to load brochure requests',
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
            onPressed: _loadBrochureRequests,
            backgroundColor: Colors.green[600],
            textColor: Colors.white,
          ),
        ],
      ),
    );
  }

  String _formatDate(String? dateString) {
    if (dateString == null) return 'Unknown date';
    
    try {
      final date = DateTime.parse(dateString);
      return '${date.day}/${date.month}/${date.year}';
    } catch (e) {
      return 'Invalid date';
    }
  }
}
