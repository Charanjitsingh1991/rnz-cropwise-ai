import 'package:permission_handler/permission_handler.dart';
import 'package:local_auth/local_auth.dart';

/// Android System Permission Service
/// This service ensures that Android system permission dialogs are used
/// instead of custom UI components for better user experience and compliance.
class AndroidPermissionService {
  static final LocalAuthentication _localAuth = LocalAuthentication();

  /// Request camera permission using Android system dialog
  static Future<bool> requestCameraPermission() async {
    try {
      final status = await Permission.camera.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        final result = await Permission.camera.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting camera permission: $e');
      return false;
    }
  }

  /// Request storage permission using Android system dialog
  static Future<bool> requestStoragePermission() async {
    try {
      final status = await Permission.storage.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        final result = await Permission.storage.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting storage permission: $e');
      return false;
    }
  }

  /// Request location permission using Android system dialog
  static Future<bool> requestLocationPermission() async {
    try {
      final status = await Permission.location.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        final result = await Permission.location.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting location permission: $e');
      return false;
    }
  }

  /// Request notification permission using Android system dialog
  static Future<bool> requestNotificationPermission() async {
    try {
      final status = await Permission.notification.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        final result = await Permission.notification.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting notification permission: $e');
      return false;
    }
  }

  /// Request all permissions sequentially to avoid conflicts
  static Future<Map<Permission, bool>> requestAllPermissions() async {
    final results = <Permission, bool>{};
    
    // Request permissions one by one with delays to avoid conflicts
    final permissions = [
      Permission.camera,
      Permission.storage,
      Permission.location,
      Permission.notification,
    ];
    
    for (final permission in permissions) {
      try {
        await Future.delayed(const Duration(milliseconds: 500)); // Small delay between requests
        
        final status = await permission.status;
        if (status.isGranted) {
          results[permission] = true;
        } else if (status.isDenied) {
          final result = await permission.request();
          results[permission] = result.isGranted;
        } else if (status.isPermanentlyDenied) {
          results[permission] = false;
        } else {
          results[permission] = false;
        }
      } catch (e) {
        print('Error requesting $permission: $e');
        results[permission] = false;
      }
    }
    
    return results;
  }

  /// Check if biometric authentication is available
  static Future<bool> isBiometricAvailable() async {
    try {
      final isDeviceSupported = await _localAuth.isDeviceSupported();
      final canCheckBiometrics = await _localAuth.canCheckBiometrics;
      final availableBiometrics = await _localAuth.getAvailableBiometrics();
      
      return isDeviceSupported && canCheckBiometrics && availableBiometrics.isNotEmpty;
    } catch (e) {
      print('Error checking biometric availability: $e');
      return false;
    }
  }

  /// Request biometric authentication
  static Future<bool> requestBiometricAuthentication({
    String reason = 'Please authenticate to continue',
  }) async {
    try {
      final isAuthenticated = await _localAuth.authenticate(
        localizedReason: reason,
        options: const AuthenticationOptions(
          stickyAuth: true,
          biometricOnly: false,
        ),
      );
      return isAuthenticated;
    } catch (e) {
      print('Error requesting biometric authentication: $e');
      return false;
    }
  }

  /// Get permission status
  static Future<Map<Permission, PermissionStatus>> getPermissionStatus() async {
    final permissions = [
      Permission.camera,
      Permission.storage,
      Permission.location,
      Permission.notification,
    ];
    
    final statuses = <Permission, PermissionStatus>{};
    for (final permission in permissions) {
      statuses[permission] = await permission.status;
    }
    
    return statuses;
  }

  /// Open app settings
  static Future<void> openAppSettings() async {
    try {
      await openAppSettings();
    } catch (e) {
      print('Error opening app settings: $e');
    }
  }

  /// Get permission description
  static String getPermissionDescription(Permission permission) {
    switch (permission) {
      case Permission.camera:
        return 'Camera access is required to take photos for crop analysis and documentation';
      case Permission.storage:
        return 'Storage access is required to save and manage photos and documents';
      case Permission.location:
        return 'Location access is required to provide location-based crop recommendations';
      case Permission.notification:
        return 'Access to notifications for important updates and alerts';
      default:
        return 'This permission is required for app functionality';
    }
  }

  /// Request biometric permission (alias for requestBiometricAuthentication)
  static Future<bool> requestBiometricPermission() async {
    return await requestBiometricAuthentication();
  }

  /// Check if a specific permission is granted
  static Future<bool> isPermissionGranted(Permission permission) async {
    final status = await permission.status;
    return status.isGranted;
  }

  /// Check all permissions
  static Future<Map<Permission, bool>> checkAllPermissions() async {
    return await requestAllPermissions();
  }

  /// Get permission display name
  static String getPermissionDisplayName(Permission permission) {
    return getPermissionDescription(permission);
  }
}

