import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { Brochure, Product, User } from '@/lib/mongodb/models';
import { deleteBrochure, uploadBrochure } from '@/lib/firebase-storage';
import { ObjectId } from 'mongodb';

// GET - Fetch single brochure by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid brochure ID' },
        { status: 400 }
      );
    }

    const brochure = await Brochure.findById(id)
      .populate('linkedProducts', 'name category description')
      .populate('createdBy', 'name email')
      .lean();

    if (!brochure) {
      return NextResponse.json(
        { error: 'Brochure not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await Brochure.findByIdAndUpdate(id, { $inc: { views: 1 } });

    return NextResponse.json({
      success: true,
      data: brochure
    });

  } catch (error: any) {
    console.error('Error fetching brochure:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch brochure' },
      { status: 500 }
    );
  }
}

// PUT - Update brochure
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid brochure ID' },
        { status: 400 }
      );
    }

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
    const status = formData.get('status') as string;
    
    // Check if new file is uploaded
    const file = formData.get('file') as File;
    let fileUrl: string | undefined;
    let fileSize: number | undefined;
    let thumbnailUrl: string | undefined;

    if (file) {
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

      // Upload new file to Firebase Storage
      fileUrl = await uploadBrochure(file, title);
      fileSize = file.size;
    }
    
    // Handle thumbnail upload
    const thumbnailFile = formData.get('thumbnail') as File;
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

    // Build update object
    const updateData: any = {
      title,
      description,
      category,
      language,
      regions,
      crops,
      linkedProducts,
      tags,
      isFeatured,
      status
    };

    if (fileUrl) {
      updateData.fileUrl = fileUrl;
      updateData.fileSize = fileSize;
      updateData.version = { $inc: 1 };
    }

    // Always update thumbnail if a new one is uploaded
    if (thumbnailUrl) {
      updateData.thumbnailUrl = thumbnailUrl;
    }

    const brochure = await Brochure.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate('linkedProducts', 'name category')
     .populate('createdBy', 'name email');

    if (!brochure) {
      return NextResponse.json(
        { error: 'Brochure not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: brochure,
      message: 'Brochure updated successfully'
    });

  } catch (error: any) {
    console.error('Error updating brochure:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update brochure' },
      { status: 500 }
    );
  }
}

// DELETE - Delete brochure
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid brochure ID' },
        { status: 400 }
      );
    }

    const brochure = await Brochure.findById(id);
    
    if (!brochure) {
      return NextResponse.json(
        { error: 'Brochure not found' },
        { status: 404 }
      );
    }

    // Delete file from Firebase Storage (ignore errors)
    try {
      await deleteBrochure(brochure.fileUrl);
    } catch (error) {
      console.log('Failed to delete from Firebase Storage, continuing with database delete:', error);
    }

    // Delete from database
    await Brochure.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: 'Brochure deleted successfully'
    });

  } catch (error: any) {
    console.error('Error deleting brochure:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete brochure' },
      { status: 500 }
    );
  }
}
