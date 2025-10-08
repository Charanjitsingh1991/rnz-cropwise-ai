// import 'package:json_annotation/json_annotation.dart';

// part 'brochure.g.dart';

// @JsonSerializable()
class Brochure {
  final String id;
  final String? mongoId;
  final String title;
  final String? description;
  final String fileUrl;
  final String? thumbnailUrl;
  final String category;
  final String language;
  final List<String> regions;
  final List<String> crops;
  final List<String> linkedProducts;
  final List<String> tags;
  final bool isFeatured;
  final String status;
  final String? createdBy;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final DateTime? addedAt;
  final BrochureMetadata? metadata;

  Brochure({
    required this.id,
    this.mongoId,
    required this.title,
    this.description,
    required this.fileUrl,
    this.thumbnailUrl,
    required this.category,
    this.language = 'en',
    this.regions = const [],
    this.crops = const [],
    this.linkedProducts = const [],
    this.tags = const [],
    this.isFeatured = false,
    this.status = 'published',
    this.createdBy,
    this.createdAt,
    this.updatedAt,
    this.addedAt,
    this.metadata,
  });

  factory Brochure.fromJson(Map<String, dynamic> json) {
    // Handle MongoDB ObjectId format
    String getId() {
      if (json['_id'] != null) {
        if (json['_id'] is Map && json['_id']['\$oid'] != null) {
          return json['_id']['\$oid'].toString();
        }
        return json['_id'].toString();
      }
      return json['id']?.toString() ?? '';
    }

    // Handle linkedProducts array with ObjectIds
    List<String> getLinkedProducts() {
      final linkedProducts = json['linkedProducts'] as List<dynamic>?;
      if (linkedProducts == null) return [];
      
      return linkedProducts.map((product) {
        if (product is Map && product['\$oid'] != null) {
          return product['\$oid'].toString();
        }
        return product.toString();
      }).toList();
    }

    // Handle fileSize which can be a number or string
    String getFileSize() {
      final fileSize = json['fileSize'];
      if (fileSize == null) return '';
      if (fileSize is Map && fileSize['\$numberInt'] != null) {
        return fileSize['\$numberInt'].toString();
      }
      return fileSize.toString();
    }

    return Brochure(
      id: getId(),
      mongoId: json['mongoId'] as String?,
      title: json['title'] as String? ?? '',
      description: json['description'] as String?,
      fileUrl: json['fileUrl'] as String? ?? '',
      thumbnailUrl: json['thumbnailUrl'] as String?,
      category: json['category'] as String? ?? '',
      language: json['language'] as String? ?? 'en',
      regions: (json['regions'] as List<dynamic>?)?.map((e) => e.toString()).toList() ?? [],
      crops: (json['crops'] as List<dynamic>?)?.map((e) => e.toString()).toList() ?? [],
      linkedProducts: getLinkedProducts(),
      tags: (json['tags'] as List<dynamic>?)?.map((e) => e.toString()).toList() ?? [],
      isFeatured: json['isFeatured'] as bool? ?? false,
      status: json['status'] as String? ?? 'published',
      createdBy: json['createdBy'] != null ? 
        (json['createdBy'] is Map && json['createdBy']['\$oid'] != null ? 
          json['createdBy']['\$oid'].toString() : json['createdBy'].toString()) : null,
      createdAt: json['createdAt'] != null ? 
        (json['createdAt'] is Map && json['createdAt']['\$date'] != null ? 
          DateTime.fromMillisecondsSinceEpoch(json['createdAt']['\$date']['\$numberLong']) :
          DateTime.parse(json['createdAt'].toString())) : null,
      updatedAt: json['updatedAt'] != null ? 
        (json['updatedAt'] is Map && json['updatedAt']['\$date'] != null ? 
          DateTime.fromMillisecondsSinceEpoch(json['updatedAt']['\$date']['\$numberLong']) :
          DateTime.parse(json['updatedAt'].toString())) : null,
      addedAt: json['addedAt'] != null ? DateTime.parse(json['addedAt'].toString()) : null,
      metadata: json['metadata'] != null ? BrochureMetadata.fromJson(json['metadata'] as Map<String, dynamic>) : null,
    );
  }
  
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'mongoId': mongoId,
      'title': title,
      'description': description,
      'fileUrl': fileUrl,
      'thumbnailUrl': thumbnailUrl,
      'category': category,
      'language': language,
      'regions': regions,
      'crops': crops,
      'linkedProducts': linkedProducts,
      'tags': tags,
      'isFeatured': isFeatured,
      'status': status,
      'createdBy': createdBy,
      'createdAt': createdAt?.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
      'addedAt': addedAt?.toIso8601String(),
      'metadata': metadata?.toJson(),
    };
  }

  Brochure copyWith({
    String? id,
    String? mongoId,
    String? title,
    String? description,
    String? fileUrl,
    String? thumbnailUrl,
    String? category,
    String? language,
    List<String>? regions,
    List<String>? crops,
    List<String>? linkedProducts,
    List<String>? tags,
    bool? isFeatured,
    String? status,
    String? createdBy,
    DateTime? createdAt,
    DateTime? updatedAt,
    DateTime? addedAt,
    BrochureMetadata? metadata,
  }) {
    return Brochure(
      id: id ?? this.id,
      mongoId: mongoId ?? this.mongoId,
      title: title ?? this.title,
      description: description ?? this.description,
      fileUrl: fileUrl ?? this.fileUrl,
      thumbnailUrl: thumbnailUrl ?? this.thumbnailUrl,
      category: category ?? this.category,
      language: language ?? this.language,
      regions: regions ?? this.regions,
      crops: crops ?? this.crops,
      linkedProducts: linkedProducts ?? this.linkedProducts,
      tags: tags ?? this.tags,
      isFeatured: isFeatured ?? this.isFeatured,
      status: status ?? this.status,
      createdBy: createdBy ?? this.createdBy,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      addedAt: addedAt ?? this.addedAt,
      metadata: metadata ?? this.metadata,
    );
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is Brochure && other.id == id;
  }

  @override
  int get hashCode => id.hashCode;

  @override
  String toString() {
    return 'Brochure(id: $id, title: $title, category: $category)';
  }
}

// @JsonSerializable()
class BrochureMetadata {
  final int fileSize;
  final String fileType;
  final int pageCount;
  final String? version;
  final DateTime? lastModified;

  BrochureMetadata({
    required this.fileSize,
    required this.fileType,
    this.pageCount = 0,
    this.version,
    this.lastModified,
  });

  factory BrochureMetadata.fromJson(Map<String, dynamic> json) {
    return BrochureMetadata(
      fileSize: json['fileSize'] as int? ?? 0,
      fileType: json['fileType'] as String? ?? '',
      pageCount: json['pageCount'] as int? ?? 0,
      version: json['version'] as String?,
      lastModified: json['lastModified'] != null ? DateTime.parse(json['lastModified'].toString()) : null,
    );
  }
  
  Map<String, dynamic> toJson() {
    return {
      'fileSize': fileSize,
      'fileType': fileType,
      'pageCount': pageCount,
      'version': version,
      'lastModified': lastModified?.toIso8601String(),
    };
  }
}


