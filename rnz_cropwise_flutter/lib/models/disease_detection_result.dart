class DiseaseDetectionResult {
  final bool isPlant;
  final String plantType;
  final bool isHealthy;
  final String diseaseName;
  final double confidenceScore;
  final String diseaseDescription;
  final String diseaseSeverity;
  final List<String> affectedParts;
  final List<String> preventativeMeasures;
  final List<String> productRecommendations;
  final String rnzProductUsage;
  final String additionalInsights;

  DiseaseDetectionResult({
    required this.isPlant,
    required this.plantType,
    required this.isHealthy,
    required this.diseaseName,
    required this.confidenceScore,
    required this.diseaseDescription,
    required this.diseaseSeverity,
    required this.affectedParts,
    required this.preventativeMeasures,
    required this.productRecommendations,
    required this.rnzProductUsage,
    required this.additionalInsights,
  });

  factory DiseaseDetectionResult.fromJson(Map<String, dynamic> json) {
    return DiseaseDetectionResult(
      isPlant: json['isPlant'] ?? false,
      plantType: json['plantType'] ?? 'Unknown',
      isHealthy: json['isHealthy'] ?? false,
      diseaseName: json['diseaseName'] ?? 'N/A',
      confidenceScore: (json['confidenceScore'] ?? 0.0).toDouble(),
      diseaseDescription: json['diseaseDescription'] ?? '',
      diseaseSeverity: json['diseaseSeverity'] ?? 'N/A',
      affectedParts: List<String>.from(json['affectedParts'] ?? []),
      preventativeMeasures: List<String>.from(json['preventativeMeasures'] ?? []),
      productRecommendations: List<String>.from(json['productRecommendations'] ?? []),
      rnzProductUsage: json['rnzProductUsage'] ?? '',
      additionalInsights: json['additionalInsights'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'isPlant': isPlant,
      'plantType': plantType,
      'isHealthy': isHealthy,
      'diseaseName': diseaseName,
      'confidenceScore': confidenceScore,
      'diseaseDescription': diseaseDescription,
      'diseaseSeverity': diseaseSeverity,
      'affectedParts': affectedParts,
      'preventativeMeasures': preventativeMeasures,
      'productRecommendations': productRecommendations,
      'rnzProductUsage': rnzProductUsage,
      'additionalInsights': additionalInsights,
    };
  }

  DiseaseDetectionResult copyWith({
    bool? isPlant,
    String? plantType,
    bool? isHealthy,
    String? diseaseName,
    double? confidenceScore,
    String? diseaseDescription,
    String? diseaseSeverity,
    List<String>? affectedParts,
    List<String>? preventativeMeasures,
    List<String>? productRecommendations,
    String? rnzProductUsage,
    String? additionalInsights,
  }) {
    return DiseaseDetectionResult(
      isPlant: isPlant ?? this.isPlant,
      plantType: plantType ?? this.plantType,
      isHealthy: isHealthy ?? this.isHealthy,
      diseaseName: diseaseName ?? this.diseaseName,
      confidenceScore: confidenceScore ?? this.confidenceScore,
      diseaseDescription: diseaseDescription ?? this.diseaseDescription,
      diseaseSeverity: diseaseSeverity ?? this.diseaseSeverity,
      affectedParts: affectedParts ?? this.affectedParts,
      preventativeMeasures: preventativeMeasures ?? this.preventativeMeasures,
      productRecommendations: productRecommendations ?? this.productRecommendations,
      rnzProductUsage: rnzProductUsage ?? this.rnzProductUsage,
      additionalInsights: additionalInsights ?? this.additionalInsights,
    );
  }
}
