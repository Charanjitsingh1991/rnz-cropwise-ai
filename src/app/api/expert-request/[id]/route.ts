import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb/connection';
import { ExpertRequest } from '@/lib/mongodb/models/ExpertRequest';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Only admins can update expert requests
    if (!session.user.isAdmin) {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { status, adminResponse, adminNotes } = body;

    await connectDB();

    const updateData: any = {};
    
    if (status) {
      updateData.status = status;
    }
    
    if (adminResponse) {
      updateData.adminResponse = adminResponse;
      updateData.respondedAt = new Date();
      updateData.respondedBy = session.user.userId || session.user.id;
    }
    
    if (adminNotes) {
      updateData.adminNotes = adminNotes;
    }

    const expertRequest = await ExpertRequest.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true }
    );

    if (!expertRequest) {
      return NextResponse.json(
        { error: 'Expert request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Expert request updated successfully',
      expertRequest
    });

  } catch (error) {
    console.error('Update expert request error:', error);
    return NextResponse.json(
      { error: 'Failed to update expert request' },
      { status: 500 }
    );
  }
}
