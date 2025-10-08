'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Product, FilterOptions } from '@/lib/types';
import { ProductCard } from '@/components/product-card';
import { Search } from 'lucide-react';

interface ProductsClientProps {
  products: Product[];
  filterOptions: FilterOptions;
}

export function ProductsClient({ products, filterOptions }: ProductsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    crop: 'All Crops',
    soilType: 'All',
    region: 'All',
    category: 'All Categories',
  });

  const handleFilterChange = (filterName: keyof typeof filters) => (value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      // Ensure product properties are defined and are arrays
      const productName = product.name || '';
      const productDescription = product.description || '';
      const productCrops = Array.isArray(product.crops) ? product.crops : [];
      const productSoilTypes = Array.isArray(product.soilTypes) ? product.soilTypes : [];
      const productRegions = Array.isArray(product.regions) ? product.regions : [];
      const productCategories = Array.isArray(product.categories) ? product.categories : [];
      
      const matchesSearch = productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            productDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCrop = filters.crop === 'All Crops' || productCrops.includes(filters.crop);
      const matchesSoil = filters.soilType === 'All' || productSoilTypes.includes(filters.soilType);
      const matchesRegion = filters.region === 'All' || productRegions.includes(filters.region);
      const matchesCategory = filters.category === 'All Categories' || productCategories.includes(filters.category);

      return matchesSearch && matchesCrop && matchesSoil && matchesRegion && matchesCategory;
    });
  }, [searchTerm, filters, products]);

  return (
    <>
      <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative lg:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
           <Select onValueChange={handleFilterChange('category')} value={filters.category}>
            <SelectTrigger><SelectValue placeholder="Filter by Category" /></SelectTrigger>
            <SelectContent>
              {filterOptions.categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select onValueChange={handleFilterChange('crop')} value={filters.crop}>
            <SelectTrigger><SelectValue placeholder="Filter by Crop" /></SelectTrigger>
            <SelectContent>
              {filterOptions.crops.map(crop => <SelectItem key={crop} value={crop}>{crop}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select onValueChange={handleFilterChange('soilType')} value={filters.soilType}>
            <SelectTrigger><SelectValue placeholder="Filter by Soil Type" /></SelectTrigger>
            <SelectContent>
              {filterOptions.soilTypes.map(soil => <SelectItem key={soil} value={soil}>{soil}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-lg shadow-sm">
          <p className="text-xl text-muted-foreground">No products match your criteria.</p>
        </div>
      )}
    </>
  );
}
