import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const { subject, message, cropType, farmSize, urgency } = await request.json();
    
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    // Find user by token (which is the user ID)
    const user = await db.collection('users').findOne({ uid: token });
    if (!user) {
      await client.close();
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const expertRequest = {
      userId: user.email,
      userName: user.displayName || user.fullName || 'User',
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
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    // Find user by token (which is the user ID)
    const user = await db.collection('users').findOne({ uid: token });
    if (!user) {
      await client.close();
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const expertRequests = await db.collection('expertRequests')
      .find({ userId: user.email })
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

