// Flutter Linting Issues Fix Guide
// This file contains all the fixes needed for the 105 linting issues found

/*
ISSUE CATEGORIES:
1. prefer_const_constructors - Missing 'const' keywords for widget constructors
2. prefer_const_literals_to_create_immutables - Missing 'const' for list/map literals
3. use_build_context_synchronously - Using BuildContext after async operations
4. unnecessary_to_list_in_spreads - Unnecessary .toList() calls in spread operations

FIXES NEEDED:
*/

// ============================================================================
// 1. FORGOT PASSWORD SCREEN FIXES
// ============================================================================

// File: lib/screens/auth/forgot_password_screen.dart
// Lines: 87, 100, 151, 158, 172, 188, 189, 190, 191, 192, 198, 209, 239, 254

// Line 87: Add const to SizedBox
const SizedBox(height: 8),

// Line 100: Add const to SizedBox
const SizedBox(height: 40),

// Line 151: Add const to SizedBox
const SizedBox(height: 30),

// Line 158: Add const to SizedBox
const SizedBox(height: 30),

// Line 172: Add const to SizedBox
const SizedBox(height: 16),

// Line 188: Add const to SizedBox
const SizedBox(height: 30),

// Line 189: Add const to list literal
children: const [
  Row(
    children: [
      Icon(
        Icons.info_outline,
        color: AppColors.success,
        size: 20,
      ),
      SizedBox(width: 8),
      Text(
        'What to do next:',
        style: TextStyle(
          fontSize: 14,
          fontWeight: FontWeight.w600,
          color: AppColors.success,
        ),
      ),
    ],
  ),
  SizedBox(height: 12),
  Text(
    '1. Check your email inbox\n'
    '2. Click the reset link in the email\n'
    '3. Create a new password\n'
    '4. Sign in with your new password',
    style: TextStyle(
      fontSize: 14,
      color: AppColors.textSecondary,
      height: 1.5,
    ),
  ),
],

// Line 190: Add const to SizedBox
const SizedBox(width: 8),

// Line 191: Add const to list literal
children: const [
  Text(
    'What to do next:',
    style: TextStyle(
      fontSize: 14,
      fontWeight: FontWeight.w600,
      color: AppColors.success,
    ),
  ),
],

// Line 192: Add const to SizedBox
const SizedBox(height: 12),

// Line 198: Add const to SizedBox
const SizedBox(height: 30),

// Line 209: Add const to SizedBox
const SizedBox(height: 30),

// Line 239: Add const to SizedBox
const SizedBox(height: 30),

// Line 254: Add const to SizedBox
const SizedBox(height: 30),

// ============================================================================
// 2. LOGIN SCREEN FIXES
// ============================================================================

// File: lib/screens/auth/login_screen.dart
// Lines: 180, 192, 265, 301, 319, 333, 348

// Line 180: Add const to SizedBox
const SizedBox(height: 8),

// Line 192: Add const to SizedBox
const SizedBox(height: 40),

// Line 265: Add const to SizedBox
const SizedBox(height: 30),

// Line 301: Add const to SizedBox
const SizedBox(height: 30),

// Line 319: Add const to SizedBox
const SizedBox(height: 30),

// Line 333: Add const to SizedBox
const SizedBox(height: 30),

// Line 348: Add const to SizedBox
const SizedBox(height: 30),

// ============================================================================
// 3. SIGNUP SCREEN FIXES
// ============================================================================

// File: lib/screens/auth/signup_screen.dart
// Lines: 261, 273, 468, 495, 510, 533, 542, 605, 639, 641, 660, 662

// Line 261: Add const to SizedBox
const SizedBox(height: 8),

// Line 273: Add const to SizedBox
const SizedBox(height: 40),

// Line 468: Add const to SizedBox
const SizedBox(height: 30),

// Line 495: Add const to SizedBox
const SizedBox(height: 30),

