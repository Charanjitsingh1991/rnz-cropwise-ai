import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { MongoClient } from 'mongodb';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { subject, message, cropType, farmSize, urgency } = await request.json();
    
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    const expertRequest = {
      userId: session.user.email,
      userName: session.user.displayName || session.user.name || 'User',
      subject,
      message,
      cropType,
      farmSize,
      urgency,
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('expertRequests').insertOne(expertRequest);
    
    await client.close();

    return NextResponse.json({ 
      success: true,
      message: 'Expert advice request submitted successfully',
      requestId: result.insertedId
    });

  } catch (error) {
    console.error('Expert request error:', error);
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

    const expertRequests = await db.collection('expertRequests')
      .find({ userId: session.user.email })
      .sort({ createdAt: -1 })
      .toArray();
    
    await client.close();

    return NextResponse.json({ 
      success: true,
      expertRequests
    });

  } catch (error) {
    console.error('Get expert requests error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
