
import { ProductForm } from '@/components/admin/product-form';
import { notFound } from 'next/navigation';
import clientPromise from '@/lib/mongodb/client';
import { ObjectId } from 'mongodb';

// We don't need static params for admin edit pages - they should be dynamic
export async function generateStaticParams() {
  return [];
}

// This is now a Server Component
export default async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  console.log('EditProductPage - Looking for product with ID:', id);
  console.log('EditProductPage - ID type:', typeof id);
  console.log('EditProductPage - ID length:', id.length);
  
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Try to find by _id first (MongoDB ObjectId)
    let product = null;
    
    try {
      const objectId = new ObjectId(id);
      product = await db.collection('products').findOne({ _id: objectId });
      console.log('Found by _id field:', !!product);
    } catch (error) {
      console.log('ObjectId conversion failed:', error.message);
      // If ObjectId conversion fails, try to find by name as fallback
      product = await db.collection('products').findOne({ 
        name: { $regex: id, $options: 'i' }
      });
      console.log('Found by name fallback:', !!product);
    }

    if (!product) {
      console.log('Product not found for ID:', id);
      notFound();
    }

    // Serialize MongoDB object to plain object for client component
    const serializedProduct = {
      ...product,
      _id: product._id?.toString() || product._id,
      id: product._id?.toString() || product.id || `product-${Date.now()}`,
      createdAt: product.createdAt?.toISOString?.() || product.createdAt,
      updatedAt: product.updatedAt?.toISOString?.() || product.updatedAt
    };

    console.log('Serialized product:', serializedProduct);

    return (
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <ProductForm initialData={serializedProduct} />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }
}
