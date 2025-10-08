import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { BrochureRequest, Product, Notification } from '@/lib/mongodb/models';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

// POST - Create new brochure request (Flutter app)
export async function POST(request: NextRequest) {
  try {
    // Get authorization header
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Verify JWT token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET!) as any;
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    console.log('Flutter brochure request - User data:', {
      id: decoded.userId,
      email: decoded.email,
      name: decoded.displayName || decoded.name
    });

    await connectDB();
    
    const { productId, productName, requestedBy, userName, userEmail } = await request.json();
    
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
      requestedBy: new ObjectId(decoded.userId),
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
      requestedBy: new ObjectId(decoded.userId),
      userEmail: decoded.email,
      userName: decoded.displayName || decoded.name || 'Unknown User'
    });
    
    await brochureRequest.save();
    
    // Create notification for admin about new request
    const adminNotification = new Notification({
      userId: '689ee8876ef7182ecfb19ba6', // Admin user ID
      title: 'New Brochure Request',
      message: `${decoded.displayName || decoded.name} requested a brochure for ${product.name}`,
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

// GET - Get user's brochure requests (Flutter app)
export async function GET(request: NextRequest) {
  try {
    // Get authorization header
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Verify JWT token
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
    
    // Get user's brochure requests
    const brochureRequests = await BrochureRequest.find({
      requestedBy: new ObjectId(decoded.userId)
    })
    .populate('productId', 'name category')
    .sort({ createdAt: -1 })
    .lean();
    
    return NextResponse.json({
      success: true,
      brochureRequests
    });
    
  } catch (error: any) {
    console.error('Error getting brochure requests:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to get brochure requests' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
