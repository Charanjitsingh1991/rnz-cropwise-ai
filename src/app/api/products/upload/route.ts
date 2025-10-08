import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb/client';
import { ObjectId } from 'mongodb';
import { uploadProductImage } from '@/lib/firebase-storage';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract product data
    const productData = JSON.parse(formData.get('productData') as string);
    const brochures = JSON.parse(formData.get('brochures') as string);
    const certifications = JSON.parse(formData.get('certifications') as string);
    
    // Handle product image upload
    const productImageFile = formData.get('productImage') as File;
    let imageUrl = productData.images?.[0] || '';
    
    if (productImageFile) {
      // Upload to Firebase Storage
      imageUrl = await uploadProductImage(productImageFile, productData.name);
    }
    
    // Handle file uploads
    const uploadedFiles: { [key: string]: File } = {};
    const fileUrls: string[] = [];
    
    // Process uploaded files
    for (const [key, value] of formData.entries()) {
      if (value instanceof File && (key.startsWith('brochure-') || key.startsWith('certification-'))) {
        uploadedFiles[key] = value;
        
        // Create upload directory if it doesn't exist
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadDir, { recursive: true });
        
        // Generate unique filename
        const timestamp = Date.now();
        const fileName = `${timestamp}-${value.name}`;
        const filePath = path.join(uploadDir, fileName);
        
        // Save file
        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filePath, buffer);
        
        // Store file URL
        const fileUrl = `/uploads/${fileName}`;
        fileUrls.push(fileUrl);
        
        // Update brochures/certifications arrays with file URLs
        if (key.startsWith('brochure-')) {
          const index = parseInt(key.split('-')[1]);
          brochures[index] = fileUrl;
        } else if (key.startsWith('certification-')) {
          const index = parseInt(key.split('-')[1]);
          certifications[index] = fileUrl;
        }
      }
    }
    
    // Connect to database
    const client = await clientPromise;
    const db = client.db();
    
    // Prepare final product data
    const finalProductData = {
      ...productData,
      images: imageUrl ? [imageUrl] : productData.images || [],
      brochures: brochures.filter((b: string) => b.trim() !== ''),
      certifications: certifications.filter((c: string) => c.trim() !== ''),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Insert product
    const result = await db.collection('products').insertOne(finalProductData);
    
    return NextResponse.json({
      success: true,
      productId: result.insertedId,
      message: 'Product created successfully with uploaded files'
    });
    
  } catch (error: any) {
    console.error('Error creating product with uploads:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create product' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData();
    const productId = formData.get('productId') as string;
    
    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }
    
    // Extract product data
    const productData = JSON.parse(formData.get('productData') as string);
    const brochures = JSON.parse(formData.get('brochures') as string);
    const certifications = JSON.parse(formData.get('certifications') as string);
    
    // Handle product image upload
    const productImageFile = formData.get('productImage') as File;
    let imageUrl = productData.images?.[0] || '';
    
    if (productImageFile) {
      // Upload to Firebase Storage
      imageUrl = await uploadProductImage(productImageFile, productData.name);
    }
    
    // Handle file uploads (similar to POST)
    const uploadedFiles: { [key: string]: File } = {};
    const fileUrls: string[] = [];
    
    // Process uploaded files
    for (const [key, value] of formData.entries()) {
      if (value instanceof File && key.startsWith('brochure-') || key.startsWith('certification-')) {
        uploadedFiles[key] = value;
        
        // Create upload directory if it doesn't exist
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadDir, { recursive: true });
        
        // Generate unique filename
        const timestamp = Date.now();
        const fileName = `${timestamp}-${value.name}`;
        const filePath = path.join(uploadDir, fileName);
        
        // Save file
        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filePath, buffer);
        
        // Store file URL
        const fileUrl = `/uploads/${fileName}`;
        fileUrls.push(fileUrl);
        
        // Update brochures/certifications arrays with file URLs
        if (key.startsWith('brochure-')) {
          const index = parseInt(key.split('-')[1]);
          brochures[index] = fileUrl;
        } else if (key.startsWith('certification-')) {
          const index = parseInt(key.split('-')[1]);
          certifications[index] = fileUrl;
        }
      }
    }
    
    // Connect to database
    const client = await clientPromise;
    const db = client.db();
    
    // Prepare final product data
    const finalProductData = {
      ...productData,
      images: imageUrl ? [imageUrl] : productData.images || [],
      brochures: brochures.filter((b: string) => b.trim() !== ''),
      certifications: certifications.filter((c: string) => c.trim() !== ''),
      updatedAt: new Date()
    };
    
    // Update product
    const objectId = new ObjectId(productId);
    const result = await db.collection('products').updateOne(
      { _id: objectId },
      { $set: finalProductData }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Product updated successfully with uploaded files'
    });
    
  } catch (error: any) {
    console.error('Error updating product with uploads:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update product' },
      { status: 500 }
    );
  }
}
