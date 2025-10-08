import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
// import 'package:local_auth/local_auth.dart';

import '../../providers/auth_provider.dart';
import '../../providers/user_provider.dart';
import '../../providers/theme_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/loading_overlay.dart';
import '../../services/biometric_auth_service.dart';
import '../../services/push_notification_service.dart';
import '../../widgets/pin_input_dialog.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _notificationsEnabled = true;
  bool _biometricEnabled = false;
  bool _darkModeEnabled = false;
  bool _autoSyncEnabled = true;

  @override
  void initState() {
    super.initState();
    _loadSettings();
  }

  Future<void> _loadSettings() async {
    final biometricEnabled = await BiometricAuthService.isBiometricEnabled();
    setState(() {
      _biometricEnabled = biometricEnabled;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
      ),
      body: Consumer3<AuthProvider, UserProvider, ThemeProvider>(
        builder: (context, authProvider, userProvider, themeProvider, child) {
          if (userProvider.isLoading) {
            return const LoadingOverlay(
              isLoading: true,
              child: SizedBox(),
              message: 'Loading settings...',
            );
          }

          return SingleChildScrollView(
            padding: const EdgeInsets.all(AppSizes.paddingLarge),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildNotificationSection(),
                const SizedBox(height: 24),
                _buildSecuritySection(),
                const SizedBox(height: 24),
                _buildAppSection(themeProvider),
                const SizedBox(height: 24),
                _buildSupportSection(),
                const SizedBox(height: 24),
                _buildAboutSection(),
              ],
            ),
          );
        },
      ),
    );
  }


  Widget _buildNotificationSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Notifications',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            _buildSwitchTile(
              icon: Icons.notifications_outlined,
              title: 'Push Notifications',
              subtitle: 'Receive notifications about updates and offers',
              value: _notificationsEnabled,
              onChanged: _toggleNotifications,
            ),
            _buildSettingTile(
              icon: Icons.notification_important_outlined,
              title: 'Brochure Requests',
              subtitle: 'Get notified when your brochure requests are approved',
              onTap: null,
            ),
            _buildSettingTile(
              icon: Icons.inventory_outlined,
              title: 'Product Updates',
              subtitle: 'Receive updates about new products and features',
              onTap: null,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSecuritySection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Security',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            _buildSwitchTile(
              icon: Icons.fingerprint_outlined,
              title: 'Biometric Auth',
              subtitle: 'Use fingerprint or face ID to unlock the app',
              value: _biometricEnabled,
              onChanged: _toggleBiometric,
            ),
            _buildSettingTile(
              icon: Icons.lock_outline,
              title: 'Change Password',
              subtitle: 'Update your account password',
              onTap: _changePassword,
            ),
            _buildSettingTile(
              icon: Icons.security_outlined,
              title: 'PIN Code Setup',
              subtitle: 'Set up a PIN code for authentication',
              onTap: _setupTwoFactor,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildAppSection(ThemeProvider themeProvider) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'App Settings',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            _buildSwitchTile(
              icon: Icons.dark_mode_outlined,
              title: 'Dark Mode',
              subtitle: 'Switch between light and dark themes',
              value: themeProvider.isDarkMode,
              onChanged: (value) => _toggleDarkMode(value, themeProvider),
            ),
            _buildSwitchTile(
              icon: Icons.sync_outlined,
              title: 'Auto Sync',
              subtitle: 'Automatically sync data when connected to internet',
              value: _autoSyncEnabled,
              onChanged: _toggleAutoSync,
            ),
            _buildSettingTile(
              icon: Icons.language_outlined,
              title: 'Language',
              subtitle: 'English',
              onTap: _changeLanguage,
            ),
            _buildSettingTile(
              icon: Icons.storage_outlined,
              title: 'Storage & Cache',
              subtitle: 'Manage app storage and clear cache',
              onTap: _manageStorage,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSupportSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Support',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            _buildSettingTile(
              icon: Icons.support_agent_outlined,
              title: 'Contact Support',
              subtitle: 'Get help from our support team',
              onTap: () => Navigator.pushNamed(context, '/support'),
            ),
            _buildSettingTile(
              icon: Icons.feedback_outlined,
              title: 'Send Feedback',
              subtitle: 'Share your thoughts about the app',
              onTap: _sendFeedback,
            ),
            _buildSettingTile(
              icon: Icons.bug_report_outlined,
              title: 'Report a Bug',
              subtitle: 'Report issues you encounter',
              onTap: _reportBug,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildAboutSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'About',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            _buildSettingTile(
              icon: Icons.info_outline,
              title: 'App Version',
              subtitle: '1.0.0',
              onTap: null,
            ),
            _buildSettingTile(
              icon: Icons.description_outlined,
              title: 'Terms of Service',
              subtitle: 'Read our terms and conditions',
              onTap: _openTermsOfService,
            ),
            _buildSettingTile(
              icon: Icons.privacy_tip_outlined,
              title: 'Privacy Policy',
              subtitle: 'Learn about our privacy practices',
              onTap: _openPrivacyPolicy,
            ),
            _buildSettingTile(
              icon: Icons.logout,
              title: 'Logout',
              subtitle: 'Sign out of your account',
              onTap: _logout,
              isDestructive: true,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSettingTile({
    required IconData icon,
    required String title,
    required String subtitle,
    VoidCallback? onTap,
    bool isDestructive = false,
  }) {
    return ListTile(
      leading: Icon(
        icon,
        color: isDestructive ? Colors.red : AppColors.primary,
      ),
      title: Text(
        title,
        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
          fontWeight: FontWeight.w500,
          color: isDestructive ? Colors.red : null,
        ),
      ),
      subtitle: Text(
        subtitle,
        style: Theme.of(context).textTheme.bodySmall?.copyWith(
          color: AppColors.textSecondary,
        ),
      ),
      trailing: onTap != null ? const Icon(Icons.chevron_right) : null,
      onTap: onTap,
    );
  }

  Widget _buildSwitchTile({
    required IconData icon,
    required String title,
    required String subtitle,
    required bool value,
    required Function(bool) onChanged,
  }) {
    return ListTile(
      leading: Icon(icon, color: AppColors.primary),
      title: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        title,
                        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 8.0), // Move slightly to the right
                      child: Transform.scale(
                        scale: 0.7, // Make switch even smaller
                        child: Switch(
                          value: value,
                          onChanged: onChanged,
                          activeThumbColor: AppColors.primary,
                          materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                        ),
                      ),
                    ),
                  ],
                ),
                Text(
                  subtitle,
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: AppColors.textSecondary,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // Action methods

  void _toggleNotifications(bool value) {
    setState(() {
      _notificationsEnabled = value;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Notifications ${value ? 'enabled' : 'disabled'}')),
    );
  }

  void _toggleBiometric(bool value) async {
    if (value) {
      // Enable biometric authentication
      final biometricAvailable = await BiometricAuthService.isBiometricAvailable();
      if (!biometricAvailable) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Biometric authentication not available on this device')),
        );
        return;
      }

      final authenticated = await BiometricAuthService.authenticateWithBiometrics(
        reason: 'Enable biometric authentication',
      );

      if (authenticated) {
        final success = await BiometricAuthService.enableBiometric();
        if (success) {
          setState(() {
            _biometricEnabled = true;
          });
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Biometric authentication enabled')),
          );
        }
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Biometric authentication failed')),
        );
      }
    } else {
      // Disable biometric authentication
      final success = await BiometricAuthService.disableBiometric();
      if (success) {
        setState(() {
          _biometricEnabled = false;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Biometric authentication disabled')),
        );
      }
    }
  }

  void _changePassword() {
    // TODO: Implement password change
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Password change coming soon')),
    );
  }

  void _setupTwoFactor() async {
    // Show PIN setup dialog
    final pinCode = await showDialog<String>(
      context: context,
      builder: (context) => const PinInputDialog(
        title: 'Set PIN Code',
        message: 'Enter a 4-digit PIN code for authentication',
        isSetup: true,
      ),
    );

    if (pinCode != null) {
      final success = await BiometricAuthService.setPinCode(pinCode);
      if (success) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('PIN code set successfully')),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to set PIN code')),
        );
      }
    }
  }

  void _toggleDarkMode(bool value, ThemeProvider themeProvider) {
    if (value) {
      themeProvider.setThemeMode(ThemeMode.dark);
    } else {
      themeProvider.setThemeMode(ThemeMode.light);
    }
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Dark mode ${value ? 'enabled' : 'disabled'}')),
    );
  }

  void _toggleAutoSync(bool value) {
    setState(() {
      _autoSyncEnabled = value;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Auto sync ${value ? 'enabled' : 'disabled'}')),
    );
  }

  void _changeLanguage() {
    // TODO: Implement language change
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Language change coming soon')),
    );
  }

  void _manageStorage() {
    // TODO: Implement storage management
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Storage management coming soon')),
    );
  }


  void _sendFeedback() {
    // TODO: Implement feedback
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Feedback feature coming soon')),
    );
  }

  void _reportBug() {
    // TODO: Implement bug report
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Bug report feature coming soon')),
    );
  }

  void _openTermsOfService() {
    // TODO: Implement terms of service
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Terms of service coming soon')),
    );
  }

  void _openPrivacyPolicy() {
    // TODO: Implement privacy policy
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Privacy policy coming soon')),
    );
  }

  void _logout() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Logout'),
        content: const Text('Are you sure you want to logout?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              context.read<AuthProvider>().logout();
              Navigator.pushReplacementNamed(context, '/login');
            },
            child: const Text('Logout'),
          ),
        ],
      ),
    );
  }
}