// Line 510: Add const to SizedBox
const SizedBox(height: 30),

// Line 533: Add const to SizedBox
const SizedBox(height: 30),

// Line 542: Add const to SizedBox
const SizedBox(height: 30),

// Line 605: Add const to SizedBox
const SizedBox(height: 30),

// Line 639: Add const to SizedBox
const SizedBox(height: 30),

// Line 641: Add const to SizedBox
const SizedBox(height: 30),

// Line 660: Add const to SizedBox
const SizedBox(height: 30),

// Line 662: Add const to SizedBox
const SizedBox(height: 30),

// ============================================================================
// 4. AI CROP ADVISOR SCREEN FIXES
// ============================================================================

// File: lib/screens/features/ai_crop_advisor_screen.dart
// Lines: 129, 199, 562

// Line 129: Fix async context issue - Store context before async operation
void _getAIRecommendations() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
    
    setState(() {
      _recommendations = response;
      _showResults = true;
      _isAnalyzing = false;
    });
  } catch (error) {
    debugPrint('Error getting AI recommendations: $error');
    
    // Use stored context
    scaffoldMessenger.showSnackBar(
      SnackBar(
        content: Text('Failed to get AI recommendations: ${error.toString()}'),
        backgroundColor: Colors.red,
        duration: const Duration(seconds: 5),
      ),
    );
    
    setState(() {
      _isAnalyzing = false;
    });
  }
}

// Line 199: Add const to SizedBox
const SizedBox(height: 12),

// Line 562: Remove unnecessary toList()
...recommendedProducts.map((product) => _buildProductCard(product)),

// ============================================================================
// 5. ANALYTICS SCREEN FIXES
// ============================================================================

// File: lib/screens/features/analytics_screen.dart
// Lines: 135, 258, 314, 361

// Line 135: Add const to SizedBox
const SizedBox(height: 20),

// Line 258: Remove unnecessary toList()
...chartData.map((data) => _buildChartCard(data)),

// Line 314: Remove unnecessary toList()
...performanceData.map((data) => _buildPerformanceCard(data)),

// Line 361: Remove unnecessary toList()
...trendData.map((data) => _buildTrendCard(data)),

// ============================================================================
// 6. BROCHURE VIEWER SCREEN FIXES
// ============================================================================

// File: lib/screens/features/brochure_viewer_screen.dart
// Lines: 45, 58, 65

// Line 45: Fix async context issue
void _loadBrochure() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error loading brochure: $error')),
    );
  }
}

// Line 58: Fix async context issue
void _downloadBrochure() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error downloading brochure: $error')),
    );
  }
}

// Line 65: Fix async context issue
void _shareBrochure() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error sharing brochure: $error')),
    );
  }
}

// ============================================================================
// 7. DISEASE DETECTION SCREEN FIXES
// ============================================================================

// File: lib/screens/features/disease_detection_screen.dart
// Lines: 47, 53, 160, 161, 162, 168, 169, 171, 181, 183, 264, 265, 266, 272, 273, 275, 289, 291, 312, 318, 319, 321, 334, 346, 348, 361, 363, 401, 403, 509, 518, 560, 569, 582, 598, 600

// Line 47: Add const to SizedBox
const SizedBox(height: 20),

// Line 53: Add const to SizedBox
const SizedBox(height: 20),

// Line 160: Add const to SizedBox
const SizedBox(height: 20),

