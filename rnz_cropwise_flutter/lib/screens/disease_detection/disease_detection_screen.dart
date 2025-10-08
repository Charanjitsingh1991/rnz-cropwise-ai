import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';
import 'dart:io';
import 'dart:convert';

import '../../providers/disease_detection_provider.dart';
import '../../services/expert_request_service.dart';
import '../../services/permission_service.dart';
import '../../utils/constants.dart';
import '../../widgets/loading_overlay.dart';

class DiseaseDetectionScreen extends StatefulWidget {
  const DiseaseDetectionScreen({super.key});

  @override
  State<DiseaseDetectionScreen> createState() => _DiseaseDetectionScreenState();
}

class _DiseaseDetectionScreenState extends State<DiseaseDetectionScreen> {
  final ImagePicker _picker = ImagePicker();
  File? _selectedImage;
  Uint8List? _selectedImageBytes;
  bool _isAnalyzing = false;
  bool _isSubmittingExpert = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Plant Disease Detection 🌱'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.message),
            onPressed: () => Navigator.pushNamed(context, '/expert-requests'),
            tooltip: 'View Expert Requests',
          ),
        ],
      ),
      body: Consumer<DiseaseDetectionProvider>(
        builder: (context, provider, child) {
          return Stack(
            children: [
              SingleChildScrollView(
                padding: const EdgeInsets.all(AppSizes.paddingLarge),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildHeader(),
                    const SizedBox(height: 24),
                    _buildImageSection(),
                    const SizedBox(height: 24),
                    if (provider.detectionResult != null) _buildResultSection(provider),
                    const SizedBox(height: 24),
                    _buildInstructions(),
                  ],
                ),
              ),
              if (_isAnalyzing || _isSubmittingExpert) const LoadingOverlay(
                isLoading: true,
                child: SizedBox(),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(AppSizes.paddingLarge),
      decoration: BoxDecoration(
        gradient: AppColors.primaryGradient,
        borderRadius: BorderRadius.circular(AppSizes.radiusLarge),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(
                Icons.eco,
                color: Colors.white,
                size: 32,
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  'Plant Disease Detection',
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            'Upload a photo of your plant to get instant disease diagnosis and RNZ treatment recommendations',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: Colors.white.withValues(alpha: 0.9),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildImageSection() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.eco, color: AppColors.primary),
                const SizedBox(width: 8),
                Text(
                  'Plant Photo',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            const SizedBox(height: AppSizes.paddingMedium),

            // Upload/Capture Buttons
            Row(
              children: [
                Expanded(
                  child: _buildUploadButton(),
                ),
                const SizedBox(width: AppSizes.paddingMedium),
                Expanded(
                  child: _buildCameraButton(),
                ),
              ],
            ),

            // Image Preview
            if (_selectedImage != null || _selectedImageBytes != null) ...[
              const SizedBox(height: AppSizes.paddingMedium),
              Container(
                width: double.infinity,
                height: 200,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
                  border: Border.all(color: AppColors.border),
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
                  child: kIsWeb 
                    ? Image.memory(
                        _selectedImageBytes!,
                        fit: BoxFit.cover,
                      )
                    : Image.file(
                        _selectedImage!,
                        fit: BoxFit.cover,
                      ),
                ),
              ),
              const SizedBox(height: AppSizes.paddingMedium),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton.icon(
                  onPressed: _isAnalyzing ? null : _analyzeImage,
                  icon: _isAnalyzing 
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Icon(Icons.search),
                  label: Text(_isAnalyzing ? 'Analyzing...' : 'Analyze Plant'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.success,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 16),
                  ),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _buildUploadButton() {
    return InkWell(
      onTap: _pickImageFromGallery,
      borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
      child: Container(
        height: 120,
        decoration: BoxDecoration(
          border: Border.all(color: AppColors.border),
          borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.upload, color: AppColors.primary, size: 32),
            const SizedBox(height: 8),
            Text(
              'Upload Photo',
              style: TextStyle(
                color: AppColors.primary,
                fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCameraButton() {
    return InkWell(
      onTap: _pickImageFromCamera,
      borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
      child: Container(
        height: 120,
        decoration: BoxDecoration(
          border: Border.all(color: AppColors.border),
          borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.camera_alt, color: AppColors.primary, size: 32),
            const SizedBox(height: 8),
            Text(
              'Take Photo',
              style: TextStyle(
                color: AppColors.primary,
                fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildResultSection(DiseaseDetectionProvider provider) {
    final result = provider.detectionResult!;
    
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header
            Row(
              children: [
                Icon(
                  result.isHealthy ? Icons.check_circle : Icons.warning,
                  color: result.isHealthy ? AppColors.success : AppColors.error,
                  size: 24,
                ),
                const SizedBox(width: 8),
                Text(
                  'Diagnosis Results',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            const SizedBox(height: AppSizes.paddingMedium),

            // Plant Identification
            Row(
              children: [
                Expanded(
                  child: _buildInfoCard('Plant Type', result.plantType),
                ),
                const SizedBox(width: AppSizes.paddingMedium),
                Expanded(
                  child: _buildInfoCard('Health Status', result.isHealthy ? 'Healthy' : 'Diseased'),
                ),
              ],
            ),

            // Disease Information (if not healthy)
            if (!result.isHealthy) ...[
              const SizedBox(height: AppSizes.paddingMedium),
              const Divider(),
              const SizedBox(height: AppSizes.paddingMedium),
              
              Row(
                children: [
                  Expanded(
                    child: _buildInfoCard('Disease', result.diseaseName),
                  ),
                  const SizedBox(width: AppSizes.paddingMedium),
                  Expanded(
                    child: _buildInfoCard('Confidence', '${(result.confidenceScore * 100).toStringAsFixed(1)}%'),
                  ),
                ],
              ),

              const SizedBox(height: AppSizes.paddingMedium),
              _buildInfoCard('Severity', result.diseaseSeverity),

              const SizedBox(height: AppSizes.paddingMedium),
              _buildInfoCard('Affected Parts', result.affectedParts.join(', ')),

              const SizedBox(height: AppSizes.paddingMedium),
              _buildInfoCard('Disease Description', result.diseaseDescription),
            ],

            // Product Recommendations
            if (!result.isHealthy && result.productRecommendations.isNotEmpty) ...[
              const SizedBox(height: AppSizes.paddingMedium),
              const Divider(),
              const SizedBox(height: AppSizes.paddingMedium),
              
              Text(
                'Recommended RNZ Products',
                style: Theme.of(context).textTheme.titleSmall?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: AppSizes.paddingSmall),
              
              ...result.productRecommendations.map((product) => 
                Container(
                  width: double.infinity,
                  margin: const EdgeInsets.only(bottom: 8),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.green.shade50,
                    borderRadius: BorderRadius.circular(AppSizes.radiusSmall),
                    border: Border.all(color: Colors.green.shade200),
                  ),
                  child: Text(
                    product,
                    style: TextStyle(
                      color: Colors.green.shade700,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),

              const SizedBox(height: AppSizes.paddingMedium),
              _buildInfoCard('Product Usage Instructions', result.rnzProductUsage),
            ],

            // Preventative Measures
            if (result.preventativeMeasures.isNotEmpty) ...[
              const SizedBox(height: AppSizes.paddingMedium),
              const Divider(),
              const SizedBox(height: AppSizes.paddingMedium),
              
              Text(
                'Preventative Measures',
                style: Theme.of(context).textTheme.titleSmall?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: AppSizes.paddingSmall),
              
              ...result.preventativeMeasures.map((measure) => 
                Padding(
                  padding: const EdgeInsets.only(bottom: 4),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('• ', style: TextStyle(color: AppColors.primary)),
                      Expanded(
                        child: Text(
                          measure,
                          style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            color: AppColors.textSecondary,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],

            // Additional Insights
            if (result.additionalInsights.isNotEmpty) ...[
              const SizedBox(height: AppSizes.paddingMedium),
              const Divider(),
              const SizedBox(height: AppSizes.paddingMedium),
              
              _buildInfoCard('Additional Insights', result.additionalInsights),
            ],

            // Talk to Expert Button
            const SizedBox(height: AppSizes.paddingMedium),
            const Divider(),
            const SizedBox(height: AppSizes.paddingMedium),
            
            SizedBox(
              width: double.infinity,
              child: ElevatedButton.icon(
                onPressed: _isSubmittingExpert ? null : _talkToExpert,
                icon: _isSubmittingExpert 
                  ? const SizedBox(
                      width: 16,
                      height: 16,
                      child: CircularProgressIndicator(strokeWidth: 2),
                    )
                  : const Icon(Icons.message),
                label: Text(_isSubmittingExpert ? 'Submitting Request...' : 'Talk to RNZ Expert'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
              ),
            ),
            const SizedBox(height: AppSizes.paddingSmall),
            Center(
              child: Text(
                'Get personalized advice from our agricultural experts',
                style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color: AppColors.textSecondary,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoCard(String label, String value) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: Theme.of(context).textTheme.bodySmall?.copyWith(
            fontWeight: FontWeight.w500,
            color: AppColors.textSecondary,
          ),
        ),
        const SizedBox(height: 4),
        Text(
          value,
          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }

  Widget _buildInstructions() {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Tips for Better Results',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 12),
            _buildInstructionItem(
              'Ensure good lighting when taking photos',
              Icons.lightbulb,
            ),
            _buildInstructionItem(
              'Focus on the affected area of the plant',
              Icons.center_focus_strong,
            ),
            _buildInstructionItem(
              'Take photos from multiple angles if needed',
              Icons.rotate_right,
            ),
            _buildInstructionItem(
              'Make sure the plant is clearly visible',
              Icons.visibility,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInstructionItem(String text, IconData icon) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        children: [
          Icon(icon, color: AppColors.primary, size: 20),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              text,
              style: Theme.of(context).textTheme.bodyMedium,
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _pickImageFromCamera() async {
    try {
      // Request camera permission naturally when user tries to use camera
      final hasPermission = await PermissionService.requestCameraPermission();
      if (!hasPermission) {
        _showErrorSnackBar('Camera permission is required to take photos');
        return;
      }

      final XFile? image = await _picker.pickImage(
        source: ImageSource.camera,
        maxWidth: 1024,
        maxHeight: 1024,
        imageQuality: 85,
      );
      
      if (image != null) {
        final bytes = await image.readAsBytes();
        setState(() {
          _selectedImage = kIsWeb ? null : File(image.path);
          _selectedImageBytes = bytes;
        });
      }
    } catch (e) {
      _showErrorSnackBar('Error accessing camera: $e');
    }
  }

  Future<void> _pickImageFromGallery() async {
    try {
      final XFile? image = await _picker.pickImage(
        source: ImageSource.gallery,
        maxWidth: 1024,
        maxHeight: 1024,
        imageQuality: 85,
      );
      
      if (image != null) {
        final bytes = await image.readAsBytes();
        setState(() {
          _selectedImage = kIsWeb ? null : File(image.path);
          _selectedImageBytes = bytes;
        });
      }
    } catch (e) {
      _showErrorSnackBar('Error picking image: $e');
    }
  }

  Future<void> _analyzeImage() async {
    if (_selectedImage == null && _selectedImageBytes == null) {
      _showErrorSnackBar('Please select an image first');
      return;
    }

    setState(() {
      _isAnalyzing = true;
    });

    try {
      // Convert image to base64 data URI
      String photoDataUri;
      if (kIsWeb && _selectedImageBytes != null) {
        photoDataUri = 'data:image/jpeg;base64,${base64Encode(_selectedImageBytes!)}';
      } else if (_selectedImage != null) {
        final bytes = await _selectedImage!.readAsBytes();
        photoDataUri = 'data:image/jpeg;base64,${base64Encode(bytes)}';
      } else {
        throw Exception('No image data available');
      }

      final provider = context.read<DiseaseDetectionProvider>();
      await provider.detectDisease(photoDataUri);
      
      _showSuccessSnackBar('Analysis completed successfully!');
    } catch (e) {
      _showErrorSnackBar('Error analyzing image: $e');
    } finally {
      setState(() {
        _isAnalyzing = false;
      });
    }
  }

  Future<void> _talkToExpert() async {
    final provider = context.read<DiseaseDetectionProvider>();
    if (provider.detectionResult == null) {
      _showErrorSnackBar('Please analyze a plant image first');
      return;
    }

    setState(() {
      _isSubmittingExpert = true;
    });

    try {
      // Get the plant image (either from selected image or image bytes)
      String plantImage;
      if (kIsWeb && _selectedImageBytes != null) {
        plantImage = 'data:image/jpeg;base64,${base64Encode(_selectedImageBytes!)}';
      } else if (_selectedImage != null) {
        final bytes = await _selectedImage!.readAsBytes();
        plantImage = 'data:image/jpeg;base64,${base64Encode(bytes)}';
      } else {
        throw Exception('No image data available');
      }

      // Submit expert request using the service
      final result = await ExpertRequestService.submitExpertRequest(
        diagnosisResult: provider.detectionResult!,
        plantImage: plantImage,
      );

      if (result['success']) {
        _showSuccessSnackBar(result['message'] ?? 'Expert request submitted successfully!');
      } else {
        _showErrorSnackBar(result['message'] ?? 'Failed to submit expert request');
      }
    } catch (e) {
      _showErrorSnackBar('Error submitting expert request: $e');
    } finally {
      setState(() {
        _isSubmittingExpert = false;
      });
    }
  }

  void _showErrorSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: AppColors.error,
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _showSuccessSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: AppColors.success,
        behavior: SnackBarBehavior.floating,
      ),
    );
  }
}
