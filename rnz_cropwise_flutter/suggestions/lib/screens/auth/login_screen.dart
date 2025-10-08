import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:local_auth/local_auth.dart';

import 'package:flutter/foundation.dart' show kIsWeb;
import '../../providers/auth_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/custom_text_field.dart';
import '../../widgets/custom_button.dart';
import '../home_screen.dart';
import 'signup_screen.dart';
import 'forgot_password_screen.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final LocalAuthentication _localAuth = LocalAuthentication();
  
  bool _isPasswordVisible = false;
  bool _isBiometricAvailable = false;

  @override
  void initState() {
    super.initState();
    _checkBiometricAvailability();
    _loadSavedCredentials();
  }

  Future<void> _checkBiometricAvailability() async {
    // Biometric authentication is not available on web
    if (kIsWeb) {
      setState(() {
        _isBiometricAvailable = false;
      });
      return;
    }
    
    try {
      final isAvailable = await _localAuth.canCheckBiometrics;
      final isDeviceSupported = await _localAuth.isDeviceSupported();
      
      if (mounted) {
        setState(() {
          _isBiometricAvailable = isAvailable && isDeviceSupported;
        });
      }
    } catch (e) {
      debugPrint('Biometric check failed: $e');
      if (mounted) {
        setState(() {
          _isBiometricAvailable = false;
        });
      }
    }
  }

  Future<void> _loadSavedCredentials() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final credentials = await authProvider.getSavedCredentials();
    
    print('🔍 Loading saved credentials: $credentials');
    
    if (credentials['email'] != null) {
      _emailController.text = credentials['email']!;
      print('🔍 Email loaded into field: ${credentials['email']}');
    } else {
      print('🔍 No saved email found');
    }
  }

  Future<void> _login() async {
    if (!_formKey.currentState!.validate()) return;

    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    
    print('🔍 Attempting login with email: ${_emailController.text.trim()}');
    
    final success = await authProvider.login(
      _emailController.text.trim(),
      _passwordController.text,
    );

    print('🔍 Login result: $success');

    if (success && mounted) {
      print('🔍 Login successful, navigating to home...');
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => const HomeScreen()),
      );
    } else if (mounted) {
      print('🔍 Login failed: ${authProvider.error}');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(authProvider.error ?? AppText.serverError),
          backgroundColor: AppColors.error,
        ),
      );
    }
  }

  Future<void> _authenticateWithBiometrics() async {
    // Biometric authentication is not available on web
    if (kIsWeb) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Biometric authentication is not available on web'),
          backgroundColor: AppColors.error,
        ),
      );
      return;
    }
    
    try {
      print('🔍 Starting biometric authentication...');
      final isAuthenticated = await _localAuth.authenticate(
        localizedReason: 'Please authenticate to login',
        options: const AuthenticationOptions(
          biometricOnly: true,
          stickyAuth: true,
        ),
      );

      print('🔍 Biometric authentication result: $isAuthenticated');

      if (isAuthenticated && mounted) {
        final authProvider = Provider.of<AuthProvider>(context, listen: false);
        final credentials = await authProvider.getSavedCredentials();
        
        print('🔍 Retrieved credentials: $credentials');
        
        if (credentials['email'] != null && credentials['password'] != null) {
          print('🔍 Attempting login with stored credentials...');
          final success = await authProvider.login(
            credentials['email']!,
            credentials['password']!,
          );

          print('🔍 Login result: $success');
          if (success && mounted) {
            print('🔍 Navigating to home screen...');
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(builder: (context) => const HomeScreen()),
            );
          } else if (mounted) {
            print('🔍 Login failed: ${authProvider.error}');
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('Login failed: ${authProvider.error ?? 'Unknown error'}'),
                backgroundColor: AppColors.error,
              ),
            );
          }
        } else {
          print('🔍 No stored credentials found');
          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(
                content: Text('No saved credentials found. Please login manually first.'),
                backgroundColor: AppColors.error,
              ),
            );
          }
        }
      } else if (mounted) {
        print('🔍 Biometric authentication failed or cancelled');
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Biometric authentication failed or was cancelled'),
            backgroundColor: AppColors.error,
          ),
        );
      }
    } catch (e) {
      print('🔍 Biometric authentication error: $e');
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Biometric authentication failed: $e'),
            backgroundColor: AppColors.error,
          ),
        );
      }
    }
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const SizedBox(height: 60),
                
                // App Logo
                Image.asset(
                  'assets/images/rnz_logo.png',
                  width: 60,
                  height: 60,
                  fit: BoxFit.contain,
                ),
                
                const SizedBox(height: 30),
                
                // Welcome Text
                Text(
                  AppText.loginTitle,
                  style: const TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textPrimary,
                  ),
                  textAlign: TextAlign.center,
                ),
                
                const SizedBox(height: 8),
                
                Text(
                  'Sign in to continue',
                  style: const TextStyle(
                    fontSize: 16,
                    color: AppColors.textSecondary,
                  ),
                  textAlign: TextAlign.center,
                ),
                
                const SizedBox(height: 40),
                
                // Email Field
                CustomTextField(
                  controller: _emailController,
                  labelText: 'Email',
                  hintText: 'Enter your email',
                  keyboardType: TextInputType.emailAddress,
                  prefixIcon: Icons.email_outlined,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your email';
                    }
                    if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(value)) {
                      return 'Please enter a valid email';
                    }
                    return null;
                  },
                ),
                
                const SizedBox(height: 20),
                
                // Password Field
                CustomTextField(
                  controller: _passwordController,
                  labelText: 'Password',
                  hintText: 'Enter your password',
                  obscureText: !_isPasswordVisible,
                  prefixIcon: Icons.lock_outlined,
                  suffixIcon: IconButton(
                    icon: Icon(
                      _isPasswordVisible ? Icons.visibility : Icons.visibility_off,
                      color: AppColors.textSecondary,
                    ),
                    onPressed: () {
                      setState(() {
                        _isPasswordVisible = !_isPasswordVisible;
                      });
                    },
                  ),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your password';
                    }
                    if (value.length < 6) {
                      return 'Password must be at least 6 characters';
                    }
                    return null;
                  },
                ),
                
                const SizedBox(height: 20),
                
                // Forgot Password
                Align(
                  alignment: Alignment.centerRight,
                  child: TextButton(
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (context) => const ForgotPasswordScreen(),
                        ),
                      );
                    },
                    child: Text(
                      'Forgot Password?',
                      style: const TextStyle(
                        color: AppColors.primary,
                        fontSize: 14,
                      ),
                    ),
                  ),
                ),
                
                const SizedBox(height: 30),
                
                // Login Button
                Consumer<AuthProvider>(
                  builder: (context, authProvider, child) {
                    return CustomButton(
                      text: AppText.login,
                      onPressed: authProvider.isLoading ? null : _login,
                      isLoading: authProvider.isLoading,
                    );
                  },
                ),
                
                const SizedBox(height: 20),
                 
                 // Quick Login Button for Testing
                 OutlinedButton.icon(
                   onPressed: () async {
                     _emailController.text = 'singhc21@gmail.com';
                     _passwordController.text = 'password123';
                     await _login();
                   },
                   icon: const Icon(Icons.flash_on),
                   label: const Text('Quick Login (Test)'),
                   style: OutlinedButton.styleFrom(
                     foregroundColor: AppColors.accent,
                     side: BorderSide(color: AppColors.accent),
                     padding: const EdgeInsets.symmetric(vertical: 16),
                     shape: RoundedRectangleBorder(
                       borderRadius: BorderRadius.circular(8),
                     ),
                   ),
                 ),
                 
                 const SizedBox(height: 10),
                 
                 // Check Credentials Button
                 OutlinedButton.icon(
                   onPressed: () async {
                     final authProvider = Provider.of<AuthProvider>(context, listen: false);
                     final credentials = await authProvider.getSavedCredentials();
                     print('🔍 Manual credential check: $credentials');
                     ScaffoldMessenger.of(context).showSnackBar(
                       SnackBar(
                         content: Text('Credentials: ${credentials.toString()}'),
                         backgroundColor: credentials.isNotEmpty ? Colors.green : Colors.red,
                       ),
                     );
                   },
                   icon: const Icon(Icons.info),
                   label: const Text('Check Stored Credentials'),
                   style: OutlinedButton.styleFrom(
                     foregroundColor: Colors.blue,
                     side: const BorderSide(color: Colors.blue),
                     padding: const EdgeInsets.symmetric(vertical: 16),
                     shape: RoundedRectangleBorder(
                       borderRadius: BorderRadius.circular(8),
                     ),
                   ),
                 ),
                 
                 const SizedBox(height: 20),
                 
                 // Biometric Login Button
                 if (_isBiometricAvailable)
                   OutlinedButton.icon(
                     onPressed: _authenticateWithBiometrics,
                     icon: const Icon(Icons.fingerprint),
                     label: const Text('Login with Biometrics'),
                     style: OutlinedButton.styleFrom(
                       foregroundColor: AppColors.primary,
                       side: BorderSide(color: AppColors.primary),
                       padding: const EdgeInsets.symmetric(vertical: 16),
                       shape: RoundedRectangleBorder(
                         borderRadius: BorderRadius.circular(8),
                       ),
                     ),
                   ),
                
                const SizedBox(height: 30),
                
                // Sign Up Link
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Don't have an account? ",
                      style: const TextStyle(
                        color: AppColors.textSecondary,
                        fontSize: 14,
                      ),
                    ),
                    TextButton(
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => const SignupScreen(),
                          ),
                        );
                      },
                      child: Text(
                        AppText.signup,
                        style: const TextStyle(
                          color: AppColors.primary,
                          fontSize: 14,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