// Line 161: Add const to list literal
children: const [
  Icon(Icons.camera_alt, size: 48, color: Colors.white),
  SizedBox(height: 12),
  Text(
    'Take Photo',
    style: TextStyle(
      fontSize: 18,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
  ),
],

// Line 162: Add const to SizedBox
const SizedBox(height: 12),

// Line 168: Add const to SizedBox
const SizedBox(height: 20),

// Line 169: Add const to SizedBox
const SizedBox(height: 20),

// Line 171: Add const to SizedBox
const SizedBox(height: 20),

// Line 181: Add const to SizedBox
const SizedBox(height: 20),

// Line 183: Add const to SizedBox
const SizedBox(height: 20),

// Line 264: Add const to SizedBox
const SizedBox(height: 20),

// Line 265: Add const to list literal
children: const [
  Icon(Icons.photo_library, size: 48, color: Colors.white),
  SizedBox(height: 12),
  Text(
    'Choose from Gallery',
    style: TextStyle(
      fontSize: 18,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
  ),
],

// Line 266: Add const to SizedBox
const SizedBox(height: 12),

// Line 272: Add const to SizedBox
const SizedBox(height: 20),

// Line 273: Add const to SizedBox
const SizedBox(height: 20),

// Line 275: Add const to SizedBox
const SizedBox(height: 20),

// Line 289: Add const to SizedBox
const SizedBox(height: 20),

// Line 291: Add const to SizedBox
const SizedBox(height: 20),

// Line 312: Add const to SizedBox
const SizedBox(height: 20),

// Line 318: Add const to SizedBox
const SizedBox(height: 20),

// Line 319: Add const to SizedBox
const SizedBox(height: 20),

// Line 321: Add const to SizedBox
const SizedBox(height: 20),

// Line 334: Add const to SizedBox
const SizedBox(height: 20),

// Line 346: Add const to SizedBox
const SizedBox(height: 20),

// Line 348: Add const to SizedBox
const SizedBox(height: 20),

// Line 361: Add const to SizedBox
const SizedBox(height: 20),

// Line 363: Add const to SizedBox
const SizedBox(height: 20),

// Line 401: Add const to SizedBox
const SizedBox(height: 20),

// Line 403: Add const to SizedBox
const SizedBox(height: 20),

// Line 509: Add const to SizedBox
const SizedBox(height: 20),

// Line 518: Remove unnecessary toList()
...diseases.map((disease) => _buildDiseaseCard(disease)),

// Line 560: Add const to SizedBox
const SizedBox(height: 20),

// Line 569: Add const to SizedBox
const SizedBox(height: 20),

// Line 582: Add const to SizedBox
const SizedBox(height: 20),

// Line 598: Add const to SizedBox
const SizedBox(height: 20),

// Line 600: Add const to SizedBox
const SizedBox(height: 20),

// ============================================================================
// 8. EXPERT ADVICE SCREEN FIXES
// ============================================================================

// File: lib/screens/features/expert_advice_screen.dart
// Lines: 161, 301

// Line 161: Add const to SizedBox
const SizedBox(height: 20),

// Line 301: Remove unnecessary toList()
...experts.map((expert) => _buildExpertCard(expert)),

// ============================================================================
// 9. PRODUCT DETAIL SCREEN FIXES
// ============================================================================

// File: lib/screens/features/product_detail_screen.dart
// Lines: 101, 120, 383

// Line 101: Fix async context issue
void _addToCart() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error adding to cart: $error')),
    );
  }
}

// Line 120: Fix async context issue
void _requestQuote() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error requesting quote: $error')),
    );
  }
}

// Line 383: Remove unnecessary toList()
...relatedProducts.map((product) => _buildRelatedProductCard(product)),

// ============================================================================
// 10. PRODUCTS SCREEN FIXES
// ============================================================================

// File: lib/screens/features/products_screen.dart
// Line: 54

// Line 54: Fix async context issue
void _loadProducts() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error loading products: $error')),
    );
  }
}

// ============================================================================
// 11. SUPPORT CENTER SCREEN FIXES
// ============================================================================

// File: lib/screens/features/support_center_screen.dart
// Line: 73

