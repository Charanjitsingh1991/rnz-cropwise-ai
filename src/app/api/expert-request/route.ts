import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb/connection';
import { ExpertRequest } from '@/lib/mongodb/models/ExpertRequest';

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await req.json();
    console.log('Expert request body:', {
      plantType: !!body.plantType,
      plantImage: !!body.plantImage,
      diagnosisResult: !!body.diagnosisResult,
      hasAllFields: !!(body.plantType && body.plantImage && body.diagnosisResult)
    });
    
    const {
      plantType,
      isHealthy,
      diseaseName,
      diseaseSeverity,
      confidenceScore,
      plantImage,
      diagnosisResult
    } = body;

    // Validate required fields
    if (!plantType || !plantImage || diagnosisResult === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    const expertRequest = new ExpertRequest({
      userId: session.user.userId || session.user.id,
      userEmail: session.user.email,
      userName: session.user.name,
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
    });

  } catch (error) {
    console.error('Expert request error:', error);
    return NextResponse.json(
      { error: 'Failed to submit expert request' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    await connectDB();

    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    const query: any = {};
    
    // If not admin, only show user's own requests
    if (!session.user.isAdmin) {
      query.userId = session.user.userId || session.user.id;
    }
    
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
    });

  } catch (error) {
    console.error('Get expert requests error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch expert requests' },
      { status: 500 }
    );
  }
}
