import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { FertilizerCalculation } from '@/lib/mongodb/models/FertilizerCalculation';
import { Field } from '@/lib/mongodb/models/Field';
import { Product } from '@/lib/mongodb/models/Product';
import mongoose from 'mongoose';

// POST - Create new fertilizer calculation
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      userId,
      fieldId,
      cropType,
      fieldSize,
      fieldUnit = 'acres',
      soilType,
      currentNPK,
      targetYield,
      yieldUnit = 'tons/acre',
      currency = 'USD',
    } = body;

    // Validate required fields
    if (!userId || !cropType || !fieldSize || !soilType || !targetYield) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: userId, cropType, fieldSize, soilType, targetYield' 
        },
        { status: 400 }
      );
    }

    // Validate currentNPK
    const npkLevels = currentNPK || { nitrogen: 0, phosphorus: 0, potassium: 0 };

    // Calculate required NPK
    const requiredNPK = (FertilizerCalculation as any).calculateNPKRequirements(
      cropType,
      targetYield,
      fieldSize,
      npkLevels,
      soilType
    );

    console.log('📊 Calculated NPK Requirements:', requiredNPK);

    // Match products from database
    const productRecommendations = await (FertilizerCalculation as any).matchProducts(
      requiredNPK,
      new mongoose.Types.ObjectId(userId)
    );

    console.log('🌿 Product Recommendations:', productRecommendations.length);

    // Calculate total cost
    const totalCost = productRecommendations.reduce(
      (sum, prod) => sum + (prod.cost || 0), 
      0
    );

    // Generate application schedule
    const applicationSchedule = generateApplicationSchedule(
      cropType,
      productRecommendations
    );

    // Generate recommendations
    const recommendations = generateRecommendations(
      cropType,
      soilType,
      requiredNPK
    );

    // Create calculation record
    const calculation = await FertilizerCalculation.create({
      userId: new mongoose.Types.ObjectId(userId),
      fieldId: fieldId ? new mongoose.Types.ObjectId(fieldId) : undefined,
      cropType,
      fieldSize,
      fieldUnit,
      soilType,
      currentNPK: npkLevels,
      targetYield,
      yieldUnit,
      requiredNPK,
      productRecommendations,
      applicationSchedule,
      totalCost,
      costPerAcre: totalCost / fieldSize,
      currency,
      recommendations,
      calculatedAt: new Date(),
      savedByUser: true,
    });

    // Update field if fieldId provided
    if (fieldId) {
      await Field.findByIdAndUpdate(
        fieldId,
        {
          $push: { calculations: calculation._id },
          $set: {
            'fieldHealth.npkLevels': npkLevels,
            'fieldHealth.lastSoilTest': new Date(),
          },
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Fertilizer calculation completed successfully',
      calculation: {
        _id: calculation._id,
        cropType: calculation.cropType,
        fieldSize: calculation.fieldSize,
        fieldUnit: calculation.fieldUnit,
        requiredNPK: calculation.requiredNPK,
        productRecommendations: calculation.productRecommendations,
        applicationSchedule: calculation.applicationSchedule,
        totalCost: calculation.totalCost,
        costPerAcre: calculation.costPerAcre,
        currency: calculation.currency,
        recommendations: calculation.recommendations,
      },
    });

  } catch (error: any) {
    console.error('❌ Fertilizer calculation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to calculate fertilizer requirements' 
      },
      { status: 500 }
    );
  }
}

// GET - Fetch user's fertilizer calculations
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const fieldId = searchParams.get('fieldId');
    const limit = parseInt(searchParams.get('limit') || '20');

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'userId is required' },
        { status: 400 }
      );
    }

    const query: any = { userId: new mongoose.Types.ObjectId(userId) };
    
    if (fieldId) {
      query.fieldId = new mongoose.Types.ObjectId(fieldId);
    }

    const calculations = await FertilizerCalculation
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate('fieldId', 'name size unit')
      .lean();

    return NextResponse.json({
      success: true,
      count: calculations.length,
      calculations,
    });

  } catch (error: any) {
    console.error('❌ Fetch calculations error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch calculations' },
      { status: 500 }
    );
  }
}

