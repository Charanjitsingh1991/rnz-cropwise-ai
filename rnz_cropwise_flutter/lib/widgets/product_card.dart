import 'package:flutter/material.dart';

import '../models/product.dart';
import '../utils/constants.dart';

class ProductCard extends StatelessWidget {
  final Product product;
  final VoidCallback? onTap;
  final bool isFavorite;
  final VoidCallback? onFavoriteToggle;

  const ProductCard({
    super.key,
    required this.product,
    this.onTap,
    this.isFavorite = false,
    this.onFavoriteToggle,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
      ),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(AppSizes.radiusMedium),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min, // Prevent overflow
          children: [
            // Product Image
            ClipRRect(
              borderRadius: const BorderRadius.only(
                topLeft: Radius.circular(AppSizes.radiusMedium),
                topRight: Radius.circular(AppSizes.radiusMedium),
              ),
              child: AspectRatio(
                aspectRatio: 1.0, // Reduced aspect ratio to save space
                child: Container(
                  color: AppColors.lightGrey,
                  child: product.imageUrl.isNotEmpty
                      ? Image.network(
                          product.imageUrl,
                          fit: BoxFit.cover,
                          errorBuilder: (context, error, stackTrace) {
                            return Icon(
                              Icons.image_not_supported,
                              color: AppColors.textSecondary,
                              size: 32, // Reduced icon size
                            );
                          },
                        )
                      : Icon(
                          Icons.inventory_2,
                          color: AppColors.textSecondary,
                          size: 32, // Reduced icon size
                        ),
                ),
              ),
            ),
            
            // Product Info
            Expanded( // Use Expanded to take remaining space
              child: Padding(
                padding: const EdgeInsets.all(6.0), // Further reduced padding
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    // Title
                    Expanded( // Use Expanded for text to prevent overflow
                      child: Text(
                        product.name,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 12, // Further reduced font size
                        ),
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    
                    // Price - Hidden as requested
                    // Text(
                    //   product.pricing?['retail'] != null 
                    //       ? '₹${product.pricing!['retail']}'
                    //       : 'Price on request',
                    //   style: TextStyle(
                    //     color: AppColors.primary,
                    //     fontWeight: FontWeight.bold,
                    //     fontSize: 16,
                    //   ),
                    // ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
