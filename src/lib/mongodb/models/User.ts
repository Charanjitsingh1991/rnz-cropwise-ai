import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  fullName: { type: String, required: true },
  country: String,
  phoneNumber: String,
  fcmToken: String,
  password: String, // For email/password authentication
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Set admin based on email
userSchema.pre('save', function(next) {
  if (this.email === 'admin@rnz-group.com') {
    this.isAdmin = true;
  }
  this.updatedAt = new Date();
  next();
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
