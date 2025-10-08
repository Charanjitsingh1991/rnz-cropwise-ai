import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import { getServerSession } from 'next-auth';
import { sendPasswordChangedConfirmation } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    // Get session to verify user is authenticated
    const session = await getServerSession();
    
    if (!session || !session.user?.email) {
      return NextResponse.json({ 
        success: false,
        error: 'Unauthorized. Please login first.' 
      }, { status: 401 });
    }

    const { currentPassword, newPassword } = await request.json();

    console.log('🔐 Change password request for:', session.user.email);

    // Validate required fields
    if (!currentPassword || !newPassword) {
      return NextResponse.json({ 
        success: false,
        error: 'Current password and new password are required' 
      }, { status: 400 });
    }

    // Validate new password strength
    if (newPassword.length < 6) {
      return NextResponse.json({ 
        success: false,
        error: 'New password must be at least 6 characters long' 
      }, { status: 400 });
    }

    // Check if new password is different from current
    if (currentPassword === newPassword) {
      return NextResponse.json({ 
        success: false,
        error: 'New password must be different from current password' 
      }, { status: 400 });
    }

    // Connect to database
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();
    
    // Get user with password
    const user = await db.collection('users').findOne({ 
      email: session.user.email 
    });

    if (!user) {
      await client.close();
      return NextResponse.json({ 
        success: false,
        error: 'User not found' 
      }, { status: 404 });
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      await client.close();
      return NextResponse.json({ 
        success: false,
        error: 'Current password is incorrect' 
      }, { status: 401 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    const result = await db.collection('users').updateOne(
      { email: session.user.email },
      { 
        $set: { 
          password: hashedPassword,
          updatedAt: new Date()
        } 
      }
    );

    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ 
        success: false,
        error: 'Failed to update password' 
      }, { status: 500 });
    }

    // Send confirmation email
    const userName = user.fullName || user.displayName || user.name || '';
    await sendPasswordChangedConfirmation(session.user.email, userName);

    console.log('✅ Password changed successfully for:', session.user.email);

    return NextResponse.json({
      success: true,
      message: 'Password changed successfully'
    });

  } catch (error) {
    console.error('❌ Change password error:', error);
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





