import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for NPK values
export interface INPKValues {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

// Interface for Product Recommendation
export interface IProductRecommendation {
  productId: mongoose.Types.ObjectId;
  productName: string;
  npkRatio: string;
  quantity: number; // in kg
  unit: string;
  applicationMethod: string;
  timing: string;
  cost?: number;
}

// Interface for Application Schedule
export interface IApplicationSchedule {
  stage: string; // e.g., "Basal", "Top Dressing 1", "Top Dressing 2"
  daysAfterSowing: number;
  products: {
    productId: mongoose.Types.ObjectId;
    productName: string;
    quantity: number;
    unit: string;
  }[];
  instructions: string;
}

// Interface for Fertilizer Calculation Document
export interface IFertilizerCalculation extends Document {
  userId: mongoose.Types.ObjectId;
  fieldId?: mongoose.Types.ObjectId;
  
  // Input Parameters
  cropType: string;
  fieldSize: number;
  fieldUnit: 'acres' | 'hectares';
  soilType: string;
  
  // Current NPK levels (from soil test)
  currentNPK: INPKValues;
  
  // Target values
  targetYield: number;
  yieldUnit: string; // e.g., "tons/acre", "quintals/hectare"
  
  // Calculated Requirements
  requiredNPK: INPKValues;
  
  // Recommendations
  productRecommendations: IProductRecommendation[];
  applicationSchedule: IApplicationSchedule[];
  
  // Cost Analysis
  totalCost: number;
  costPerAcre?: number;
  currency: string;
  
  // Additional Info
  notes?: string;
  recommendations?: string[];
  
  // Metadata
  calculatedAt: Date;
  savedByUser: boolean;
  shared: boolean;
  
  createdAt: Date;
  updatedAt: Date;
}

const FertilizerCalculationSchema = new Schema<IFertilizerCalculation>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    fieldId: {
      type: Schema.Types.ObjectId,
      ref: 'Field',
      index: true,
    },
    
    // Input Parameters
    cropType: {
      type: String,
      required: true,
      index: true,
    },
    fieldSize: {
      type: Number,
      required: true,
      min: 0,
    },
    fieldUnit: {
      type: String,
      enum: ['acres', 'hectares'],
      required: true,
      default: 'acres',
    },
    soilType: {
      type: String,
      required: true,
    },
    
    // Current NPK levels
    currentNPK: {
      nitrogen: { type: Number, required: true, default: 0 },
      phosphorus: { type: Number, required: true, default: 0 },
      potassium: { type: Number, required: true, default: 0 },
    },
    
    // Target values
    targetYield: {
      type: Number,
      required: true,
      min: 0,
    },
    yieldUnit: {
      type: String,
      required: true,
      default: 'tons/acre',
    },
    
    // Calculated Requirements
    requiredNPK: {
      nitrogen: { type: Number, required: true },
      phosphorus: { type: Number, required: true },
      potassium: { type: Number, required: true },
    },
    
    // Recommendations
    productRecommendations: [{
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      productName: { type: String, required: true },
      npkRatio: { type: String, required: true },
      quantity: { type: Number, required: true },
      unit: { type: String, default: 'kg' },
      applicationMethod: { type: String },
      timing: { type: String },
      cost: { type: Number },
    }],
    
