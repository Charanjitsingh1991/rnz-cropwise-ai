import 'package:flutter/material.dart';
import '../../models/support_ticket_model.dart';

import '../../widgets/custom_button.dart';
import 'package:intl/intl.dart';

class SupportTicketsScreen extends StatefulWidget {
  const SupportTicketsScreen({super.key});

  @override
  State<SupportTicketsScreen> createState() => _SupportTicketsScreenState();
}

class _SupportTicketsScreenState extends State<SupportTicketsScreen> {
  List<SupportTicket> _supportTickets = [];
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadSupportTickets();
  }

  Future<void> _loadSupportTickets() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      // Use static support ticket data instead of API call
      final List<Map<String, dynamic>> ticketsData = [
        {
          'id': '1',
          'subject': 'Product recommendation needed',
          'status': 'Open',
          'userName': 'John Doe',
          'userEmail': 'john@example.com',
          'createdAt': DateTime.now().subtract(const Duration(days: 3)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 3)),
          'messages': [
            {
              'id': '1',
              'author': 'user',
              'authorName': 'John Doe',
              'content': 'I need help choosing the right fertilizer for my tomato crop. Can you recommend something?',
              'timestamp': DateTime.now().subtract(const Duration(days: 3)),
            },
          ],
        },
        {
          'id': '2',
          'subject': 'Order status inquiry',
          'status': 'Answered',
          'userName': 'Jane Smith',
          'userEmail': 'jane@example.com',
          'createdAt': DateTime.now().subtract(const Duration(days: 7)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 5)),
          'messages': [
            {
              'id': '1',
              'author': 'user',
              'authorName': 'Jane Smith',
              'content': 'I placed an order for NPK 15-15-15 last week. When will it be delivered?',
              'timestamp': DateTime.now().subtract(const Duration(days: 7)),
            },
            {
              'id': '2',
              'author': 'support',
              'authorName': 'Support Team',
              'content': 'Your order has been processed and will be delivered within 3-5 business days. You will receive a tracking number via email.',
              'timestamp': DateTime.now().subtract(const Duration(days: 5)),
            },
          ],
        },
        {
          'id': '3',
          'subject': 'Technical issue with app',
          'status': 'Closed',
          'userName': 'Mike Johnson',
              'userEmail': 'mike@example.com',
          'createdAt': DateTime.now().subtract(const Duration(days: 15)),
          'updatedAt': DateTime.now().subtract(const Duration(days: 10)),
          'messages': [
            {
              'id': '1',
              'author': 'user',
              'authorName': 'Mike Johnson',
              'content': 'The AI Crop Advisor is not working properly. It keeps showing error messages.',
              'timestamp': DateTime.now().subtract(const Duration(days: 15)),
            },
            {
              'id': '2',
              'author': 'support',
              'authorName': 'Support Team',
              'content': 'We have identified and fixed the issue. Please try again and let us know if you still face any problems.',
              'timestamp': DateTime.now().subtract(const Duration(days: 12)),
            },
            {
              'id': '3',
              'author': 'user',
              'authorName': 'Mike Johnson',
              'content': 'Thank you! The issue is resolved now.',
              'timestamp': DateTime.now().subtract(const Duration(days: 10)),
            },
          ],
        },
      ];
      
      _supportTickets = ticketsData
          .map((json) => SupportTicket.fromJson(json))
          .toList();
    } catch (error) {
      debugPrint('Error loading support tickets: $error');
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
      case 'Open':
        return Colors.blue[600]!;
      case 'Answered':
        return Colors.green[600]!;
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
        title: const Text('My Support Tickets'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadSupportTickets,
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
              : _supportTickets.isEmpty
                  ? _buildEmptyState()
                  : _buildSupportTicketsList(),
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
            'Failed to load support tickets',
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
            onPressed: _loadSupportTickets,
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
            Icons.support_agent_outlined,
            size: 64,
            color: Colors.grey[400],
          ),
          const SizedBox(height: 16),
          Text(
            'No support tickets yet',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.grey[600],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'Your support tickets will appear here once you submit them',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.grey[500],
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

  Widget _buildSupportTicketsList() {
    return RefreshIndicator(
      onRefresh: _loadSupportTickets,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _supportTickets.length,
        itemBuilder: (context, index) {
          final ticket = _supportTickets[index];
          return _buildSupportTicketCard(ticket);
        },
      ),
    );
  }

  Widget _buildSupportTicketCard(SupportTicket ticket) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: InkWell(
        onTap: () => _openTicketDetail(ticket),
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header with subject and status
              Row(
                children: [
                  Expanded(
                    child: Text(
                      ticket.subject,
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                        color: Colors.grey[800],
                      ),
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: _getStatusColor(ticket.status),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      ticket.status,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 12,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ],
              ),
              
              const SizedBox(height: 12),
              
              // Ticket details
              Row(
                children: [
                  Icon(
                    Icons.person,
                    size: 16,
                    color: Colors.grey[600],
                  ),
                  const SizedBox(width: 4),
                  Text(
                    ticket.userName,
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.grey[600],
                    ),
                  ),
                  const SizedBox(width: 16),
                  Icon(
                    Icons.schedule,
                    size: 16,
                    color: Colors.grey[600],
                  ),
                  const SizedBox(width: 4),
                  Text(
                    _formatDate(ticket.createdAt),
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.grey[600],
                    ),
                  ),
                ],
              ),
              
              const SizedBox(height: 12),
              
              // Message preview
              if (ticket.messages.isNotEmpty) ...[
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.grey[50],
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(color: Colors.grey[200]!),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(
                            ticket.messages.last.author == 'user' 
                                ? Icons.person 
                                : Icons.support_agent,
                            size: 16,
                            color: ticket.messages.last.author == 'user' 
                                ? Colors.blue[600] 
                                : Colors.green[600],
                          ),
                          const SizedBox(width: 4),
                          Text(
                            ticket.messages.last.authorName,
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              fontWeight: FontWeight.w600,
                              color: ticket.messages.last.author == 'user' 
                                  ? Colors.blue[600] 
                                  : Colors.green[600],
                            ),
                          ),
                          const Spacer(),
                          Text(
                            DateFormat('MMM dd, HH:mm').format(ticket.messages.last.timestamp),
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: Colors.grey[500],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      Text(
                        ticket.messages.last.content,
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: Colors.grey[700],
                        ),
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
              ],
              
              const SizedBox(height: 12),
              
              // Action buttons
              Row(
                children: [
                  Expanded(
                    child: CustomButton(
                      text: 'View Details',
                      onPressed: () => _openTicketDetail(ticket),
                      isOutlined: true,
                      textColor: Colors.green[600],
                    ),
                  ),
                  if (ticket.isOpen) ...[
                    const SizedBox(width: 8),
                    Expanded(
                      child: CustomButton(
                        text: 'Add Reply',
                        onPressed: () => _addReply(ticket),
                        backgroundColor: Colors.green[600],
                        textColor: Colors.white,
                      ),
                    ),
                  ],
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _openTicketDetail(SupportTicket ticket) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => SupportTicketDetailScreen(ticket: ticket),
      ),
    );
  }

  void _addReply(SupportTicket ticket) {
    // TODO: Implement add reply functionality
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Add reply functionality coming soon!'),
        backgroundColor: Colors.blue,
      ),
    );
  }
}

