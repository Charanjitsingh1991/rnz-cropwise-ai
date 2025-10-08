import 'package:permission_handler/permission_handler.dart';

/// Permission Service
/// This service uses ONLY the default Android system permission dialogs
/// No custom UI - just the native OS dialogs
class PermissionService {
  
  /// Request camera permission using default Android system dialog
  static Future<bool> requestCameraPermission() async {
    try {
      final status = await Permission.camera.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        // This will show the default Android system permission dialog
        final result = await Permission.camera.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        // Open system settings - this is the only way to handle permanently denied
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting camera permission: $e');
      return false;
    }
  }

  /// Request location permission using default Android system dialog
  static Future<bool> requestLocationPermission() async {
    try {
      final status = await Permission.location.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        // This will show the default Android system permission dialog
        final result = await Permission.location.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        // Open system settings
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting location permission: $e');
      return false;
    }
  }

  /// Request storage permission using default Android system dialog
  static Future<bool> requestStoragePermission() async {
    try {
      final status = await Permission.storage.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        // This will show the default Android system permission dialog
        final result = await Permission.storage.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        // Open system settings
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting storage permission: $e');
      return false;
    }
  }

  /// Request notification permission using default Android system dialog
  static Future<bool> requestNotificationPermission() async {
    try {
      final status = await Permission.notification.status;
      
      if (status.isGranted) {
        return true;
      }
      
      if (status.isDenied) {
        // This will show the default Android system permission dialog
        final result = await Permission.notification.request();
        return result.isGranted;
      }
      
      if (status.isPermanentlyDenied) {
        // Open system settings
        await openAppSettings();
        return false;
      }
      
      return false;
    } catch (e) {
      print('Error requesting notification permission: $e');
      return false;
    }
  }

  /// Request all essential permissions on app start
  /// This will show multiple default Android system dialogs one by one
  static Future<Map<Permission, bool>> requestEssentialPermissions() async {
    final results = <Permission, bool>{};
    
    // Essential permissions for the app
    final permissions = [
      Permission.camera,
      Permission.location,
      Permission.storage,
      Permission.notification,
    ];
    
    // Request permissions one by one to show individual system dialogs
    for (final permission in permissions) {
      try {
        // Small delay between requests to avoid conflicts
        await Future.delayed(const Duration(milliseconds: 300));
        
        final status = await permission.status;
        if (status.isGranted) {
          results[permission] = true;
        } else if (status.isDenied) {
          // This shows the default Android system permission dialog
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

  /// Check if a permission is granted
  static Future<bool> isPermissionGranted(Permission permission) async {
    final status = await permission.status;
    return status.isGranted;
  }

  /// Check all permission statuses
  static Future<Map<Permission, PermissionStatus>> checkAllPermissions() async {
    final permissions = [
      Permission.camera,
      Permission.location,
      Permission.storage,
      Permission.notification,
    ];
    
    final statuses = <Permission, PermissionStatus>{};
    for (final permission in permissions) {
      statuses[permission] = await permission.status;
    }
    
    return statuses;
  }

  /// Open app settings (this is the only way to handle permanently denied permissions)
  static Future<void> openAppSettings() async {
    try {
      await openAppSettings();
    } catch (e) {
      print('Error opening app settings: $e');
    }
  }

  /// Get permission status description
  static String getPermissionStatusDescription(Permission permission, PermissionStatus status) {
    switch (status) {
      case PermissionStatus.granted:
        return 'Granted';
      case PermissionStatus.denied:
        return 'Denied - tap to request';
      case PermissionStatus.permanentlyDenied:
        return 'Permanently denied - go to settings';
      case PermissionStatus.restricted:
        return 'Restricted by system';
      case PermissionStatus.limited:
        return 'Limited access';
      case PermissionStatus.provisional:
        return 'Provisional';
    }
  }
}