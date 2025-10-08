import mongoose, { Schema, Document } from 'mongoose';

export interface IExpertRequest extends Document {
  userId: string;
  userEmail?: string;
  userName?: string;
  plantType: string;
  isHealthy: boolean;
  diseaseName?: string;
  diseaseSeverity?: string;
  confidenceScore: number;
  plantImage: string; // Base64 image data
  diagnosisResult: any; // Full diagnosis result from AI
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  adminNotes?: string;
  adminResponse?: string;
  createdAt: Date;
  updatedAt: Date;
  respondedAt?: Date;
  respondedBy?: string; // Admin ID who responded
}

const ExpertRequestSchema = new Schema<IExpertRequest>({
  userId: {
    type: String,
    required: true,
    index: true
  },
  userEmail: {
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: false
  },
  plantType: {
    type: String,
    required: true
  },
  isHealthy: {
    type: Boolean,
    required: true
  },
  diseaseName: {
    type: String,
    required: false
  },
  diseaseSeverity: {
    type: String,
    required: false
  },
  confidenceScore: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  plantImage: {
    type: String,
    required: true
  },
  diagnosisResult: {
    type: Schema.Types.Mixed,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'cancelled'],
    default: 'pending',
    index: true
  },
  adminNotes: {
    type: String,
    required: false
  },
  adminResponse: {
    type: String,
    required: false
  },
  respondedAt: {
    type: Date,
    required: false
  },
  respondedBy: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

// Index for efficient queries
ExpertRequestSchema.index({ status: 1, createdAt: -1 });
ExpertRequestSchema.index({ userId: 1, createdAt: -1 });

export const ExpertRequest = mongoose.models.ExpertRequest || mongoose.model<IExpertRequest>('ExpertRequest', ExpertRequestSchema);