// Line 73: Add const to list literal
children: const [
  Icon(Icons.support_agent, size: 48, color: Colors.white),
  SizedBox(height: 12),
  Text(
    'Support Center',
    style: TextStyle(
      fontSize: 24,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
  ),
],

// ============================================================================
// 12. HOME SCREEN FIXES
// ============================================================================

// File: lib/screens/home_screen.dart
// Lines: 205, 206, 280, 341, 377, 438, 440, 441, 442, 443, 449, 460, 574

// Line 205: Add const to SizedBox
const SizedBox(height: 20),

// Line 206: Add const to list literal
children: const [
  Icon(Icons.home, size: 48, color: Colors.white),
  SizedBox(height: 12),
  Text(
    'Welcome to RNZ Cropwise',
    style: TextStyle(
      fontSize: 24,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
  ),
],

// Line 280: Add const to SizedBox
const SizedBox(height: 20),

// Line 341: Add const to SizedBox
const SizedBox(height: 20),

// Line 377: Add const to SizedBox
const SizedBox(height: 20),

// Line 438: Add const to SizedBox
const SizedBox(height: 20),

// Line 440: Add const to list literal
children: const [
  Icon(Icons.featured_play_list, size: 48, color: Colors.white),
  SizedBox(height: 12),
  Text(
    'Quick Actions',
    style: TextStyle(
      fontSize: 20,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
  ),
],

// Line 441: Add const to SizedBox
const SizedBox(height: 12),

// Line 442: Add const to list literal
children: const [
  Icon(Icons.psychology, size: 24, color: Colors.green),
  SizedBox(width: 8),
  Text(
    'AI Crop Advisor',
    style: TextStyle(
      fontSize: 16,
      fontWeight: FontWeight.w600,
      color: Colors.green,
    ),
  ),
],

// Line 443: Add const to SizedBox
const SizedBox(width: 8),

// Line 449: Add const to SizedBox
const SizedBox(width: 8),

// Line 460: Add const to SizedBox
const SizedBox(height: 20),

// Line 574: Add const to SizedBox
const SizedBox(height: 20),

// ============================================================================
// 13. SPLASH SCREEN FIXES
// ============================================================================

// File: lib/screens/splash_screen.dart
// Lines: 122, 135

// Line 122: Add const to SizedBox
const SizedBox(height: 20),

// Line 135: Add const to SizedBox
const SizedBox(height: 20),

// ============================================================================
// 14. WIDGETS FIXES
// ============================================================================

// File: lib/widgets/quote_request_form.dart
// Lines: 88, 103

// Line 88: Fix async context issue
void _submitQuoteRequest() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error submitting quote request: $error')),
    );
  }
}

// Line 103: Fix async context issue
void _resetForm() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error resetting form: $error')),
    );
  }
}

// File: lib/widgets/support_ticket_form.dart
// Lines: 104, 124

// Line 104: Fix async context issue
void _submitTicket() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error submitting ticket: $error')),
    );
  }
}

// Line 124: Fix async context issue
void _resetForm() async {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  
  try {
    // ... existing async code ...
  } catch (error) {
    scaffoldMessenger.showSnackBar(
      SnackBar(content: Text('Error resetting form: $error')),
    );
  }
}

/*
SUMMARY OF FIXES:

1. CONST CONSTRUCTORS (prefer_const_constructors):
   - Add 'const' keyword to all SizedBox, Text, Icon, and other widget constructors
   - This improves performance by creating immutable widgets at compile time

2. CONST LITERALS (prefer_const_literals_to_create_immutables):
   - Add 'const' keyword to list and map literals used in widget children
   - Example: children: const [Widget1(), Widget2()]

3. ASYNC CONTEXT (use_build_context_synchronously):
   - Store BuildContext before async operations
   - Use stored context after async operations instead of accessing context directly
   - Example: final scaffoldMessenger = ScaffoldMessenger.of(context);

4. UNNECESSARY TOLIST (unnecessary_to_list_in_spreads):
   - Remove .toList() calls in spread operations
   - Example: ...list.map((item) => Widget(item)) instead of ...list.map((item) => Widget(item)).toList()

These fixes will improve performance and eliminate all 105 linting issues.
*/
