import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/faq_model.dart';
import '../services/api_service.dart';
import '../providers/auth_provider.dart';
import 'custom_button.dart';

class SupportTicketForm extends StatefulWidget {
  const SupportTicketForm({super.key});

  @override
  State<SupportTicketForm> createState() => _SupportTicketFormState();
}

class _SupportTicketFormState extends State<SupportTicketForm> {
  final _formKey = GlobalKey<FormState>();
  final _subjectController = TextEditingController();
  final _messageController = TextEditingController();
  
  bool _isSubmitting = false;
  bool _isLoadingSuggestions = false;
  List<FAQ> _suggestedFaqs = [];
  String? _selectedFaqId;

  @override
  void dispose() {
    _subjectController.dispose();
    _messageController.dispose();
    super.dispose();
  }

  Future<void> _getFAQSuggestions(String subject) async {
    if (subject.length < 3) {
      setState(() {
        _suggestedFaqs = [];
        _isLoadingSuggestions = false;
      });
      return;
    }

    setState(() {
      _isLoadingSuggestions = true;
    });

    try {
      final response = await ApiService().getFAQSuggestions(subject);
      
      if (response['success'] == true && response['suggestions'] != null) {
        final List<dynamic> suggestionsData = response['suggestions'];
        setState(() {
          _suggestedFaqs = suggestionsData
              .map((json) => FAQ.fromJson(json))
              .toList();
        });
      }
    } catch (error) {
      debugPrint('Error getting FAQ suggestions: $error');
    } finally {
      setState(() {
        _isLoadingSuggestions = false;
      });
    }
  }

