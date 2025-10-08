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

    const expertRequests = await db.collection('expertRequests')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    await client.close();

    return NextResponse.json({ 
      success: true,
      expertRequests
    });

  } catch (error) {
    console.error('Get admin expert requests error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
