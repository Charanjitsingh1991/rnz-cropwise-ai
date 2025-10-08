import mongoose from 'mongoose';

const brochureSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true,
    trim: true
  },
  fileUrl: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v: string) {
        return v.startsWith('https://');
      },
      message: 'File URL must be a valid HTTPS URL'
    }
  },
  thumbnailUrl: { 
    type: String,
    default: '/images/pdf-thumbnail.png'
  },
  fileSize: { 
    type: Number, 
    required: true,
    min: 0
  },
  pageCount: { 
    type: Number, 
    default: 1,
    min: 1
  },
  category: { 
    type: String, 
    required: true,
    enum: [
      'Water Soluble NPK',
      'Granular NPK',
      'Liquid Items',
      'Suspension Items',
      'Sulphur Based',
      'Straights Items',
      'Micro Elements',
      'Sulphates Products',
      'Bio/Organic Items',
      'General'
    ]
  },
  language: { 
    type: String, 
    default: 'English',
    enum: ['English', 'Hindi', 'Arabic', 'Urdu', 'Bengali', 'Tamil', 'Telugu']
  },
  regions: [{ 
    type: String,
    enum: ['India', 'Pakistan', 'Sri Lanka', 'Bangladesh', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'All']
  }],
  crops: [{ 
    type: String,
    enum: [
      'All Crops', 'Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton',
      'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce',
      'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Cereals', 'Legumes', 'Oilseeds', 'Hydroponics'
    ]
  }],
  linkedProducts: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product' 
  }],
  downloads: { 
    type: Number, 
    default: 0,
    min: 0
  },
  views: { 
    type: Number, 
    default: 0,
    min: 0
  },
  rating: { 
    type: Number, 
    default: 0,
    min: 0,
    max: 5
  },
  status: { 
    type: String, 
    default: 'published',
    enum: ['draft', 'published', 'archived']
  },
  isFeatured: { 
    type: Boolean, 
    default: false 
  },
  tags: [{ 
    type: String,
    trim: true
  }],
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  version: { 
    type: Number, 
    default: 1 
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for better search performance
brochureSchema.index({ title: 'text', description: 'text', category: 1, status: 1 });
brochureSchema.index({ linkedProducts: 1 });
brochureSchema.index({ category: 1, status: 1 });

// Virtual for formatted file size
brochureSchema.virtual('formattedFileSize').get(function() {
  if (this.fileSize < 1024) return `${this.fileSize} B`;
  if (this.fileSize < 1024 * 1024) return `${(this.fileSize / 1024).toFixed(1)} KB`;
  return `${(this.fileSize / (1024 * 1024)).toFixed(1)} MB`;
});

// Virtual for download count
brochureSchema.virtual('downloadCount').get(function() {
  return this.downloads;
});

export const Brochure = mongoose.models.Brochure || mongoose.model('Brochure', brochureSchema);
