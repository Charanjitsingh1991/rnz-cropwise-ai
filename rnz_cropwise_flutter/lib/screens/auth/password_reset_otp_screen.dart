import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import '../../providers/auth_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/custom_text_field.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/logo_widget.dart';

class PasswordResetOTPScreen extends StatefulWidget {
  final String email;
  final String purpose;

  const PasswordResetOTPScreen({
    super.key,
    required this.email,
    this.purpose = 'password_reset',
  });

  @override
  State<PasswordResetOTPScreen> createState() => _PasswordResetOTPScreenState();
}

class _PasswordResetOTPScreenState extends State<PasswordResetOTPScreen> {
  final _formKey = GlobalKey<FormState>();
  final _otpController = TextEditingController();
  final _newPasswordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();
  
  bool _isVerifying = false;
  bool _isResetting = false;
  bool _isResending = false;
  bool _isOtpVerified = false;
  int _timeLeft = 120; // 120 seconds
  Timer? _timer;
  String? _verifiedOtp;

  @override
  void initState() {
    super.initState();
    _startTimer();
  }

  @override
  void dispose() {
    _timer?.cancel();
    _otpController.dispose();
    _newPasswordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
  }

  void _startTimer() {
    _timer?.cancel();
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (_timeLeft > 0) {
        setState(() {
          _timeLeft--;
        });
      } else {
        timer.cancel();
      }
    });
  }

  String _formatTime(int seconds) {
    final mins = seconds ~/ 60;
    final secs = seconds % 60;
    return '$mins:${secs.toString().padLeft(2, '0')}';
  }

  Future<void> _verifyOTP() async {
    if (_otpController.text.length != 6) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Please enter a 6-digit verification code'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    setState(() {
      _isVerifying = true;
    });

    try {
      final response = await http.post(
        Uri.parse('${ApiEndpoints.baseUrl}/auth/verify-otp'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'email': widget.email,
          'otp': _otpController.text,
          'purpose': widget.purpose,
        }),
      );

      final data = json.decode(response.body);

      if (data['success'] == true && mounted) {
        setState(() {
          _isOtpVerified = true;
          _verifiedOtp = _otpController.text;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('OTP verified! Now set your new password'),
            backgroundColor: Colors.green,
          ),
        );
      } else {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(data['error'] ?? 'Invalid OTP'),
              backgroundColor: Colors.red,
            ),
          );
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Verification failed: ${e.toString()}'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _isVerifying = false;
        });
      }
    }
  }

  Future<void> _resetPassword() async {
    if (!_formKey.currentState!.validate()) return;

    if (_newPasswordController.text != _confirmPasswordController.text) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Passwords do not match'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    setState(() {
      _isResetting = true;
    });

    try {
      final response = await http.post(
        Uri.parse('${ApiEndpoints.baseUrl}/auth/reset-password-with-otp'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'email': widget.email,
          'otp': _verifiedOtp,
          'newPassword': _newPasswordController.text,
        }),
      );

      final data = json.decode(response.body);

      if (data['success'] == true && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Password reset successfully!'),
            backgroundColor: Colors.green,
          ),
        );
        // Navigate to login
        Navigator.pushNamedAndRemoveUntil(context, '/login', (route) => false);
      } else {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(data['error'] ?? 'Failed to reset password'),
              backgroundColor: Colors.red,
            ),
          );
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Reset failed: ${e.toString()}'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _isResetting = false;
        });
      }
    }
  }

  Future<void> _resendOTP() async {
    setState(() {
      _isResending = true;
    });

    try {
      final response = await http.post(
        Uri.parse('${ApiEndpoints.baseUrl}/auth/resend-otp'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'email': widget.email,
          'purpose': widget.purpose,
        }),
      );

      final data = json.decode(response.body);

      if (data['success'] == true && mounted) {
        setState(() {
          _timeLeft = 120;
        });
        _startTimer();
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('New verification code sent!'),
            backgroundColor: Colors.green,
          ),
        );
      } else {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(data['error'] ?? 'Failed to resend code'),
              backgroundColor: Colors.red,
            ),
          );
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Failed to resend: ${e.toString()}'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _isResending = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: AppColors.primaryGradient,
        ),
        child: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(AppSizes.paddingLarge),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // App Logo
                  const LogoWidget(size: 80),
                  
                  const SizedBox(height: 30),
                  
                  // Title
                  Text(
                    _isOtpVerified ? 'Reset Password' : 'Enter Verification Code',
                    style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  
                  const SizedBox(height: 10),
                  
                  Text(
                    _isOtpVerified 
                        ? 'Create a new strong password'
                        : 'Enter the 6-digit code sent to ${widget.email}',
                    style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                      color: Colors.white.withValues(alpha: 0.9),
                    ),
                    textAlign: TextAlign.center,
                  ),
                  
                  const SizedBox(height: 40),
                  
                  // Form Container
                  Container(
                    padding: const EdgeInsets.all(AppSizes.paddingLarge),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(AppSizes.radiusLarge),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.1),
                          blurRadius: 10,
                          offset: const Offset(0, 5),
                        ),
                      ],
                    ),
                    child: !_isOtpVerified 
                      ? Column(
                          children: [
                            // Timer Display
                            Container(
                              padding: const EdgeInsets.symmetric(
                                horizontal: AppSizes.paddingMedium,
                                vertical: AppSizes.paddingSmall,
                              ),
                              decoration: BoxDecoration(
                                color: _timeLeft < 30 
                                    ? Colors.red.withOpacity(0.1)
                                    : AppColors.primaryLight.withOpacity(0.1),
                                borderRadius: BorderRadius.circular(AppSizes.radiusSmall),
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Icon(
                                    Icons.timer,
                                    size: 16,
                                    color: _timeLeft < 30 ? Colors.red : AppColors.primary,
                                  ),
                                  const SizedBox(width: 4),
                                  Text(
                                    'Time remaining: ${_formatTime(_timeLeft)}',
                                    style: TextStyle(
                                      color: _timeLeft < 30 ? Colors.red : AppColors.primary,
                                      fontWeight: FontWeight.w600,
                                      fontSize: 14,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            
                            const SizedBox(height: AppSizes.paddingLarge),
                            
                            CustomTextField(
                              controller: _otpController,
                              labelText: 'Verification Code',
                              hintText: 'Enter 6-digit code',
                              keyboardType: TextInputType.number,
                              textAlign: TextAlign.center,
                              maxLength: 6,
                              inputFormatters: [
                                FilteringTextInputFormatter.digitsOnly,
                              ],
                            ),
                            
                            const SizedBox(height: AppSizes.paddingLarge),
                            
                            CustomButton(
                              onPressed: (_isVerifying || _timeLeft == 0) ? null : _verifyOTP,
                              text: _isVerifying ? 'Verifying...' : 'Verify Code',
                              isLoading: _isVerifying,
                            ),
                            
                            const SizedBox(height: AppSizes.paddingMedium),
                            
                            if (_timeLeft > 0)
                              TextButton(
                                onPressed: _isResending ? null : _resendOTP,
                                child: Text(
                                  _isResending ? 'Sending...' : 'Resend Code',
                                  style: TextStyle(
                                    color: AppColors.primary,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              )
                            else
                              Column(
                                children: [
                                  Text(
                                    'Code expired!',
                                    style: TextStyle(
                                      color: Colors.red,
                                      fontWeight: FontWeight.w600,
                                    ),
                                  ),
                                  const SizedBox(height: 8),
                                  CustomButton(
                                    onPressed: _isResending ? null : _resendOTP,
                                    text: _isResending ? 'Sending...' : 'Request New Code',
                                    isLoading: _isResending,
                                  ),
                                ],
                              ),
                            
                            const SizedBox(height: AppSizes.paddingMedium),
                            
                            TextButton(
                              onPressed: () {
                                Navigator.pop(context);
                              },
                              child: Text(
                                'Back to Login',
                                style: TextStyle(
                                  color: AppColors.textSecondary,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ),
                          ],
                        )
                      : Form(
                          key: _formKey,
                          child: Column(
                            children: [
                              Icon(
                                Icons.check_circle,
                                color: Colors.green,
                                size: 48,
                              ),
                              const SizedBox(height: AppSizes.paddingMedium),
                              Text(
                                'OTP Verified!',
                                style: Theme.of(context).textTheme.titleLarge?.copyWith(
                                  color: Colors.green,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const SizedBox(height: AppSizes.paddingLarge),
                              
                              CustomTextField(
                                controller: _newPasswordController,
                                labelText: 'New Password',
                                hintText: 'Enter new password',
                                obscureText: true,
                                validator: (value) {
                                  if (value == null || value.isEmpty) {
                                    return 'Please enter new password';
                                  }
                                  if (value.length < 6) {
                                    return 'Password must be at least 6 characters';
                                  }
                                  return null;
                                },
                              ),
                              
                              const SizedBox(height: AppSizes.paddingMedium),
                              
                              CustomTextField(
                                controller: _confirmPasswordController,
                                labelText: 'Confirm Password',
                                hintText: 'Re-enter new password',
                                obscureText: true,
                                validator: (value) {
                                  if (value == null || value.isEmpty) {
                                    return 'Please confirm your password';
                                  }
                                  if (value != _newPasswordController.text) {
                                    return 'Passwords do not match';
                                  }
                                  return null;
                                },
                              ),
                              
                              const SizedBox(height: AppSizes.paddingLarge),
                              
                              CustomButton(
                                onPressed: _isResetting ? null : _resetPassword,
                                text: _isResetting ? 'Resetting...' : 'Reset Password',
                                isLoading: _isResetting,
                              ),
                            ],
                          ),
                        ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

