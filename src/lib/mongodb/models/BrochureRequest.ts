import mongoose from 'mongoose';

const brochureRequestSchema = new mongoose.Schema({
  productId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product',
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  requestedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  status: { 
    type: String, 
    default: 'pending',
    enum: ['pending', 'approved', 'rejected', 'completed']
  },
  adminNotes: {
    type: String,
    trim: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true
});

// Index for better query performance
brochureRequestSchema.index({ productId: 1, status: 1 });
brochureRequestSchema.index({ requestedBy: 1 });
brochureRequestSchema.index({ status: 1, createdAt: -1 });

export const BrochureRequest = mongoose.models.BrochureRequest || mongoose.model('BrochureRequest', brochureRequestSchema);
