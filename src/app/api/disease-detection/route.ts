import { diagnosePlantDisease } from '@/ai/flows/diagnose-plant-disease';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await diagnosePlantDisease(body);
    return NextResponse.json(result);
  } catch (e: any) {
    console.error('Disease detection error:', e);
    return NextResponse.json(
      { error: e.message || 'An unexpected error occurred during disease detection.' }, 
      { status: 500 }
    );
  }
}
