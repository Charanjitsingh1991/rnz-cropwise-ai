import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { OTP } from '@/lib/mongodb/models/OTP';
import { sendPasswordResetOTP, sendEmail } from '@/lib/email-service';
import connectDB from '@/lib/mongodb/connection';

export async function POST(request: NextRequest) {
  try {
    const { email, purpose = 'password_reset' } = await request.json();

    console.log('🔄 Resend OTP request for:', email);

    // Validate email
    if (!email) {
      return NextResponse.json({ 
        success: false,
        error: 'Email is required' 
      }, { status: 400 });
    }

    // Connect to database
    await connectDB();

    // For signup purpose, check if there's existing OTP data (user not yet created)
    let userName = '';
    let signupData = null;

    if (purpose === 'signup') {
      // Find existing signup OTP to get signup data
      const existingOTP = await OTP.findOne({
        email: email.toLowerCase().trim(),
        purpose: 'signup',
      }).sort({ createdAt: -1 });

      if (existingOTP && existingOTP.signupData) {
        userName = existingOTP.signupData.fullName || '';
        signupData = existingOTP.signupData;
      } else {
        return NextResponse.json({ 
          success: false,
          error: 'No signup session found. Please start signup again.'
        }, { status: 400 });
      }
    } else {
      // For other purposes (password_reset), check if user exists
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
        // Don't reveal if user exists or not for security
        return NextResponse.json({ 
          success: true,
          message: 'If this email is registered, a new code has been sent.'
        });
      }

      userName = user.fullName || user.displayName || user.name || '';
    }

    // Check if resend is allowed (rate limiting)
    const canResend = await OTP.canResendOTP(email, purpose);
    if (!canResend.canResend) {
      return NextResponse.json({ 
        success: false,
        error: canResend.error,
        remainingSeconds: canResend.remainingSeconds
      }, { status: 429 });
    }

    // Generate new OTP (with signup data if it's a signup purpose)
    const { otp, expiresAt } = await OTP.createOTP(email, purpose, signupData);

    // Send email based on purpose
    try {
      if (purpose === 'signup') {
        // Send signup verification email
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
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .otp-box { background: white; border: 2px dashed #667eea; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #667eea; margin: 20px 0; border-radius: 8px; }
                .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin: 20px 0; border-radius: 4px; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Welcome to RNZ CropWise!</h1>
                </div>
                <div class="content">
                  <p>Hi <strong>${userName}</strong>,</p>
                  <p>Here's your new verification code:</p>
                  
                  <div class="otp-box">${otp}</div>
                  
                  <div class="warning">
                    ⏱️ <strong>Important:</strong> This code will expire in <strong>2 minutes</strong>.
                  </div>
                  
                  <p>If you didn't request this code, please ignore this email.</p>
                  
                  <p>Best regards,<br>The RNZ CropWise Team</p>
                </div>
                <div class="footer">
                  <p>© ${new Date().getFullYear()} RNZ CropWise. All rights reserved.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        });
      } else {
        // Send password reset email
        const emailResult = await sendPasswordResetOTP(email, otp, userName);
        if (!emailResult.success) {
          throw new Error('Failed to send password reset email');
        }
      }
    } catch (emailError) {
      console.error('❌ Failed to send email:', emailError);
      return NextResponse.json({ 
        success: false,
        error: 'Failed to send email. Please try again later.' 
      }, { status: 500 });
    }

    console.log('✅ OTP resent to:', email);

    return NextResponse.json({
      success: true,
      message: 'New verification code sent to your email',
      expiresIn: parseInt(process.env.OTP_EXPIRY_SECONDS || '120'),
      expiresAt: expiresAt.toISOString()
    });

  } catch (error) {
    console.error('❌ Resend OTP error:', error);
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



