import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../providers/favorites_provider.dart';
import '../../utils/constants.dart';
import '../../widgets/loading_overlay.dart';
import '../../widgets/product_card.dart';

class FavoritesScreen extends StatefulWidget {
  const FavoritesScreen({super.key});

  @override
  State<FavoritesScreen> createState() => _FavoritesScreenState();
}

class _FavoritesScreenState extends State<FavoritesScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    _loadFavorites();
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  Future<void> _loadFavorites() async {
    final favoritesProvider = context.read<FavoritesProvider>();
    await favoritesProvider.loadFavorites();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Favorites'),
        backgroundColor: AppColors.primary,
        foregroundColor: Colors.white,
        bottom: TabBar(
          controller: _tabController,
          indicatorColor: Colors.white,
          labelColor: Colors.white,
          unselectedLabelColor: Colors.white70,
          tabs: const [
            Tab(text: 'Products'),
            Tab(text: 'Brochures'),
            Tab(text: 'AI History'),
          ],
        ),
      ),
      body: Consumer<FavoritesProvider>(
        builder: (context, favoritesProvider, child) {
          if (favoritesProvider.isLoading) {
            return const LoadingOverlay(
              isLoading: true,
              child: SizedBox(),
              message: 'Loading favorites...',
            );
          }

          return TabBarView(
            controller: _tabController,
            children: [
              _buildProductsTab(favoritesProvider),
              _buildBrochuresTab(favoritesProvider),
              _buildAIHistoryTab(favoritesProvider),
            ],
          );
        },
      ),
    );
  }

  Widget _buildProductsTab(FavoritesProvider favoritesProvider) {
    if (favoritesProvider.favoriteProducts.isEmpty) {
      return _buildEmptyState(
        'No Favorite Products',
        'You haven\'t added any products to your favorites yet.',
        Icons.favorite_border,
        () => Navigator.pushNamed(context, '/products'),
        'Browse Products',
      );
    }

    return RefreshIndicator(
      onRefresh: _loadFavorites,
      child: ListView.builder(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        itemCount: favoritesProvider.favoriteProducts.length,
        itemBuilder: (context, index) {
          final product = favoritesProvider.favoriteProducts[index];
          return Padding(
            padding: const EdgeInsets.only(bottom: 16),
            child: ProductCard(
              product: product,
              onTap: () {
                // Navigate to product detail
                Navigator.pushNamed(
                  context,
                  '/product-detail',
                  arguments: product,
                );
              },
              onFavoriteToggle: () {
                favoritesProvider.toggleProductFavorite(product.id);
              },
              isFavorite: true,
            ),
          );
        },
      ),
    );
  }

  Widget _buildBrochuresTab(FavoritesProvider favoritesProvider) {
    if (favoritesProvider.favoriteBrochures.isEmpty) {
      return _buildEmptyState(
        'No Favorite Brochures',
        'You haven\'t added any brochures to your favorites yet.',
        Icons.description_outlined,
        () => Navigator.pushNamed(context, '/brochures'),
        'Browse Brochures',
      );
    }

    return RefreshIndicator(
      onRefresh: _loadFavorites,
      child: ListView.builder(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        itemCount: favoritesProvider.favoriteBrochures.length,
        itemBuilder: (context, index) {
          final brochure = favoritesProvider.favoriteBrochures[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 12),
            child: ListTile(
              leading: Container(
                width: 50,
                height: 50,
                decoration: BoxDecoration(
                  color: AppColors.primary.withValues(alpha: 0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(
                  Icons.description,
                  color: AppColors.primary,
                ),
              ),
              title: Text(
                brochure.title,
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  fontWeight: FontWeight.w500,
                ),
              ),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    brochure.category,
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: AppColors.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Added ${_formatDate(brochure.addedAt ?? DateTime.now())}',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: AppColors.textSecondary,
                    ),
                  ),
                ],
              ),
              trailing: PopupMenuButton<String>(
                onSelected: (value) {
                  switch (value) {
                    case 'download':
                      _downloadBrochure(brochure);
                      break;
                    case 'share':
                      _shareBrochure(brochure);
                      break;
                    case 'remove':
                      _removeBrochureFromFavorites(brochure.id);
                      break;
                  }
                },
                itemBuilder: (context) => [
                  const PopupMenuItem(
                    value: 'download',
                    child: Row(
                      children: [
                        Icon(Icons.download),
                        SizedBox(width: 8),
                        Text('Download'),
                      ],
                    ),
                  ),
                  const PopupMenuItem(
                    value: 'share',
                    child: Row(
                      children: [
                        Icon(Icons.share),
                        SizedBox(width: 8),
                        Text('Share'),
                      ],
                    ),
                  ),
                  const PopupMenuItem(
                    value: 'remove',
                    child: Row(
                      children: [
                        Icon(Icons.favorite_border),
                        SizedBox(width: 8),
                        Text('Remove from Favorites'),
                      ],
                    ),
                  ),
                ],
              ),
              onTap: () {
                // Navigate to brochure detail
                Navigator.pushNamed(
                  context,
                  '/brochure-detail',
                  arguments: brochure,
                );
              },
            ),
          );
        },
      ),
    );
  }

  Widget _buildAIHistoryTab(FavoritesProvider favoritesProvider) {
    if (favoritesProvider.aiHistory.isEmpty) {
      return _buildEmptyState(
        'No AI History',
        'Your AI advisor recommendations will appear here.',
        Icons.psychology_outlined,
        () => Navigator.pushNamed(context, '/ai-advisor'),
        'Get AI Advice',
      );
    }

    return RefreshIndicator(
      onRefresh: _loadFavorites,
      child: ListView.builder(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        itemCount: favoritesProvider.aiHistory.length,
        itemBuilder: (context, index) {
          final history = favoritesProvider.aiHistory[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 12),
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(
                        Icons.psychology,
                        color: AppColors.primary,
                        size: 20,
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                                                 child: Text(
                           history['title'] ?? '',
                          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      Text(
                        _formatDate(DateTime.parse(history['createdAt'] ?? DateTime.now().toIso8601String())),
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: AppColors.textSecondary,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Text(
                    history['description'] ?? '',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: AppColors.textSecondary,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () {
                            // View full recommendation
                            Navigator.pushNamed(
                              context,
                              '/ai-recommendation-detail',
                              arguments: history,
                            );
                          },
                          child: const Text('View Details'),
                        ),
                      ),
                      const SizedBox(width: 8),
                      IconButton(
                        onPressed: () {
                          _removeFromAIHistory(history['id'] ?? '');
                        },
                        icon: const Icon(Icons.delete_outline),
                        color: AppColors.error,
                      ),
                    ],
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _buildEmptyState(
    String title,
    String message,
    IconData icon,
    VoidCallback onAction,
    String actionText,
  ) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(AppSizes.paddingLarge),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: 64,
              color: AppColors.textSecondary,
            ),
            const SizedBox(height: 16),
            Text(
              title,
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              message,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: AppColors.textSecondary,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: onAction,
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primary,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(
                  horizontal: 24,
                  vertical: 12,
                ),
              ),
              child: Text(actionText),
            ),
          ],
        ),
      ),
    );
  }

  String _formatDate(DateTime date) {
    final now = DateTime.now();
    final difference = now.difference(date);

    if (difference.inDays == 0) {
      if (difference.inHours == 0) {
        return '${difference.inMinutes} minutes ago';
      }
      return '${difference.inHours} hours ago';
    } else if (difference.inDays == 1) {
      return 'Yesterday';
    } else if (difference.inDays < 7) {
      return '${difference.inDays} days ago';
    } else {
      return '${date.day}/${date.month}/${date.year}';
    }
  }

  void _downloadBrochure(dynamic brochure) {
    // Implement brochure download
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Downloading ${brochure.title}...')),
    );
  }

  void _shareBrochure(dynamic brochure) {
    // Implement brochure sharing
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Sharing ${brochure.title}...')),
    );
  }

  void _removeBrochureFromFavorites(String brochureId) {
    final favoritesProvider = context.read<FavoritesProvider>();
    favoritesProvider.removeBrochureFavorite(brochureId);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Removed from favorites')),
    );
  }

  void _removeFromAIHistory(String historyId) {
    final favoritesProvider = context.read<FavoritesProvider>();
    favoritesProvider.removeFromAIHistory(historyId);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Removed from history')),
    );
  }
}
