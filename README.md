# 🌾 RNZ CROPWISE - Smart Agricultural Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![Flutter](https://img.shields.io/badge/Flutter-3.24-blue?logo=flutter)](https://flutter.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Dart](https://img.shields.io/badge/Dart-3.5-blue?logo=dart)](https://dart.dev/)

> A comprehensive agricultural platform combining AI-powered crop recommendations, disease detection, product management, and farming tools for modern agriculture.

---

## 📋 TABLE OF CONTENTS

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Documentation](#-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 OVERVIEW

**RNZ CropWise** is a full-stack agricultural platform that bridges the gap between farmers and modern technology. It provides:

- **Web Application**: Admin dashboard for product management, user management, and analytics
- **Mobile Application**: Farmer-focused app with AI recommendations, disease detection, and farming tools
- **AI Integration**: Google Gemini AI for crop recommendations and farming advice
- **Comprehensive Ecosystem**: From product discovery to purchase, field management to harvest planning

### 🌟 **Current Status (As of October 2025)**

```
✅ 15 Features Fully Implemented
🔄 5 Features Partially Implemented
📋 25 Features Planned
🎯 Total Target: 45+ Features
```

---

## ✨ FEATURES

### **🌐 WEB APPLICATION (Admin Portal)**

**Implemented:**
1. ✅ **Admin Dashboard** - Overview of users, products, orders, and analytics
2. ✅ **Product Management** - Full CRUD operations for agricultural products
3. ✅ **Category Management** - Organize products by categories
4. ✅ **User Management** - View and manage user accounts
5. ✅ **Content Management** - Blog posts and educational content
6. ✅ **Authentication** - Secure login/logout with role-based access
7. ✅ **Profile Management** - Admin profile editing

**Partially Implemented:**
- 🔄 Order Management (backend ready, UI pending)
- 🔄 Analytics Dashboard (basic implementation, needs charts)

---

### **📱 FLUTTER APPLICATION (Mobile App)**

**Implemented:**
1. ✅ **User Authentication**
   - Login with email/password
   - Signup with OTP verification
   - Auto-login after signup
   - Password reset with OTP
   - Change password from settings
   - Biometric authentication (fingerprint/face ID)

2. ✅ **Product Catalog**
   - Browse products by category
   - Search products
   - View product details
   - Product images and descriptions
   - NPK information for fertilizers

3. ✅ **AI Crop Advisor**
   - Natural language queries
   - Crop-specific recommendations
   - Pest and disease solutions
   - Soil health advice
   - Seasonal guidance

4. ✅ **Disease Detection**
   - Camera-based plant disease detection
   - AI-powered image analysis
   - Disease identification
   - Treatment recommendations
   - Product suggestions

5. ✅ **User Profile**
   - View/Edit profile information
   - Country and contact details
   - Profile photo upload
   - Account settings

6. ✅ **Activity Tracking**
   - Track user actions
   - AI request history
   - Product view history

**Partially Implemented:**
- 🔄 Wishlist (UI ready, save functionality pending)
- 🔄 Cart (UI ready, checkout pending)
- 🔄 Favorites (basic implementation)

---

### **🚀 PLANNED FEATURES (14-Week Roadmap)**

See [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) for detailed timeline.

**Phase 1 (Weeks 1-2): Quick Wins**
- Fertilizer Calculator
- Yield Prediction
- Enhanced Analytics Dashboard

**Phase 2 (Weeks 3-4): High-Value Features**
- Weather Integration
- Dealer Locator
- Field Management System

**Phase 3 (Weeks 5-6): Integration & Enhancement**
- Enhanced Search (Voice, Image, Barcode)
- Product Comparison Tool
- Market Price Intelligence
- Farming Calendar/Planner

**Phase 4 (Weeks 7-10): Advanced Features**
- E-Commerce (Full cart & checkout)
- Order Tracking
- Community Forum
- Video Library

**Phase 5 (Weeks 11-14): Innovation**
- Offline Mode (PWA)
- Multi-Language Support
- IoT Integration
- Voice AI & Chatbot

---

## 🛠 TECH STACK

### **Frontend (Web)**
```
├── Next.js 15.0 (React 19)
├── TypeScript
├── Tailwind CSS
├── shadcn/ui components
├── Radix UI primitives
├── Lucide Icons
└── Vercel (Deployment)
```

### **Frontend (Mobile)**
```
├── Flutter 3.24
├── Dart 3.5
├── Provider (State Management)
├── HTTP (API calls)
├── Shared Preferences (Local storage)
├── Image Picker (Camera access)
└── Local Auth (Biometrics)
```

### **Backend**
```
├── Next.js API Routes
├── MongoDB Atlas (Database)
├── Mongoose (ODM)
├── JWT (Authentication)
├── bcryptjs (Password hashing)
├── Nodemailer (Email service)
└── Hostinger SMTP
```

### **AI & External Services**
```
├── Google Gemini AI (Crop recommendations)
├── Google Cloud Vision API (Disease detection)
├── OpenWeatherMap API (Weather data) [Planned]
├── Google Maps API (Dealer locator) [Planned]
└── Firebase (Analytics & Notifications) [Optional]
```

---

## 📁 PROJECT STRUCTURE

```
Rnz-CropwiseAI/
│
├── src/                          # Next.js Web Application
│   ├── app/                      # App router pages
│   │   ├── api/                  # API routes
│   │   │   ├── auth/            # Authentication endpoints
│   │   │   ├── products/        # Product CRUD
│   │   │   ├── categories/      # Category management
│   │   │   ├── users/           # User management
│   │   │   └── ai/              # AI advisor endpoints
│   │   ├── admin/               # Admin dashboard pages
│   │   ├── login/               # Login page
│   │   ├── signup/              # Signup page
│   │   └── ...                  # Other pages
│   │
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── admin/               # Admin-specific components
│   │   └── ...
│   │
│   ├── lib/                     # Utilities
│   │   ├── mongodb/             # MongoDB connection & models
│   │   │   ├── models/          # Mongoose models
│   │   │   └── connection.ts    # Database connection
│   │   ├── email-service.ts     # Email utilities
│   │   └── utils.ts             # Helper functions
│   │
│   └── middleware.ts            # Next.js middleware
│
├── rnz_cropwise_flutter/        # Flutter Mobile Application
│   ├── lib/
│   │   ├── main.dart            # App entry point
│   │   ├── config/              # Configuration files
│   │   │   ├── api_endpoints.dart
│   │   │   ├── app_colors.dart
│   │   │   └── app_sizes.dart
│   │   │
│   │   ├── models/              # Data models
│   │   │   ├── user.dart
│   │   │   ├── product.dart
│   │   │   ├── category.dart
│   │   │   └── ...
│   │   │
│   │   ├── providers/           # State management
│   │   │   ├── auth_provider.dart
│   │   │   ├── product_provider.dart
│   │   │   └── ...
│   │   │
│   │   ├── screens/             # UI screens
│   │   │   ├── auth/            # Authentication screens
│   │   │   ├── home/            # Home screen
│   │   │   ├── products/        # Product screens
│   │   │   ├── profile/         # Profile screens
│   │   │   └── ...
│   │   │
│   │   ├── services/            # API services
│   │   │   ├── mongodb_service.dart
│   │   │   ├── auth_service.dart
│   │   │   └── ...
│   │   │
│   │   └── widgets/             # Reusable widgets
│   │       ├── common/
│   │       ├── product/
│   │       └── ...
│   │
│   ├── android/                 # Android configuration
│   ├── ios/                     # iOS configuration
│   ├── web/                     # Web configuration
│   └── pubspec.yaml             # Dependencies
│
├── public/                      # Static assets (web)
│   ├── images/
│   └── icons/
│
├── docs/                        # Documentation
│   ├── MASTER_FEATURES_PLAN.md          # Feature overview
│   ├── IMPLEMENTATION_PLAN.md            # 14-week roadmap
│   ├── FEATURE_INTEGRATION_ARCHITECTURE.md
│   ├── FEATURES_QUICK_REFERENCE.md
│   └── API_STATUS_REPORT.md
│
├── .env.local                   # Environment variables (gitignored)
├── .gitignore                   # Git ignore rules
├── package.json                 # Node.js dependencies
├── tsconfig.json                # TypeScript config
├── next.config.ts               # Next.js config
├── tailwind.config.ts           # Tailwind CSS config
└── README.md                    # This file
```

---

## 🚀 GETTING STARTED

### **Prerequisites**

**For Web Application:**
- Node.js 18.x or higher
- npm or yarn or pnpm
- MongoDB Atlas account (or local MongoDB)

**For Flutter Application:**
- Flutter SDK 3.24 or higher
- Dart SDK 3.5 or higher
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

---

### **Installation**

#### **1. Clone the Repository**

```bash
git clone https://github.com/YOUR_USERNAME/rnz-cropwise-ai.git
cd rnz-cropwise-ai
```

#### **2. Setup Web Application**

```bash
# Install dependencies
npm install
# or
pnpm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local with your credentials:
# - MONGODB_URI
# - JWT_SECRET
# - GEMINI_API_KEY
# - SMTP credentials
# - etc.

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### **3. Setup Flutter Application**

```bash
# Navigate to Flutter directory
cd rnz_cropwise_flutter

# Get dependencies
flutter pub get

# Run on connected device/emulator
flutter run

# Or build APK
flutter build apk --release
```

---

### **Environment Variables**

Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# JWT
JWT_SECRET=your-super-secret-jwt-key

# Google Gemini AI
GEMINI_API_KEY=your-gemini-api-key

# Email (Hostinger SMTP)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password
SMTP_FROM_EMAIL=noreply@yourdomain.com
SMTP_FROM_NAME=RNZ CropWise

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

### **Database Setup**

1. Create a MongoDB Atlas account (free tier available)
2. Create a new cluster
3. Create a database named `cropwise` (or your preferred name)
4. Add your IP address to the IP whitelist (or allow from anywhere: 0.0.0.0/0)
5. Create a database user with read/write permissions
6. Copy the connection string and add it to `.env.local`

**Collections will be created automatically when you run the application.**

---

### **Admin Account Setup**

**Option 1: Create via Signup (Web)**
1. Go to `/signup` on the web app
2. Create an account
3. Manually update the user in MongoDB to set `isAdmin: true`

**Option 2: MongoDB Shell**
```javascript
db.users.insertOne({
  email: "admin@cropwise.com",
  password: "$2a$10$...", // Hash using bcrypt
  fullName: "Admin User",
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

---

## 📚 DOCUMENTATION

Comprehensive documentation is available in the `docs` folder:

- **[MASTER_FEATURES_PLAN.md](./MASTER_FEATURES_PLAN.md)** - Complete feature list and roadmap
- **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)** - Detailed 14-week implementation plan
- **[FEATURE_INTEGRATION_ARCHITECTURE.md](./FEATURE_INTEGRATION_ARCHITECTURE.md)** - Technical architecture
- **[FEATURES_QUICK_REFERENCE.md](./FEATURES_QUICK_REFERENCE.md)** - Quick feature lookup
- **[API_STATUS_REPORT.md](./API_STATUS_REPORT.md)** - API status and usage

---

## 📸 SCREENSHOTS

### **Web Application**

```
Coming soon...
```

### **Mobile Application**

```
Coming soon...
```

---

## 🤝 CONTRIBUTING

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Coding Standards**

**TypeScript/JavaScript:**
- Use TypeScript for all new files
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful comments

**Dart/Flutter:**
- Follow official Dart style guide
- Use meaningful variable names
- Add comments for complex logic
- Keep widgets small and reusable

---

## 🔐 SECURITY

- All passwords are hashed using bcrypt
- JWT tokens for authentication
- CORS enabled for API security
- Input validation on all endpoints
- OTP verification for sensitive actions
- Environment variables for sensitive data

**Found a security issue?** Please email: security@cropwise.com

---

## 📝 LICENSE

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👥 AUTHORS

- **Charanjit Singh** - Initial work & Lead Developer

---

## 🙏 ACKNOWLEDGMENTS

- Google Gemini AI for intelligent crop recommendations
- MongoDB Atlas for reliable database hosting
- Vercel for seamless deployment
- Flutter team for excellent mobile framework
- Next.js team for powerful web framework
- shadcn/ui for beautiful UI components

---

## 📞 CONTACT

- **Website**: [https://cropwise.com](https://cropwise.com)
- **Email**: support@cropwise.com
- **GitHub**: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

---

## 🗺 ROADMAP

See our [14-week implementation plan](./IMPLEMENTATION_PLAN.md) for detailed roadmap.

**Upcoming Features:**
- ⏳ Fertilizer Calculator (Week 1)
- ⏳ Yield Prediction (Week 1-2)
- ⏳ Weather Integration (Week 3)
- ⏳ Field Management (Week 4)
- ⏳ E-Commerce (Week 7-8)
- ⏳ Community Forum (Week 9)
- ⏳ Offline Mode (Week 11)
- ⏳ Multi-Language (Week 12)

---

## 📊 PROJECT STATS

```
Total Lines of Code: ~20,000+
Backend Endpoints: 30+
Flutter Screens: 25+
Features Implemented: 15
Features Planned: 30
```

---

**Made with ❤️ for Farmers and Agriculture**

🌾 **RNZ CropWise** - Empowering Farmers with Technology
