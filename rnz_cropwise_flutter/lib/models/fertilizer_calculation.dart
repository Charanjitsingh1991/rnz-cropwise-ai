class NPKValues {
  final double nitrogen;
  final double phosphorus;
  final double potassium;

  NPKValues({
    required this.nitrogen,
    required this.phosphorus,
    required this.potassium,
  });

  factory NPKValues.fromJson(Map<String, dynamic> json) {
    return NPKValues(
      nitrogen: (json['nitrogen'] ?? 0).toDouble(),
      phosphorus: (json['phosphorus'] ?? 0).toDouble(),
      potassium: (json['potassium'] ?? 0).toDouble(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'nitrogen': nitrogen,
      'phosphorus': phosphorus,
      'potassium': potassium,
    };
  }

  @override
  String toString() => 'N:$nitrogen, P:$phosphorus, K:$potassium';
}

class ProductRecommendation {
  final String? productId;
  final String productName;
  final String npkRatio;
  final double quantity;
  final String unit;
  final String? applicationMethod;
  final String? timing;
  final double? cost;

  ProductRecommendation({
    this.productId,
    required this.productName,
    required this.npkRatio,
    required this.quantity,
    this.unit = 'kg',
    this.applicationMethod,
    this.timing,
    this.cost,
  });

  factory ProductRecommendation.fromJson(Map<String, dynamic> json) {
    return ProductRecommendation(
      productId: json['productId'],
      productName: json['productName'] ?? '',
      npkRatio: json['npkRatio'] ?? '',
      quantity: (json['quantity'] ?? 0).toDouble(),
      unit: json['unit'] ?? 'kg',
      applicationMethod: json['applicationMethod'],
      timing: json['timing'],
      cost: json['cost']?.toDouble(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (productId != null) 'productId': productId,
      'productName': productName,
      'npkRatio': npkRatio,
      'quantity': quantity,
      'unit': unit,
      if (applicationMethod != null) 'applicationMethod': applicationMethod,
      if (timing != null) 'timing': timing,
      if (cost != null) 'cost': cost,
    };
  }
}

class ApplicationStageProduct {
  final String? productId;
  final String productName;
  final double quantity;
  final String unit;

  ApplicationStageProduct({
    this.productId,
    required this.productName,
    required this.quantity,
    this.unit = 'kg',
  });

  factory ApplicationStageProduct.fromJson(Map<String, dynamic> json) {
    return ApplicationStageProduct(
      productId: json['productId'],
      productName: json['productName'] ?? '',
      quantity: (json['quantity'] ?? 0).toDouble(),
      unit: json['unit'] ?? 'kg',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (productId != null) 'productId': productId,
      'productName': productName,
      'quantity': quantity,
      'unit': unit,
    };
  }
}

class ApplicationSchedule {
  final String stage;
  final int daysAfterSowing;
  final List<ApplicationStageProduct> products;
  final String? instructions;

  ApplicationSchedule({
    required this.stage,
    required this.daysAfterSowing,
    required this.products,
    this.instructions,
  });

  factory ApplicationSchedule.fromJson(Map<String, dynamic> json) {
    return ApplicationSchedule(
      stage: json['stage'] ?? '',
      daysAfterSowing: json['daysAfterSowing'] ?? 0,
      products: (json['products'] as List<dynamic>?)
              ?.map((p) => ApplicationStageProduct.fromJson(p))
              .toList() ??
          [],
      instructions: json['instructions'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'stage': stage,
      'daysAfterSowing': daysAfterSowing,
      'products': products.map((p) => p.toJson()).toList(),
      if (instructions != null) 'instructions': instructions,
    };
  }
}

class FertilizerCalculation {
  final String? id;
  final String userId;
  final String? fieldId;
  final String cropType;
  final double fieldSize;
  final String fieldUnit;
  final String soilType;
  final NPKValues currentNPK;
  final double targetYield;
  final String yieldUnit;
  final NPKValues requiredNPK;
  final List<ProductRecommendation> productRecommendations;
  final List<ApplicationSchedule> applicationSchedule;
  final double totalCost;
  final double? costPerAcre;
  final String currency;
  final String? notes;
  final List<String>? recommendations;
  final DateTime calculatedAt;
  final bool savedByUser;
  final bool shared;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  FertilizerCalculation({
    this.id,
    required this.userId,
    this.fieldId,
    required this.cropType,
    required this.fieldSize,
    this.fieldUnit = 'acres',
    required this.soilType,
    required this.currentNPK,
    required this.targetYield,
    this.yieldUnit = 'tons/acre',
    required this.requiredNPK,
    required this.productRecommendations,
    required this.applicationSchedule,
    this.totalCost = 0,
    this.costPerAcre,
    this.currency = 'USD',
    this.notes,
    this.recommendations,
    required this.calculatedAt,
    this.savedByUser = false,
    this.shared = false,
    this.createdAt,
    this.updatedAt,
  });

  factory FertilizerCalculation.fromJson(Map<String, dynamic> json) {
    return FertilizerCalculation(
      id: json['_id'],
      userId: json['userId'] ?? '',
      fieldId: json['fieldId'],
      cropType: json['cropType'] ?? '',
      fieldSize: (json['fieldSize'] ?? 0).toDouble(),
      fieldUnit: json['fieldUnit'] ?? 'acres',
      soilType: json['soilType'] ?? '',
      currentNPK: NPKValues.fromJson(json['currentNPK'] ?? {}),
      targetYield: (json['targetYield'] ?? 0).toDouble(),
      yieldUnit: json['yieldUnit'] ?? 'tons/acre',
      requiredNPK: NPKValues.fromJson(json['requiredNPK'] ?? {}),
      productRecommendations: (json['productRecommendations'] as List<dynamic>?)
              ?.map((p) => ProductRecommendation.fromJson(p))
              .toList() ??
          [],
      applicationSchedule: (json['applicationSchedule'] as List<dynamic>?)
              ?.map((s) => ApplicationSchedule.fromJson(s))
              .toList() ??
          [],
      totalCost: (json['totalCost'] ?? 0).toDouble(),
      costPerAcre: json['costPerAcre']?.toDouble(),
      currency: json['currency'] ?? 'USD',
      notes: json['notes'],
      recommendations: (json['recommendations'] as List<dynamic>?)
          ?.map((r) => r.toString())
          .toList(),
      calculatedAt: DateTime.parse(
        json['calculatedAt'] ?? DateTime.now().toIso8601String(),
      ),
      savedByUser: json['savedByUser'] ?? false,
      shared: json['shared'] ?? false,
      createdAt: json['createdAt'] != null
          ? DateTime.parse(json['createdAt'])
          : null,
      updatedAt: json['updatedAt'] != null
          ? DateTime.parse(json['updatedAt'])
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (id != null) '_id': id,
      'userId': userId,
      if (fieldId != null) 'fieldId': fieldId,
      'cropType': cropType,
      'fieldSize': fieldSize,
      'fieldUnit': fieldUnit,
      'soilType': soilType,
      'currentNPK': currentNPK.toJson(),
      'targetYield': targetYield,
      'yieldUnit': yieldUnit,
      'requiredNPK': requiredNPK.toJson(),
      'productRecommendations':
          productRecommendations.map((p) => p.toJson()).toList(),
      'applicationSchedule':
          applicationSchedule.map((s) => s.toJson()).toList(),
      'totalCost': totalCost,
      if (costPerAcre != null) 'costPerAcre': costPerAcre,
      'currency': currency,
      if (notes != null) 'notes': notes,
      if (recommendations != null) 'recommendations': recommendations,
      'calculatedAt': calculatedAt.toIso8601String(),
      'savedByUser': savedByUser,
      'shared': shared,
      if (createdAt != null) 'createdAt': createdAt!.toIso8601String(),
      if (updatedAt != null) 'updatedAt': updatedAt!.toIso8601String(),
    };
  }

  FertilizerCalculation copyWith({
    String? id,
    String? userId,
    String? fieldId,
    String? cropType,
    double? fieldSize,
    String? fieldUnit,
    String? soilType,
    NPKValues? currentNPK,
    double? targetYield,
    String? yieldUnit,
    NPKValues? requiredNPK,
    List<ProductRecommendation>? productRecommendations,
    List<ApplicationSchedule>? applicationSchedule,
    double? totalCost,
    double? costPerAcre,
    String? currency,
    String? notes,
    List<String>? recommendations,
    DateTime? calculatedAt,
    bool? savedByUser,
    bool? shared,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return FertilizerCalculation(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      fieldId: fieldId ?? this.fieldId,
      cropType: cropType ?? this.cropType,
      fieldSize: fieldSize ?? this.fieldSize,
      fieldUnit: fieldUnit ?? this.fieldUnit,
      soilType: soilType ?? this.soilType,
      currentNPK: currentNPK ?? this.currentNPK,
      targetYield: targetYield ?? this.targetYield,
      yieldUnit: yieldUnit ?? this.yieldUnit,
      requiredNPK: requiredNPK ?? this.requiredNPK,
      productRecommendations:
          productRecommendations ?? this.productRecommendations,
      applicationSchedule: applicationSchedule ?? this.applicationSchedule,
      totalCost: totalCost ?? this.totalCost,
      costPerAcre: costPerAcre ?? this.costPerAcre,
      currency: currency ?? this.currency,
      notes: notes ?? this.notes,
      recommendations: recommendations ?? this.recommendations,
      calculatedAt: calculatedAt ?? this.calculatedAt,
      savedByUser: savedByUser ?? this.savedByUser,
      shared: shared ?? this.shared,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

