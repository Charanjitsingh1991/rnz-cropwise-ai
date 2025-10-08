import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../models/support_ticket.dart';
import '../models/support_category.dart';
import '../services/support_ticket_service.dart';

class SupportProvider with ChangeNotifier {
  List<SupportTicket> _tickets = [];
  List<Map<String, dynamic>> _faqs = [];
  List<SupportCategory> _supportCategories = [];
  Map<String, dynamic> _supportSettings = {};
  bool _isLoading = false;
  String? _error;

  List<SupportTicket> get tickets => _tickets;
  List<Map<String, dynamic>> get faqs => _faqs;
  List<SupportCategory> get supportCategories => _supportCategories;
  Map<String, dynamic> get supportSettings => _supportSettings;
  bool get isLoading => _isLoading;
  String? get error => _error;

  Future<void> loadSupportSettings() async {
    try {
      final response = await http.get(
        Uri.parse('https://rnz-cropwise.vercel.app/api/support-settings'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        if (data['success']) {
          _supportSettings = data['settings'];
          notifyListeners();
        }
      }
    } catch (e) {
      print('Failed to load support settings: $e');
      // Use default settings if API fails
      _supportSettings = {
        'phone': '+1 (555) 123-4567',
        'email': 'support@rnzcropwise.com',
        'address': '123 Agriculture St, Farm City, FC 12345',
        'businessHours': 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
        'liveChatEnabled': true,
        'videoCallEnabled': true,
        'videoCallPlatform': 'Zoom'
      };
      notifyListeners();
    }
  }

  Future<void> loadTickets({String? status}) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await SupportTicketService.getUserSupportTickets(status: status);
      
      if (result['success'] == true) {
        _tickets = result['tickets'] as List<SupportTicket>;
      } else {
        _error = result['message'];
      }

      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> loadFAQs() async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      // Load comprehensive FAQs matching the web app
      _faqs = [
        // Product Categories & General Use
        {
          'id': 'faq-1',
          'question': 'What are the main categories of RNZ fertilizers?',
          'answer': 'RNZ offers **Water Soluble NPK**, **Granular NPK**, **Liquid Items**, **Suspension Items**, **Straights Items**, and **Special & Value-Added Products** like Seaweed, Humic Acid, and Salt Corrector.',
          'category': 'Product Categories & General Use',
        },
        {
          'id': 'faq-2',
          'question': 'What\'s the difference between Water Soluble and Granular NPK?',
          'answer': '**Water Soluble NPK** dissolves completely in water for fertigation/foliar application. **Granular NPK** is for soil application with controlled release.',
          'category': 'Product Categories & General Use',
        },
        {
          'id': 'faq-3',
          'question': 'Which RNZ products are best for foliar application?',
          'answer': '**Water Soluble NPK** (19-19-19, 13-40-13, 13-00-45), **Liquid NPK**, and **Micronutrients** (Fe EDDHA, Zn EDTA).',
          'category': 'Product Categories & General Use',
        },
        {
          'id': 'faq-4',
          'question': 'What\'s the best NPK ratio for general use?',
          'answer': '**NPK 19-19-19** or **NPK 20-20-20** provide balanced nutrition for most crops.',
          'category': 'Product Categories & General Use',
        },
        {
          'id': 'faq-5',
          'question': 'Can I mix different RNZ products together?',
          'answer': 'Yes, many RNZ products can be tank-mixed, but always do a jar test first and follow label instructions.',
          'category': 'Product Categories & General Use',
        },
        
        // Crop-Specific Recommendations
        {
          'id': 'faq-6',
          'question': 'Which RNZ products are best for tomatoes?',
          'answer': '**NPK 13-40-13** for flowering, **NPK 06-12-36** for fruit development, **Calcium Nitrate** for blossom end rot prevention.',
          'category': 'Crop-Specific Recommendations',
        },
        {
          'id': 'faq-7',
          'question': 'What fertilizers work best for leafy greens?',
          'answer': '**NPK 30-10-10** for vegetative growth, **NPK 19-19-19** for balanced nutrition.',
          'category': 'Crop-Specific Recommendations',
        },
        {
          'id': 'faq-8',
          'question': 'Which products are recommended for fruit trees?',
          'answer': '**NPK 13-40-13** for flowering, **NPK 06-12-36** for fruit quality, **Calcium Nitrate** for fruit firmness.',
          'category': 'Crop-Specific Recommendations',
        },
        {
          'id': 'faq-9',
          'question': 'What\'s best for root crops like potatoes?',
          'answer': '**NPK 13-40-13** for root development, **NPK 06-12-36** for tuber quality.',
          'category': 'Crop-Specific Recommendations',
        },
        {
          'id': 'faq-10',
          'question': 'Which products help with grain crops (wheat, corn)?',
          'answer': '**NPK 19-19-19** for general nutrition, **NPK 13-40-13** for grain filling.',
          'category': 'Crop-Specific Recommendations',
        },
        
        // Soil Condition & Environment
        {
          'id': 'faq-11',
          'question': 'Which RNZ products work best in alkaline soils?',
          'answer': '**NPK 0-52-34** (Suspension), **RNZ SB+** (Sulphur-Based), and **Fe EDDHA 6%** for iron availability.',
          'category': 'Soil Condition & Environment',
        },
        {
          'id': 'faq-12',
          'question': 'What\'s recommended for acidic soils?',
          'answer': '**Calcium Nitrate**, **Dolomitic products**, and **Granular Gypsum** to raise pH and supply calcium/magnesium.',
          'category': 'Soil Condition & Environment',
        },
        {
          'id': 'faq-13',
          'question': 'How can I improve soil structure with RNZ products?',
          'answer': '**Humic/Fulvic Acid**, **Granular Gypsum**, and **Seaweed Range** improve soil structure and nutrient retention.',
          'category': 'Soil Condition & Environment',
        },
        {
          'id': 'faq-14',
          'question': 'Which products help manage salinity?',
          'answer': '**Salt Corrector** and **Calcium Thiosulphate (CaTS)** help manage salinity in soil or irrigation water.',
          'category': 'Soil Condition & Environment',
        },
        
        // Nutrient Deficiency Solutions
        {
          'id': 'faq-15',
          'question': 'What should I use for iron deficiency?',
          'answer': '**Fe EDDHA 6%** for alkaline soils, **Fe EDTA** for neutral/acidic soils.',
          'category': 'Nutrient Deficiency Solutions',
        },
        {
          'id': 'faq-16',
          'question': 'Which product helps with zinc deficiency in maize?',
          'answer': '**Zn EDTA 15%** for foliar/fertigation, or **Zinc Sulphate** for soil application.',
          'category': 'Nutrient Deficiency Solutions',
        },
        {
          'id': 'faq-17',
          'question': 'What RNZ products correct magnesium deficiency?',
          'answer': '**Magnesium Sulphate – Hepta, Mono & Anhydrous**.',
          'category': 'Nutrient Deficiency Solutions',
        },
        {
          'id': 'faq-18',
          'question': 'How do I manage sulphur deficiency?',
          'answer': '**RNZ SB+ (SB 90%)**, **RNZ NS 20+**, or **Sulphate-based products**.',
          'category': 'Nutrient Deficiency Solutions',
        },
        
        // Special & Value-Added Products
        {
          'id': 'faq-19',
          'question': 'What does Calcium Thiosulphate (CaTS) do?',
          'answer': 'Supplies calcium and sulphur, improves soil structure, and mitigates sodium in saline soils.',
          'category': 'Special & Value-Added Products',
        },
        {
          'id': 'faq-20',
          'question': 'What\'s the benefit of Potassium Thiosulphate (KTS)?',
          'answer': 'Supplies potassium and sulphur in liquid form, suitable for fertigation.',
          'category': 'Special & Value-Added Products',
        },
        {
          'id': 'faq-21',
          'question': 'How can Seaweed products improve crop performance?',
          'answer': 'They act as biostimulants, enhancing rooting, stress tolerance, and nutrient uptake.',
          'category': 'Special & Value-Added Products',
        },
        {
          'id': 'faq-22',
          'question': 'What is Salt Corrector and when should I apply it?',
          'answer': 'A liquid product that helps reduce the effects of salinity; apply via irrigation when salinity stress is expected.',
          'category': 'Special & Value-Added Products',
        },
        {
          'id': 'faq-23',
          'question': 'When should I use Humic / Fulvic Acid?',
          'answer': 'Use throughout the season to improve soil health, nutrient retention, and root growth.',
          'category': 'Special & Value-Added Products',
        },
        
        // Application & Safety
        {
          'id': 'faq-24',
          'question': 'Can RNZ fertilizers be mixed with pesticides?',
          'answer': 'Many RNZ products can be tank-mixed, but always do a jar test before mixing and follow label instructions.',
          'category': 'Application & Safety',
        },
        {
          'id': 'faq-25',
          'question': 'How do I store RNZ fertilizers?',
          'answer': 'Keep in a cool, dry, well-ventilated place, away from direct sunlight and moisture.',
          'category': 'Application & Safety',
        },
        {
          'id': 'faq-26',
          'question': 'Can I apply RNZ products through drip irrigation?',
          'answer': 'Yes. Water Soluble NPK, Liquid Items, and many Suspension Items are designed for drip systems.',
          'category': 'Application & Safety',
        },
        {
          'id': 'faq-27',
          'question': 'Do I need to adjust pH when using RNZ products?',
          'answer': 'It depends on the water source and crop requirements; some products like **Phosphoric Acid** can help lower pH.',
          'category': 'Application & Safety',
        },
        
        // General App Questions
        {
          'id': 'faq-28',
          'question': 'How do I request a brochure?',
          'answer': 'You can request a brochure by going to any product page and clicking the "Request Brochure" button. You will be notified when your request is approved.',
          'category': 'General',
        },
        {
          'id': 'faq-29',
          'question': 'How does the AI Advisor work?',
          'answer': 'The AI Advisor analyzes your crop type, soil conditions, and other factors to provide personalized recommendations for fertilizers and treatments.',
          'category': 'General',
        },
        {
          'id': 'faq-30',
          'question': 'How do I use disease detection?',
          'answer': 'Take a photo of your plant and upload it to the disease detection feature. Our AI will analyze the image and provide diagnosis and treatment recommendations.',
          'category': 'General',
        },
        {
          'id': 'faq-31',
          'question': 'Can I edit my profile information?',
          'answer': 'Yes, you can edit your profile information by going to the Profile section and clicking the edit button.',
          'category': 'General',
        },
        {
          'id': 'faq-32',
          'question': 'How do I contact support?',
          'answer': 'You can contact support by creating a support ticket in the Support section, calling us, or emailing us directly.',
          'category': 'General',
        },
      ];

      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> loadSupportCategories() async {
    try {
      // Mock categories for now
      _supportCategories = [
        SupportCategory(
          id: '1',
          title: 'General',
          description: 'General questions about the app',
          faqCount: 5,
          isActive: true,
          createdAt: DateTime.now(),
        ),
        SupportCategory(
          id: '2',
          title: 'Features',
          description: 'Questions about app features',
          faqCount: 3,
          isActive: true,
          createdAt: DateTime.now(),
        ),
        SupportCategory(
          id: '3',
          title: 'Products',
          description: 'Questions about products',
          faqCount: 2,
          isActive: true,
          createdAt: DateTime.now(),
        ),
        SupportCategory(
          id: '4',
          title: 'Account',
          description: 'Account and profile questions',
          faqCount: 1,
          isActive: true,
          createdAt: DateTime.now(),
        ),
        SupportCategory(
          id: '5',
          title: 'Support',
          description: 'Support and contact questions',
          faqCount: 1,
          isActive: true,
          createdAt: DateTime.now(),
        ),
      ];
    } catch (e) {
      // Handle error silently for categories
    }
  }

  Future<bool> createTicket({
    required String subject,
    required String message,
  }) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await SupportTicketService.createSupportTicket(
        subject: subject,
        message: message,
      );
      
      if (result['success'] == true) {
        // Reload tickets to get the updated list
        await loadTickets();
        return true;
      } else {
        _error = result['message'];
        return false;
      }
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> addMessageToTicket({
    required String ticketId,
    required String message,
  }) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await SupportTicketService.addMessageToTicket(
        ticketId: ticketId,
        message: message,
      );
      
      if (result['success'] == true) {
        // Reload tickets to get the updated list
        await loadTickets();
        return true;
      } else {
        _error = result['message'];
        return false;
      }
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> closeTicket(String ticketId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final result = await SupportTicketService.closeTicket(ticketId);
      
      if (result['success'] == true) {
        // Reload tickets to get the updated list
        await loadTickets();
        return true;
      } else {
        _error = result['message'];
        return false;
      }
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> markTicketAsRead(String ticketId) async {
    try {
      final result = await SupportTicketService.markTicketAsRead(ticketId);
      
      if (result['success'] == true) {
        // Reload tickets to get the updated list
        await loadTickets();
        return true;
      } else {
        _error = result['message'];
        return false;
      }
    } catch (e) {
      _error = e.toString();
      return false;
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }

  List<Map<String, dynamic>> searchFAQs(String query) {
    if (query.isEmpty) return _faqs;
    
    final searchLower = query.toLowerCase();
    return _faqs.where((faq) => 
      faq['question'].toString().toLowerCase().contains(searchLower) ||
      faq['answer'].toString().toLowerCase().contains(searchLower) ||
      faq['category'].toString().toLowerCase().contains(searchLower)
    ).toList();
  }

  List<SupportTicket> getTicketsByStatus(String status) {
    return _tickets.where((ticket) => ticket.status == status).toList();
  }

  int getUnreadTicketCount() {
    return _tickets.where((ticket) => !ticket.isReadByUser).length;
  }
}
