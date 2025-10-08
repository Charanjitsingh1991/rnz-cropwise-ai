import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: { type: String, enum: ['user', 'admin'], required: true },
  authorName: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  content: { type: String, required: true }
});

const supportTicketSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Keep as string for now
  userName: { type: String, required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ['Open', 'Answered', 'Closed'], default: 'Open' },
  messages: [messageSchema],
  isReadByUser: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const SupportTicket = mongoose.models.SupportTicket || mongoose.model('SupportTicket', supportTicketSchema);
