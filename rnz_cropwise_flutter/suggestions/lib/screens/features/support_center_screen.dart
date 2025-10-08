import 'package:flutter/material.dart';
import 'faq_screen.dart';

class SupportCenterScreen extends StatefulWidget {
  const SupportCenterScreen({super.key});

  @override
  State<SupportCenterScreen> createState() => _SupportCenterScreenState();
}

class _SupportCenterScreenState extends State<SupportCenterScreen> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Support Center'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
      ),
      body: Column(
        children: [
          // Tab Bar
          Container(
            margin: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withValues(alpha: 0.1),
                  spreadRadius: 1,
                  blurRadius: 3,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: Row(
              children: [
                Expanded(
                  child: _buildTabButton(
                    index: 0,
                    icon: Icons.help_outline,
                    label: 'FAQs',
                    isSelected: _currentIndex == 0,
                  ),
                ),
                Expanded(
                  child: _buildTabButton(
                    index: 1,
                    icon: Icons.support_agent,
                    label: 'My Tickets',
                    isSelected: _currentIndex == 1,
                  ),
                ),
                Expanded(
                  child: _buildTabButton(
                    index: 2,
                    icon: Icons.add_circle_outline,
                    label: 'New Ticket',
                    isSelected: _currentIndex == 2,
                  ),
                ),
              ],
            ),
          ),
          
          // Content
          Expanded(
            child: IndexedStack(
              index: _currentIndex,
                          children: const [
              FAQScreen(),
              // const SupportTicketsScreen(),
              // const SupportTicketForm(),
              Center(child: Text('Support Tickets - Coming Soon')),
              Center(child: Text('Support Ticket Form - Coming Soon')),
            ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTabButton({
    required int index,
    required IconData icon,
    required String label,
    required bool isSelected,
  }) {
    return InkWell(
      onTap: () {
        setState(() {
          _currentIndex = index;
        });
      },
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
              color: isSelected ? Colors.green[600]! : Colors.transparent,
              width: 2,
            ),
          ),
        ),
        child: Column(
          children: [
            Icon(
              icon,
              color: isSelected ? Colors.green[600] : Colors.grey[600],
              size: 24,
            ),
            const SizedBox(height: 4),
            Text(
              label,
              style: const TextStyle(
                fontWeight: FontWeight.normal,
                fontSize: 12,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
