class DiseaseDetectionOutput {
  final String disease;
  final double confidence;
  final String description;
  final List<String> recommendations;
  final List<DiseaseProduct> products;

  DiseaseDetectionOutput({
    required this.disease,
    required this.confidence,
    required this.description,
    required this.recommendations,
    required this.products,
  });

  factory DiseaseDetectionOutput.fromJson(Map<String, dynamic> json) {
    return DiseaseDetectionOutput(
      disease: json['disease'] ?? '',
      confidence: (json['confidence'] as num?)?.toDouble() ?? 0.0,
      description: json['description'] ?? '',
      recommendations: List<String>.from(json['recommendations'] ?? []),
      products: (json['products'] as List<dynamic>?)
          ?.map((product) => DiseaseProduct.fromJson(product))
          .toList() ?? [],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'disease': disease,
      'confidence': confidence,
      'description': description,
      'recommendations': recommendations,
      'products': products.map((p) => p.toJson()).toList(),
    };
  }
}

class DiseaseProduct {
  final String name;
  final String description;
  final String applicationMethod;
  final String dosage;
  final String timing;

  DiseaseProduct({
    required this.name,
    required this.description,
    required this.applicationMethod,
    required this.dosage,
    required this.timing,
  });

  factory DiseaseProduct.fromJson(Map<String, dynamic> json) {
    return DiseaseProduct(
      name: json['name'] ?? '',
      description: json['description'] ?? '',
      applicationMethod: json['applicationMethod'] ?? '',
      dosage: json['dosage'] ?? '',
      timing: json['timing'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'description': description,
      'applicationMethod': applicationMethod,
      'dosage': dosage,
      'timing': timing,
    };
  }
}
