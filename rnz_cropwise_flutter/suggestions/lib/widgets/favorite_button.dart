import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/favorites_service.dart';

class FavoriteButton extends StatelessWidget {
  final String productId;
  final bool isFavorite;
  final VoidCallback onToggle;
  final double? size;
  final Color? color;
  final Color? backgroundColor;
  final bool showTooltip;

  const FavoriteButton({
    super.key,
    required this.productId,
    required this.isFavorite,
    required this.onToggle,
    this.size,
    this.color,
    this.backgroundColor,
    this.showTooltip = true,
  });

  @override
  Widget build(BuildContext context) {
    return Consumer<FavoritesService>(
      builder: (context, favoritesService, child) {
        final isLoading = favoritesService.isLoading;

        return Tooltip(
          message: showTooltip 
              ? (isFavorite ? 'Remove from favorites' : 'Add to favorites')
              : '',
          child: Container(
            decoration: BoxDecoration(
              color: backgroundColor ?? Colors.white,
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.1),
                  blurRadius: 4,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: IconButton(
              onPressed: isLoading ? null : onToggle,
              icon: isLoading
                  ? SizedBox(
                      width: (size ?? 24) * 0.6,
                      height: (size ?? 24) * 0.6,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        valueColor: AlwaysStoppedAnimation<Color>(
                          color ?? Colors.red[600]!,
                        ),
                      ),
                    )
                  : Icon(
                      isFavorite ? Icons.favorite : Icons.favorite_border,
                      size: size ?? 24,
                      color: color ?? (isFavorite ? Colors.red[600] : Colors.grey[600]),
                    ),
              style: IconButton.styleFrom(
                padding: EdgeInsets.all((size ?? 24) * 0.2),
                shape: const CircleBorder(),
              ),
            ),
          ),
        );
      },
    );
  }
}
