import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { Brochure, Product, User } from '@/lib/mongodb/models';
import { uploadBrochure, deleteBrochure } from '@/lib/firebase-storage';

// GET - Fetch all brochures with filters
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const language = searchParams.get('language');
    const region = searchParams.get('region');
    const crop = searchParams.get('crop');
    const productId = searchParams.get('productId');
    const status = searchParams.get('status') || 'published';
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');

    // Build filter object
    const filter: any = { status };
    
    if (category) filter.category = category;
    if (language) filter.language = language;
    if (region) filter.regions = region;
    if (crop) filter.crops = crop;
    if (productId) filter.linkedProducts = productId;
    if (featured === 'true') filter.isFeatured = true;
    
    // Text search
    if (search) {
      filter.$text = { $search: search };
    }

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Execute query
    const brochures = await Brochure.find(filter)
      .populate('linkedProducts', 'name category')
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Brochure.countDocuments(filter);

    return NextResponse.json({
      success: true,
      data: brochures,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error: any) {
    console.error('Error fetching brochures:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch brochures' },
      { status: 500 }
    );
  }
}

// POST - Create new brochure
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const formData = await request.formData();
    
    // Extract form data
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const language = formData.get('language') as string;
    const regions = JSON.parse(formData.get('regions') as string || '[]');
    const crops = JSON.parse(formData.get('crops') as string || '[]');
    const linkedProducts = JSON.parse(formData.get('linkedProducts') as string || '[]');
    const tags = JSON.parse(formData.get('tags') as string || '[]');
    const isFeatured = formData.get('isFeatured') === 'true';
    const status = formData.get('status') as string || 'published';
    const createdBy = formData.get('createdBy') as string;
    
    // Validate createdBy is a valid ObjectId
    if (!createdBy || !/^[0-9a-fA-F]{24}$/.test(createdBy)) {
      return NextResponse.json(
        { error: 'Invalid user ID' },
        { status: 400 }
      );
    }
    
    // Get the PDF file
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'PDF file is required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 10MB' },
        { status: 400 }
      );
    }

    // Upload file to Firebase Storage
    const fileUrl = await uploadBrochure(file, title);
    
    // Handle thumbnail upload
    const thumbnailFile = formData.get('thumbnail') as File;
    let thumbnailUrl = '/images/pdf-thumbnail.png'; // Default fallback
    
    if (thumbnailFile) {
      // Validate thumbnail file type
      if (!thumbnailFile.type.startsWith('image/')) {
        return NextResponse.json(
          { error: 'Thumbnail must be an image file' },
          { status: 400 }
        );
      }
      
      // Validate thumbnail file size (max 2MB)
      if (thumbnailFile.size > 2 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Thumbnail file size must be less than 2MB' },
          { status: 400 }
        );
      }
      
      // Upload thumbnail to Firebase Storage
      const { uploadThumbnail } = await import('@/lib/firebase-storage');
      thumbnailUrl = await uploadThumbnail(thumbnailFile, title);
    }
    
    // Create brochure document
    const brochure = new Brochure({
      title,
      description,
      fileUrl,
      thumbnailUrl,
      fileSize: file.size,
      category,
      language,
      regions,
      crops,
      linkedProducts,
      tags,
      isFeatured,
      status,
      createdBy
    });

    await brochure.save();

    // Populate references (temporarily disabled to test basic upload)
    // if (linkedProducts.length > 0) {
    //   await brochure.populate('linkedProducts', 'name category');
    // }
    // await brochure.populate('createdBy', 'name email');

    return NextResponse.json({
      success: true,
      data: brochure,
      message: 'Brochure created successfully'
    });

  } catch (error: any) {
    console.error('Error creating brochure:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create brochure' },
      { status: 500 }
    );
  }
}