  Future<void> _submitTicket() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    final authProvider = context.read<AuthProvider>();
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    
    if (authProvider.user == null) {
      scaffoldMessenger.showSnackBar(
        const SnackBar(
          content: Text('Please log in to submit a support ticket'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    setState(() {
      _isSubmitting = true;
    });

    try {
      final ticketData = {
        'userId': authProvider.user!.id,
        'userName': authProvider.user!.displayName,
        'subject': _subjectController.text.trim(),
        'status': 'Open',
        'messages': [
          {
            'author': 'user',
            'authorName': authProvider.user!.displayName,
            'content': _messageController.text.trim(),
          }
        ],
        'isReadByUser': false,
      };

      final response = await ApiService().createSupportTicket(ticketData);

      if (response['success'] == true || response['_id'] != null) {
        scaffoldMessenger.showSnackBar(
          const SnackBar(
            content: Text('Support ticket submitted successfully! We will respond within 24 hours.'),
            backgroundColor: Colors.green,
          ),
        );

        // Reset form
        _formKey.currentState!.reset();
        _subjectController.clear();
        _messageController.clear();
        setState(() {
          _suggestedFaqs = [];
          _selectedFaqId = null;
        });
      } else {
        throw Exception('Failed to submit support ticket');
      }
    } catch (error) {
      debugPrint('Error submitting support ticket: $error');
      scaffoldMessenger.showSnackBar(
        SnackBar(
          content: Text('Failed to submit support ticket: ${error.toString()}'),
          backgroundColor: Colors.red,
        ),
      );
    } finally {
      setState(() {
        _isSubmitting = false;
      });
    }
  }

  void _onSubjectChanged(String subject) {
    _getFAQSuggestions(subject);
  }

  void _selectFAQ(FAQ faq) {
    setState(() {
      _selectedFaqId = faq.id;
    });
    
    // Show FAQ answer in a dialog
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(faq.question),
        content: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(faq.answer),
              const SizedBox(height: 16),
              if (faq.keywords.isNotEmpty) ...[
                Text(
                  'Keywords:',
                  style: Theme.of(context).textTheme.titleSmall?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 4,
                  runSpacing: 4,
                  children: faq.keywords.map((keyword) => Container(
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
              ],
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Close'),
          ),
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              // Optionally, the user can still submit a ticket if the FAQ doesn't help
            },
            child: Text(
              'Still Need Help',
              style: const TextStyle(color: Colors.green),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.blue[50],
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: Colors.blue[200]!),
            ),
            child: Row(
              children: [
                Icon(
                  Icons.support_agent,
                  color: Colors.blue[600],
                  size: 24,
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Need Help?',
                        style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          fontWeight: FontWeight.bold,
                          color: Colors.blue[700],
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Submit a support ticket and we\'ll get back to you within 24 hours.',
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: Colors.blue[600],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          
          const SizedBox(height: 24),
          
          // Subject Field
          TextFormField(
            controller: _subjectController,
            onChanged: _onSubjectChanged,
            decoration: const InputDecoration(
              labelText: 'Subject',
              hintText: 'Brief description of your issue',
              prefixIcon: Icon(Icons.subject),
              border: OutlineInputBorder(),
            ),
            validator: (value) {
              if (value == null || value.trim().isEmpty) {
                return 'Please enter a subject';
              }
              if (value.trim().length < 5) {
                return 'Subject must be at least 5 characters';
              }
              return null;
            },
          ),
          
          const SizedBox(height: 16),
          
          // FAQ Suggestions
          if (_isLoadingSuggestions)
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.grey[50],
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: Colors.grey[200]!),
              ),
              child: Row(
                children: [
                  SizedBox(
                    width: 16,
                    height: 16,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.green[600]!),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Text(
                    'Looking for relevant FAQs...',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.grey[600],
                    ),
                  ),
                ],
              ),
            ),
          
          if (_suggestedFaqs.isNotEmpty) ...[
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.green[50],
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: Colors.green[200]!),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(
                        Icons.lightbulb_outline,
                        color: Colors.green[600],
                        size: 20,
                      ),
                      const SizedBox(width: 8),
                      Text(
                        'Related FAQs',
                        style: Theme.of(context).textTheme.titleSmall?.copyWith(
                          fontWeight: FontWeight.bold,
                          color: Colors.green[700],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  ..._suggestedFaqs.take(3).map((faq) => InkWell(
                    onTap: () => _selectFAQ(faq),
                    child: Container(
                      margin: const EdgeInsets.only(bottom: 8),
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: _selectedFaqId == faq.id ? Colors.green[100] : Colors.white,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: _selectedFaqId == faq.id ? Colors.green[400]! : Colors.green[200]!),
                      ),
                      child: Row(
                        children: [
                          Expanded(
                            child: Text(
                              faq.question,
                              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                                color: Colors.green[700],
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                          Icon(
                            Icons.arrow_forward_ios,
                            size: 12,
                            color: Colors.green[600],
                          ),
                        ],
                      ),
                    ),
                  )),
                ],
              ),
            ),
          ],
          
          const SizedBox(height: 16),
          
          // Message Field
          TextFormField(
            controller: _messageController,
            decoration: const InputDecoration(
              labelText: 'Message',
              hintText: 'Describe your issue in detail',
              prefixIcon: Icon(Icons.message),
              border: OutlineInputBorder(),
              alignLabelWithHint: true,
            ),
            maxLines: 5,
            validator: (value) {
              if (value == null || value.trim().isEmpty) {
                return 'Please enter a message';
              }
              if (value.trim().length < 10) {
                return 'Message must be at least 10 characters';
              }
              return null;
            },
          ),
          
          const SizedBox(height: 24),
          
          // Submit Button
          SizedBox(
            width: double.infinity,
            child: CustomButton(
              text: _isSubmitting ? 'Submitting...' : 'Submit Ticket',
              onPressed: _isSubmitting ? null : _submitTicket,
              backgroundColor: Colors.green[600],
              textColor: Colors.white,
            ),
          ),
          
          const SizedBox(height: 16),
          
          // Info Text
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.orange[50],
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: Colors.orange[200]!),
            ),
            child: Row(
              children: [
                Icon(
                  Icons.info_outline,
                  color: Colors.orange[600],
                  size: 20,
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    'Our support team will respond within 24 hours. For urgent matters, please contact us directly.',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.orange[700],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
