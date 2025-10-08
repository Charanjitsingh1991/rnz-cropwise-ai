import 'package:json_annotation/json_annotation.dart';

part 'ai_advisor.g.dart';

@JsonSerializable()
class AIAdvisorInput {
  final String crop;
  final String soil;
  final String region;
  final String moisture;
  final String growthStage;
  final String? country;
  final String? state;
  final String? district;

  AIAdvisorInput({
    required this.crop,
    required this.soil,
    required this.region,
    required this.moisture,
    required this.growthStage,
    this.country,
    this.state,
    this.district,
  });

  factory AIAdvisorInput.fromJson(Map<String, dynamic> json) => _$AIAdvisorInputFromJson(json);
  Map<String, dynamic> toJson() => _$AIAdvisorInputToJson(this);

  AIAdvisorInput copyWith({
    String? crop,
    String? soil,
    String? region,
    String? moisture,
    String? growthStage,
    String? country,
    String? state,
    String? district,
  }) {
    return AIAdvisorInput(
      crop: crop ?? this.crop,
      soil: soil ?? this.soil,
      region: region ?? this.region,
      moisture: moisture ?? this.moisture,
      growthStage: growthStage ?? this.growthStage,
      country: country ?? this.country,
      state: state ?? this.state,
      district: district ?? this.district,
    );
  }
}

@JsonSerializable()
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

  factory AIAdvisorOutput.fromJson(Map<String, dynamic> json) => _$AIAdvisorOutputFromJson(json);
  Map<String, dynamic> toJson() => _$AIAdvisorOutputToJson(this);
}

@JsonSerializable()
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

  factory RecommendedProduct.fromJson(Map<String, dynamic> json) => _$RecommendedProductFromJson(json);
  Map<String, dynamic> toJson() => _$RecommendedProductToJson(this);
}

@JsonSerializable()
class AgriculturalData {
  final bool hasRegionalData;
  final String dataCompleteness;
  final String? lastUpdated;

  AgriculturalData({
    required this.hasRegionalData,
    required this.dataCompleteness,
    this.lastUpdated,
  });

  factory AgriculturalData.fromJson(Map<String, dynamic> json) => _$AgriculturalDataFromJson(json);
  Map<String, dynamic> toJson() => _$AgriculturalDataToJson(this);
}

@JsonSerializable()
class DiseaseDetectionInput {
  final String imageUrl;
  final String? cropType;
  final String? region;
  final String? description;

  DiseaseDetectionInput({
    required this.imageUrl,
    this.cropType,
    this.region,
    this.description,
  });

  factory DiseaseDetectionInput.fromJson(Map<String, dynamic> json) => _$DiseaseDetectionInputFromJson(json);
  Map<String, dynamic> toJson() => _$DiseaseDetectionInputToJson(this);
}

@JsonSerializable()
class DiseaseDetectionOutput {
  final String diagnosis;
  final double confidence;
  final List<String> symptoms;
  final List<String> recommendations;
  final List<String> treatments;
  final String? severity;
  final String? affectedArea;

  DiseaseDetectionOutput({
    required this.diagnosis,
    required this.confidence,
    required this.symptoms,
    required this.recommendations,
    required this.treatments,
    this.severity,
    this.affectedArea,
  });

  factory DiseaseDetectionOutput.fromJson(Map<String, dynamic> json) => _$DiseaseDetectionOutputFromJson(json);
  Map<String, dynamic> toJson() => _$DiseaseDetectionOutputToJson(this);
}

@JsonSerializable()
class FilterOptions {
  final List<String> crops;
  final List<String> soilTypes;
  final List<String> regions;
  final List<String> moistureLevels;
  final List<String> categories;
  final List<String> growthStages;

  FilterOptions({
    required this.crops,
    required this.soilTypes,
    required this.regions,
    required this.moistureLevels,
    required this.categories,
    required this.growthStages,
  });

  factory FilterOptions.fromJson(Map<String, dynamic> json) => _$FilterOptionsFromJson(json);
  Map<String, dynamic> toJson() => _$FilterOptionsToJson(this);
}

@JsonSerializable()
class PilotCountry {
  final String code;
  final String name;
  final bool isActive;
  final List<String>? supportedFeatures;

  PilotCountry({
    required this.code,
    required this.name,
    this.isActive = true,
    this.supportedFeatures,
  });

  factory PilotCountry.fromJson(Map<String, dynamic> json) => _$PilotCountryFromJson(json);
  Map<String, dynamic> toJson() => _$PilotCountryToJson(this);
}
