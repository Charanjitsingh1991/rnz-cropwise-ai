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
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// POST - Submit new expert request (Flutter app)
export async function POST(request: NextRequest) {
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

    console.log('Flutter expert request - User data:', {
      id: decoded.userId,
      email: decoded.email,
      name: decoded.displayName || decoded.name
    });

    await connectDB();

    const {
      plantType,
      isHealthy,
      diseaseName,
      diseaseSeverity,
      confidenceScore,
      plantImage,
      diagnosisResult
    } = await request.json();

    // Validate required fields
    if (!plantType || !plantImage || diagnosisResult === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const expertRequest = new ExpertRequest({
      userId: decoded.userId,
      userEmail: decoded.email,
      userName: decoded.displayName || decoded.name,
      plantType,
      isHealthy,
      diseaseName,
      diseaseSeverity,
      confidenceScore,
      plantImage,
      diagnosisResult,
      status: 'pending'
    });

    await expertRequest.save();

    return NextResponse.json({
      success: true,
      message: 'Expert request submitted successfully',
      requestId: expertRequest._id
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });

  } catch (error: any) {
    console.error('Flutter expert request error:', error);

    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: `Validation failed: ${validationErrors.join(', ')}` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Failed to submit expert request' },
      { status: 500 }
    );
  }
}

// GET - Get user's expert requests (Flutter app)
export async function GET(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    const query: any = {
      userId: decoded.userId
    };
    
    if (status) {
      query.status = status;
    }

    const skip = (page - 1) * limit;

    const requests = await ExpertRequest.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await ExpertRequest.countDocuments(query);

    return NextResponse.json({
      requests,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });

  } catch (error) {
    console.error('Get Flutter expert requests error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch expert requests' },
      { status: 500 }
    );
  }
}
