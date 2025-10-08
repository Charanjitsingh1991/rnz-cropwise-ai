import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Handle CORS preflight
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

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    console.log('🔍 Flutter login attempt for:', email);

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ 
        success: false,
        error: 'Email and password are required' 
      }, { 
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false,
        error: 'Invalid email format' 
      }, { 
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();
    
    // Find user by email
    const user = await db.collection('users').findOne({ 
      email: email 
    }, {
      projection: {
        _id: 1,
        email: 1,
        displayName: 1,
        fullName: 1,
        name: 1,
        isAdmin: 1,
        country: 1,
        phoneNumber: 1,
        password: 1
      }
    });
    await client.close();
    
    if (!user) {
      console.log('❌ User not found:', email);
      return NextResponse.json({ 
        success: false,
        error: 'Invalid email or password' 
      }, { 
        status: 401,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    }

    // Compare hashed passwords
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      console.log('❌ Invalid password for user:', email);
      return NextResponse.json({ 
        success: false,
        error: 'Invalid email or password' 
      }, { 
        status: 401,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    }

    console.log('✅ User authenticated successfully:', email);
    
    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
        isAdmin: user.isAdmin || false,
        displayName: user.displayName || user.name || '',
        fullName: user.fullName || '',
        country: user.country || '',
        phoneNumber: user.phoneNumber || ''
      },
      process.env.NEXTAUTH_SECRET!,
      { expiresIn: '7d' }
    );
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      success: true,
      token: token,
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.displayName || user.name || '',
        fullName: user.fullName || '',
        isAdmin: user.isAdmin || false,
        country: user.country || '',
        phoneNumber: user.phoneNumber || ''
      }
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });

  } catch (error) {
    console.error('❌ Login error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Internal server error' 
    }, { 
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
  }
}
