import 'package:flutter/material.dart';
import '../utils/constants.dart';

class LogoWidget extends StatelessWidget {
  final double size;
  final bool showBackground;

  const LogoWidget({
    super.key,
    this.size = 100,
    this.showBackground = true,
  });

  @override
  Widget build(BuildContext context) {
    if (showBackground) {
      return Container(
        width: size,
        height: size,
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
        child: _buildLogoContent(),
      );
    } else {
      return SizedBox(
        width: size,
        height: size,
        child: _buildLogoContent(),
      );
    }
  }

  Widget _buildLogoContent() {
    // Try to load the RNZ logo image
    // If the image is not available, show the text-based logo
    return Image.asset(
      'assets/images/rnz_logo.png',
      width: size * 0.6,
      height: size * 0.6,
      errorBuilder: (context, error, stackTrace) {
        // Fallback to text-based RNZ logo
        return Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'RNZ',
              style: TextStyle(
                fontSize: size * 0.25,
                fontWeight: FontWeight.bold,
                color: AppColors.primary,
                letterSpacing: 2,
              ),
            ),
            Text(
              'CropWise',
              style: TextStyle(
                fontSize: size * 0.12,
                fontWeight: FontWeight.w500,
                color: AppColors.textSecondary,
                letterSpacing: 1,
              ),
            ),
          ],
        );
      },
    );
  }
}
