import mongoose from 'mongoose';

const quoteRequestSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Keep as string for now
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  location: { type: String, required: true },
  quantity: { type: Number, required: true },
  productId: { type: String, required: true }, // Keep as string for now
  productName: { type: String, required: true },
  productImageUrl: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Contacted', 'Closed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export const QuoteRequest = mongoose.models.QuoteRequest || mongoose.model('QuoteRequest', quoteRequestSchema);
