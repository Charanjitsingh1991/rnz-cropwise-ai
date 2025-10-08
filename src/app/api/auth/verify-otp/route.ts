import { NextRequest, NextResponse } from 'next/server';
import { OTP } from '@/lib/mongodb/models/OTP';
import connectDB from '@/lib/mongodb/connection';

export async function POST(request: NextRequest) {
  try {
    const { email, otp, purpose = 'password_reset' } = await request.json();

    console.log('🔍 OTP verification request for:', email);

    // Validate required fields
    if (!email || !otp) {
      return NextResponse.json({ 
        success: false,
        error: 'Email and OTP are required' 
      }, { status: 400 });
    }

    // Validate OTP format (6 digits)
    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json({ 
        success: false,
        error: 'OTP must be a 6-digit number' 
      }, { status: 400 });
    }

    // Connect to database
    await connectDB();

    // Find the OTP record
    const otpRecord = await OTP.findOne({
      email: email.toLowerCase().trim(),
      purpose,
      isUsed: false,
    }).sort({ createdAt: -1 }); // Get the most recent OTP

    if (!otpRecord) {
      return NextResponse.json({ 
        success: false,
        error: 'Invalid or expired OTP. Please request a new one.' 
      }, { status: 400 });
    }

    // Check if maximum attempts reached
    const maxAttempts = parseInt(process.env.OTP_MAX_ATTEMPTS || '3');
    if (otpRecord.attempts >= maxAttempts) {
      return NextResponse.json({ 
        success: false,
        error: 'Maximum verification attempts reached. Please request a new OTP.' 
      }, { status: 429 });
    }

    // Check if OTP has expired
    if (new Date() > otpRecord.expiresAt) {
      return NextResponse.json({ 
        success: false,
        error: 'OTP has expired. Please request a new one.',
        expired: true
      }, { status: 400 });
    }

    // Verify OTP
    if (otpRecord.otp !== otp) {
      // Increment attempts
      await otpRecord.incrementAttempts();
      const remainingAttempts = maxAttempts - (otpRecord.attempts + 1);
      
      return NextResponse.json({ 
        success: false,
        error: `Invalid OTP. ${remainingAttempts} attempt${remainingAttempts !== 1 ? 's' : ''} remaining.`,
        remainingAttempts
      }, { status: 400 });
    }

    // OTP is valid - mark as used
    await otpRecord.markAsUsed();

    console.log('✅ OTP verified successfully for:', email);

    return NextResponse.json({
      success: true,
      message: 'OTP verified successfully',
      email: email
    });

  } catch (error) {
    console.error('❌ OTP verification error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

// CORS OPTIONS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}


