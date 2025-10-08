import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { FertilizerCalculation } from '@/lib/mongodb/models/FertilizerCalculation';
import { Field } from '@/lib/mongodb/models/Field';
import mongoose from 'mongoose';

// GET - Fetch single calculation
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid calculation ID' },
        { status: 400 }
      );
    }

    const calculation = await FertilizerCalculation
      .findById(id)
      .populate('fieldId', 'name size unit location')
      .populate('productRecommendations.productId', 'name price images')
      .lean();

    if (!calculation) {
      return NextResponse.json(
        { success: false, error: 'Calculation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      calculation,
    });

  } catch (error: any) {
    console.error('❌ Fetch calculation error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch calculation' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a calculation
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid calculation ID' },
        { status: 400 }
      );
    }

    const calculation = await FertilizerCalculation.findById(id);

    if (!calculation) {
      return NextResponse.json(
        { success: false, error: 'Calculation not found' },
        { status: 404 }
      );
    }

    // Remove from field's calculations array if linked
    if (calculation.fieldId) {
      await Field.findByIdAndUpdate(
        calculation.fieldId,
        { $pull: { calculations: calculation._id } }
      );
    }

    // Delete the calculation
    await FertilizerCalculation.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: 'Calculation deleted successfully',
    });

  } catch (error: any) {
    console.error('❌ Delete calculation error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete calculation' },
      { status: 500 }
    );
  }
}

// PUT - Update calculation (e.g., mark as saved)
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
        { success: false, error: 'Invalid calculation ID' },
        { status: 400 }
      );
    }

    const calculation = await FertilizerCalculation.findByIdAndUpdate(
      id,
      { 
        $set: {
          savedByUser: body.savedByUser ?? true,
          shared: body.shared ?? false,
          notes: body.notes,
        }
      },
      { new: true }
    );

    if (!calculation) {
      return NextResponse.json(
        { success: false, error: 'Calculation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Calculation updated successfully',
      calculation,
    });

  } catch (error: any) {
    console.error('❌ Update calculation error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update calculation' },
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

