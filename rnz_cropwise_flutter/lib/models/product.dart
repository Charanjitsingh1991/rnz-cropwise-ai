

class Product {
  final String id;
  final String mongoId;
  final String name;
  final String description;
  final String longDescription;
  final String imageUrl;
  final List<String>? images;
  final List<String> crops;
  final List<String> soilTypes;
  final List<String> regions;
  final List<String> moistureLevels;
  final List<String> categories;
  final String? category;
  final String? suitableCrops;
  final String? suitableSoils;
  final String? form;
  final String? growthStage;
  final List<String>? brochures;
  final List<String>? certifications;
  final bool? isActive;
  final bool? isFeatured;
  final List<String>? tags;
  final Map<String, dynamic>? specifications;
  final Map<String, dynamic>? application;
  final Map<String, dynamic>? availability;
  final Map<String, dynamic>? safety;
  final Map<String, dynamic>? pricing;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  Product({
    required this.id,
    required this.mongoId,
    required this.name,
    required this.description,
    required this.longDescription,
    required this.imageUrl,
    this.images,
    required this.crops,
    required this.soilTypes,
    required this.regions,
    required this.moistureLevels,
    required this.categories,
    this.category,
    this.suitableCrops,
    this.suitableSoils,
    this.form,
    this.growthStage,
    this.brochures,
    this.certifications,
    this.isActive,
    this.isFeatured,
    this.tags,
    this.specifications,
    this.application,
    this.availability,
    this.safety,
    this.pricing,
    this.createdAt,
    this.updatedAt,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'] ?? json['_id']?.toString() ?? '',
      mongoId: json['_id']?.toString() ?? '',
      name: json['name'] ?? '',
      description: json['description'] ?? '',
      longDescription: json['longDescription'] ?? '',
      imageUrl: json['imageUrl'] ?? (json['images'] != null && (json['images'] as List).isNotEmpty ? (json['images'] as List)[0] : ''),
      images: json['images'] != null ? List<String>.from(json['images']) : null,
      crops: json['crops'] != null ? List<String>.from(json['crops']) : [],
      soilTypes: json['soilTypes'] != null ? List<String>.from(json['soilTypes']) : [],
      regions: json['regions'] != null ? List<String>.from(json['regions']) : [],
      moistureLevels: json['moistureLevels'] != null ? List<String>.from(json['moistureLevels']) : [],
      categories: json['category'] != null ? [json['category']] : List<String>.from(json['categories'] ?? []),
      category: json['category'],
      suitableCrops: json['suitableCrops'],
      suitableSoils: json['suitableSoils'],
      form: json['form'],
      growthStage: json['growthStage'],
      brochures: json['brochures'] != null ? List<String>.from(json['brochures']) : null,
      certifications: json['certifications'] != null ? List<String>.from(json['certifications']) : null,
      isActive: json['isActive'],
      isFeatured: json['isFeatured'],
      tags: json['tags'] != null ? List<String>.from(json['tags']) : null,
      specifications: json['specifications'] != null ? Map<String, dynamic>.from(json['specifications']) : null,
      application: json['application'] != null ? Map<String, dynamic>.from(json['application']) : null,
      availability: json['availability'] != null ? Map<String, dynamic>.from(json['availability']) : null,
      safety: json['safety'] != null ? Map<String, dynamic>.from(json['safety']) : null,
      pricing: json['pricing'] != null ? Map<String, dynamic>.from(json['pricing']) : null,
      createdAt: json['createdAt'] != null 
          ? DateTime.tryParse(json['createdAt'].toString()) 
          : null,
      updatedAt: json['updatedAt'] != null 
          ? DateTime.tryParse(json['updatedAt'].toString()) 
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      '_id': mongoId,
      'name': name,
      'description': description,
      'longDescription': longDescription,
      'imageUrl': imageUrl,
      'images': images,
      'crops': crops,
      'soilTypes': soilTypes,
      'regions': regions,
      'moistureLevels': moistureLevels,
      'categories': categories,
      'category': category,
      'suitableCrops': suitableCrops,
      'suitableSoils': suitableSoils,
      'form': form,
      'growthStage': growthStage,
      'brochures': brochures,
      'certifications': certifications,
      'isActive': isActive,
      'isFeatured': isFeatured,
      'tags': tags,
      'specifications': specifications,
      'application': application,
      'availability': availability,
      'safety': safety,
      'pricing': pricing,
      'createdAt': createdAt?.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
    };
  }

  // Helper methods
  bool get hasBrochures => brochures?.isNotEmpty ?? false;
  bool get hasCertifications => certifications?.isNotEmpty ?? false;
  String get primaryImage => images?.isNotEmpty == true ? images!.first : imageUrl;
  
  List<String> get applicationMethods {
    final methods = application?['method'] as List<dynamic>?;
    return methods?.cast<String>() ?? [];
  }
  
  Map<String, dynamic>? get applicationRate {
    return application?['rate'] as Map<String, dynamic>?;
  }
  
  String get applicationFrequency {
    return application?['frequency'] as String? ?? '';
  }
  
  String get applicationTiming {
    return application?['timing'] as String? ?? '';
  }

  Product copyWith({
    String? id,
    String? mongoId,
    String? name,
    String? description,
    String? longDescription,
    String? imageUrl,
    List<String>? images,
    List<String>? crops,
    List<String>? soilTypes,
    List<String>? regions,
    List<String>? moistureLevels,
    List<String>? categories,
    String? category,
    String? suitableCrops,
    String? suitableSoils,
    String? form,
    String? growthStage,
    List<String>? brochures,
    List<String>? certifications,
    bool? isActive,
    bool? isFeatured,
    List<String>? tags,
    Map<String, dynamic>? specifications,
    Map<String, dynamic>? application,
    Map<String, dynamic>? availability,
    Map<String, dynamic>? safety,
    Map<String, dynamic>? pricing,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return Product(
      id: id ?? this.id,
      mongoId: mongoId ?? this.mongoId,
      name: name ?? this.name,
      description: description ?? this.description,
      longDescription: longDescription ?? this.longDescription,
      imageUrl: imageUrl ?? this.imageUrl,
      images: images ?? this.images,
      crops: crops ?? this.crops,
      soilTypes: soilTypes ?? this.soilTypes,
      regions: regions ?? this.regions,
      moistureLevels: moistureLevels ?? this.moistureLevels,
      categories: categories ?? this.categories,
      category: category ?? this.category,
      suitableCrops: suitableCrops ?? this.suitableCrops,
      suitableSoils: suitableSoils ?? this.suitableSoils,
      form: form ?? this.form,
      growthStage: growthStage ?? this.growthStage,
      brochures: brochures ?? this.brochures,
      certifications: certifications ?? this.certifications,
      isActive: isActive ?? this.isActive,
      isFeatured: isFeatured ?? this.isFeatured,
      tags: tags ?? this.tags,
      specifications: specifications ?? this.specifications,
      application: application ?? this.application,
      availability: availability ?? this.availability,
      safety: safety ?? this.safety,
      pricing: pricing ?? this.pricing,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}
