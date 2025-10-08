import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import '../../utils/constants.dart';
import '../../services/permission_service.dart';

class PermissionRequestScreen extends StatefulWidget {
  const PermissionRequestScreen({super.key});

  @override
  State<PermissionRequestScreen> createState() => _PermissionRequestScreenState();
}

class _PermissionRequestScreenState extends State<PermissionRequestScreen> {
  bool _isLoading = false;
  Map<Permission, PermissionStatus> _permissionStatuses = {};

  @override
  void initState() {
    super.initState();
    _checkPermissions();
  }

  Future<void> _checkPermissions() async {
    final statuses = await PermissionService.checkAllPermissions();
    setState(() {
      _permissionStatuses = statuses;
    });
  }

  Future<void> _requestAllPermissions() async {
    setState(() {
      _isLoading = true;
    });

    try {
      // This will show the default Android system permission dialogs one by one
      final results = await PermissionService.requestEssentialPermissions();
      
      // Update the statuses
      await _checkPermissions();
      
      // Show results
      final grantedCount = results.values.where((granted) => granted).length;
      final totalCount = results.length;
      
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('$grantedCount out of $totalCount permissions granted'),
            backgroundColor: grantedCount == totalCount ? Colors.green : Colors.orange,
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Error requesting permissions: $e'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  Future<void> _requestSinglePermission(Permission permission) async {
    bool granted = false;
    
    switch (permission) {
      case Permission.camera:
        granted = await PermissionService.requestCameraPermission();
        break;
      case Permission.location:
        granted = await PermissionService.requestLocationPermission();
        break;
      case Permission.storage:
        granted = await PermissionService.requestStoragePermission();
        break;
      case Permission.notification:
        granted = await PermissionService.requestNotificationPermission();
        break;
      default:
        break;
    }
    
    // Update the status
    await _checkPermissions();
    
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('${_getPermissionName(permission)}: ${granted ? 'Granted' : 'Denied'}'),
          backgroundColor: granted ? Colors.green : Colors.red,
        ),
      );
    }
  }

  String _getPermissionName(Permission permission) {
    switch (permission) {
      case Permission.camera:
        return 'Camera';
      case Permission.location:
        return 'Location';
      case Permission.storage:
        return 'Storage';
      case Permission.notification:
        return 'Notifications';
      default:
        return permission.toString();
    }
  }

  IconData _getPermissionIcon(Permission permission) {
    switch (permission) {
      case Permission.camera:
        return Icons.camera_alt;
      case Permission.location:
        return Icons.location_on;
      case Permission.storage:
        return Icons.storage;
      case Permission.notification:
        return Icons.notifications;
      default:
        return Icons.security;
    }
  }

  Color _getPermissionStatusColor(PermissionStatus status) {
    switch (status) {
      case PermissionStatus.granted:
        return Colors.green;
      case PermissionStatus.denied:
        return Colors.orange;
      case PermissionStatus.permanentlyDenied:
        return Colors.red;
      case PermissionStatus.restricted:
        return Colors.grey;
      case PermissionStatus.limited:
        return Colors.blue;
      case PermissionStatus.provisional:
        return Colors.purple;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Permissions'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'App Permissions',
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'This app needs certain permissions to function properly. Tap on each permission to request it using the default system dialog.',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
            ),
            const SizedBox(height: 24),
            
            // Permission list
            Expanded(
              child: ListView(
                children: [
                  Permission.camera,
                  Permission.location,
                  Permission.storage,
                  Permission.notification,
                ].map((permission) {
                  final status = _permissionStatuses[permission] ?? PermissionStatus.denied;
                  final isGranted = status == PermissionStatus.granted;
                  
                  return Card(
                    margin: const EdgeInsets.only(bottom: 8),
                    child: ListTile(
                      leading: Icon(
                        _getPermissionIcon(permission),
                        color: _getPermissionStatusColor(status),
                      ),
                      title: Text(_getPermissionName(permission)),
                      subtitle: Text(
                        PermissionService.getPermissionStatusDescription(permission, status),
                        style: TextStyle(
                          color: _getPermissionStatusColor(status),
                        ),
                      ),
                      trailing: isGranted
                          ? const Icon(Icons.check_circle, color: Colors.green)
                          : IconButton(
                              onPressed: _isLoading ? null : () => _requestSinglePermission(permission),
                              icon: const Icon(Icons.arrow_forward),
                            ),
                    ),
                  );
                }).toList(),
              ),
            ),
            
            // Request all button
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: _isLoading ? null : _requestAllPermissions,
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
                child: _isLoading
                    ? const SizedBox(
                        height: 20,
                        width: 20,
                        child: CircularProgressIndicator(
                          strokeWidth: 2,
                          valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                        ),
                      )
                    : const Text('Request All Permissions'),
              ),
            ),
            
            const SizedBox(height: 16),
            
            // Continue button
            SizedBox(
              width: double.infinity,
              child: OutlinedButton(
                onPressed: () {
                  // Navigate to main app
                  Navigator.pushReplacementNamed(context, '/main-navigation');
                },
                style: OutlinedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
                child: const Text('Continue to App'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

