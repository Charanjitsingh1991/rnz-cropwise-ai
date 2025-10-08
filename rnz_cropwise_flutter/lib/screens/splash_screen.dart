import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../providers/auth_provider.dart';
import '../services/biometric_auth_service.dart';
import '../services/permission_service.dart';
import '../utils/constants.dart';


class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );

    _fadeAnimation = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeIn,
    ));

    _animationController.forward();

    // Navigate after delay
    Future.delayed(const Duration(seconds: 3), () {
      _requestPermissionsAndNavigate();
    });
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }



  void _checkAuthAndNavigate() async {
    final authProvider = context.read<AuthProvider>();
    
    if (authProvider.isAuthenticated) {
      Navigator.pushReplacementNamed(context, '/main');
    } else {
      // Check if biometric or PIN is enabled
      final biometricEnabled = await authProvider.isBiometricEnabled();
      final pinSet = await BiometricAuthService.isPinCodeSet();
      
      // Request permissions using native Android system dialogs
      await _requestPermissionsAndNavigate();
    }
  }

  /// Request permissions using native Android system dialogs
  Future<void> _requestPermissionsAndNavigate() async {
    try {
      // Request essential permissions using native Android system dialogs
      // This will show the standard Android permission dialogs one by one
      await PermissionService.requestEssentialPermissions();
      
      // After permissions are handled, proceed to auth
      final authProvider = context.read<AuthProvider>();
      final biometricEnabled = await authProvider.isBiometricEnabled();
      final pinSet = await BiometricAuthService.isPinCodeSet();
      
      if (biometricEnabled || pinSet) {
        // User has biometric/PIN enabled, go to auth screen
        Navigator.pushReplacementNamed(context, '/auth');
      } else {
        // No biometric/PIN, go to login
        Navigator.pushReplacementNamed(context, '/login');
      }
    } catch (e) {
      print('Error requesting permissions: $e');
      // Even if permissions fail, continue to login
      Navigator.pushReplacementNamed(context, '/login');
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
          child: FadeTransition(
            opacity: _fadeAnimation,
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
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: Image.asset(
                      'assets/images/rnz_logo.png',
                      width: 100,
                      height: 100,
                      fit: BoxFit.contain,
                    ),
                  ),
                ),
                
                const SizedBox(height: 30),
                
                // App Name
                Text(
                  AppStrings.appName,
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                
                const SizedBox(height: 10),
                
                // App Description
                Text(
                  AppStrings.appDescription,
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    color: Colors.white.withValues(alpha: 0.9),
                  ),
                  textAlign: TextAlign.center,
                ),
                
                const SizedBox(height: 50),
                
                // Loading Indicator
                CircularProgressIndicator(
                  valueColor: AlwaysStoppedAnimation<Color>(
                    Colors.white.withValues(alpha: 0.8),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
