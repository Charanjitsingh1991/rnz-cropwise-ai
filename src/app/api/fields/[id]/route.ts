import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { Field } from '@/lib/mongodb/models/Field';
import mongoose from 'mongoose';

// GET - Fetch single field
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid field ID' },
        { status: 400 }
      );
    }

    const field = await Field
      .findById(id)
      .populate('calculations')
      .populate('predictions')
      .lean();

    if (!field) {
      return NextResponse.json(
        { success: false, error: 'Field not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      field,
    });

  } catch (error: any) {
    console.error('❌ Fetch field error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch field' },
      { status: 500 }
    );
  }
}

// PUT - Update field
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;
    const body = await request.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid field ID' },
        { status: 400 }
      );
    }

    const field = await Field.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!field) {
      return NextResponse.json(
        { success: false, error: 'Field not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Field updated successfully',
      field,
    });

  } catch (error: any) {
    console.error('❌ Update field error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update field' },
      { status: 500 }
    );
  }
}

// DELETE - Delete field
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid field ID' },
        { status: 400 }
      );
    }

    // Soft delete by marking as inactive
    const field = await Field.findByIdAndUpdate(
      id,
      { $set: { isActive: false } },
      { new: true }
    );

    if (!field) {
      return NextResponse.json(
        { success: false, error: 'Field not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Field deleted successfully',
    });

  } catch (error: any) {
    console.error('❌ Delete field error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete field' },
      { status: 500 }
    );
  }
}

// CORS OPTIONS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

