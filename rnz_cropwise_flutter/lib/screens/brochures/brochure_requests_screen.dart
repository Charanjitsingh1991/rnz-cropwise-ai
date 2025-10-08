import 'package:flutter/material.dart';
import '../../utils/constants.dart';

class BrochureRequestsScreen extends StatefulWidget {
  const BrochureRequestsScreen({super.key});

  @override
  State<BrochureRequestsScreen> createState() => _BrochureRequestsScreenState();
}

class _BrochureRequestsScreenState extends State<BrochureRequestsScreen> {
  List<Map<String, dynamic>> _brochureRequests = [];

  @override
  void initState() {
    super.initState();
    _loadBrochureRequests();
  }

  void _loadBrochureRequests() {
    // Mock data - replace with actual API call
    setState(() {
      _brochureRequests = [
        {
          'id': '1',
          'productName': 'Crop Protection Solutions',
          'requestDate': '2024-01-15',
          'status': 'pending',
          'description': 'Request for detailed product catalog',
        },
        {
          'id': '2',
          'productName': 'Fertilizer Guide',
          'requestDate': '2024-01-10',
          'status': 'approved',
          'description': 'Request for fertilizer application guide',
        },
        {
          'id': '3',
          'productName': 'Seed Varieties',
          'requestDate': '2024-01-08',
          'status': 'delivered',
          'description': 'Request for seed variety information',
        },
      ];
    });
  }

  Color _getStatusColor(String status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return Colors.orange;
      case 'approved':
        return Colors.blue;
      case 'delivered':
        return Colors.green;
      case 'rejected':
        return Colors.red;
      default:
        return Colors.grey;
    }
  }

  IconData _getStatusIcon(String status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return Icons.schedule;
      case 'approved':
        return Icons.check_circle_outline;
      case 'delivered':
        return Icons.done_all;
      case 'rejected':
        return Icons.cancel;
      default:
        return Icons.help_outline;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Brochure Requests'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            onPressed: () {
              // Navigate to create new brochure request
              Navigator.pushNamed(context, '/create-brochure-request');
            },
            icon: const Icon(Icons.add),
          ),
        ],
      ),
      body: _brochureRequests.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.description_outlined,
                    size: 64,
                    color: AppColors.textSecondary,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'No Brochure Requests',
                    style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                      color: AppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'You haven\'t requested any brochures yet',
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      color: AppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 24),
                  ElevatedButton.icon(
                    onPressed: () {
                      Navigator.pushNamed(context, '/create-brochure-request');
                    },
                    icon: const Icon(Icons.add),
                    label: const Text('Request Brochure'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.primary,
                      foregroundColor: Colors.white,
                    ),
                  ),
                ],
              ),
            )
          : ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: _brochureRequests.length,
              itemBuilder: (context, index) {
                final request = _brochureRequests[index];
                return Card(
                  margin: const EdgeInsets.only(bottom: 12),
                  child: ListTile(
                    leading: CircleAvatar(
                      backgroundColor: _getStatusColor(request['status']).withOpacity(0.1),
                      child: Icon(
                        _getStatusIcon(request['status']),
                        color: _getStatusColor(request['status']),
                      ),
                    ),
                    title: Text(
                      request['productName'],
                      style: const TextStyle(fontWeight: FontWeight.w600),
                    ),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(request['description']),
                        const SizedBox(height: 4),
                        Row(
                          children: [
                            Icon(
                              Icons.calendar_today,
                              size: 14,
                              color: AppColors.textSecondary,
                            ),
                            const SizedBox(width: 4),
                            Text(
                              'Requested: ${request['requestDate']}',
                              style: TextStyle(
                                fontSize: 12,
                                color: AppColors.textSecondary,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                    trailing: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: _getStatusColor(request['status']).withOpacity(0.1),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        request['status'].toUpperCase(),
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.w600,
                          color: _getStatusColor(request['status']),
                        ),
                      ),
                    ),
                    onTap: () {
                      // Show request details
                      _showRequestDetails(request);
                    },
                  ),
                );
              },
            ),
    );
  }

  void _showRequestDetails(Map<String, dynamic> request) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(request['productName']),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Description: ${request['description']}'),
            const SizedBox(height: 8),
            Text('Request Date: ${request['requestDate']}'),
            const SizedBox(height: 8),
            Row(
              children: [
                const Text('Status: '),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: _getStatusColor(request['status']).withOpacity(0.1),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    request['status'].toUpperCase(),
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: _getStatusColor(request['status']),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }
}

