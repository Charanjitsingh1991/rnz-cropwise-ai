// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'ai_advisor.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

AIAdvisorInput _$AIAdvisorInputFromJson(Map<String, dynamic> json) =>
    AIAdvisorInput(
      crop: json['crop'] as String,
      soil: json['soil'] as String,
      region: json['region'] as String,
      moisture: json['moisture'] as String,
      growthStage: json['growthStage'] as String,
      country: json['country'] as String?,
      state: json['state'] as String?,
      district: json['district'] as String?,
    );

Map<String, dynamic> _$AIAdvisorInputToJson(AIAdvisorInput instance) =>
    <String, dynamic>{
      'crop': instance.crop,
      'soil': instance.soil,
      'region': instance.region,
      'moisture': instance.moisture,
      'growthStage': instance.growthStage,
      'country': instance.country,
      'state': instance.state,
      'district': instance.district,
    };

AIAdvisorOutput _$AIAdvisorOutputFromJson(Map<String, dynamic> json) =>
    AIAdvisorOutput(
      recommendedProducts: (json['recommendedProducts'] as List<dynamic>)
          .map((e) => RecommendedProduct.fromJson(e as Map<String, dynamic>))
          .toList(),
      explanation: json['explanation'] as String,
      regionalInsights: json['regionalInsights'] as String?,
      agriculturalData: json['agriculturalData'] == null
          ? null
          : AgriculturalData.fromJson(
              json['agriculturalData'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$AIAdvisorOutputToJson(AIAdvisorOutput instance) =>
    <String, dynamic>{
      'recommendedProducts': instance.recommendedProducts,
      'explanation': instance.explanation,
      'regionalInsights': instance.regionalInsights,
      'agriculturalData': instance.agriculturalData,
    };

RecommendedProduct _$RecommendedProductFromJson(Map<String, dynamic> json) =>
    RecommendedProduct(
      name: json['name'] as String,
      productId: json['productId'] as String?,
      description: json['description'] as String,
      applicationMethod: json['applicationMethod'] as String,
      dosage: json['dosage'] as String,
      timing: json['timing'] as String,
      expectedBenefit: json['expectedBenefit'] as String,
      regionalAdaptation: json['regionalAdaptation'] as String?,
      category: json['category'] as String?,
    );

Map<String, dynamic> _$RecommendedProductToJson(RecommendedProduct instance) =>
    <String, dynamic>{
      'name': instance.name,
      'productId': instance.productId,
      'description': instance.description,
      'applicationMethod': instance.applicationMethod,
      'dosage': instance.dosage,
      'timing': instance.timing,
      'expectedBenefit': instance.expectedBenefit,
      'regionalAdaptation': instance.regionalAdaptation,
      'category': instance.category,
    };

AgriculturalData _$AgriculturalDataFromJson(Map<String, dynamic> json) =>
    AgriculturalData(
      hasRegionalData: json['hasRegionalData'] as bool,
      dataCompleteness: json['dataCompleteness'] as String,
      lastUpdated: json['lastUpdated'] as String?,
    );

Map<String, dynamic> _$AgriculturalDataToJson(AgriculturalData instance) =>
    <String, dynamic>{
      'hasRegionalData': instance.hasRegionalData,
      'dataCompleteness': instance.dataCompleteness,
      'lastUpdated': instance.lastUpdated,
    };

DiseaseDetectionInput _$DiseaseDetectionInputFromJson(
        Map<String, dynamic> json) =>
    DiseaseDetectionInput(
      imageUrl: json['imageUrl'] as String,
      cropType: json['cropType'] as String?,
      region: json['region'] as String?,
      description: json['description'] as String?,
    );

Map<String, dynamic> _$DiseaseDetectionInputToJson(
        DiseaseDetectionInput instance) =>
    <String, dynamic>{
      'imageUrl': instance.imageUrl,
      'cropType': instance.cropType,
      'region': instance.region,
      'description': instance.description,
    };

DiseaseDetectionOutput _$DiseaseDetectionOutputFromJson(
        Map<String, dynamic> json) =>
    DiseaseDetectionOutput(
      diagnosis: json['diagnosis'] as String,
      confidence: (json['confidence'] as num).toDouble(),
      symptoms:
          (json['symptoms'] as List<dynamic>).map((e) => e as String).toList(),
      recommendations: (json['recommendations'] as List<dynamic>)
          .map((e) => e as String)
          .toList(),
      treatments: (json['treatments'] as List<dynamic>)
          .map((e) => e as String)
          .toList(),
      severity: json['severity'] as String?,
      affectedArea: json['affectedArea'] as String?,
    );

Map<String, dynamic> _$DiseaseDetectionOutputToJson(
        DiseaseDetectionOutput instance) =>
    <String, dynamic>{
      'diagnosis': instance.diagnosis,
      'confidence': instance.confidence,
      'symptoms': instance.symptoms,
      'recommendations': instance.recommendations,
      'treatments': instance.treatments,
      'severity': instance.severity,
      'affectedArea': instance.affectedArea,
    };

FilterOptions _$FilterOptionsFromJson(Map<String, dynamic> json) =>
    FilterOptions(
      crops: (json['crops'] as List<dynamic>).map((e) => e as String).toList(),
      soilTypes:
          (json['soilTypes'] as List<dynamic>).map((e) => e as String).toList(),
      regions:
          (json['regions'] as List<dynamic>).map((e) => e as String).toList(),
      moistureLevels: (json['moistureLevels'] as List<dynamic>)
          .map((e) => e as String)
          .toList(),
      categories: (json['categories'] as List<dynamic>)
          .map((e) => e as String)
          .toList(),
      growthStages: (json['growthStages'] as List<dynamic>)
          .map((e) => e as String)
          .toList(),
    );

Map<String, dynamic> _$FilterOptionsToJson(FilterOptions instance) =>
    <String, dynamic>{
      'crops': instance.crops,
      'soilTypes': instance.soilTypes,
      'regions': instance.regions,
      'moistureLevels': instance.moistureLevels,
      'categories': instance.categories,
      'growthStages': instance.growthStages,
    };

PilotCountry _$PilotCountryFromJson(Map<String, dynamic> json) => PilotCountry(
      code: json['code'] as String,
      name: json['name'] as String,
      isActive: json['isActive'] as bool? ?? true,
      supportedFeatures: (json['supportedFeatures'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList(),
    );

Map<String, dynamic> _$PilotCountryToJson(PilotCountry instance) =>
    <String, dynamic>{
      'code': instance.code,
      'name': instance.name,
      'isActive': instance.isActive,
      'supportedFeatures': instance.supportedFeatures,
    };
