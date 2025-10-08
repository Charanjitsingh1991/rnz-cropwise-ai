import { getAllProducts, filterOptions } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/product-card';
import { ProductsClient } from './products-client';

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <ProductsClient products={products} filterOptions={filterOptions} />
      </div>
    </main>
  );
}
