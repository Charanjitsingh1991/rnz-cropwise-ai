import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { CropAdvisorAI, SoilData, ClimateData, MarketData } from '@/lib/ai/crop-advisor';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { soilData, climateData, marketData, location } = await request.json();

    // Validate input data
    if (!soilData || !climateData || !location) {
      return NextResponse.json({ 
        error: 'Missing required data: soilData, climateData, and location are required' 
      }, { status: 400 });
    }

    // Validate soil data
    const requiredSoilFields = ['ph', 'nitrogen', 'phosphorus', 'potassium', 'organicMatter', 'texture', 'moisture'];
    for (const field of requiredSoilFields) {
      if (typeof soilData[field] === 'undefined') {
        return NextResponse.json({ 
          error: `Missing soil data field: ${field}` 
        }, { status: 400 });
      }
    }

    // Validate climate data
    const requiredClimateFields = ['temperature', 'humidity', 'rainfall', 'sunlight', 'season'];
    for (const field of requiredClimateFields) {
      if (typeof climateData[field] === 'undefined') {
        return NextResponse.json({ 
          error: `Missing climate data field: ${field}` 
        }, { status: 400 });
      }
    }

    // Initialize AI service
    const cropAdvisor = new CropAdvisorAI();

    // Get crop recommendations
    const recommendations = await cropAdvisor.getCropRecommendations(
      soilData as SoilData,
      climateData as ClimateData,
      marketData || [],
      location
    );

          return NextResponse.json({
        success: true,
        recommendations,
        timestamp: new Date().toISOString(),
        location,
        dataPoints: {
          soil: Object.keys(soilData).length,
          climate: Object.keys(climateData).length,
          market: marketData?.length || 0
        },
        note: 'Recommendations based on RNZ product database'
      });

  } catch (error) {
    console.error('Crop recommendations error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate crop recommendations' 
    }, { status: 500 });
  }
}
