import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/auth_provider.dart';
import '../../utils/constants.dart';
import '../../data/location_data.dart';
import '../../widgets/custom_text_field.dart';
import '../../widgets/custom_button.dart';
import '../home_screen.dart';
import 'login_screen.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();
  final _fullNameController = TextEditingController();
  final _phoneController = TextEditingController();
  
  bool _isPasswordVisible = false;
  bool _isConfirmPasswordVisible = false;
  bool _isOtpSent = false;
  bool _isEmailVerified = false;
  
  String? _selectedCountry;
  String? _selectedCountryCode;
  int? _maxPhoneLength;
  
  final List<TextEditingController> _otpControllers = List.generate(
    6, 
    (index) => TextEditingController(),
  );
  final List<FocusNode> _otpFocusNodes = List.generate(
    6, 
    (index) => FocusNode(),
  );

  @override
  void initState() {
    super.initState();
    // Set default country to India
    _selectedCountry = 'IN';
    _selectedCountryCode = AppConstants.phoneCodes['IN'];
    _maxPhoneLength = AppConstants.phoneLengths['IN']?.first;
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    _fullNameController.dispose();
    _phoneController.dispose();
    for (var controller in _otpControllers) {
      controller.dispose();
    }
    for (var node in _otpFocusNodes) {
      node.dispose();
    }
    super.dispose();
  }

  void _onCountryChanged(String? countryCode) {
    if (countryCode != null) {
      setState(() {
        _selectedCountry = countryCode;
        _selectedCountryCode = AppConstants.phoneCodes[countryCode];
        _maxPhoneLength = AppConstants.phoneLengths[countryCode]?.first;
        _phoneController.clear();
      });
    }
  }

  String? _validatePhone(String? value) {
    if (value == null || value.isEmpty) {
      return 'Please enter your phone number';
    }
    
    if (_maxPhoneLength != null && value.length != _maxPhoneLength) {
      return 'Phone number must be $_maxPhoneLength digits';
    }
    
    if (!RegExp(r'^\d+$').hasMatch(value)) {
      return 'Please enter only digits';
    }
    
    return null;
  }

  Future<void> _signup() async {
    if (!_formKey.currentState!.validate()) return;

    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    
    final success = await authProvider.signup(
      email: _emailController.text.trim(),
      password: _passwordController.text,
      fullName: _fullNameController.text.trim(),
      country: _selectedCountry!,
      phoneNumber: '$_selectedCountryCode${_phoneController.text}',
    );

    if (success && mounted) {
      setState(() {
        _isOtpSent = true;
      });
      
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('OTP sent to your email. Please verify to continue.'),
          backgroundColor: AppColors.success,
        ),
      );
    } else if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(authProvider.error ?? AppText.serverError),
          backgroundColor: AppColors.error,
        ),
      );
    }
  }

  Future<void> _verifyOtp() async {
    final otp = _otpControllers.map((controller) => controller.text).join();
    
    if (otp.length != 6) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Please enter the complete 6-digit OTP'),
          backgroundColor: AppColors.error,
        ),
      );
      return;
    }

    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    
    final success = await authProvider.verifyEmail(
      email: _emailController.text.trim(),
      otp: otp,
    );

    if (success && mounted) {
      setState(() {
        _isEmailVerified = true;
      });
      
      // Show biometric guidance
      _showBiometricGuidance();
    } else if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(authProvider.error ?? AppText.otpInvalid),
          backgroundColor: AppColors.error,
        ),
      );
    }
  }

  void _showBiometricGuidance() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        title: const Text('Enable Biometric Login'),
        content: const Text(
          'For faster and more secure access, you can enable biometric login (fingerprint/face recognition).\n\n'
          'You can change this setting later in your profile.',
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              _navigateToHome();
            },
            child: const Text('Skip'),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.of(context).pop();
              await _enableBiometric();
              _navigateToHome();
            },
            child: const Text('Enable'),
          ),
        ],
      ),
    );
  }

  Future<void> _enableBiometric() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    await authProvider.setBiometricEnabled(true);
    await authProvider.saveCredentials(
      _emailController.text.trim(),
      _passwordController.text,
    );
    
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Biometric login enabled!'),
          backgroundColor: AppColors.success,
        ),
      );
    }
  }

  void _navigateToHome() {
    Navigator.of(context).pushAndRemoveUntil(
      MaterialPageRoute(builder: (context) => const HomeScreen()),
      (route) => false,
    );
  }

  void _handleOtpInput(String value, int index) {
    if (value.length == 1 && index < 5) {
      _otpFocusNodes[index + 1].requestFocus();
    } else if (value.isEmpty && index > 0) {
      _otpFocusNodes[index - 1].requestFocus();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Create Account'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                if (!_isOtpSent && !_isEmailVerified) ...[
                  // App Logo
                  Container(
                    margin: const EdgeInsets.only(bottom: 30),
                    child: Image.asset(
                      'assets/images/rnz_logo.png',
                      width: 60,
                      height: 60,
                      fit: BoxFit.contain,
                    ),
                  ),
                  
                  // Welcome Text
                  Text(
                    AppText.signupTitle,
                    style: const TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      color: AppColors.textPrimary,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  
                  SizedBox(height: 8),
                  
                  Text(
                    'Join RNZ CropWise for smart farming',
                    style: const TextStyle(
                      fontSize: 16,
                      color: AppColors.textSecondary,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  
                  SizedBox(height: 40),
                  
                  // Full Name Field
                  CustomTextField(
                    controller: _fullNameController,
                    labelText: 'Full Name',
                    hintText: 'Enter your full name',
                    prefixIcon: Icons.person_outlined,
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter your full name';
                      }
                      if (value.length < 2) {
                        return 'Name must be at least 2 characters';
                      }
                      return null;
                    },
                  ),
                  
                  const SizedBox(height: 20),
                  
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
                  
                  // Country Selection
                  DropdownButtonFormField<String>(
                    initialValue: _selectedCountry,
                    decoration: const InputDecoration(
                      labelText: 'Country',
                      prefixIcon: Icon(Icons.location_on_outlined),
                      border: OutlineInputBorder(),
                    ),
                    items: LocationData.pilotCountriesData.map((country) {
                      return DropdownMenuItem(
                        value: country.code,
                        child: Text(country.name),
                      );
                    }).toList(),
                    onChanged: _onCountryChanged,
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please select your country';
                      }
                      return null;
                    },
                  ),
                  
                  const SizedBox(height: 20),
                  
                  // Phone Number Field
                  Row(
                    children: [
                      // Country Code (non-editable)
                      Container(
                        width: 80,
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 16),
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey),
                          borderRadius: const BorderRadius.only(
                            topLeft: Radius.circular(4),
                            bottomLeft: Radius.circular(4),
                          ),
                        ),
                        child: Text(
                          _selectedCountryCode ?? '',
                          style: const TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      
                      // Phone Number Input
                      Expanded(
                        child: TextFormField(
                          controller: _phoneController,
                          keyboardType: TextInputType.phone,
                          maxLength: _maxPhoneLength,
                          decoration: const InputDecoration(
                            labelText: 'Phone Number',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.only(
                                topRight: Radius.circular(4),
                                bottomRight: Radius.circular(4),
                              ),
                            ),
                            counterText: '',
                          ),
                          validator: _validatePhone,
                        ),
                      ),
                    ],
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
                  
                  // Confirm Password Field
                  CustomTextField(
                    controller: _confirmPasswordController,
                    labelText: 'Confirm Password',
                    hintText: 'Confirm your password',
                    obscureText: !_isConfirmPasswordVisible,
                    prefixIcon: Icons.lock_outlined,
                    suffixIcon: IconButton(
                      icon: Icon(
                        _isConfirmPasswordVisible ? Icons.visibility : Icons.visibility_off,
                        color: AppColors.textSecondary,
                      ),
                      onPressed: () {
                        setState(() {
                          _isConfirmPasswordVisible = !_isConfirmPasswordVisible;
                        });
                      },
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please confirm your password';
                      }
                      if (value != _passwordController.text) {
                        return 'Passwords do not match';
                      }
                      return null;
                    },
                  ),
                  
                                     const SizedBox(height: 30),
                   
                   // Quick Signup Button for Testing
                   OutlinedButton.icon(
                     onPressed: () async {
                       _fullNameController.text = 'Test User';
                       _emailController.text = 'test@example.com';
                       _phoneController.text = '9876543210';
                       _passwordController.text = 'password123';
                       _confirmPasswordController.text = 'password123';
                       await _signup();
                     },
                     icon: const Icon(Icons.flash_on),
                     label: const Text('Quick Signup (Test)'),
                     style: OutlinedButton.styleFrom(
                       foregroundColor: AppColors.accent,
                       side: BorderSide(color: AppColors.accent),
                       padding: const EdgeInsets.symmetric(vertical: 16),
                       shape: RoundedRectangleBorder(
                         borderRadius: BorderRadius.circular(8),
                       ),
                     ),
                   ),
                   
                   const SizedBox(height: 20),
                   
                   // Signup Button
                   Consumer<AuthProvider>(
                     builder: (context, authProvider, child) {
                       return CustomButton(
                         text: 'Create Account',
                         onPressed: authProvider.isLoading ? null : _signup,
                         isLoading: authProvider.isLoading,
                       );
                     },
                   ),
                  
                  const SizedBox(height: 20),
                  
                  // Login Link
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Already have an account? ',
                        style: const TextStyle(
                          color: AppColors.textSecondary,
                          fontSize: 14,
                        ),
                      ),
                      TextButton(
                        onPressed: () {
                          Navigator.of(context).pushReplacement(
                            MaterialPageRoute(
                              builder: (context) => const LoginScreen(),
                            ),
                          );
                        },
                        child: Text(
                          'Log In',
                          style: const TextStyle(
                            color: AppColors.primary,
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ),
                ] else if (_isOtpSent && !_isEmailVerified) ...[
                  // OTP Verification Screen
                  const SizedBox(height: 60),
                  
                  // OTP Icon
                  Container(
                    width: 100,
                    height: 100,
                    decoration: BoxDecoration(
                      color: AppColors.primary.withValues(alpha: 0.1),
                      borderRadius: BorderRadius.circular(50),
                    ),
                    child: const Icon(
                      Icons.email_outlined,
                      size: 50,
                      color: AppColors.primary,
                    ),
                  ),
                  
                  const SizedBox(height: 30),
                  
                  Text(
                    'Verify Your Email',
                    style: const TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: AppColors.textPrimary,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  
                  const SizedBox(height: 10),
                  
                  Text(
                    'We\'ve sent a 6-digit code to\n${_emailController.text}',
                    style: const TextStyle(
                      fontSize: 16,
                      color: AppColors.textSecondary,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  
                  const SizedBox(height: 40),
                  
                  // OTP Input Fields
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: List.generate(6, (index) {
                      return SizedBox(
                        width: 45,
                        child: TextFormField(
                          controller: _otpControllers[index],
                          focusNode: _otpFocusNodes[index],
                          keyboardType: TextInputType.number,
                          textAlign: TextAlign.center,
                          maxLength: 1,
                          decoration: InputDecoration(
                            counterText: '',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(8),
                            ),
                            contentPadding: const EdgeInsets.symmetric(vertical: 12),
                          ),
                          onChanged: (value) => _handleOtpInput(value, index),
                        ),
                      );
                    }),
                  ),
                  
                                     const SizedBox(height: 30),
                   
                   // Quick OTP Verification for Testing
                   OutlinedButton.icon(
                     onPressed: () async {
                       // Fill all OTP fields with 123456
                       for (int i = 0; i < 6; i++) {
                         _otpControllers[i].text = '1';
                       }
                       await _verifyOtp();
                     },
                     icon: const Icon(Icons.flash_on),
                     label: const Text('Quick Verify (123456)'),
                     style: OutlinedButton.styleFrom(
                       foregroundColor: AppColors.accent,
                       side: BorderSide(color: AppColors.accent),
                       padding: const EdgeInsets.symmetric(vertical: 16),
                       shape: RoundedRectangleBorder(
                         borderRadius: BorderRadius.circular(8),
                       ),
                     ),
                   ),
                   
                   const SizedBox(height: 20),
                   
                   // Verify OTP Button
                   Consumer<AuthProvider>(
                     builder: (context, authProvider, child) {
                       return CustomButton(
                         text: 'Verify Email',
                         onPressed: authProvider.isLoading ? null : _verifyOtp,
                         isLoading: authProvider.isLoading,
                       );
                     },
                   ),
                  
                  const SizedBox(height: 20),
                  
                  // Resend OTP
                  TextButton(
                    onPressed: () {
                      // TODO: Implement resend OTP
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('OTP resent to your email'),
                          backgroundColor: AppColors.success,
                        ),
                      );
                    },
                    child: Text(
                      'Resend OTP',
                      style: const TextStyle(
                        color: AppColors.primary,
                        fontSize: 14,
                      ),
                    ),
                  ),
                  
                  const SizedBox(height: 20),
                  
                  // Back to Signup
                  TextButton(
                    onPressed: () {
                      setState(() {
                        _isOtpSent = false;
                        for (var controller in _otpControllers) {
                          controller.clear();
                        }
                      });
                    },
                    child: Text(
                      'Back to Signup',
                      style: const TextStyle(
                        color: AppColors.textSecondary,
                        fontSize: 14,
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }
}
