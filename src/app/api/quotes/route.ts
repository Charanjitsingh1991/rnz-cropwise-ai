import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { MongoClient } from 'mongodb';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { userId, userName, userEmail, userPhoneNumber, location, productId, productName, productImageUrl, quantity, status } = await request.json();
    
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    const quoteRequest = {
      userId: userId || session.user.email,
      userName: userName || session.user.displayName || session.user.name || 'User',
      userEmail: userEmail || session.user.email,
      userPhoneNumber: userPhoneNumber || session.user.phoneNumber || '',
      location: location || '',
      productId,
      productName,
      productImageUrl: productImageUrl || '',
      quantity: parseInt(quantity),
      status: status || 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('quoteRequests').insertOne(quoteRequest);
    
    await client.close();

    return NextResponse.json({ 
      success: true,
      message: 'Quote request submitted successfully',
      requestId: result.insertedId
    });

  } catch (error) {
    console.error('Quote request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    const quoteRequests = await db.collection('quoteRequests')
      .find({ userId: session.user.email })
      .sort({ createdAt: -1 })
      .toArray();
    
    await client.close();

    return NextResponse.json({ 
      success: true,
      quoteRequests
    });

  } catch (error) {
    console.error('Get quote requests error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
