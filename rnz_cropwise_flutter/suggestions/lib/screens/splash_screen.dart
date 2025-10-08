import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../services/favorites_service.dart';
import '../utils/constants.dart';
import 'home_screen.dart';
import 'auth/login_screen.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _fadeAnimation;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    
    _animationController = AnimationController(
      duration: AppConstants.longAnimation,
      vsync: this,
    );

    _fadeAnimation = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeIn,
    ));

    _scaleAnimation = Tween<double>(
      begin: 0.8,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _animationController,
      curve: Curves.elasticOut,
    ));

    _animationController.forward();
    _initializeApp();
  }

  Future<void> _initializeApp() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final favoritesService = Provider.of<FavoritesService>(context, listen: false);
    
    try {
      await authProvider.initialize();
      
      // Initialize favorites service
      await favoritesService.initialize();
      
      // Add a small delay for better UX
      await Future.delayed(const Duration(seconds: 2));
      
      if (mounted) {
        _navigateToNextScreen(authProvider);
      }
    } catch (e) {
      if (mounted) {
        _navigateToNextScreen(authProvider);
      }
    }
  }

  void _navigateToNextScreen(AuthProvider authProvider) {
    Navigator.of(context).pushReplacement(
      PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) {
          return authProvider.isAuthenticated
              ? const HomeScreen()
              : const LoginScreen();
        },
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return FadeTransition(opacity: animation, child: child);
        },
        transitionDuration: AppConstants.mediumAnimation,
      ),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.primary,
      body: Center(
        child: AnimatedBuilder(
          animation: _animationController,
          builder: (context, child) {
            return FadeTransition(
              opacity: _fadeAnimation,
              child: ScaleTransition(
                scale: _scaleAnimation,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // App Logo/Icon
                    Image.asset(
                      'assets/images/rnz_logo.png',
                      width: 80,
                      height: 80,
                      fit: BoxFit.contain,
                    ),
                    
                    const SizedBox(height: 30),
                    
                                         // App Name
                     Text(
                       'CropWise',
                       style: const TextStyle(
                         fontSize: 28,
                         fontWeight: FontWeight.bold,
                         color: Colors.white,
                         letterSpacing: 1.2,
                       ),
                     ),
                    
                    const SizedBox(height: 8),
                    
                                         // App Description
                     Text(
                       'Agriculture AI Platform',
                       style: const TextStyle(
                         fontSize: 16,
                         color: Colors.white70,
                         letterSpacing: 0.5,
                       ),
                     ),
                    
                    const SizedBox(height: 50),
                    
                    // Loading Indicator
                    const CircularProgressIndicator(
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                      strokeWidth: 3,
                    ),
                    
                    const SizedBox(height: 20),
                    
                    // Loading Text
                    const Text(
                      'Loading...',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.white60,
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
