import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    index: true,
    lowercase: true,
    trim: true,
  },
  otp: { 
    type: String, 
    required: true 
  },
  purpose: { 
    type: String, 
    required: true,
    enum: ['password_reset', 'email_verification', 'two_factor_auth', 'signup'],
    default: 'password_reset'
  },
  signupData: {
    type: mongoose.Schema.Types.Mixed,
    default: null,
  },
  expiresAt: { 
    type: Date, 
    required: true,
    index: true, // For TTL index
  },
  isUsed: { 
    type: Boolean, 
    default: false 
  },
  attempts: { 
    type: Number, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  lastAttemptAt: {
    type: Date,
    default: null
  }
});

// Create TTL index to automatically delete expired OTPs
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Create compound index for efficient queries
otpSchema.index({ email: 1, purpose: 1, isUsed: 1 });

// Method to check if OTP is valid
otpSchema.methods.isValid = function() {
  return !this.isUsed && new Date() < this.expiresAt && this.attempts < parseInt(process.env.OTP_MAX_ATTEMPTS || '3');
};

// Method to increment attempts
otpSchema.methods.incrementAttempts = function() {
  this.attempts += 1;
  this.lastAttemptAt = new Date();
  return this.save();
};

// Method to mark as used
otpSchema.methods.markAsUsed = function() {
  this.isUsed = true;
  return this.save();
};

// Static method to generate 6-digit OTP
otpSchema.statics.generateOTP = function() {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Static method to create new OTP record
otpSchema.statics.createOTP = async function(email: string, purpose: string = 'password_reset', signupData: any = null) {
  const otp = this.generateOTP();
  const expirySeconds = parseInt(process.env.OTP_EXPIRY_SECONDS || '120');
  const expiresAt = new Date(Date.now() + expirySeconds * 1000);

  // Invalidate any existing OTPs for this email and purpose
  await this.updateMany(
    { email, purpose, isUsed: false },
    { $set: { isUsed: true } }
  );

  // Create new OTP
  const otpRecord = await this.create({
    email,
    otp,
    purpose,
    expiresAt,
    signupData, // Store signup data if provided
  });

  return { otp, expiresAt, otpRecord };
};

// Static method to verify OTP
otpSchema.statics.verifyOTP = async function(email: string, otp: string, purpose: string = 'password_reset') {
  const otpRecord = await this.findOne({
    email,
    otp,
    purpose,
    isUsed: false,
  });

  if (!otpRecord) {
    return { success: false, error: 'Invalid or expired OTP' };
  }

  // Check if OTP is valid
  if (!otpRecord.isValid()) {
    return { success: false, error: 'OTP has expired or maximum attempts reached' };
  }

  // Check expiry
  if (new Date() > otpRecord.expiresAt) {
    return { success: false, error: 'OTP has expired' };
  }

  // Mark as used
  await otpRecord.markAsUsed();

  return { success: true, message: 'OTP verified successfully' };
};

// Static method to check if resend is allowed (rate limiting)
otpSchema.statics.canResendOTP = async function(email: string, purpose: string = 'password_reset') {
  const cooldownSeconds = parseInt(process.env.OTP_RESEND_COOLDOWN || '60');
  const cooldownTime = new Date(Date.now() - cooldownSeconds * 1000);

  const recentOTP = await this.findOne({
    email,
    purpose,
    createdAt: { $gte: cooldownTime }
  }).sort({ createdAt: -1 });

  if (recentOTP) {
    const remainingSeconds = Math.ceil((recentOTP.createdAt.getTime() + cooldownSeconds * 1000 - Date.now()) / 1000);
    return { 
      canResend: false, 
      remainingSeconds,
      error: `Please wait ${remainingSeconds} seconds before requesting a new OTP` 
    };
  }

  return { canResend: true };
};

export const OTP = mongoose.models.OTP || mongoose.model('OTP', otpSchema);


