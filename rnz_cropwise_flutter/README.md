# RNZ CropWise Flutter Mobile App

A comprehensive Flutter mobile application for RNZ CropWise, providing agricultural solutions, product catalog, AI advisor, and support features.

## Features

### 🏠 Home Screen
- Welcome section with app branding
- Quick action cards for main features
- Featured products showcase
- Resources section with brochures and support

### 📦 Products
- Complete product catalog with 79+ fertilizers
- Advanced filtering by category, crop, soil type, region
- Product details with specifications
- Search functionality
- Favorites management

### 🤖 AI Crop Advisor
- Personalized fertilizer recommendations
- Crop-specific advice based on:
  - Crop type
  - Soil type
  - Region/location
  - Moisture levels
  - Growth stage
- Disease detection from images
- Regional agricultural insights

### 📄 Brochures
- Product brochures and guides
- Download and view PDF files
- Request brochures
- Categorized by product type

### 🆘 Support Center
- FAQ section with categorized questions
- Support ticket creation
- Real-time chat with support team
- Knowledge base

### 👤 User Profile
- User authentication and registration
- Profile management
- Settings and preferences
- Notification management

## Technical Architecture

### State Management
- **Provider Pattern**: Used for state management across the app
- **Providers**:
  - `AuthProvider`: User authentication and profile
  - `ProductProvider`: Product catalog and filtering
  - `BrochureProvider`: Brochure management
  - `SupportProvider`: Support tickets and FAQs
  - `AIAdvisorProvider`: AI recommendations
  - `NotificationProvider`: Push notifications
  - `FavoritesProvider`: User favorites

### API Integration
- **RESTful API**: Connects to the webapp backend
- **Endpoints**:
  - Authentication: Login, signup, password reset
  - Products: CRUD operations, filtering, search
  - AI Advisor: Recommendations, disease detection
  - Brochures: Download, request
  - Support: Tickets, FAQs
  - User: Profile management

### Data Models
- **Product**: Complete product information with specifications
- **User**: User profile and settings
- **Brochure**: Brochure metadata and files
- **Support**: Tickets and messages
- **AI Advisor**: Input/output for recommendations

### Local Storage
- **SharedPreferences**: User settings, cache data
- **Secure Storage**: Authentication tokens
- **File Storage**: Downloaded brochures and images

## Setup Instructions

### Prerequisites
- Flutter SDK (>=3.0.0)
- Dart SDK (>=3.0.0)
- Android Studio / VS Code
- Android SDK / Xcode (for mobile development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rnz_cropwise_flutter
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Configure Firebase**
   - Create a Firebase project
   - Add Android and iOS apps
   - Download and add configuration files:
     - `android/app/google-services.json` (Android)
     - `ios/Runner/GoogleService-Info.plist` (iOS)

4. **Configure API endpoints**
   - Update `lib/utils/constants.dart` with your API base URL
   - Ensure the webapp backend is running and accessible

5. **Run the app**
   ```bash
   flutter run
   ```

### Environment Configuration

Create a `.env` file in the root directory:
```env
API_BASE_URL=https://your-api-domain.com/api
FIREBASE_PROJECT_ID=your-firebase-project-id
```

## Project Structure

```
lib/
├── main.dart                 # App entry point
├── models/                   # Data models
│   ├── product.dart
│   ├── user.dart
│   ├── brochure.dart
│   ├── support.dart
│   └── ai_advisor.dart
├── providers/                # State management
│   ├── auth_provider.dart
│   ├── product_provider.dart
│   ├── brochure_provider.dart
│   ├── support_provider.dart
│   ├── ai_advisor_provider.dart
│   ├── notification_provider.dart
│   └── favorites_provider.dart
├── screens/                  # UI screens
│   ├── splash_screen.dart
│   ├── main_navigation.dart
│   ├── auth/
│   ├── home/
│   ├── products/
│   ├── ai_advisor/
│   ├── brochures/
│   ├── support/
│   └── profile/
├── widgets/                  # Reusable widgets
│   ├── product_card.dart
│   ├── feature_card.dart
│   ├── custom_text_field.dart
│   ├── custom_button.dart
│   └── loading_shimmer.dart
├── services/                 # Business logic
│   ├── api_service.dart
│   ├── firebase_service.dart
│   ├── notification_service.dart
│   └── storage_service.dart
└── utils/                    # Utilities
    ├── constants.dart
    └── theme.dart
```

## Dependencies

### Core Dependencies
- `flutter`: UI framework
- `provider`: State management
- `dio`: HTTP client for API calls
- `shared_preferences`: Local storage
- `flutter_secure_storage`: Secure storage

### Firebase
- `firebase_core`: Firebase initialization
- `firebase_auth`: Authentication
- `firebase_messaging`: Push notifications
- `cloud_firestore`: Database (if needed)
- `firebase_storage`: File storage

### UI/UX
- `google_fonts`: Typography
- `cached_network_image`: Image caching
- `lottie`: Animations
- `shimmer`: Loading effects

### Features
- `image_picker`: Camera and gallery
- `geolocator`: Location services
- `url_launcher`: External links
- `syncfusion_flutter_pdfviewer`: PDF viewing
- `awesome_notifications`: Local notifications

## API Integration

The app connects to the RNZ CropWise webapp backend with the following endpoints:

### Authentication
- `POST /api/auth/signin` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/reset-password` - Password reset

### Products
- `GET /api/products` - Get products with filters
- `GET /api/products/{id}` - Get specific product

### AI Advisor
- `POST /api/ai-advisor` - Get recommendations
- `POST /api/disease-detection` - Detect plant diseases

### Brochures
- `GET /api/brochures` - Get brochures
- `POST /api/brochure-requests` - Request brochures

### Support
- `GET /api/support/tickets` - Get support tickets
- `POST /api/support/tickets` - Create ticket
- `GET /api/support/faqs` - Get FAQs

## Features in Detail

### Product Catalog
- **79+ Products**: Complete RNZ fertilizer catalog
- **Categories**: Water Soluble NPK, Granular NPK, Liquid Items, etc.
- **Filtering**: By crop, soil type, region, category
- **Search**: Full-text search across products
- **Details**: Complete specifications, application methods, safety info

### AI Advisor
- **Smart Recommendations**: Based on crop, soil, region, growth stage
- **Regional Data**: Location-specific agricultural insights
- **Disease Detection**: Upload images for plant disease diagnosis
- **Personalized Advice**: Tailored to user's specific conditions

### User Experience
- **Modern UI**: Material Design 3 with custom theming
- **Responsive**: Works on all screen sizes
- **Offline Support**: Cached data for offline viewing
- **Push Notifications**: Real-time updates and alerts
- **Biometric Auth**: Fingerprint/face unlock support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is proprietary software for RNZ CropWise.

## Support

For technical support or questions:
- Email: support@rnzcropwise.com
- Documentation: [Link to documentation]
- Issues: [GitHub issues page]

## Version History

- **v1.0.0**: Initial release with core features
  - Product catalog
  - AI advisor
  - User authentication
  - Support system
  - Brochure management
