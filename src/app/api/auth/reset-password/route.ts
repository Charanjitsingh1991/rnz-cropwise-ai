import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

// Store reset tokens in memory (in production, use Redis or database)
const resetTokens = new Map<string, { email: string; expires: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    // Check if user exists
    const user = await db.collection('users').findOne({ email });
    await client.close();

    if (!user) {
      // Don't reveal if user exists or not for security
      return NextResponse.json({ 
        message: 'If an account with this email exists, a password reset link has been sent.' 
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + 3600000; // 1 hour

    // Store token
    resetTokens.set(resetToken, { email, expires });

    // In production, send email here
    // For now, we'll return the reset URL in the response
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;

    console.log('Password reset URL:', resetUrl); // Remove in production

    return NextResponse.json({ 
      message: 'Password reset link generated successfully. Please copy the reset URL below.',
      resetUrl: resetUrl,
      token: resetToken // Temporary for development
    });

  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Reset password with token
export async function PUT(request: NextRequest) {
  try {
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json({ error: 'Token and new password are required' }, { status: 400 });
    }

    // Validate password
    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    // Check if token exists and is valid
    const tokenData = resetTokens.get(token);
    if (!tokenData || tokenData.expires < Date.now()) {
      return NextResponse.json({ error: 'Invalid or expired reset token' }, { status: 400 });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user password
    const result = await db.collection('users').updateOne(
      { email: tokenData.email },
      { 
        $set: { 
          password: hashedPassword,
          updatedAt: new Date()
        } 
      }
    );

    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Remove used token
    resetTokens.delete(token);

    return NextResponse.json({ message: 'Password reset successfully' });

  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
