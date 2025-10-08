// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'product.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Product _$ProductFromJson(Map<String, dynamic> json) => Product(
      id: json['id'] as String,
      mongoId: json['mongoId'] as String?,
      name: json['name'] as String,
      description: json['description'] as String,
      longDescription: json['longDescription'] as String,
      imageUrl: json['imageUrl'] as String,
      images:
          (json['images'] as List<dynamic>?)?.map((e) => e as String).toList(),
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
      category: json['category'] as String?,
      suitableCrops: json['suitableCrops'] as String?,
      suitableSoils: json['suitableSoils'] as String?,
      form: json['form'] as String?,
      growthStage: json['growthStage'] as String?,
      brochures: (json['brochures'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList(),
      certifications: (json['certifications'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList(),
      isActive: json['isActive'] as bool?,
      isFeatured: json['isFeatured'] as bool?,
      tags: (json['tags'] as List<dynamic>?)?.map((e) => e as String).toList(),
      specifications: json['specifications'] == null
          ? null
          : ProductSpecifications.fromJson(
              json['specifications'] as Map<String, dynamic>),
      application: json['application'] == null
          ? null
          : ProductApplication.fromJson(
              json['application'] as Map<String, dynamic>),
      availability: json['availability'] == null
          ? null
          : ProductAvailability.fromJson(
              json['availability'] as Map<String, dynamic>),
      safety: json['safety'] == null
          ? null
          : ProductSafety.fromJson(json['safety'] as Map<String, dynamic>),
      pricing: json['pricing'] == null
          ? null
          : ProductPricing.fromJson(json['pricing'] as Map<String, dynamic>),
      createdAt: json['createdAt'] == null
          ? null
          : DateTime.parse(json['createdAt'] as String),
      updatedAt: json['updatedAt'] == null
          ? null
          : DateTime.parse(json['updatedAt'] as String),
    );

Map<String, dynamic> _$ProductToJson(Product instance) => <String, dynamic>{
      'id': instance.id,
      'mongoId': instance.mongoId,
      'name': instance.name,
      'description': instance.description,
      'longDescription': instance.longDescription,
      'imageUrl': instance.imageUrl,
      'images': instance.images,
      'crops': instance.crops,
      'soilTypes': instance.soilTypes,
      'regions': instance.regions,
      'moistureLevels': instance.moistureLevels,
      'categories': instance.categories,
      'category': instance.category,
      'suitableCrops': instance.suitableCrops,
      'suitableSoils': instance.suitableSoils,
      'form': instance.form,
      'growthStage': instance.growthStage,
      'brochures': instance.brochures,
      'certifications': instance.certifications,
      'isActive': instance.isActive,
      'isFeatured': instance.isFeatured,
      'tags': instance.tags,
      'specifications': instance.specifications,
      'application': instance.application,
      'availability': instance.availability,
      'safety': instance.safety,
      'pricing': instance.pricing,
      'createdAt': instance.createdAt?.toIso8601String(),
      'updatedAt': instance.updatedAt?.toIso8601String(),
    };

ProductSpecifications _$ProductSpecificationsFromJson(
        Map<String, dynamic> json) =>
    ProductSpecifications(
      solubility: json['solubility'] as String?,
      ph: json['ph'] == null
          ? null
          : ProductPh.fromJson(json['ph'] as Map<String, dynamic>),
      npk: json['npk'] == null
          ? null
          : ProductNPK.fromJson(json['npk'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$ProductSpecificationsToJson(
        ProductSpecifications instance) =>
    <String, dynamic>{
      'solubility': instance.solubility,
      'ph': instance.ph,
      'npk': instance.npk,
    };

ProductPh _$ProductPhFromJson(Map<String, dynamic> json) => ProductPh(
      min: (json['min'] as num).toDouble(),
      max: (json['max'] as num).toDouble(),
    );

Map<String, dynamic> _$ProductPhToJson(ProductPh instance) => <String, dynamic>{
      'min': instance.min,
      'max': instance.max,
    };

ProductNPK _$ProductNPKFromJson(Map<String, dynamic> json) => ProductNPK(
      nitrogen: (json['nitrogen'] as num).toDouble(),
      phosphorus: (json['phosphorus'] as num).toDouble(),
      potassium: (json['potassium'] as num).toDouble(),
    );

Map<String, dynamic> _$ProductNPKToJson(ProductNPK instance) =>
    <String, dynamic>{
      'nitrogen': instance.nitrogen,
      'phosphorus': instance.phosphorus,
      'potassium': instance.potassium,
    };

ProductApplication _$ProductApplicationFromJson(Map<String, dynamic> json) =>
    ProductApplication(
      method:
          (json['method'] as List<dynamic>).map((e) => e as String).toList(),
      rate: ProductRate.fromJson(json['rate'] as Map<String, dynamic>),
      frequency: json['frequency'] as String,
      timing: json['timing'] as String,
    );

Map<String, dynamic> _$ProductApplicationToJson(ProductApplication instance) =>
    <String, dynamic>{
      'method': instance.method,
      'rate': instance.rate,
      'frequency': instance.frequency,
      'timing': instance.timing,
    };

ProductRate _$ProductRateFromJson(Map<String, dynamic> json) => ProductRate(
      min: (json['min'] as num).toDouble(),
      max: (json['max'] as num).toDouble(),
      unit: json['unit'] as String,
    );

Map<String, dynamic> _$ProductRateToJson(ProductRate instance) =>
    <String, dynamic>{
      'min': instance.min,
      'max': instance.max,
      'unit': instance.unit,
    };

ProductAvailability _$ProductAvailabilityFromJson(Map<String, dynamic> json) =>
    ProductAvailability(
      inStock: json['inStock'] as bool,
      quantity: (json['quantity'] as num).toDouble(),
      unit: json['unit'] as String,
    );

Map<String, dynamic> _$ProductAvailabilityToJson(
        ProductAvailability instance) =>
    <String, dynamic>{
      'inStock': instance.inStock,
      'quantity': instance.quantity,
      'unit': instance.unit,
    };

ProductSafety _$ProductSafetyFromJson(Map<String, dynamic> json) =>
    ProductSafety(
      toxicity: json['toxicity'] as String,
      handling: json['handling'] as String,
      storage: json['storage'] as String,
    );

Map<String, dynamic> _$ProductSafetyToJson(ProductSafety instance) =>
    <String, dynamic>{
      'toxicity': instance.toxicity,
      'handling': instance.handling,
      'storage': instance.storage,
    };

ProductPricing _$ProductPricingFromJson(Map<String, dynamic> json) =>
    ProductPricing(
      retail: (json['retail'] as num).toDouble(),
      wholesale: (json['wholesale'] as num).toDouble(),
      currency: json['currency'] as String,
    );

Map<String, dynamic> _$ProductPricingToJson(ProductPricing instance) =>
    <String, dynamic>{
      'retail': instance.retail,
      'wholesale': instance.wholesale,
      'currency': instance.currency,
    };
