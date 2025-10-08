import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { User } from '@/lib/mongodb/models/User';
import { OTP } from '@/lib/mongodb/models/OTP';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, otp } = body;

    console.log('📧 Verify signup OTP request:', { email, otp: otp ? '***' : undefined, bodyKeys: Object.keys(body) });

    // Validate input
    if (!email || !otp) {
      console.error('❌ Missing email or OTP:', { hasEmail: !!email, hasOtp: !!otp });
      return NextResponse.json(
        { success: false, error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    // Find the OTP record
    const otpRecord = await OTP.findOne({
      email: email.toLowerCase(),
      otp,
      purpose: 'signup',
      isUsed: false,
      expiresAt: { $gt: new Date() },
    });

    if (!otpRecord) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired OTP' },
        { status: 400 }
      );
    }

    // Check if signup data exists
    if (!otpRecord.signupData) {
      return NextResponse.json(
        { success: false, error: 'Signup data not found. Please try signing up again.' },
        { status: 400 }
      );
    }

    // Check if user already exists (double check)
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      // Mark OTP as used
      otpRecord.isUsed = true;
      await otpRecord.save();

      return NextResponse.json(
        { success: false, error: 'User already exists. Please login.' },
        { status: 409 }
      );
    }

    // Create user from signup data
    const userData = {
      ...otpRecord.signupData,
      uid: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const user = await User.create(userData);

    // Mark OTP as used
    otpRecord.isUsed = true;
    await otpRecord.save();

    // Generate JWT token for auto-login
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email,
        uid: user.uid,
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Return user data without password
    const userResponse = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      fullName: user.fullName,
      country: user.country,
      phoneNumber: user.phoneNumber,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    };

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error('Verify signup OTP error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to verify OTP and create account' },
      { status: 500 }
    );
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

