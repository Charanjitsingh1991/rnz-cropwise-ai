import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { Field } from '@/lib/mongodb/models/Field';
import mongoose from 'mongoose';

// POST - Create new field
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      userId,
      name,
      size,
      unit = 'acres',
      location,
      fieldHealth,
      currentCrop,
      currency = 'USD',
    } = body;

    // Validate required fields
    if (!userId || !name || !size || !fieldHealth?.soilType) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: userId, name, size, soilType' 
        },
        { status: 400 }
      );
    }

    // Create field
    const field = await Field.create({
      userId: new mongoose.Types.ObjectId(userId),
      name,
      size,
      unit,
      location,
      fieldHealth: {
        soilHealth: fieldHealth.soilHealth || 'fair',
        soilType: fieldHealth.soilType,
        soilPH: fieldHealth.soilPH,
        npkLevels: fieldHealth.npkLevels,
        lastSoilTest: fieldHealth.lastSoilTest,
        irrigationType: fieldHealth.irrigationType,
        waterAvailability: fieldHealth.waterAvailability || 'moderate',
      },
      currentCrop,
      cropHistory: [],
      activities: [],
      totalInvestment: 0,
      totalRevenue: 0,
      profitLoss: 0,
      currency,
      calculations: [],
      predictions: [],
      isActive: true,
    });

    return NextResponse.json({
      success: true,
      message: 'Field created successfully',
      field,
    });

  } catch (error: any) {
    console.error('❌ Create field error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create field' },
      { status: 500 }
    );
  }
}

// GET - Fetch user's fields
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const isActive = searchParams.get('isActive');
    const summary = searchParams.get('summary') === 'true';

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'userId is required' },
        { status: 400 }
      );
    }

    // If summary requested, return aggregated data
    if (summary) {
      const summaryData = await (Field as any).getUserSummary(
        new mongoose.Types.ObjectId(userId)
      );
      
      return NextResponse.json({
        success: true,
        summary: summaryData,
      });
    }

    // Build query
    const query: any = { userId: new mongoose.Types.ObjectId(userId) };
    
    if (isActive !== null && isActive !== undefined) {
      query.isActive = isActive === 'true';
    }

    const fields = await Field
      .find(query)
      .sort({ createdAt: -1 })
      .populate('calculations', 'cropType totalCost createdAt')
      .populate('predictions', 'cropType prediction createdAt')
      .lean();

    return NextResponse.json({
      success: true,
      count: fields.length,
      fields,
    });

  } catch (error: any) {
    console.error('❌ Fetch fields error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch fields' },
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
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

