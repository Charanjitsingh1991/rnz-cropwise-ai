class FieldCoordinates {
  final double latitude;
  final double longitude;

  FieldCoordinates({
    required this.latitude,
    required this.longitude,
  });

  factory FieldCoordinates.fromJson(Map<String, dynamic> json) {
    return FieldCoordinates(
      latitude: (json['latitude'] ?? 0).toDouble(),
      longitude: (json['longitude'] ?? 0).toDouble(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'latitude': latitude,
      'longitude': longitude,
    };
  }
}

class FieldLocation {
  final String? address;
  final String? city;
  final String? state;
  final String? country;
  final FieldCoordinates? coordinates;

  FieldLocation({
    this.address,
    this.city,
    this.state,
    this.country,
    this.coordinates,
  });

  factory FieldLocation.fromJson(Map<String, dynamic> json) {
    return FieldLocation(
      address: json['address'],
      city: json['city'],
      state: json['state'],
      country: json['country'],
      coordinates: json['coordinates'] != null
          ? FieldCoordinates.fromJson(json['coordinates'])
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (address != null) 'address': address,
      if (city != null) 'city': city,
      if (state != null) 'state': state,
      if (country != null) 'country': country,
      if (coordinates != null) 'coordinates': coordinates!.toJson(),
    };
  }
}

class FieldNPKLevels {
  final double nitrogen;
  final double phosphorus;
  final double potassium;

  FieldNPKLevels({
    required this.nitrogen,
    required this.phosphorus,
    required this.potassium,
  });

  factory FieldNPKLevels.fromJson(Map<String, dynamic> json) {
    return FieldNPKLevels(
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
}

class FieldHealth {
  final String soilHealth; // 'poor', 'fair', 'good', 'excellent'
  final String soilType;
  final double? soilPH;
  final FieldNPKLevels? npkLevels;
  final DateTime? lastSoilTest;
  final String? irrigationType; // 'rainfed', 'drip', 'sprinkler', 'flood'
  final String waterAvailability; // 'poor', 'moderate', 'good'

  FieldHealth({
    this.soilHealth = 'fair',
    required this.soilType,
    this.soilPH,
    this.npkLevels,
    this.lastSoilTest,
    this.irrigationType,
    this.waterAvailability = 'moderate',
  });

  factory FieldHealth.fromJson(Map<String, dynamic> json) {
    return FieldHealth(
      soilHealth: json['soilHealth'] ?? 'fair',
      soilType: json['soilType'] ?? '',
      soilPH: json['soilPH']?.toDouble(),
      npkLevels: json['npkLevels'] != null
          ? FieldNPKLevels.fromJson(json['npkLevels'])
          : null,
      lastSoilTest: json['lastSoilTest'] != null
          ? DateTime.parse(json['lastSoilTest'])
          : null,
      irrigationType: json['irrigationType'],
      waterAvailability: json['waterAvailability'] ?? 'moderate',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'soilHealth': soilHealth,
      'soilType': soilType,
      if (soilPH != null) 'soilPH': soilPH,
      if (npkLevels != null) 'npkLevels': npkLevels!.toJson(),
      if (lastSoilTest != null) 'lastSoilTest': lastSoilTest!.toIso8601String(),
      if (irrigationType != null) 'irrigationType': irrigationType,
      'waterAvailability': waterAvailability,
    };
  }
}

class CropInfo {
  final String cropType;
  final String? variety;
  final String season;
  final DateTime plantingDate;
  final DateTime? expectedHarvestDate;
  final DateTime? actualHarvestDate;
  final double? targetYield;
  final double? actualYield;
  final String yieldUnit;
  final String status; // 'planned', 'planted', 'growing', 'harvested'

  CropInfo({
    required this.cropType,
    this.variety,
    required this.season,
    required this.plantingDate,
    this.expectedHarvestDate,
    this.actualHarvestDate,
    this.targetYield,
    this.actualYield,
    this.yieldUnit = 'tons/acre',
    this.status = 'planned',
  });

  factory CropInfo.fromJson(Map<String, dynamic> json) {
    return CropInfo(
      cropType: json['cropType'] ?? '',
      variety: json['variety'],
      season: json['season'] ?? '',
      plantingDate: DateTime.parse(
        json['plantingDate'] ?? DateTime.now().toIso8601String(),
      ),
      expectedHarvestDate: json['expectedHarvestDate'] != null
          ? DateTime.parse(json['expectedHarvestDate'])
          : null,
      actualHarvestDate: json['actualHarvestDate'] != null
          ? DateTime.parse(json['actualHarvestDate'])
          : null,
      targetYield: json['targetYield']?.toDouble(),
      actualYield: json['actualYield']?.toDouble(),
      yieldUnit: json['yieldUnit'] ?? 'tons/acre',
      status: json['status'] ?? 'planned',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'cropType': cropType,
      if (variety != null) 'variety': variety,
      'season': season,
      'plantingDate': plantingDate.toIso8601String(),
      if (expectedHarvestDate != null)
        'expectedHarvestDate': expectedHarvestDate!.toIso8601String(),
      if (actualHarvestDate != null)
        'actualHarvestDate': actualHarvestDate!.toIso8601String(),
      if (targetYield != null) 'targetYield': targetYield,
      if (actualYield != null) 'actualYield': actualYield,
      'yieldUnit': yieldUnit,
      'status': status,
    };
  }
}

class FieldActivityProduct {
  final String? productId;
  final String productName;
  final double quantity;
  final String unit;
  final double? cost;

  FieldActivityProduct({
    this.productId,
    required this.productName,
    required this.quantity,
    this.unit = 'kg',
    this.cost,
  });

  factory FieldActivityProduct.fromJson(Map<String, dynamic> json) {
    return FieldActivityProduct(
      productId: json['productId'],
      productName: json['productName'] ?? '',
      quantity: (json['quantity'] ?? 0).toDouble(),
      unit: json['unit'] ?? 'kg',
      cost: json['cost']?.toDouble(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (productId != null) 'productId': productId,
      'productName': productName,
      'quantity': quantity,
      'unit': unit,
      if (cost != null) 'cost': cost,
    };
  }
}

class FieldActivity {
  final String activityType; // 'fertilizer', 'pesticide', 'irrigation', 'harvesting', 'other'
  final DateTime date;
  final String description;
  final List<FieldActivityProduct>? products;
  final double? cost;
  final String? notes;

  FieldActivity({
    required this.activityType,
    required this.date,
    required this.description,
    this.products,
    this.cost,
    this.notes,
  });

  factory FieldActivity.fromJson(Map<String, dynamic> json) {
    return FieldActivity(
      activityType: json['activityType'] ?? '',
      date: DateTime.parse(json['date'] ?? DateTime.now().toIso8601String()),
      description: json['description'] ?? '',
      products: (json['products'] as List<dynamic>?)
          ?.map((p) => FieldActivityProduct.fromJson(p))
          .toList(),
      cost: json['cost']?.toDouble(),
      notes: json['notes'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'activityType': activityType,
      'date': date.toIso8601String(),
      'description': description,
      if (products != null)
        'products': products!.map((p) => p.toJson()).toList(),
      if (cost != null) 'cost': cost,
      if (notes != null) 'notes': notes,
    };
  }
}

class Field {
  final String? id;
  final String userId;
  final String name;
  final double size;
  final String unit; // 'acres' or 'hectares'
  final FieldLocation? location;
  final FieldHealth fieldHealth;
  final CropInfo? currentCrop;
  final List<CropInfo> cropHistory;
  final List<FieldActivity> activities;
  final double totalInvestment;
  final double totalRevenue;
  final double profitLoss;
  final String currency;
  final List<String> calculations; // FertilizerCalculation IDs
  final List<String> predictions; // YieldPrediction IDs
  final bool isActive;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  Field({
    this.id,
    required this.userId,
    required this.name,
    required this.size,
    this.unit = 'acres',
    this.location,
    required this.fieldHealth,
    this.currentCrop,
    this.cropHistory = const [],
    this.activities = const [],
    this.totalInvestment = 0,
    this.totalRevenue = 0,
    this.profitLoss = 0,
    this.currency = 'USD',
    this.calculations = const [],
    this.predictions = const [],
    this.isActive = true,
    this.createdAt,
    this.updatedAt,
  });

  factory Field.fromJson(Map<String, dynamic> json) {
    return Field(
      id: json['_id'],
      userId: json['userId'] ?? '',
      name: json['name'] ?? '',
      size: (json['size'] ?? 0).toDouble(),
      unit: json['unit'] ?? 'acres',
      location: json['location'] != null
          ? FieldLocation.fromJson(json['location'])
          : null,
      fieldHealth: FieldHealth.fromJson(json['fieldHealth'] ?? {}),
      currentCrop: json['currentCrop'] != null
          ? CropInfo.fromJson(json['currentCrop'])
          : null,
      cropHistory: (json['cropHistory'] as List<dynamic>?)
              ?.map((c) => CropInfo.fromJson(c))
              .toList() ??
          [],
      activities: (json['activities'] as List<dynamic>?)
              ?.map((a) => FieldActivity.fromJson(a))
              .toList() ??
          [],
      totalInvestment: (json['totalInvestment'] ?? 0).toDouble(),
      totalRevenue: (json['totalRevenue'] ?? 0).toDouble(),
      profitLoss: (json['profitLoss'] ?? 0).toDouble(),
      currency: json['currency'] ?? 'USD',
      calculations: (json['calculations'] as List<dynamic>?)
              ?.map((c) => c.toString())
              .toList() ??
          [],
      predictions: (json['predictions'] as List<dynamic>?)
              ?.map((p) => p.toString())
              .toList() ??
          [],
      isActive: json['isActive'] ?? true,
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
      'name': name,
      'size': size,
      'unit': unit,
      if (location != null) 'location': location!.toJson(),
      'fieldHealth': fieldHealth.toJson(),
      if (currentCrop != null) 'currentCrop': currentCrop!.toJson(),
      'cropHistory': cropHistory.map((c) => c.toJson()).toList(),
      'activities': activities.map((a) => a.toJson()).toList(),
      'totalInvestment': totalInvestment,
      'totalRevenue': totalRevenue,
      'profitLoss': profitLoss,
      'currency': currency,
      'calculations': calculations,
      'predictions': predictions,
      'isActive': isActive,
      if (createdAt != null) 'createdAt': createdAt!.toIso8601String(),
      if (updatedAt != null) 'updatedAt': updatedAt!.toIso8601String(),
    };
  }

  Field copyWith({
    String? id,
    String? userId,
    String? name,
    double? size,
    String? unit,
    FieldLocation? location,
    FieldHealth? fieldHealth,
    CropInfo? currentCrop,
    List<CropInfo>? cropHistory,
    List<FieldActivity>? activities,
    double? totalInvestment,
    double? totalRevenue,
    double? profitLoss,
    String? currency,
    List<String>? calculations,
    List<String>? predictions,
    bool? isActive,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return Field(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      name: name ?? this.name,
      size: size ?? this.size,
      unit: unit ?? this.unit,
      location: location ?? this.location,
      fieldHealth: fieldHealth ?? this.fieldHealth,
      currentCrop: currentCrop ?? this.currentCrop,
      cropHistory: cropHistory ?? this.cropHistory,
      activities: activities ?? this.activities,
      totalInvestment: totalInvestment ?? this.totalInvestment,
      totalRevenue: totalRevenue ?? this.totalRevenue,
      profitLoss: profitLoss ?? this.profitLoss,
      currency: currency ?? this.currency,
      calculations: calculations ?? this.calculations,
      predictions: predictions ?? this.predictions,
      isActive: isActive ?? this.isActive,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

class FieldSummary {
  final int totalFields;
  final double totalArea;
  final double totalInvestment;
  final double totalRevenue;
  final double totalProfitLoss;
  final int activeFields;
  final List<String> crops;

  FieldSummary({
    required this.totalFields,
    required this.totalArea,
    required this.totalInvestment,
    required this.totalRevenue,
    required this.totalProfitLoss,
    required this.activeFields,
    required this.crops,
  });

  factory FieldSummary.fromJson(Map<String, dynamic> json) {
    return FieldSummary(
      totalFields: json['totalFields'] ?? 0,
      totalArea: (json['totalArea'] ?? 0).toDouble(),
      totalInvestment: (json['totalInvestment'] ?? 0).toDouble(),
      totalRevenue: (json['totalRevenue'] ?? 0).toDouble(),
      totalProfitLoss: (json['totalProfitLoss'] ?? 0).toDouble(),
      activeFields: json['activeFields'] ?? 0,
      crops: (json['crops'] as List<dynamic>?)
              ?.map((c) => c.toString())
              .toList() ??
          [],
    );
  }
}

