import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { CropAdvisorAI } from '@/lib/ai/crop-advisor';
import { filterOptions } from '@/lib/static-data';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { imageUrl, cropType } = await request.json();

    // Validate input data
    if (!imageUrl || !cropType) {
      return NextResponse.json({ 
        error: 'Missing required data: imageUrl and cropType are required' 
      }, { status: 400 });
    }

    // Validate image URL format
    if (!imageUrl.startsWith('http') && !imageUrl.startsWith('data:')) {
      return NextResponse.json({ 
        error: 'Invalid image URL format' 
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

    // Detect disease
    const detection = await cropAdvisor.detectDisease(imageUrl, cropType);

    return NextResponse.json({
      success: true,
      detection,
      timestamp: new Date().toISOString(),
      cropType,
      imageUrl: imageUrl.substring(0, 100) + '...', // Truncate for security
      note: 'Treatment recommendations use RNZ products from our database'
    });

  } catch (error) {
    console.error('Disease detection error:', error);
    return NextResponse.json({ 
      error: 'Failed to detect disease' 
    }, { status: 500 });
  }
}
