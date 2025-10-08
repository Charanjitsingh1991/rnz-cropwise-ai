import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { CropAdvisorAI, SoilData } from '@/lib/ai/crop-advisor';
import { filterOptions } from '@/lib/static-data';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { cropType, soilData, targetYield } = await request.json();

    // Validate input data
    if (!cropType || !soilData || !targetYield) {
      return NextResponse.json({ 
        error: 'Missing required data: cropType, soilData, and targetYield are required' 
      }, { status: 400 });
    }

    // Validate crop type using comprehensive list
    const validCropTypes = filterOptions.crops.map(crop => crop.toLowerCase());
    if (!validCropTypes.includes(cropType.toLowerCase())) {
      return NextResponse.json({ 
        error: `Invalid crop type. Supported types: ${filterOptions.crops.join(', ')}` 
      }, { status: 400 });
    }

    // Validate target yield
    if (typeof targetYield !== 'number' || targetYield <= 0) {
      return NextResponse.json({ 
        error: 'Target yield must be a positive number' 
      }, { status: 400 });
    }

    // Initialize AI service
    const cropAdvisor = new CropAdvisorAI();

    // Get fertilizer recommendations
    const recommendations = await cropAdvisor.getFertilizerRecommendations(
      cropType,
      soilData as SoilData,
      targetYield
    );

    return NextResponse.json({
      success: true,
      recommendations,
      timestamp: new Date().toISOString(),
      cropType,
      targetYield
    });

  } catch (error) {
    console.error('Fertilizer calculator error:', error);
    return NextResponse.json({ 
      error: 'Failed to calculate fertilizer recommendations' 
    }, { status: 500 });
  }
}



