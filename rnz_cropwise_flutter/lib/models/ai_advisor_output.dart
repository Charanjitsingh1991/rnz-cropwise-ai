class AIAdvisorOutput {
  final List<RecommendedProduct> recommendedProducts;
  final String explanation;
  final String? regionalInsights;
  final AgriculturalData? agriculturalData;

  AIAdvisorOutput({
    required this.recommendedProducts,
    required this.explanation,
    this.regionalInsights,
    this.agriculturalData,
  });

  factory AIAdvisorOutput.fromJson(Map<String, dynamic> json) {
    return AIAdvisorOutput(
      recommendedProducts: (json['recommendedProducts'] as List<dynamic>?)
          ?.map((product) => RecommendedProduct.fromJson(product))
          .toList() ?? [],
      explanation: json['explanation'] ?? '',
      regionalInsights: json['regionalInsights'],
      agriculturalData: json['agriculturalData'] != null
          ? AgriculturalData.fromJson(json['agriculturalData'])
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'recommendedProducts': recommendedProducts.map((p) => p.toJson()).toList(),
      'explanation': explanation,
      'regionalInsights': regionalInsights,
      'agriculturalData': agriculturalData?.toJson(),
    };
  }
}

class RecommendedProduct {
  final String name;
  final String? productId;
  final String description;
  final String applicationMethod;
  final String dosage;
  final String timing;
  final String expectedBenefit;
  final String? regionalAdaptation;
  final String? category;

  RecommendedProduct({
    required this.name,
    this.productId,
    required this.description,
    required this.applicationMethod,
    required this.dosage,
    required this.timing,
    required this.expectedBenefit,
    this.regionalAdaptation,
    this.category,
  });

  factory RecommendedProduct.fromJson(Map<String, dynamic> json) {
    return RecommendedProduct(
      name: json['name'] ?? '',
      productId: json['productId'],
      description: json['description'] ?? '',
      applicationMethod: json['applicationMethod'] ?? '',
      dosage: json['dosage'] ?? '',
      timing: json['timing'] ?? '',
      expectedBenefit: json['expectedBenefit'] ?? '',
      regionalAdaptation: json['regionalAdaptation'],
      category: json['category'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'productId': productId,
      'description': description,
      'applicationMethod': applicationMethod,
      'dosage': dosage,
      'timing': timing,
      'expectedBenefit': expectedBenefit,
      'regionalAdaptation': regionalAdaptation,
      'category': category,
    };
  }
}

class AgriculturalData {
  final bool hasRegionalData;
  final String dataCompleteness;
  final String? lastUpdated;

  AgriculturalData({
    required this.hasRegionalData,
    required this.dataCompleteness,
    this.lastUpdated,
  });

  factory AgriculturalData.fromJson(Map<String, dynamic> json) {
    return AgriculturalData(
      hasRegionalData: json['hasRegionalData'] ?? false,
      dataCompleteness: json['dataCompleteness'] ?? 'Unknown',
      lastUpdated: json['lastUpdated'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'hasRegionalData': hasRegionalData,
      'dataCompleteness': dataCompleteness,
      'lastUpdated': lastUpdated,
    };
  }
}
