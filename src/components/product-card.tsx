'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/types';
import { useFavorites } from '@/hooks/use-favorites';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <Link href={`/products/${product.id}`} className="block">
          <div className="aspect-square w-full">
            <Image
              src={product.imageUrl || 'https://placehold.co/400x400?text=Product+Image'}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint="agriculture product"
            />
          </div>
        </Link>
        <Button
          size="icon"
          className={cn(
            "absolute top-2 right-2 rounded-full h-9 w-9",
            favorite ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white/80 hover:bg-white text-gray-700"
          )}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(product.id);
          }}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={cn("h-5 w-5", favorite && "fill-current")} />
        </Button>
      </CardHeader>
      <CardContent className="p-4 flex flex-col flex-grow">
        <CardTitle className="font-headline text-lg mb-1">
          <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm flex-grow mb-4 h-16 overflow-hidden">
          {product.description}
        </CardDescription>
        <Button asChild variant="outline" className="mt-auto w-full">
          <Link href={`/products/${product.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
