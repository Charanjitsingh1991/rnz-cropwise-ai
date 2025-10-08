import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { BrochureRequest, Product, Notification } from '@/lib/mongodb/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// GET - Fetch brochure requests (admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || !session.user.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    
    // Build filter
    const filter: any = {};
    if (status) filter.status = status;
    
    // Calculate skip for pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const requests = await BrochureRequest.find(filter)
      .populate('productId', 'name category')
      .populate('requestedBy', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Get total count
    const total = await BrochureRequest.countDocuments(filter);
    
    return NextResponse.json({
      success: true,
      data: requests,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error: any) {
    console.error('Error fetching brochure requests:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch brochure requests' },
      { status: 500 }
    );
  }
}

// POST - Create new brochure request
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('Session user data:', {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      displayName: session.user.displayName
    });

    await connectDB();
    
    const { productId } = await request.json();
    
    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }
    
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    // Check if user already requested this product
    const existingRequest = await BrochureRequest.findOne({
      productId,
      requestedBy: session.user.id,
      status: { $in: ['pending', 'approved'] }
    });
    
    if (existingRequest) {
      return NextResponse.json(
        { error: 'You have already requested a brochure for this product' },
        { status: 400 }
      );
    }
    
    // Create brochure request
    const brochureRequest = new BrochureRequest({
      productId,
      productName: product.name,
      requestedBy: session.user.id,
      userEmail: session.user.email,
      userName: session.user.name || session.user.displayName || 'Unknown User'
    });
    
    await brochureRequest.save();
    
    // Create notification for admin about new request
    const adminNotification = new Notification({
      userId: '689ee8876ef7182ecfb19ba6', // Admin user ID - you might want to make this dynamic
      title: 'New Brochure Request',
      message: `${session.user.name || session.user.displayName} requested a brochure for ${product.name}`,
      type: 'brochure_request',
      relatedId: brochureRequest._id,
      relatedModel: 'BrochureRequest'
    });
    
    await adminNotification.save();
    
    // Populate references
    await brochureRequest.populate('productId', 'name category');
    await brochureRequest.populate('requestedBy', 'name email');
    
    return NextResponse.json({
      success: true,
      data: brochureRequest,
      message: 'Brochure request submitted successfully'
    });
    
  } catch (error: any) {
    console.error('Error creating brochure request:', error);
    
    // Provide more specific error messages
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: `Validation failed: ${validationErrors.join(', ')}` },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: error.message || 'Failed to create brochure request' },
      { status: 500 }
    );
  }
}
