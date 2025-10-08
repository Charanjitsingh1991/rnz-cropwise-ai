import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import crypto from 'crypto';

// Store OTP codes in memory (in production, use Redis or database)
const otpCodes = new Map<string, { email: string; otp: string; expires: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 300000; // 5 minutes

    // Store OTP
    otpCodes.set(email, { email, otp, expires });

    // In production, send email here
    // For now, we'll return the OTP (remove this in production)
    console.log(`OTP for ${email}: ${otp}`); // Remove in production

    return NextResponse.json({ 
      message: 'OTP sent to your email address',
      otp: otp // Remove this in production
    });

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Verify OTP
export async function PUT(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
    }

    // Check if OTP exists and is valid
    const otpData = otpCodes.get(email);
    if (!otpData || otpData.otp !== otp || otpData.expires < Date.now()) {
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
    }

    // Remove used OTP
    otpCodes.delete(email);

    return NextResponse.json({ message: 'Email verified successfully' });

  } catch (error) {
    console.error('OTP verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
