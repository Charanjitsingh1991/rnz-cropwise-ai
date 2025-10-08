import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../models/expert_request.dart';
import '../../services/expert_request_service.dart';
import '../../utils/constants.dart';
import '../../widgets/loading_overlay.dart';

class ExpertRequestsScreen extends StatefulWidget {
  const ExpertRequestsScreen({super.key});

  @override
  State<ExpertRequestsScreen> createState() => _ExpertRequestsScreenState();
}

class _ExpertRequestsScreenState extends State<ExpertRequestsScreen> {
  List<ExpertRequest> _requests = [];
  bool _isLoading = true;
  String? _error;
  String? _selectedStatus;
  int _currentPage = 1;
  bool _hasMore = true;

  @override
  void initState() {
    super.initState();
    _loadRequests();
  }

  Future<void> _loadRequests({bool refresh = false}) async {
    if (refresh) {
      setState(() {
        _currentPage = 1;
        _hasMore = true;
      });
    }

    if (!_hasMore && !refresh) return;

    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final result = await ExpertRequestService.getUserExpertRequests(
        status: _selectedStatus,
        page: _currentPage,
        limit: 10,
      );

      if (result['success']) {
        final newRequests = result['requests'] as List<ExpertRequest>;
        final pagination = result['pagination'] as Map<String, dynamic>;
        
        setState(() {
          if (refresh) {
            _requests = newRequests;
          } else {
            _requests.addAll(newRequests);
          }
          _currentPage = pagination['page'] ?? _currentPage;
          _hasMore = _currentPage < (pagination['pages'] ?? 1);
          _isLoading = false;
        });
      } else {
        setState(() {
          _error = result['message'];
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _error = 'Error loading requests: $e';
        _isLoading = false;
      });
    }
  }

