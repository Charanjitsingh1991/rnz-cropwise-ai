'use client';

import { useFavorites } from '@/hooks/use-favorites';
import { products } from '@/lib/static-data';
import { ProductCard } from '@/components/product-card';
import { Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favoriteProducts = products.filter(p => favoriteIds.includes(p.id));

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-lg shadow-sm">
            <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Favorites Yet</h2>
            <p className="text-muted-foreground mb-6">Click the heart icon on any product to save it here.</p>
            <Button asChild>
              <Link href="/products">
                <Search className="mr-2 h-4 w-4" />
                Find Products
              </Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
