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

    // Check if user is admin
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();
    
    const user = await db.collection('users').findOne({ email: session.user.email });
    if (!user?.isAdmin) {
      await client.close();
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
    }

    // Get user counts
    const totalUsers = await db.collection('users').countDocuments();
    const usersWithFcm = await db.collection('users').countDocuments({ 
      fcmToken: { $exists: true, $ne: null } 
    });
    const adminUsers = await db.collection('users').countDocuments({ isAdmin: true });
    const regularUsers = totalUsers - adminUsers;

    await client.close();

    return NextResponse.json({
      count: totalUsers,
      withFcm: usersWithFcm,
      admins: adminUsers,
      regular: regularUsers
    });

  } catch (error) {
    console.error('Error fetching user count:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

