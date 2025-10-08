import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { Notification } from '@/lib/mongodb/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import mongoose from 'mongoose';

// GET - Fetch user notifications
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const isRead = searchParams.get('isRead');
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');
    
    // Build filter - convert string ID to ObjectId if needed
    const userId = mongoose.Types.ObjectId.isValid(session.user.id) 
      ? new mongoose.Types.ObjectId(session.user.id) 
      : session.user.id;
    
    const filter: any = { userId: userId };
    if (isRead !== null) {
      filter.isRead = isRead === 'true';
    }
    
    // Calculate skip for pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const notifications = await Notification.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Get total count
    const total = await Notification.countDocuments(filter);
    
    // Get unread count
    const unreadCount = await Notification.countDocuments({ 
      userId: userId, 
      isRead: false 
    });
    
    return NextResponse.json({
      success: true,
      data: notifications,
      unreadCount,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error: any) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}

// PUT - Mark notifications as read
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    
    // Convert string ID to ObjectId if needed
    const userId = mongoose.Types.ObjectId.isValid(session.user.id) 
      ? new mongoose.Types.ObjectId(session.user.id) 
      : session.user.id;
    
    const { notificationIds } = await request.json();
    
    if (!notificationIds || !Array.isArray(notificationIds)) {
      return NextResponse.json(
        { error: 'Notification IDs array is required' },
        { status: 400 }
      );
    }
    
    // Convert string IDs to ObjectIds
    const objectIds = notificationIds.map(id => 
      mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : id
    );
    
    // Mark notifications as read
    const result = await Notification.updateMany(
      {
        _id: { $in: objectIds },
        userId: userId
      },
      {
        isRead: true,
        updatedAt: new Date()
      }
    );
    
    return NextResponse.json({
      success: true,
      message: `${result.modifiedCount} notifications marked as read`,
      modifiedCount: result.modifiedCount
    });
    
  } catch (error: any) {
    console.error('Error updating notifications:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update notifications' },
      { status: 500 }
    );
  }
}
