import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import '../../providers/support_provider.dart';
import '../../providers/auth_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/loading_overlay.dart';
import 'create_ticket_screen.dart';

class SupportScreen extends StatefulWidget {
  const SupportScreen({super.key});

  @override
  State<SupportScreen> createState() => _SupportScreenState();
}

class _SupportScreenState extends State<SupportScreen> {
  final TextEditingController _searchController = TextEditingController();
  String _searchQuery = '';

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _loadSupportData();
    });
  }

  Future<void> _loadSupportData() async {
    final provider = context.read<SupportProvider>();
    await provider.loadFAQs();
    await provider.loadSupportCategories();
    await provider.loadSupportSettings();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Help & Support'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
      ),
      body: Consumer<SupportProvider>(
        builder: (context, provider, child) {
          if (provider.isLoading) {
            return const LoadingOverlay(
              isLoading: true,
              child: SizedBox(),
              message: 'Loading support content...',
            );
          }

          return RefreshIndicator(
            onRefresh: _loadSupportData,
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(AppSizes.paddingLarge),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildHeader(),
                  const SizedBox(height: 24),
                  _buildSearchSection(),
                  const SizedBox(height: 24),
                  _buildQuickActions(),
                  const SizedBox(height: 24),
                  _buildFAQsSection(provider),
                  const SizedBox(height: 24),
                  _buildContactSection(),
                  const SizedBox(height: 24),
                  _buildSupportTicketSection(),
                ],
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _buildHeader() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.support_agent, color: AppColors.primary, size: 28),
                const SizedBox(width: 12),
                Text(
                  'How can we help you?',
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Text(
              'Find answers to common questions or get in touch with our support team.',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSearchSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Search FAQs',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _searchController,
              decoration: InputDecoration(
                hintText: 'Search for answers...',
                prefixIcon: const Icon(Icons.search),
                suffixIcon: _searchQuery.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.clear),
                        onPressed: () {
                          _searchController.clear();
                          setState(() {
                            _searchQuery = '';
                          });
                        },
                      )
                    : null,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onChanged: (value) {
                setState(() {
                  _searchQuery = value;
                });
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildQuickActions() {
    return Consumer<SupportProvider>(
      builder: (context, provider, child) {
        final settings = provider.supportSettings;
        final liveChatEnabled = settings['liveChatEnabled'] ?? true;
        final videoCallEnabled = settings['videoCallEnabled'] ?? true;
        
        return Card(
          child: Padding(
            padding: const EdgeInsets.all(AppSizes.paddingLarge),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Quick Actions',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 16),
                GridView.count(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  crossAxisCount: 2,
                  crossAxisSpacing: 12,
                  mainAxisSpacing: 12,
                  childAspectRatio: 1.5,
                  children: [
                    _buildQuickActionCard(
                      'Call Support',
                      Icons.phone,
                      AppColors.primary,
                      () => _callSupport(),
                      enabled: true,
                    ),
                    _buildQuickActionCard(
                      'Email Support',
                      Icons.email,
                      AppColors.secondary,
                      () => _emailSupport(),
                      enabled: true,
                    ),
                    _buildQuickActionCard(
                      'Live Chat',
                      Icons.chat,
                      liveChatEnabled ? AppColors.success : AppColors.textSecondary,
                      liveChatEnabled ? () => _openLiveChat() : null,
                      enabled: liveChatEnabled,
                      disabledText: liveChatEnabled ? null : '(Disabled)',
                    ),
                    _buildQuickActionCard(
                      'Video Call',
                      Icons.video_call,
                      videoCallEnabled ? AppColors.warning : AppColors.textSecondary,
                      videoCallEnabled ? () => _videoCall() : null,
                      enabled: videoCallEnabled,
                      disabledText: videoCallEnabled ? null : '(Disabled)',
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildQuickActionCard(String title, IconData icon, Color color, VoidCallback? onTap, {bool enabled = true, String? disabledText}) {
    return InkWell(
      onTap: enabled ? onTap : null,
      borderRadius: BorderRadius.circular(12),
      child: Container(
        decoration: BoxDecoration(
          border: Border.all(color: color.withValues(alpha: 0.3)),
          borderRadius: BorderRadius.circular(12),
          color: enabled ? null : Colors.grey.withValues(alpha: 0.1),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: color, size: 32),
            const SizedBox(height: 8),
            Text(
              title,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                fontWeight: FontWeight.w500,
                color: enabled ? null : AppColors.textSecondary,
              ),
              textAlign: TextAlign.center,
            ),
            if (!enabled && disabledText != null) ...[
              const SizedBox(height: 4),
              Text(
                disabledText,
                style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color: AppColors.textSecondary,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildFAQsSection(SupportProvider provider) {
    final filteredFAQs = _searchQuery.isEmpty
        ? provider.faqs
        : provider.faqs.where((faq) =>
            faq['question'].toString().toLowerCase().contains(_searchQuery.toLowerCase()) ||
            faq['answer'].toString().toLowerCase().contains(_searchQuery.toLowerCase())).toList();

    if (filteredFAQs.isEmpty) {
      return Card(
        child: Padding(
          padding: const EdgeInsets.all(AppSizes.paddingLarge),
          child: Column(
            children: [
              Icon(Icons.search_off, size: 48, color: AppColors.textSecondary),
              const SizedBox(height: 16),
              Text(
                _searchQuery.isEmpty ? 'No FAQs available' : 'No results found',
                style: Theme.of(context).textTheme.titleMedium,
              ),
              if (_searchQuery.isNotEmpty) ...[
                const SizedBox(height: 8),
                Text(
                  'Try searching with different keywords',
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: AppColors.textSecondary,
                  ),
                ),
              ],
            ],
          ),
        ),
      );
    }

    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Frequently Asked Questions',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            ...filteredFAQs.map((faq) => _buildFAQItem(faq)),
          ],
        ),
      ),
    );
  }

  Widget _buildFAQItem(Map<String, dynamic> faq) {
    return ExpansionTile(
              title: Text(
          faq['question'] ?? '',
          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
            fontWeight: FontWeight.w500,
          ),
        ),
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
          child: Text(
            faq['answer'] ?? '',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: AppColors.textSecondary,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildContactSection() {
    return Consumer<SupportProvider>(
      builder: (context, provider, child) {
        final settings = provider.supportSettings;
        return Card(
          child: Padding(
            padding: const EdgeInsets.all(AppSizes.paddingLarge),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Contact Information',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    IconButton(
                      onPressed: () => _loadSupportData(),
                      icon: const Icon(Icons.refresh),
                      tooltip: 'Refresh contact information',
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                _buildContactItem(
                  Icons.phone,
                  'Phone',
                  settings['phone'] ?? '+1 (555) 123-4567',
                  () => _callSupport(),
                ),
                _buildContactItem(
                  Icons.email,
                  'Email',
                  settings['email'] ?? 'support@rnzcropwise.com',
                  () => _emailSupport(),
                ),
                _buildContactItem(
                  Icons.location_on,
                  'Address',
                  settings['address'] ?? '123 Agriculture St, Farm City, FC 12345',
                  () => _openMaps(),
                ),
                _buildContactItem(
                  Icons.access_time,
                  'Business Hours',
                  settings['businessHours'] ?? 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
                  null,
                ),
                if (settings['videoCallEnabled'] == true) ...[
                  _buildContactItem(
                    Icons.video_call,
                    'Video Call Platform',
                    settings['videoCallPlatform'] ?? 'Zoom',
                    null,
                  ),
                ],
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildContactItem(IconData icon, String title, String value, VoidCallback? onTap) {
    return ListTile(
      leading: Icon(icon, color: AppColors.primary),
      title: Text(
        title,
        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
          fontWeight: FontWeight.w500,
        ),
      ),
      subtitle: Text(
        value,
        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
          color: AppColors.textSecondary,
        ),
      ),
      onTap: onTap,
      trailing: onTap != null ? const Icon(Icons.arrow_forward_ios, size: 16) : null,
    );
  }

  Widget _buildSupportTicketSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Still need help?',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 12),
            Text(
              'Create a support ticket and we\'ll get back to you within 24 hours.',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton.icon(
                onPressed: () => _createSupportTicket(),
                icon: const Icon(Icons.add),
                label: const Text('Create Support Ticket'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _callSupport() async {
    final userProvider = context.read<AuthProvider>();
    final supportProvider = context.read<SupportProvider>();
    final phone = supportProvider.supportSettings['phone'] ?? '+1 (555) 123-4567';
    
    try {
      final response = await http.post(
        Uri.parse('https://rnz-cropwise.vercel.app/api/support-contact'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'type': 'phone',
          'message': 'Phone support request from Flutter app',
          'userEmail': userProvider.user?.email ?? 'user@example.com',
          'userName': userProvider.user?.name ?? 'User'
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(data['message'])),
        );
      } else {
        // Fallback to direct phone call
        final url = Uri.parse('tel:$phone');
        if (await canLaunchUrl(url)) {
          await launchUrl(url);
        }
      }
    } catch (e) {
      // Fallback to direct phone call
      final url = Uri.parse('tel:$phone');
      if (await canLaunchUrl(url)) {
        await launchUrl(url);
      }
    }
  }

  void _emailSupport() async {
    final userProvider = context.read<AuthProvider>();
    final supportProvider = context.read<SupportProvider>();
    final email = supportProvider.supportSettings['email'] ?? 'support@rnzcropwise.com';
    
    try {
      final response = await http.post(
        Uri.parse('https://rnz-cropwise.vercel.app/api/support-contact'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'type': 'email',
          'message': 'Email support request from Flutter app',
          'userEmail': userProvider.user?.email ?? 'user@example.com',
          'userName': userProvider.user?.name ?? 'User'
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(data['message'])),
        );
      } else {
        // Fallback to direct email
        final url = Uri.parse('mailto:$email');
        if (await canLaunchUrl(url)) {
          await launchUrl(url);
        }
      }
    } catch (e) {
      // Fallback to direct email
      final url = Uri.parse('mailto:$email');
      if (await canLaunchUrl(url)) {
        await launchUrl(url);
      }
    }
  }

  void _openLiveChat() async {
    final userProvider = context.read<AuthProvider>();
    final supportProvider = context.read<SupportProvider>();
    final liveChatEnabled = supportProvider.supportSettings['liveChatEnabled'] ?? true;
    
    if (!liveChatEnabled) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Live chat support is currently disabled')),
      );
      return;
    }
    
    try {
      final response = await http.post(
        Uri.parse('https://rnz-cropwise.vercel.app/api/support-contact'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'type': 'live_chat',
          'message': 'Live chat request from Flutter app',
          'userEmail': userProvider.user?.email ?? 'user@example.com',
          'userName': userProvider.user?.name ?? 'User'
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(data['message'])),
        );
      } else {
        // Fallback to web chat
        final url = Uri.parse('https://rnz-cropwise.vercel.app/support');
        if (await canLaunchUrl(url)) {
          await launchUrl(url);
        }
      }
    } catch (e) {
      // Fallback to web chat
      final url = Uri.parse('https://rnz-cropwise.vercel.app/support');
      if (await canLaunchUrl(url)) {
        await launchUrl(url);
      }
    }
  }

  void _videoCall() async {
    final userProvider = context.read<AuthProvider>();
    final supportProvider = context.read<SupportProvider>();
    final videoCallEnabled = supportProvider.supportSettings['videoCallEnabled'] ?? true;
    
    if (!videoCallEnabled) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Video call support is currently disabled')),
      );
      return;
    }
    
    try {
      final response = await http.post(
        Uri.parse('https://rnz-cropwise.vercel.app/api/support-contact'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'type': 'video_call',
          'message': 'Video call request from Flutter app',
          'userEmail': userProvider.user?.email ?? 'user@example.com',
          'userName': userProvider.user?.name ?? 'User'
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(data['message'])),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Video call request sent. We will contact you shortly.')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Video call request sent. We will contact you shortly.')),
      );
    }
  }

  void _openMaps() async {
    final url = Uri.parse('https://maps.google.com/?q=123+Agriculture+St+Farm+City+FC+12345');
    if (await canLaunchUrl(url)) {
      await launchUrl(url);
    }
  }

  void _createSupportTicket() async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const CreateTicketScreen(),
      ),
    );
    
    if (result == true) {
      // Ticket was created successfully, refresh the page
      _loadSupportData();
    }
  }
}
