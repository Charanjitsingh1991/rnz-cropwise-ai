import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { MongoClient } from 'mongodb';

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
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    await client.close();

    return NextResponse.json({ 
      success: true,
      quoteRequests
    });

  } catch (error) {
    console.error('Get admin quote requests error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, status } = await request.json();
    
    if (!id || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const validStatuses = ['Pending', 'Contacted', 'Closed'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    const result = await db.collection('quoteRequests').updateOne(
      { _id: id },
      { 
        $set: { 
          status: status,
          updatedAt: new Date()
        }
      }
    );
    
    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Quote request not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Status updated successfully'
    });

  } catch (error) {
    console.error('Update quote request status error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}