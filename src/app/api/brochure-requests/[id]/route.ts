import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb/connection';
import { BrochureRequest, Notification } from '@/lib/mongodb/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';

// PUT - Update brochure request status
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || !session.user.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid request ID' },
        { status: 400 }
      );
    }

    const { status, adminNotes } = await request.json();
    
    // Validate status
    const validStatuses = ['pending', 'approved', 'rejected', 'completed'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    // Get the original request to check if status changed
    const originalRequest = await BrochureRequest.findById(id);
    
    // Update the request
    const updatedRequest = await BrochureRequest.findByIdAndUpdate(
      id,
      {
        status,
        adminNotes,
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    ).populate('productId', 'name category')
     .populate('requestedBy', 'name email');

    if (!updatedRequest) {
      return NextResponse.json(
        { error: 'Request not found' },
        { status: 404 }
      );
    }

    // Create notification for user if status changed to approved or completed
    if (originalRequest && (status === 'approved' || status === 'completed')) {
      const userNotification = new Notification({
        userId: updatedRequest.requestedBy._id,
        title: 'Brochure Request Updated',
        message: status === 'approved' 
          ? `Your brochure request for "${updatedRequest.productName}" has been approved. Check your product page for the brochure.`
          : `Your brochure request for "${updatedRequest.productName}" has been completed. The brochure is now available.`,
        type: 'brochure_uploaded',
        relatedId: updatedRequest._id,
        relatedModel: 'BrochureRequest'
      });
      
      await userNotification.save();
    }

    return NextResponse.json({
      success: true,
      data: updatedRequest,
      message: 'Request updated successfully'
    });

  } catch (error: any) {
    console.error('Error updating brochure request:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update request' },
      { status: 500 }
    );
  }
}

// DELETE - Delete brochure request
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || !session.user.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid request ID' },
        { status: 400 }
      );
    }

    const deletedRequest = await BrochureRequest.findByIdAndDelete(id);

    if (!deletedRequest) {
      return NextResponse.json(
        { error: 'Request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Request deleted successfully'
    });

  } catch (error: any) {
    console.error('Error deleting brochure request:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete request' },
      { status: 500 }
    );
  }
}
