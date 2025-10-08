import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:local_auth/local_auth.dart';

class StartupPermissionService {
  static final LocalAuthentication _localAuth = LocalAuthentication();

  /// Request all necessary permissions on app startup
  static Future<void> requestStartupPermissions(BuildContext context) async {
    try {
      // Request camera permission
      await _requestCameraPermission(context);
      
      // Request notification permission
      await _requestNotificationPermission(context);
      
      // Request location permission
      await _requestLocationPermission(context);
      
      // Check biometric availability
      await _checkBiometricAvailability(context);
      
    } catch (e) {
      print('Startup permission request error: $e');
    }
  }

  /// Request camera permission
  static Future<void> _requestCameraPermission(BuildContext context) async {
    try {
      final status = await Permission.camera.status;
      
      if (status.isDenied) {
        // Show explanation dialog
        final shouldRequest = await _showPermissionDialog(
          context,
          'Camera Permission',
          'RNZ CropWise needs camera access to detect plant diseases and take photos of your crops.',
          'Camera',
        );
        
        if (shouldRequest) {
          final result = await Permission.camera.request();
          if (result.isPermanentlyDenied) {
            _showSettingsDialog(context, 'Camera');
          }
        }
      } else if (status.isPermanentlyDenied) {
        _showSettingsDialog(context, 'Camera');
      }
    } catch (e) {
      print('Camera permission error: $e');
    }
  }

  /// Request notification permission
  static Future<void> _requestNotificationPermission(BuildContext context) async {
    try {
      final status = await Permission.notification.status;
      
      if (status.isDenied) {
        // Show explanation dialog
        final shouldRequest = await _showPermissionDialog(
          context,
          'Notification Permission',
          'RNZ CropWise needs notification access to keep you updated about your crops, weather alerts, and important updates.',
          'Notifications',
        );
        
        if (shouldRequest) {
          final result = await Permission.notification.request();
          if (result.isPermanentlyDenied) {
            _showSettingsDialog(context, 'Notifications');
          }
        }
      } else if (status.isPermanentlyDenied) {
        _showSettingsDialog(context, 'Notifications');
      }
    } catch (e) {
      print('Notification permission error: $e');
    }
  }

  /// Request location permission
  static Future<void> _requestLocationPermission(BuildContext context) async {
    try {
      final status = await Permission.location.status;
      
      if (status.isDenied) {
        // Show explanation dialog
        final shouldRequest = await _showPermissionDialog(
          context,
          'Location Permission',
          'RNZ CropWise needs location access to provide weather information, crop recommendations, and local farming insights.',
          'Location',
        );
        
        if (shouldRequest) {
          final result = await Permission.location.request();
          if (result.isPermanentlyDenied) {
            _showSettingsDialog(context, 'Location');
          }
        }
      } else if (status.isPermanentlyDenied) {
        _showSettingsDialog(context, 'Location');
      }
    } catch (e) {
      print('Location permission error: $e');
    }
  }

  /// Check biometric availability
  static Future<void> _checkBiometricAvailability(BuildContext context) async {
    try {
      final isAvailable = await _localAuth.canCheckBiometrics;
      final isDeviceSupported = await _localAuth.isDeviceSupported();
      
      if (isAvailable && isDeviceSupported) {
        final availableBiometrics = await _localAuth.getAvailableBiometrics();
        
        if (availableBiometrics.isNotEmpty) {
          // Show biometric info dialog
          await _showBiometricInfoDialog(context, availableBiometrics);
        }
      }
    } catch (e) {
      print('Biometric check error: $e');
    }
  }

  /// Show permission explanation dialog
  static Future<bool> _showPermissionDialog(
    BuildContext context,
    String title,
    String message,
    String permissionName,
  ) async {
    return await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        title: Text(title),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(message),
            const SizedBox(height: 16),
            Text(
              'This permission helps RNZ CropWise provide better service to you.',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                fontStyle: FontStyle.italic,
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Not Now'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Allow'),
          ),
        ],
      ),
    ) ?? false;
  }

  /// Show settings dialog for permanently denied permissions
  static void _showSettingsDialog(BuildContext context, String permissionName) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('$permissionName Permission Required'),
        content: Text(
          '$permissionName permission is required for RNZ CropWise to work properly. Please enable it in your device settings.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              openAppSettings();
            },
            child: const Text('Open Settings'),
          ),
        ],
      ),
    );
  }

  /// Show biometric information dialog
  static Future<void> _showBiometricInfoDialog(
    BuildContext context,
    List<BiometricType> availableBiometrics,
  ) async {
    final biometricNames = availableBiometrics.map((type) {
      switch (type) {
        case BiometricType.fingerprint:
          return 'Fingerprint';
        case BiometricType.face:
          return 'Face ID';
        case BiometricType.iris:
          return 'Iris';
        default:
          return 'Biometric';
      }
    }).join(' or ');

    await showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Secure Login Available'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Your device supports $biometricNames authentication.',
            ),
            const SizedBox(height: 16),
            const Text(
              'You can enable this in Settings > Security to quickly login without entering your password.',
            ),
          ],
        ),
        actions: [
          ElevatedButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Got It'),
          ),
        ],
      ),
    );
  }
}
