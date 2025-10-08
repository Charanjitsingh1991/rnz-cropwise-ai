import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { MongoClient } from 'mongodb';

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { displayName, fullName, country, phoneNumber, state, city } = await request.json();
    
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    const updateData: any = {
      displayName,
      fullName,
      country,
      phoneNumber,
      updatedAt: new Date()
    };

    // Add state and city if provided
    if (state) updateData.state = state;
    if (city) updateData.city = city;

    const result = await db.collection('users').updateOne(
      { email: session.user.email },
      { $set: updateData }
    );

    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Profile updated successfully',
      user: { displayName, fullName, country, phoneNumber, state, city }
    });

  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
