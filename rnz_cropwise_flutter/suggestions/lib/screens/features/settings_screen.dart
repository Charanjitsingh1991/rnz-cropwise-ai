import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:local_auth/local_auth.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import '../../providers/auth_provider.dart';
import '../../services/auth_service.dart';
import '../../services/biometric_auth_service.dart';
import '../auth/pin_setup_screen.dart';


class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _biometricEnabled = false;
  bool _notificationsEnabled = true;
  bool _darkModeEnabled = false;
  bool _isLoading = false;
  bool _pinSet = false;
  final LocalAuthentication _localAuth = LocalAuthentication();

  @override
  void initState() {
    super.initState();
    _loadSettings();
  }

  Future<void> _loadSettings() async {
    setState(() {
      _isLoading = true;
    });

    try {
      final authService = AuthService();
      _biometricEnabled = await authService.isBiometricEnabled();
      _pinSet = await BiometricAuthService.isPinCodeSet();
    } catch (e) {
      debugPrint('Error loading settings: $e');
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  Future<void> _toggleBiometric(bool value) async {
    // Biometric authentication is not available on web
    if (kIsWeb) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Biometric authentication is not available on web'),
            backgroundColor: Colors.orange,
          ),
        );
      }
      return;
    }

    try {
      if (value) {
        // Check if biometrics is available
        final isAvailable = await _localAuth.canCheckBiometrics;
        final isDeviceSupported = await _localAuth.isDeviceSupported();
        
        if (!isAvailable || !isDeviceSupported) {
          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Text('Biometric authentication is not available on this device'),
                backgroundColor: Colors.red,
              ),
            );
          }
          return;
        }

        // Request biometric authentication
        final isAuthenticated = await _localAuth.authenticate(
          localizedReason: 'Please authenticate to enable biometric login',
          options: const AuthenticationOptions(
            biometricOnly: true,
            stickyAuth: true,
          ),
        );

        if (!isAuthenticated) {
          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Text('Authentication failed. Biometric login not enabled.'),
                backgroundColor: Colors.red,
              ),
            );
          }
          return;
        }
      }

      // Save the setting
      final authService = AuthService();
      await authService.setBiometricEnabled(value);
      
      setState(() {
        _biometricEnabled = value;
      });
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(value ? 'Biometric login enabled successfully' : 'Biometric login disabled'),
            backgroundColor: Colors.green,
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Failed to update biometric setting: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    }
  }

  Future<void> _setupPin() async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const PinSetupScreen()),
    );
    
    if (result == true) {
      setState(() {
        _pinSet = true;
      });
    }
  }

  void _toggleNotifications(bool value) {
    setState(() {
      _notificationsEnabled = value;
    });
    
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(value ? 'Notifications enabled' : 'Notifications disabled'),
        backgroundColor: Colors.green,
      ),
    );
  }

  void _toggleDarkMode(bool value) {
    setState(() {
      _darkModeEnabled = value;
    });
    
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(value ? 'Dark mode enabled' : 'Dark mode disabled'),
        backgroundColor: Colors.green,
      ),
    );
  }

  void _showAboutDialog() {
    showAboutDialog(
      context: context,
      applicationName: 'RNZ CropWise',
      applicationVersion: '1.0.0',
      applicationIcon: Icon(
        Icons.agriculture,
        size: 48,
        color: Colors.green[600],
      ),
      children: [
        const Text(
          'RNZ CropWise is your intelligent farming companion, providing AI-powered crop recommendations and expert agricultural advice.',
        ),
        const SizedBox(height: 16),
        const Text(
          'Features:\n• AI Crop Advisor\n• Disease Detection\n• Product Catalog\n• Expert Support\n• Quote Requests',
        ),
      ],
    );
  }

  void _showPrivacyPolicy() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Privacy Policy'),
        content: const SingleChildScrollView(
          child: Text(
            'Your privacy is important to us. This app collects and processes your data in accordance with our privacy policy.\n\n'
            '• We collect basic profile information\n'
            '• Crop recommendations are processed securely\n'
            '• Data is stored in encrypted format\n'
            '• We do not share your data with third parties\n\n'
            'For more information, please contact our support team.',
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _showTermsOfService() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Terms of Service'),
        content: const SingleChildScrollView(
          child: Text(
            'By using RNZ CropWise, you agree to our terms of service:\n\n'
            '• Use the app for agricultural purposes only\n'
            '• Follow recommended safety guidelines\n'
            '• Do not misuse the AI recommendations\n'
            '• Respect intellectual property rights\n\n'
            'We reserve the right to modify these terms at any time.',
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
        backgroundColor: Colors.green[600],
        foregroundColor: Colors.white,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Notifications
                  _buildSettingTile(
                    icon: Icons.notifications_outlined,
                    title: 'Push Notifications',
                    trailing: SizedBox(
                      width: 40,
                      child: Switch(
                        value: _notificationsEnabled,
                        onChanged: _toggleNotifications,
                        activeThumbColor: Colors.green[600],
                      ),
                    ),
                  ),
                  
                  const SizedBox(height: 16),
                  
                  // Security Settings
                  _buildSettingTile(
                    icon: Icons.fingerprint,
                    title: 'Biometric Authentication',
                    trailing: SizedBox(
                      width: 40,
                      child: Switch(
                        value: _biometricEnabled,
                        onChanged: _toggleBiometric,
                        activeThumbColor: Colors.green[600],
                      ),
                    ),
                  ),
                  
                  const SizedBox(height: 16),
                  
                  // PIN Setup
                  if (!_pinSet)
                    _buildSettingTile(
                      icon: Icons.pin,
                      title: 'Setup PIN Code',
                      onTap: _setupPin,
                    ),
                  
                  const SizedBox(height: 32),
                  
                  // Logout Button
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton.icon(
                      onPressed: () {
                        _showLogoutDialog();
                      },
                      icon: const Icon(Icons.logout),
                      label: const Text('Logout'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.red[600],
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
    );
  }

  Widget _buildSectionHeader(String title) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Text(
        title,
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          color: Colors.green,
        ),
      ),
    );
  }

  Widget _buildSettingTile({
    required IconData icon,
    required String title,
    Widget? trailing,
    VoidCallback? onTap,
  }) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 4),
      child: ListTile(
        leading: Icon(
          icon,
          color: Colors.green[600],
        ),
        title: Text(
          title,
          style: const TextStyle(
            fontWeight: FontWeight.w600,
          ),
        ),
        trailing: trailing,
        onTap: onTap,
      ),
    );
  }

  void _showLogoutDialog() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Logout'),
        content: const Text('Are you sure you want to logout?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.of(context).pop();
              final authProvider = Provider.of<AuthProvider>(context, listen: false);
              await authProvider.logout();
              if (context.mounted) {
                Navigator.of(context).pushNamedAndRemoveUntil('/', (route) => false);
              }
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.red[600],
              foregroundColor: Colors.white,
            ),
            child: const Text('Logout'),
          ),
        ],
      ),
    );
  }
}
