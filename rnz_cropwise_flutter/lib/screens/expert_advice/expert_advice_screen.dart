import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import '../../providers/auth_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/loading_overlay.dart';

class ExpertAdviceScreen extends StatefulWidget {
  const ExpertAdviceScreen({super.key});

  @override
  State<ExpertAdviceScreen> createState() => _ExpertAdviceScreenState();
}

class _ExpertAdviceScreenState extends State<ExpertAdviceScreen> {
  bool _isLoading = false;
  bool _isSubmitting = false;
  bool _showForm = false;
  List<Map<String, dynamic>> _expertRequests = [];
  
  final _formKey = GlobalKey<FormState>();
  final _subjectController = TextEditingController();
  final _messageController = TextEditingController();
  final _cropTypeController = TextEditingController();
  final _farmSizeController = TextEditingController();
  String _selectedUrgency = 'Medium';

  final List<String> _urgencyLevels = ['Low', 'Medium', 'High', 'Urgent'];

  @override
  void initState() {
    super.initState();
    _loadExpertRequests();
  }

  @override
  void dispose() {
    _subjectController.dispose();
    _messageController.dispose();
    _cropTypeController.dispose();
    _farmSizeController.dispose();
    super.dispose();
  }

  Future<void> _loadExpertRequests() async {
    setState(() {
      _isLoading = true;
    });

    try {
      final authProvider = context.read<AuthProvider>();
      final token = await authProvider.getUserToken();
      
      if (token == null) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Please login to view expert requests')),
        );
        return;
      }

      final response = await http.get(
        Uri.parse('https://rnz-cropwise.vercel.app/api/flutter/expert-advice'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        if (data['success']) {
          setState(() {
            _expertRequests = List<Map<String, dynamic>>.from(data['expertRequests']);
          });
        }
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to load expert requests')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  Future<void> _submitExpertRequest() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() {
      _isSubmitting = true;
    });

    try {
      final authProvider = context.read<AuthProvider>();
      final token = await authProvider.getUserToken();
      
      if (token == null) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Please login to submit expert requests')),
        );
        return;
      }

      final response = await http.post(
        Uri.parse('https://rnz-cropwise.vercel.app/api/flutter/expert-advice'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
        body: jsonEncode({
          'subject': _subjectController.text,
          'message': _messageController.text,
          'cropType': _cropTypeController.text,
          'farmSize': _farmSizeController.text,
          'urgency': _selectedUrgency,
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(data['message'])),
        );
        
        // Reset form
        _formKey.currentState!.reset();
        _subjectController.clear();
        _messageController.clear();
        _cropTypeController.clear();
        _farmSizeController.clear();
        setState(() {
          _selectedUrgency = 'Medium';
          _showForm = false;
        });
        
        // Reload requests
        _loadExpertRequests();
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to submit expert request')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
    } finally {
      setState(() {
        _isSubmitting = false;
      });
    }
  }

  String _getStatusColor(String status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return '#FFA500';
      case 'in progress':
        return '#2196F3';
      case 'completed':
        return '#4CAF50';
      default:
        return '#9E9E9E';
    }
  }

  String _getUrgencyColor(String urgency) {
    switch (urgency.toLowerCase()) {
      case 'low':
        return '#4CAF50';
      case 'medium':
        return '#FFA500';
      case 'high':
        return '#FF5722';
      case 'urgent':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Expert Advice'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: Icon(_showForm ? Icons.close : Icons.add),
            onPressed: () {
              setState(() {
                _showForm = !_showForm;
              });
            },
          ),
        ],
      ),
      body: _isLoading
          ? const LoadingOverlay(
              isLoading: true,
              child: SizedBox(),
              message: 'Loading expert requests...',
            )
          : Column(
              children: [
                if (_showForm) _buildExpertForm(),
                Expanded(child: _buildExpertRequestsList()),
              ],
            ),
    );
  }

  Widget _buildExpertForm() {
    return Card(
      margin: const EdgeInsets.all(16),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Request Expert Advice',
                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _subjectController,
                decoration: const InputDecoration(
                  labelText: 'Subject *',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter a subject';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _messageController,
                decoration: const InputDecoration(
                  labelText: 'Detailed Question *',
                  border: OutlineInputBorder(),
                ),
                maxLines: 4,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your question';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _cropTypeController,
                decoration: const InputDecoration(
                  labelText: 'Crop Type *',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter crop type';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _farmSizeController,
                decoration: const InputDecoration(
                  labelText: 'Farm Size *',
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter farm size';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              DropdownButtonFormField<String>(
                value: _selectedUrgency,
                decoration: const InputDecoration(
                  labelText: 'Urgency Level',
                  border: OutlineInputBorder(),
                ),
                items: _urgencyLevels.map((urgency) {
                  return DropdownMenuItem(
                    value: urgency,
                    child: Text(urgency),
                  );
                }).toList(),
                onChanged: (value) {
                  setState(() {
                    _selectedUrgency = value!;
                  });
                },
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _isSubmitting ? null : _submitExpertRequest,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primary,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 16),
                  ),
                  child: _isSubmitting
                      ? const CircularProgressIndicator(color: Colors.white)
                      : const Text('Submit Expert Request'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildExpertRequestsList() {
    if (_expertRequests.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.psychology_outlined,
              size: 64,
              color: AppColors.textSecondary,
            ),
            const SizedBox(height: 16),
            Text(
              'No expert requests yet',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Submit your first expert request to get started',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
          ],
        ),
      );
    }

    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: _expertRequests.length,
      itemBuilder: (context, index) {
        final request = _expertRequests[index];
        return Card(
          margin: const EdgeInsets.only(bottom: 12),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(
                      child: Text(
                        request['subject'] ?? 'No Subject',
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: Color(int.parse(_getStatusColor(request['status'] ?? 'pending').replaceAll('#', '0xFF'))),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        request['status'] ?? 'Pending',
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 12,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        color: Color(int.parse(_getUrgencyColor(request['urgency'] ?? 'medium').replaceAll('#', '0xFF'))),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        request['urgency'] ?? 'Medium',
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 10,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      'Crop: ${request['cropType'] ?? 'N/A'}',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(
                  'Farm Size: ${request['farmSize'] ?? 'N/A'}',
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
                const SizedBox(height: 8),
                Text(
                  request['message'] ?? 'No message',
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: AppColors.textSecondary,
                  ),
                  maxLines: 3,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 8),
                Text(
                  'Submitted: ${DateTime.parse(request['createdAt']).toLocal().toString().split('.')[0]}',
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: AppColors.textSecondary,
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
