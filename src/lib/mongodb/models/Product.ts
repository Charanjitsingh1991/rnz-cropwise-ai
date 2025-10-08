import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  imageUrl: { type: String, required: true },
  crops: [String],
  soilTypes: [String],
  regions: [String],
  moistureLevels: [String],
  categories: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
