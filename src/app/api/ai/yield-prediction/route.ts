import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { CropAdvisorAI, SoilData, ClimateData } from '@/lib/ai/crop-advisor';
import { filterOptions } from '@/lib/static-data';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { cropType, soilData, climateData, historicalData } = await request.json();

    // Validate input data
    if (!cropType || !soilData || !climateData) {
      return NextResponse.json({ 
        error: 'Missing required data: cropType, soilData, and climateData are required' 
      }, { status: 400 });
    }

    // Validate crop type using comprehensive list
    const validCropTypes = filterOptions.crops.map(crop => crop.toLowerCase());
    if (!validCropTypes.includes(cropType.toLowerCase())) {
      return NextResponse.json({ 
        error: `Invalid crop type. Supported types: ${filterOptions.crops.join(', ')}` 
      }, { status: 400 });
    }

    // Initialize AI service
    const cropAdvisor = new CropAdvisorAI();

    // Predict yield
    const prediction = await cropAdvisor.predictYield(
      cropType,
      soilData as SoilData,
      climateData as ClimateData,
      historicalData
    );

    return NextResponse.json({
      success: true,
      prediction,
      timestamp: new Date().toISOString(),
      cropType
    });

  } catch (error) {
    console.error('Yield prediction error:', error);
    return NextResponse.json({ 
      error: 'Failed to predict yield' 
    }, { status: 500 });
  }
}



