import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for Crop Information
export interface ICropInfo {
  cropType: string;
  variety?: string;
  season: string;
  plantingDate: Date;
  expectedHarvestDate?: Date;
  actualHarvestDate?: Date;
  targetYield?: number;
  actualYield?: number;
  yieldUnit: string;
  status: 'planned' | 'planted' | 'growing' | 'harvested';
}

// Interface for Field Activity
export interface IFieldActivity {
  activityType: 'fertilizer' | 'pesticide' | 'irrigation' | 'harvesting' | 'other';
  date: Date;
  description: string;
  products?: {
    productId: mongoose.Types.ObjectId;
    productName: string;
    quantity: number;
    unit: string;
    cost?: number;
  }[];
  cost?: number;
  notes?: string;
}

// Interface for Field Health
export interface IFieldHealth {
  soilHealth: 'poor' | 'fair' | 'good' | 'excellent';
  soilType: string;
  soilPH?: number;
  npkLevels?: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
  lastSoilTest?: Date;
  irrigationType?: 'rainfed' | 'drip' | 'sprinkler' | 'flood';
  waterAvailability: 'poor' | 'moderate' | 'good';
}

// Interface for Field Document
export interface IField extends Document {
  userId: mongoose.Types.ObjectId;
  
  // Basic Information
  name: string;
  size: number;
  unit: 'acres' | 'hectares';
  location?: {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  
  // Field Details
  fieldHealth: IFieldHealth;
  currentCrop?: ICropInfo;
  cropHistory: ICropInfo[];
  
  // Activities
  activities: IFieldActivity[];
  
  // Financial Tracking
  totalInvestment: number;
  totalRevenue: number;
  profitLoss: number;
  currency: string;
  
  // Linked Records
  calculations: mongoose.Types.ObjectId[]; // FertilizerCalculation IDs
  predictions: mongoose.Types.ObjectId[]; // YieldPrediction IDs
  
  // Status
  isActive: boolean;
  
  createdAt: Date;
  updatedAt: Date;
}

const FieldSchema = new Schema<IField>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    
    // Basic Information
    name: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: String,
      enum: ['acres', 'hectares'],
      required: true,
      default: 'acres',
    },
    location: {
      address: String,
      city: String,
      state: String,
      country: String,
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
    },
    
    // Field Details
    fieldHealth: {
      soilHealth: {
        type: String,
        enum: ['poor', 'fair', 'good', 'excellent'],
        default: 'fair',
      },
      soilType: {
        type: String,
        required: true,
      },
      soilPH: Number,
      npkLevels: {
        nitrogen: Number,
        phosphorus: Number,
        potassium: Number,
      },
      lastSoilTest: Date,
      irrigationType: {
        type: String,
        enum: ['rainfed', 'drip', 'sprinkler', 'flood'],
      },
      waterAvailability: {
        type: String,
        enum: ['poor', 'moderate', 'good'],
        default: 'moderate',
      },
    },
    
    currentCrop: {
      cropType: String,
      variety: String,
      season: String,
      plantingDate: Date,
      expectedHarvestDate: Date,
      actualHarvestDate: Date,
      targetYield: Number,
      actualYield: Number,
      yieldUnit: String,
      status: {
        type: String,
        enum: ['planned', 'planted', 'growing', 'harvested'],
        default: 'planned',
      },
    },
    
    cropHistory: [{
      cropType: { type: String, required: true },
      variety: String,
      season: { type: String, required: true },
      plantingDate: { type: Date, required: true },
      expectedHarvestDate: Date,
      actualHarvestDate: Date,
      targetYield: Number,
      actualYield: Number,
      yieldUnit: String,
      status: {
        type: String,
        enum: ['planned', 'planted', 'growing', 'harvested'],
      },
    }],
    
    // Activities
    activities: [{
      activityType: {
        type: String,
        enum: ['fertilizer', 'pesticide', 'irrigation', 'harvesting', 'other'],
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      products: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        productName: String,
        quantity: Number,
        unit: String,
        cost: Number,
      }],
      cost: Number,
      notes: String,
    }],
    
    // Financial Tracking
    totalInvestment: {
      type: Number,
      default: 0,
    },
    totalRevenue: {
      type: Number,
      default: 0,
    },
    profitLoss: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    
    // Linked Records
    calculations: [{
      type: Schema.Types.ObjectId,
      ref: 'FertilizerCalculation',
    }],
    predictions: [{
      type: Schema.Types.ObjectId,
      ref: 'YieldPrediction',
    }],
    
    // Status
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
FieldSchema.index({ userId: 1, isActive: 1 });
FieldSchema.index({ 'location.coordinates': '2dsphere' });
FieldSchema.index({ 'currentCrop.cropType': 1 });

// Virtual for calculating profit/loss
FieldSchema.virtual('currentProfitLoss').get(function() {
  return this.totalRevenue - this.totalInvestment;
});

// Method to add activity and update financials
FieldSchema.methods.addActivity = function(activity: IFieldActivity) {
  this.activities.push(activity);
  
  if (activity.cost) {
    this.totalInvestment += activity.cost;
    this.profitLoss = this.totalRevenue - this.totalInvestment;
  }
  
  return this.save();
};

// Method to record harvest
FieldSchema.methods.recordHarvest = function(
  actualYield: number,
  revenue: number
) {
  if (this.currentCrop) {
    this.currentCrop.actualYield = actualYield;
    this.currentCrop.actualHarvestDate = new Date();
    this.currentCrop.status = 'harvested';
    
    // Move to history
    this.cropHistory.push({ ...this.currentCrop });
    this.currentCrop = undefined;
  }
  
  if (revenue) {
    this.totalRevenue += revenue;
    this.profitLoss = this.totalRevenue - this.totalInvestment;
  }
  
  return this.save();
};

// Static method to get user fields summary
FieldSchema.statics.getUserSummary = async function(userId: mongoose.Types.ObjectId) {
  const fields = await this.find({ userId, isActive: true });
  
  const summary = {
    totalFields: fields.length,
    totalArea: fields.reduce((sum, field) => sum + field.size, 0),
    totalInvestment: fields.reduce((sum, field) => sum + field.totalInvestment, 0),
    totalRevenue: fields.reduce((sum, field) => sum + field.totalRevenue, 0),
    totalProfitLoss: fields.reduce((sum, field) => sum + field.profitLoss, 0),
    activeFields: fields.filter(f => f.currentCrop).length,
    crops: [...new Set(fields.map(f => f.currentCrop?.cropType).filter(Boolean))],
  };
  
  return summary;
};

// Export the model
export const Field: Model<IField> = 
  mongoose.models.Field || 
  mongoose.model<IField>('Field', FieldSchema);

export default Field;