class SupportTicketDetailScreen extends StatefulWidget {
  final SupportTicket ticket;

  const SupportTicketDetailScreen({
    super.key,
    required this.ticket,
  });

  @override
  State<SupportTicketDetailScreen> createState() => _SupportTicketDetailScreenState();
}

class _SupportTicketDetailScreenState extends State<SupportTicketDetailScreen> {
  final TextEditingController _replyController = TextEditingController();
  bool _isSubmitting = false;

  @override
  void dispose() {
    _replyController.dispose();
    super.dispose();
  }

  Future<void> _submitReply() async {
    if (_replyController.text.trim().isEmpty) {
      return;
    }

    setState(() {
      _isSubmitting = true;
    });

    try {
      // For now, simulate a successful response since we're using static data
      final response = {'success': true};

      if (response['success'] == true) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Reply submitted successfully!'),
            backgroundColor: Colors.green,
          ),
        );
        _replyController.clear();
        // Refresh the ticket data
        Navigator.pop(context, true);
      } else {
        throw Exception('Failed to submit reply');
      }
    } catch (error) {
      debugPrint('Error submitting reply: $error');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Failed to submit reply: ${error.toString()}'),
          backgroundColor: Colors.red,
        ),
      );
    } finally {
      setState(() {
        _isSubmitting = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.ticket.subject),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
      ),
      body: Column(
        children: [
          // Ticket info header
          Container(
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
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        widget.ticket.subject,
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: _getStatusColor(widget.ticket.status),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        widget.ticket.status,
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
                Text(
                  'Created by ${widget.ticket.userName} on ${DateFormat('MMM dd, yyyy').format(widget.ticket.createdAt)}',
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: Colors.grey[600],
                  ),
                ),
              ],
            ),
          ),
          
          // Messages
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: widget.ticket.messages.length,
              itemBuilder: (context, index) {
                final message = widget.ticket.messages[index];
                return _buildMessageBubble(message);
              },
            ),
          ),
          
          // Reply input
          if (widget.ticket.isOpen)
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withValues(alpha: 0.1),
                    spreadRadius: 1,
                    blurRadius: 3,
                    offset: const Offset(0, -2),
                  ),
                ],
              ),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _replyController,
                      decoration: const InputDecoration(
                        hintText: 'Type your reply...',
                        border: OutlineInputBorder(),
                      ),
                      maxLines: null,
                    ),
                  ),
                  const SizedBox(width: 8),
                  CustomButton(
                    text: _isSubmitting ? 'Sending...' : 'Send',
                    onPressed: _isSubmitting ? null : _submitReply,
                    backgroundColor: Colors.green[600],
                    textColor: Colors.white,
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }

  Widget _buildMessageBubble(SupportMessage message) {
    final isUser = message.author == 'user';
    
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (!isUser) ...[
            CircleAvatar(
              radius: 16,
              backgroundColor: Colors.green[600],
              child: const Icon(
                Icons.support_agent,
                color: Colors.white,
                size: 16,
              ),
            ),
            const SizedBox(width: 8),
          ],
          Expanded(
            child: Column(
              crossAxisAlignment: isUser ? CrossAxisAlignment.end : CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: isUser ? Colors.green[50] : Colors.grey[50],
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(
                      color: isUser ? Colors.green[200]! : Colors.grey[200]!,
                    ),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            message.authorName,
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              fontWeight: FontWeight.bold,
                              color: isUser ? Colors.green[700] : Colors.grey[700],
                            ),
                          ),
                          const Spacer(),
                          Text(
                            DateFormat('MMM dd, HH:mm').format(message.timestamp),
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: Colors.grey[500],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      Text(
                        message.content,
                        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                          color: Colors.grey[800],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          if (isUser) ...[
            const SizedBox(width: 8),
            CircleAvatar(
              radius: 16,
              backgroundColor: Colors.blue[600],
              child: const Icon(
                Icons.person,
                color: Colors.white,
                size: 16,
              ),
            ),
          ],
        ],
      ),
    );
  }

  Color _getStatusColor(String status) {
    switch (status) {
      case 'Open':
        return Colors.blue[600]!;
      case 'Answered':
        return Colors.green[600]!;
      case 'Closed':
        return Colors.grey[600]!;
      default:
        return Colors.grey[600]!;
    }
  }
}
