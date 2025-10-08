import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request: NextRequest) {
  try {
    const { type, message, userEmail, userName } = await request.json();
    
    // Check admin settings for support channels
    let supportSettings = null;
    try {
      const client = new MongoClient(process.env.MONGODB_URI!);
      await client.connect();
      const db = client.db();
      supportSettings = await db.collection('supportSettings').findOne({});
      await client.close();
    } catch (error) {
      console.error('Failed to fetch support settings:', error);
      // Use default settings if database fetch fails
      supportSettings = {
        liveChatEnabled: true,
        videoCallEnabled: true,
        videoCallPlatform: 'Zoom'
      };
    }
    
    // Here you would integrate with your actual support systems:
    // - Phone call scheduling
    // - Live chat system
    // - Video call platform
    // - Email support
    
    let response;
    
    switch (type) {
      case 'phone':
        response = {
          success: true,
          message: 'Phone support request received. Our team will call you within 24 hours.',
          supportId: `PH-${Date.now()}`,
          estimatedWait: '24 hours'
        };
        break;
        
      case 'live_chat':
        if (!supportSettings?.liveChatEnabled) {
          return NextResponse.json({ 
            error: 'Live chat is currently disabled by admin' 
          }, { status: 403 });
        }
        response = {
          success: true,
          message: 'Live chat session initiated. Please wait for an agent to join.',
          supportId: `LC-${Date.now()}`,
          estimatedWait: '2-5 minutes',
          chatUrl: `https://rnzcropwise.com/chat/${Date.now()}`
        };
        break;
        
      case 'video_call':
        if (!supportSettings?.videoCallEnabled) {
          return NextResponse.json({ 
            error: 'Video calls are currently disabled by admin' 
          }, { status: 403 });
        }
        response = {
          success: true,
          message: `Video call request received. We will send you a ${supportSettings.videoCallPlatform || 'Zoom'} meeting link within 1 hour.`,
          supportId: `VC-${Date.now()}`,
          estimatedWait: '1 hour',
          meetingPlatform: supportSettings.videoCallPlatform || 'Zoom'
        };
        break;
        
      case 'email':
        response = {
          success: true,
          message: 'Email support request sent. You will receive a response within 4 hours.',
          supportId: `EM-${Date.now()}`,
          estimatedWait: '4 hours'
        };
        break;
        
      default:
        return NextResponse.json({ error: 'Invalid support type' }, { status: 400 });
    }
    
    // Log the support request (in production, save to database)
    console.log('Support request:', {
      type,
      userEmail,
      userName,
      timestamp: new Date().toISOString(),
      supportId: response.supportId
    });
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Support request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