    applicationSchedule: [{
      stage: { type: String, required: true },
      daysAfterSowing: { type: Number, required: true },
      products: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        unit: { type: String, default: 'kg' },
      }],
      instructions: { type: String },
    }],
    
    // Cost Analysis
    totalCost: {
      type: Number,
      required: true,
      default: 0,
    },
    costPerAcre: {
      type: Number,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    
    // Additional Info
    notes: String,
    recommendations: [String],
    
    // Metadata
    calculatedAt: {
      type: Date,
      default: Date.now,
    },
    savedByUser: {
      type: Boolean,
      default: false,
    },
    shared: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for better query performance
FertilizerCalculationSchema.index({ userId: 1, createdAt: -1 });
FertilizerCalculationSchema.index({ cropType: 1, createdAt: -1 });
FertilizerCalculationSchema.index({ fieldId: 1 });

// Static method to calculate NPK requirements
FertilizerCalculationSchema.statics.calculateNPKRequirements = function(
  cropType: string,
  targetYield: number,
  fieldSize: number,
  currentNPK: INPKValues,
  soilType: string
): INPKValues {
  // NPK requirements per ton of yield (simplified - should be crop-specific)
  const npkPerTon: { [key: string]: INPKValues } = {
    wheat: { nitrogen: 25, phosphorus: 12, potassium: 25 },
    rice: { nitrogen: 20, phosphorus: 10, potassium: 20 },
    corn: { nitrogen: 30, phosphorus: 15, potassium: 30 },
    maize: { nitrogen: 30, phosphorus: 15, potassium: 30 },
    soybean: { nitrogen: 15, phosphorus: 8, potassium: 20 },
    cotton: { nitrogen: 35, phosphorus: 18, potassium: 35 },
    sugarcane: { nitrogen: 40, phosphorus: 20, potassium: 40 },
    potato: { nitrogen: 28, phosphorus: 14, potassium: 35 },
    tomato: { nitrogen: 25, phosphorus: 12, potassium: 30 },
    onion: { nitrogen: 22, phosphorus: 11, potassium: 25 },
    default: { nitrogen: 25, phosphorus: 12, potassium: 25 },
  };

  // Get crop-specific requirements or use default
  const cropRequirements = npkPerTon[cropType.toLowerCase()] || npkPerTon.default;

  // Calculate total required NPK based on target yield
  const totalRequired: INPKValues = {
    nitrogen: cropRequirements.nitrogen * targetYield,
    phosphorus: cropRequirements.phosphorus * targetYield,
    potassium: cropRequirements.potassium * targetYield,
  };

  // Soil type adjustment factor
  const soilAdjustment: { [key: string]: number } = {
    sandy: 1.2,        // More nutrients needed
    loamy: 1.0,        // Optimal
    clay: 0.9,         // Better nutrient retention
    silty: 1.05,       // Moderate
    'black soil': 0.85, // Rich in nutrients
    'red soil': 1.15,   // Poor in nutrients
    default: 1.0,
  };

  const adjustment = soilAdjustment[soilType.toLowerCase()] || soilAdjustment.default;

  // Calculate net required NPK (total required - current available + soil adjustment)
  const netRequired: INPKValues = {
    nitrogen: Math.max(0, (totalRequired.nitrogen - currentNPK.nitrogen) * adjustment),
    phosphorus: Math.max(0, (totalRequired.phosphorus - currentNPK.phosphorus) * adjustment),
    potassium: Math.max(0, (totalRequired.potassium - currentNPK.potassium) * adjustment),
  };

  // Scale to field size
  return {
    nitrogen: Math.round(netRequired.nitrogen * fieldSize),
    phosphorus: Math.round(netRequired.phosphorus * fieldSize),
    potassium: Math.round(netRequired.potassium * fieldSize),
  };
};

// Static method to match products
FertilizerCalculationSchema.statics.matchProducts = async function(
  requiredNPK: INPKValues,
  userId: mongoose.Types.ObjectId
): Promise<IProductRecommendation[]> {
  // This will be implemented to fetch products from database
  // For now, return a basic structure
  
  const Product = mongoose.model('Product');
  
  // Find fertilizer products
  const fertilizers = await Product.find({
    category: { $regex: /fertilizer/i },
    status: 'active',
  }).limit(20);

  const recommendations: IProductRecommendation[] = [];

  // Simple product matching logic
  // In production, this should be more sophisticated
  
  for (const product of fertilizers) {
    if (product.npk) {
      const npkParts = product.npk.split('-').map((n: string) => parseInt(n) || 0);
      if (npkParts.length === 3) {
        const [n, p, k] = npkParts;
        
        // Calculate quantity needed based on NPK content
        if (n > 0 && requiredNPK.nitrogen > 0) {
          const quantity = Math.ceil(requiredNPK.nitrogen / (n / 100));
          recommendations.push({
            productId: product._id,
            productName: product.name,
            npkRatio: product.npk,
            quantity: quantity,
            unit: 'kg',
            applicationMethod: product.applicationMethod || 'Broadcast',
            timing: 'As per schedule',
            cost: product.price ? product.price * quantity : undefined,
          });
        }
      }
    }
  }

  return recommendations.slice(0, 5); // Return top 5 recommendations
};

// Export the model
export const FertilizerCalculation: Model<IFertilizerCalculation> = 
  mongoose.models.FertilizerCalculation || 
  mongoose.model<IFertilizerCalculation>('FertilizerCalculation', FertilizerCalculationSchema);

export default FertilizerCalculation;

