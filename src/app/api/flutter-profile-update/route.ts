import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';

export async function PUT(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    let decoded;
    
    try {
      decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!);
    } catch (error) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { name, fullName, phoneNumber, country, state, city } = await request.json();
    
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    const updateData: any = {
      displayName: name,
      fullName,
      phoneNumber,
      country,
      updatedAt: new Date()
    };

    // Add state and city if provided
    if (state) updateData.state = state;
    if (city) updateData.city = city;

    const result = await db.collection('users').updateOne(
      { email: decoded.email },
      { $set: updateData }
    );

    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Profile updated successfully',
      user: { name, fullName, phoneNumber, country, state, city }
    });

  } catch (error) {
    console.error('Flutter profile update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
