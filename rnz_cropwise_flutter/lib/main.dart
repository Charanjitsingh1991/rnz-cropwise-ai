import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter/foundation.dart';

import 'providers/auth_provider.dart';
import 'providers/user_provider.dart';
import 'providers/product_provider.dart';
import 'providers/brochure_provider.dart';
import 'providers/support_provider.dart';
import 'providers/favorites_provider.dart';
import 'providers/ai_advisor_provider.dart';
import 'providers/disease_detection_provider.dart';
import 'providers/theme_provider.dart';

import 'screens/splash_screen.dart';
import 'screens/auth/login_screen.dart';
import 'screens/auth/signup_screen.dart';
import 'screens/auth/otp_verification_screen.dart';
import 'screens/auth/forgot_password_screen.dart';
import 'screens/auth/password_reset_otp_screen.dart';
import 'screens/auth/biometric_guidance_screen.dart';
import 'screens/settings/change_password_screen.dart';
import 'screens/main_navigation.dart';
import 'screens/home/home_screen.dart';
import 'screens/products/products_screen.dart';
import 'screens/products/product_detail_screen.dart';
import 'screens/support/support_screen.dart';
import 'screens/support/create_ticket_screen.dart';
import 'screens/support/tickets_list_screen.dart';
import 'screens/profile/profile_screen.dart';
import 'screens/profile/edit_profile_screen.dart';
import 'screens/favorites/favorites_screen.dart';
import 'screens/ai_advisor/ai_advisor_screen.dart';
import 'screens/disease_detection/disease_detection_screen.dart';
import 'screens/settings/settings_screen.dart';
import 'screens/notifications/notifications_screen.dart';
import 'screens/expert_requests/expert_requests_screen.dart';
import 'screens/expert_advice/expert_advice_screen.dart';
import 'screens/quote_requests/quote_requests_screen.dart';
import 'screens/auth/auth_screen.dart';
import 'screens/brochures/brochure_requests_screen.dart';

import 'utils/theme.dart';
import 'services/permission_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // Request essential permissions on app startup using native Android dialogs
  // This will show the standard Android permission dialogs automatically
  try {
    await PermissionService.requestEssentialPermissions();
  } catch (e) {
    print('Error requesting permissions on startup: $e');
    // Continue app startup even if permissions fail
  }
  
  runApp(const RNZCropWiseApp());
}

class RNZCropWiseApp extends StatelessWidget {
  const RNZCropWiseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => ProductProvider()),
        ChangeNotifierProvider(create: (_) => BrochureProvider()),
        ChangeNotifierProvider(create: (_) => SupportProvider()),
        ChangeNotifierProvider(create: (_) => FavoritesProvider()),
        ChangeNotifierProvider(create: (_) => AIAdvisorProvider()),
        ChangeNotifierProvider(create: (_) => DiseaseDetectionProvider()),
        ChangeNotifierProvider(create: (_) => UserProvider()),
      ],
      child: Consumer<ThemeProvider>(
        builder: (context, themeProvider, child) {
          return MaterialApp(
            title: 'RNZ CropWise',
            theme: AppTheme.lightTheme,
            darkTheme: AppTheme.darkTheme,
            themeMode: themeProvider.themeMode,
        initialRoute: '/',
        routes: {
          '/': (context) => const SplashScreen(),
          '/login': (context) => const LoginScreen(),
          '/signup': (context) => const SignupScreen(),
          '/otp-verification': (context) {
            final args = ModalRoute.of(context)?.settings.arguments as Map<String, dynamic>?;
            return OTPVerificationScreen(
              email: args?['email'] ?? '',
              signupData: args?['signupData'] ?? {},
            );
          },
          '/biometric-guidance': (context) => const BiometricGuidanceScreen(),
          '/forgot-password': (context) => const ForgotPasswordScreen(),
          '/password-reset-otp': (context) {
            final args = ModalRoute.of(context)?.settings.arguments as Map<String, dynamic>?;
            return PasswordResetOTPScreen(
              email: args?['email'] ?? '',
              purpose: args?['purpose'] ?? 'password_reset',
            );
          },
          '/change-password': (context) => const ChangePasswordScreen(),
          '/main': (context) => const MainNavigation(),
          '/home': (context) => const HomeScreen(),
          '/products': (context) => const ProductsScreen(),
          '/support': (context) => const SupportScreen(),
          '/profile': (context) => const ProfileScreen(),
          '/favorites': (context) => const FavoritesScreen(),
          '/ai-advisor': (context) => const AIAdvisorScreen(),
          '/disease-detection': (context) => const DiseaseDetectionScreen(),
          '/settings': (context) => const SettingsScreen(),
          '/notifications': (context) => const NotificationsScreen(),
          '/product-detail': (context) => ProductDetailScreen(
                productId: (ModalRoute.of(context)?.settings.arguments as String?) ?? '',
              ),
          '/expert-requests': (context) => const ExpertRequestsScreen(),
          '/expert-advice': (context) => const ExpertAdviceScreen(),
          '/quote-requests': (context) => const QuoteRequestsScreen(),
          '/create-ticket': (context) => const CreateTicketScreen(),
          '/tickets-list': (context) => const TicketsListScreen(),
          '/edit-profile': (context) => const EditProfileScreen(),
          '/auth': (context) => const AuthScreen(),
          '/brochure-requests': (context) => const BrochureRequestsScreen(),
          '/create-brochure-request': (context) => const BrochureRequestsScreen(), // Alias for brochure requests
        },
        debugShowCheckedModeBanner: false,
          );
        },
      ),
    );
  }
}