// Helper function to generate application schedule
function generateApplicationSchedule(cropType: string, products: any[]): any[] {
  const schedule: any[] = [];

  // Crop-specific schedules
  const cropSchedules: { [key: string]: any[] } = {
    wheat: [
      { stage: 'Basal (At Sowing)', days: 0, percentage: 50 },
      { stage: 'First Top Dressing (Tillering)', days: 21, percentage: 25 },
      { stage: 'Second Top Dressing (Heading)', days: 45, percentage: 25 },
    ],
    rice: [
      { stage: 'Basal (At Transplanting)', days: 0, percentage: 50 },
      { stage: 'First Top Dressing', days: 21, percentage: 25 },
      { stage: 'Second Top Dressing (Panicle Initiation)', days: 42, percentage: 25 },
    ],
    corn: [
      { stage: 'Basal (At Sowing)', days: 0, percentage: 40 },
      { stage: 'First Top Dressing (V6 Stage)', days: 28, percentage: 30 },
      { stage: 'Second Top Dressing (VT Stage)', days: 50, percentage: 30 },
    ],
    default: [
      { stage: 'Basal Application', days: 0, percentage: 60 },
      { stage: 'Top Dressing', days: 30, percentage: 40 },
    ],
  };

  const scheduleTemplate = cropSchedules[cropType.toLowerCase()] || cropSchedules.default;

  scheduleTemplate.forEach((stage) => {
    const stageProducts = products.map(prod => ({
      productId: prod.productId,
      productName: prod.productName,
      quantity: Math.round((prod.quantity * stage.percentage) / 100),
      unit: prod.unit,
    }));

    schedule.push({
      stage: stage.stage,
      daysAfterSowing: stage.days,
      products: stageProducts,
      instructions: `Apply ${stage.percentage}% of total fertilizer at ${stage.stage.toLowerCase()}. ${
        stage.days === 0 
          ? 'Mix thoroughly with soil before sowing/transplanting.' 
          : `Apply as top dressing ${stage.days} days after sowing.`
      }`,
    });
  });

  return schedule;
}

// Helper function to generate recommendations
function generateRecommendations(
  cropType: string,
  soilType: string,
  requiredNPK: any
): string[] {
  const recommendations: string[] = [];

  // General recommendations
  recommendations.push(
    `Total NPK requirement: N=${requiredNPK.nitrogen}kg, P=${requiredNPK.phosphorus}kg, K=${requiredNPK.potassium}kg`
  );

  // Soil-specific recommendations
  if (soilType.toLowerCase().includes('sandy')) {
    recommendations.push('Sandy soil detected: Apply fertilizer in split doses to prevent leaching');
    recommendations.push('Consider using organic matter to improve water retention');
  } else if (soilType.toLowerCase().includes('clay')) {
    recommendations.push('Clay soil detected: Ensure proper drainage before fertilizer application');
    recommendations.push('Break large clods for better fertilizer mixing');
  }

  // Crop-specific recommendations
  const cropAdvice: { [key: string]: string[] } = {
    wheat: [
      'Apply first dose of nitrogen at sowing for better tillering',
      'Second dose during CRI stage (21 days) for more tillers',
      'Final dose at flowering for better grain filling',
    ],
    rice: [
      'Apply basal dose 1 day before transplanting',
      'First top dressing 21 days after transplanting',
      'Second top dressing at panicle initiation',
    ],
    corn: [
      'Apply phosphorus near seed placement for better root development',
      'Split nitrogen application for better utilization',
      'Ensure adequate potassium for strong stalks',
    ],
  };

  if (cropAdvice[cropType.toLowerCase()]) {
    recommendations.push(...cropAdvice[cropType.toLowerCase()]);
  }

  // NPK ratio recommendations
  if (requiredNPK.nitrogen > requiredNPK.phosphorus * 2) {
    recommendations.push('High nitrogen requirement: Consider using high N fertilizers like Urea (46-0-0)');
  }
  
  if (requiredNPK.phosphorus > 50) {
    recommendations.push('High phosphorus requirement: Use DAP (18-46-0) or SSP for better root development');
  }

  if (requiredNPK.potassium > 50) {
    recommendations.push('High potassium requirement: Use MOP (0-0-60) for better disease resistance');
  }

  // General best practices
  recommendations.push('Apply fertilizer when soil has adequate moisture');
  recommendations.push('Avoid fertilizer application before heavy rain to prevent nutrient loss');
  recommendations.push('Conduct soil test every 2-3 years for accurate nutrient management');

  return recommendations;
}

// CORS OPTIONS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

