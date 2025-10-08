import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { MongoClient } from 'mongodb';

export async function GET(request: NextRequest) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    // Get support contact settings from database
    const settings = await db.collection('supportSettings').findOne({});
    
    await client.close();

    return NextResponse.json({ 
      success: true,
      settings: settings || {
        phone: '+1 (555) 123-4567',
        email: 'support@rnzcropwise.com',
        address: '123 Agriculture St, Farm City, FC 12345',
        businessHours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
        liveChatEnabled: true,
        videoCallEnabled: true,
        videoCallPlatform: 'Zoom',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

  } catch (error) {
    console.error('Get support settings error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    const user = await db.collection('users').findOne({ email: session.user.email });
    if (!user || !user.isAdmin) {
      await client.close();
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    const { phone, email, address, businessHours, liveChatEnabled, videoCallEnabled, videoCallPlatform } = await request.json();
    
    // Update or create support settings
    const result = await db.collection('supportSettings').updateOne(
      {},
      {
        $set: {
          phone,
          email,
          address,
          businessHours,
          liveChatEnabled,
          videoCallEnabled,
          videoCallPlatform,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );

    await client.close();

    return NextResponse.json({ 
      success: true,
      message: 'Support settings updated successfully'
    });

  } catch (error) {
    console.error('Update support settings error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
