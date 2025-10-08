import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb/client';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const products = await db.collection('products').find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({
      success: true,
      data: products
    });
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const body = await request.json();
    const result = await db.collection('products').insertOne(body);
    const product = await db.collection('products').findOne({ _id: result.insertedId });
    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
