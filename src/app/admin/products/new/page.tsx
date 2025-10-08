import { ProductForm } from '@/components/admin/product-form';

export default function NewProductPage() {
  return (
    <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
            <ProductForm />
        </div>
    </main>
  );
}
