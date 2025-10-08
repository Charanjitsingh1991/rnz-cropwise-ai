import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { OTP } from '@/lib/mongodb/models/OTP';
import { sendPasswordResetOTP } from '@/lib/email-service';
import connectDB from '@/lib/mongodb/connection';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    console.log('🔐 Forgot password request for:', email);

    // Validate email
    if (!email) {
      return NextResponse.json({ 
        success: false,
        error: 'Email is required' 
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false,
        error: 'Invalid email format' 
      }, { status: 400 });
    }

    // Connect to database
    await connectDB();

    // Check if user exists
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();
    
    const user = await db.collection('users').findOne({ 
      email: email.toLowerCase().trim() 
    }, {
      projection: { _id: 1, email: 1, fullName: 1, displayName: 1, name: 1 }
    });
    
    await client.close();

    if (!user) {
      console.log('❌ User not found:', email);
      // Don't reveal if user exists or not for security
      return NextResponse.json({ 
        success: true,
        message: 'If this email is registered, you will receive a password reset code shortly.'
      });
    }

    // Check if resend is allowed (rate limiting)
    const canResend = await OTP.canResendOTP(email, 'password_reset');
    if (!canResend.canResend) {
      return NextResponse.json({ 
        success: false,
        error: canResend.error,
        remainingSeconds: canResend.remainingSeconds
      }, { status: 429 });
    }

    // Generate OTP
    const { otp, expiresAt } = await OTP.createOTP(email, 'password_reset');

    // Send email
    const userName = user.fullName || user.displayName || user.name || '';
    const emailResult = await sendPasswordResetOTP(email, otp, userName);

    if (!emailResult.success) {
      console.error('❌ Failed to send email:', emailResult.error);
      return NextResponse.json({ 
        success: false,
        error: 'Failed to send email. Please try again later.' 
      }, { status: 500 });
    }

    console.log('✅ Password reset OTP sent to:', email);

    return NextResponse.json({
      success: true,
      message: 'Verification code sent to your email',
      expiresIn: parseInt(process.env.OTP_EXPIRY_SECONDS || '120'),
      expiresAt: expiresAt.toISOString()
    });

  } catch (error) {
    console.error('❌ Forgot password error:', error);
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


