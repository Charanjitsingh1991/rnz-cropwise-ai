import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { User } from '@/lib/mongodb/models/User';
import { OTP } from '@/lib/mongodb/models/OTP';
import { sendEmail } from '@/lib/email-service';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email, password, fullName, country, phoneNumber } = await request.json();

    // Validate required fields
    if (!email || !password || !fullName || !country || !phoneNumber) {
      return NextResponse.json({ 
        success: false,
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false,
        error: 'Invalid email format' 
      }, { status: 400 });
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json({ 
        success: false,
        error: 'Password must be at least 6 characters' 
      }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json({ 
        success: false,
        error: 'User with this email already exists' 
      }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare signup data to store with OTP
    const signupData = {
      email: email.toLowerCase(),
      password: hashedPassword,
      fullName,
      country,
      phoneNumber,
      displayName: email.split('@')[0],
      isAdmin: false,
    };

    // Generate and store OTP with signup data
    const { otp } = await (OTP as any).createOTP(email.toLowerCase(), 'signup', signupData);

    // Send OTP email
    await sendEmail({
      to: email,
      subject: 'Verify Your Email - RNZ CropWise',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .otp-box { background: white; border: 2px dashed #2E7D32; padding: 20px; margin: 20px 0; text-align: center; border-radius: 8px; }
            .otp-code { font-size: 32px; font-weight: bold; color: #2E7D32; letter-spacing: 8px; }
            .timer { color: #FF6F00; font-weight: bold; margin-top: 10px; }
            .footer { text-align: center; color: #757575; font-size: 12px; margin-top: 20px; }
            .warning { background: #FFF3E0; border-left: 4px solid #FF6F00; padding: 15px; margin: 20px 0; }
            .welcome { background: #E8F5E9; border: 2px solid #4CAF50; padding: 20px; margin: 20px 0; text-align: center; border-radius: 8px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌱 RNZ CropWise</h1>
              <p>Welcome to Your Agricultural Journey!</p>
            </div>
            <div class="content">
              <p>Hi <strong>${fullName}</strong>,</p>
              
              <div class="welcome">
                <h2 style="color: #2E7D32; margin: 0;">🎉 Welcome to RNZ CropWise!</h2>
                <p style="margin: 10px 0 0 0; color: #757575;">Thank you for joining our agricultural community</p>
              </div>
              
              <p>Please verify your email address to complete your registration and start exploring our products and AI-powered crop recommendations.</p>
              
              <div class="otp-box">
                <p style="margin: 0; color: #757575; font-size: 14px;">Your verification code is:</p>
                <div class="otp-code">${otp}</div>
                <div class="timer">⏱️ Expires in 2 minutes</div>
              </div>

              <div class="warning">
                <strong>⚠️ Security Notice:</strong> If you didn't create this account, please ignore this email. Your account is safe.
              </div>

              <p>This code will expire in <strong>2 minutes (120 seconds)</strong>. If the code expires, you can request a new one.</p>
              
              <p>Best regards,<br>
              <strong>RNZ CropWise Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated email. Please do not reply to this message.</p>
              <p>&copy; 2025 RNZ CropWise. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Verification code sent to your email',
      email: email.toLowerCase(),
    }, { status: 200 });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to send verification code' 
    }, { status: 500 });
  }
}
