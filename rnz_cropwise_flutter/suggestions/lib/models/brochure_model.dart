class Brochure {
  final String id;
  final String title;
  final String description;
  final String category;
  final String fileUrl;
  final String fileSize;
  final DateTime createdAt;
  final DateTime updatedAt;

  Brochure({
    required this.id,
    required this.title,
    required this.description,
    required this.category,
    required this.fileUrl,
    required this.fileSize,
    required this.createdAt,
    required this.updatedAt,
  });

  factory Brochure.fromJson(Map<String, dynamic> json) {
    return Brochure(
      id: json['_id'] ?? json['id'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      category: json['category'] ?? '',
      fileUrl: json['fileUrl'] ?? json['url'] ?? '',
      fileSize: json['fileSize'] ?? json['size'] ?? '',
      createdAt: json['createdAt'] != null 
          ? DateTime.parse(json['createdAt']) 
          : DateTime.now(),
      updatedAt: json['updatedAt'] != null 
          ? DateTime.parse(json['updatedAt']) 
          : DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'category': category,
      'fileUrl': fileUrl,
      'fileSize': fileSize,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
    };
  }

  Brochure copyWith({
    String? id,
    String? title,
    String? description,
    String? category,
    String? fileUrl,
    String? fileSize,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return Brochure(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      category: category ?? this.category,
      fileUrl: fileUrl ?? this.fileUrl,
      fileSize: fileSize ?? this.fileSize,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

