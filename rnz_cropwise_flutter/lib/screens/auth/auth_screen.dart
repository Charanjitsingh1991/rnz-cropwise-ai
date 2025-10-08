import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../providers/auth_provider.dart';
import '../../services/biometric_auth_service.dart';
import '../../utils/constants.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  bool _isLoading = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _checkAuthMethods();
  }

  Future<void> _checkAuthMethods() async {
    final authProvider = context.read<AuthProvider>();
    final biometricEnabled = await authProvider.isBiometricEnabled();
    final pinSet = await BiometricAuthService.isPinCodeSet();

    if (biometricEnabled) {
      // Try biometric authentication first
      _authenticateWithBiometric();
    } else if (pinSet) {
      // Show PIN input
      _showPinInput();
    }
  }

  Future<void> _authenticateWithBiometric() async {
    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final success = await context.read<AuthProvider>().authenticateWithBiometrics();
      if (success) {
        if (mounted) {
          Navigator.pushReplacementNamed(context, '/main');
        }
      } else {
        setState(() {
          _error = context.read<AuthProvider>().error;
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _error = e.toString();
        _isLoading = false;
      });
    }
  }

  void _showPinInput() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => _buildPinDialog(),
    );
  }

  Widget _buildPinDialog() {
    final pinController = TextEditingController();
    
    return AlertDialog(
      title: const Text('Enter PIN'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text('Please enter your 4-digit PIN to continue'),
          const SizedBox(height: 16),
          TextField(
            controller: pinController,
            keyboardType: TextInputType.number,
            maxLength: 4,
            decoration: const InputDecoration(
              labelText: 'PIN Code',
              border: OutlineInputBorder(),
            ),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () {
            Navigator.pop(context);
            Navigator.pushReplacementNamed(context, '/login');
          },
          child: const Text('Use Password'),
        ),
        ElevatedButton(
          onPressed: () async {
            final pin = pinController.text;
            if (pin.length == 4) {
              Navigator.pop(context);
              await _authenticateWithPin(pin);
            }
          },
          child: const Text('Continue'),
        ),
      ],
    );
  }

  Future<void> _authenticateWithPin(String pin) async {
    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final success = await context.read<AuthProvider>().authenticateWithPin(pin);
      if (success) {
        if (mounted) {
          Navigator.pushReplacementNamed(context, '/main');
        }
      } else {
        setState(() {
          _error = context.read<AuthProvider>().error;
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _error = e.toString();
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: AppColors.primaryGradient,
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // App Logo
              Container(
                width: 120,
                height: 120,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: 0.1),
                      blurRadius: 10,
                      offset: const Offset(0, 5),
                    ),
                  ],
                ),
                child: const Icon(
                  Icons.lock_outline,
                  size: 60,
                  color: Colors.grey,
                ),
              ),
              const SizedBox(height: 32),
              
              // Title
              Text(
                'Authentication Required',
                style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 16),
              
              // Subtitle
              Text(
                'Please authenticate to continue',
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Colors.white.withValues(alpha: 0.9),
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 32),
              
              // Loading or Error
              if (_isLoading)
                const CircularProgressIndicator(
                  valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                )
              else if (_error != null)
                Container(
                  padding: const EdgeInsets.all(16),
                  margin: const EdgeInsets.symmetric(horizontal: 32),
                  decoration: BoxDecoration(
                    color: Colors.red.withValues(alpha: 0.1),
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(color: Colors.red.withValues(alpha: 0.3)),
                  ),
                  child: Text(
                    _error!,
                    style: const TextStyle(color: Colors.red),
                    textAlign: TextAlign.center,
                  ),
                ),
              
              const SizedBox(height: 32),
              
              // Action Buttons
              if (!_isLoading) ...[
                ElevatedButton.icon(
                  onPressed: _authenticateWithBiometric,
                  icon: const Icon(Icons.fingerprint),
                  label: const Text('Use Biometric'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: AppColors.primary,
                    padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                  ),
                ),
                const SizedBox(height: 16),
                TextButton(
                  onPressed: () => Navigator.pushReplacementNamed(context, '/login'),
                  child: Text(
                    'Use Password Instead',
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.9),
                      decoration: TextDecoration.underline,
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}