  Future<void> _cancelRequest(ExpertRequest request) async {
    if (request.id == null) return;

    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Cancel Request'),
        content: const Text('Are you sure you want to cancel this expert request?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('No'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Yes'),
          ),
        ],
      ),
    );

    if (confirmed != true) return;

    try {
      final result = await ExpertRequestService.cancelExpertRequest(request.id!);
      
      if (result['success']) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(result['message']),
            backgroundColor: AppColors.success,
          ),
        );
        _loadRequests(refresh: true);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(result['message']),
            backgroundColor: AppColors.error,
          ),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error cancelling request: $e'),
          backgroundColor: AppColors.error,
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Expert Requests'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () => _loadRequests(refresh: true),
          ),
        ],
      ),
      body: Stack(
        children: [
          Column(
            children: [
              _buildFilterSection(),
              Expanded(
                child: _buildRequestsList(),
              ),
            ],
          ),
          if (_isLoading && _requests.isEmpty) const LoadingOverlay(
            isLoading: true,
            child: SizedBox(),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterSection() {
    return Container(
      padding: const EdgeInsets.all(AppSizes.paddingMedium),
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withValues(alpha: 0.1),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        children: [
          Expanded(
            child: DropdownButtonFormField<String>(
              value: _selectedStatus,
              decoration: const InputDecoration(
                labelText: 'Filter by Status',
                border: OutlineInputBorder(),
                contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              ),
              items: [
                const DropdownMenuItem<String>(
                  value: null,
                  child: Text('All Status'),
                ),
                const DropdownMenuItem<String>(
                  value: 'pending',
                  child: Text('Pending'),
                ),
                const DropdownMenuItem<String>(
                  value: 'in_progress',
                  child: Text('In Progress'),
                ),
                const DropdownMenuItem<String>(
                  value: 'completed',
                  child: Text('Completed'),
                ),
                const DropdownMenuItem<String>(
                  value: 'cancelled',
                  child: Text('Cancelled'),
                ),
              ],
              onChanged: (value) {
                setState(() {
                  _selectedStatus = value;
                });
                _loadRequests(refresh: true);
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRequestsList() {
    if (_error != null) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.error_outline,
              size: 64,
              color: AppColors.error,
            ),
            const SizedBox(height: 16),
            Text(
              _error!,
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                color: AppColors.error,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () => _loadRequests(refresh: true),
              child: const Text('Retry'),
            ),
          ],
        ),
      );
    }

    if (_requests.isEmpty && !_isLoading) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.message_outlined,
              size: 64,
              color: AppColors.textSecondary,
            ),
            const SizedBox(height: 16),
            Text(
              'No expert requests found',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Your expert requests will appear here',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: () => _loadRequests(refresh: true),
      child: ListView.builder(
        padding: const EdgeInsets.all(AppSizes.paddingMedium),
        itemCount: _requests.length + (_hasMore ? 1 : 0),
        itemBuilder: (context, index) {
          if (index == _requests.length) {
            return _buildLoadMoreButton();
          }
          return _buildRequestCard(_requests[index]);
        },
      ),
    );
  }

  Widget _buildLoadMoreButton() {
    return Padding(
      padding: const EdgeInsets.all(AppSizes.paddingMedium),
      child: Center(
        child: ElevatedButton(
          onPressed: _isLoading ? null : () => _loadRequests(),
          child: _isLoading
              ? const SizedBox(
                  width: 16,
                  height: 16,
                  child: CircularProgressIndicator(strokeWidth: 2),
                )
              : const Text('Load More'),
        ),
      ),
    );
  }

  Widget _buildRequestCard(ExpertRequest request) {
    return Card(
      margin: const EdgeInsets.only(bottom: AppSizes.paddingMedium),
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingMedium),
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
                        request.plantType,
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        request.isHealthy ? 'Healthy Plant' : 'Diseased Plant',
                        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                          color: request.isHealthy ? AppColors.success : AppColors.error,
                        ),
                      ),
                    ],
                  ),
                ),
                _buildStatusChip(request.status),
              ],
            ),
            
            if (!request.isHealthy) ...[
              const SizedBox(height: 8),
              Text(
                'Disease: ${request.diseaseName ?? 'N/A'}',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              Text(
                'Severity: ${request.diseaseSeverity ?? 'N/A'}',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ],
            
            const SizedBox(height: 8),
            Text(
              'Confidence: ${(request.confidenceScore * 100).toStringAsFixed(1)}%',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
            
            if (request.createdAt != null) ...[
              const SizedBox(height: 8),
              Text(
                'Submitted: ${_formatDate(request.createdAt!)}',
                style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color: AppColors.textSecondary,
                ),
              ),
            ],
            
            if (request.adminResponse != null) ...[
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.blue.shade50,
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: Colors.blue.shade200),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Expert Response:',
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        fontWeight: FontWeight.bold,
                        color: Colors.blue.shade700,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      request.adminResponse!,
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: Colors.blue.shade700,
                      ),
                    ),
                  ],
                ),
              ),
            ],
            
            if (request.isPending) ...[
              const SizedBox(height: 12),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton(
                  onPressed: () => _cancelRequest(request),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppColors.error,
                    side: BorderSide(color: AppColors.error),
                  ),
                  child: const Text('Cancel Request'),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildStatusChip(String status) {
    Color color;
    IconData icon;
    
    switch (status) {
      case 'pending':
        color = Colors.orange;
        icon = Icons.schedule;
        break;
      case 'in_progress':
        color = Colors.blue;
        icon = Icons.work;
        break;
      case 'completed':
        color = AppColors.success;
        icon = Icons.check_circle;
        break;
      case 'cancelled':
        color = AppColors.error;
        icon = Icons.cancel;
        break;
      default:
        color = Colors.grey;
        icon = Icons.help;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: color),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 16, color: color),
          const SizedBox(width: 4),
                     Text(
             _getStatusDisplay(status),
             style: TextStyle(
               color: color,
               fontSize: 12,
               fontWeight: FontWeight.w500,
             ),
           ),
        ],
      ),
    );
  }

  String _formatDate(DateTime date) {
    return '${date.day}/${date.month}/${date.year} at ${date.hour}:${date.minute.toString().padLeft(2, '0')}';
  }

  String _getStatusDisplay(String status) {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'in_progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  }
}

