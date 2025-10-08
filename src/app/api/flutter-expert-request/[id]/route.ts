import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { ExpertRequest } from '@/lib/mongodb/models/ExpertRequest';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

// Handle CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// PUT - Update expert request (Flutter app)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as any;
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    await connectDB();

    const { status } = await request.json();

    const result = await ExpertRequest.findOneAndUpdate(
      {
        _id: new ObjectId(params.id),
        userId: decoded.userId
      },
      {
        $set: { status }
      },
      { new: true }
    );

    if (!result) {
      return NextResponse.json(
        { error: 'Expert request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Expert request updated successfully'
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });

  } catch (error) {
    console.error('Update Flutter expert request error:', error);
    return NextResponse.json(
      { error: 'Failed to update expert request' },
      { status: 500 }
    );
  }
}

// GET - Get specific expert request (Flutter app)
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as any;
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    await connectDB();

    const expertRequest = await ExpertRequest.findOne({
      _id: new ObjectId(params.id),
      userId: decoded.userId
    }).lean();

    if (!expertRequest) {
      return NextResponse.json(
        { error: 'Expert request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(expertRequest, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });

  } catch (error) {
    console.error('Get Flutter expert request error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch expert request' },
      { status: 500 }
    );
  }
}
