# FLUTTER-WEB APP INTEGRATION MAPPING

## 📱 FLUTTER APP (User-Focused)
### Navigation & Core Features
- **Home**: Product catalog, featured products
- **Products**: Browse and search products
- **AI Crop Advisor**: Get AI recommendations (calls web app API)
- **Disease Detection**: Upload images for disease diagnosis
- **Brochures**: Request and download product brochures
- **Profile**: User profile management
- **Settings**: App settings, biometric auth, notifications

### Expert Advice Features
- **Disease Detection Expert Requests**: From disease detection screen
  - User uploads image → Gets AI diagnosis → Can request expert consultation
  - Stored in: `expertRequests` collection
  - Admin manages at: `/admin/expert-requests`

### Support Features
- **Support Screen**: FAQ, contact support (call, email, live chat, video)
- **Support Tickets**: Create and track support tickets
- **Contact Support**: Calls web app `/api/support-contact` endpoint

### Quote Requests
- **Quote Request Screen**: Submit product quote requests
- **API Endpoint**: Calls web app `/api/quotes` endpoint
- **Admin manages at**: `/admin/quote-requests`

## 🌐 WEB APP (User + Admin)
### User Features (Same as Flutter)
- **Home**: `/` - Product catalog
- **Products**: `/products` - Product browsing
- **AI Crop Advisor**: `/ai-crop-advisor` - AI recommendations
- **Disease Detection**: `/disease-detection` - Image upload
- **Brochures**: `/brochures` - Brochure requests
- **Expert Advice**: `/expert-advice` - General expert consultation
- **Quote Requests**: `/quotes` - Product quotes
- **Support**: `/support` - Support tickets and contact
- **Profile**: `/profile` - User profile
- **Settings**: `/settings` - User settings

### Admin Features (Web App Only)
- **Admin Dashboard**: `/admin` - Overview of all systems
- **Product Management**: `/admin/products` - CRUD products
- **Brochure Management**: `/admin/brochures` - Manage brochures
- **Support Management**: 
  - `/admin/support` - Support tickets
  - `/admin/support-settings` - Contact settings (call, video, chat, email)
- **Expert Advice Management**:
  - `/admin/expert-advice` - General expert requests
  - `/admin/expert-requests` - Disease detection expert requests
- **Quote Management**: `/admin/quote-requests` - Quote requests
- **User Management**: `/admin/users` - User accounts
- **Notifications**: `/admin/notifications` - Push notifications
- **Analytics**: `/admin/analytics` - Usage analytics

## 🔗 API INTEGRATION MAPPING

### Flutter App → Web App APIs
1. **Authentication**: `/api/auth/*`
2. **Products**: `/api/products`
3. **AI Advisor**: `/api/ai-advisor`
4. **Disease Detection**: `/api/disease-detection`
5. **Brochures**: `/api/brochures`
6. **Expert Advice**: `/api/expert-advice`
7. **Quote Requests**: `/api/quotes`
8. **Support**: `/api/support-contact`
9. **User Profile**: `/api/users/*`
10. **Notifications**: `/api/notifications`

### Data Flow
- **Flutter App**: Handles user interface and local storage
- **Web App**: Handles all business logic, database, and admin functions
- **Shared Database**: MongoDB collections shared between both apps
- **Real-time Sync**: Both apps stay synchronized via API calls

## 📊 DATABASE COLLECTIONS
- `users` - User accounts
- `products` - Product catalog
- `brochures` - Brochure files and requests
- `expertRequests` - Disease detection expert requests
- `expertAdvice` - General expert advice requests
- `quoteRequests` - Product quote requests
- `supportTickets` - Support tickets
- `supportSettings` - Support contact configuration
- `notifications` - Push notifications
- `aiAdvisorLogs` - AI advisor usage logs

## 🔐 SECURITY & AUTHENTICATION
- **Flutter App**: Biometric auth (Face ID, Fingerprint, PIN)
- **Web App**: NextAuth.js with Google OAuth
- **Shared**: JWT tokens for API authentication
- **Admin Access**: Role-based access control

## 📱 PUSH NOTIFICATIONS
- **Flutter App**: Firebase Cloud Messaging
- **Web App**: Web Push API + Firebase
- **Admin Control**: Web app manages notification sending
- **User Control**: Flutter app manages notification preferences

## 🎯 KEY INTEGRATION POINTS
1. **Single Source of Truth**: Web app database
2. **Real-time Updates**: API calls for data synchronization
3. **Unified Admin Panel**: All admin functions in web app
4. **Consistent User Experience**: Same features across both platforms
5. **Scalable Architecture**: Web app handles heavy lifting, Flutter app provides mobile UX
