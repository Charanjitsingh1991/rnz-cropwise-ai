class SupportCategory {
  final String id;
  final String title;
  final String description;
  final int faqCount;
  final bool isActive;
  final DateTime createdAt;

  SupportCategory({
    required this.id,
    required this.title,
    required this.description,
    required this.faqCount,
    required this.isActive,
    required this.createdAt,
  });

  factory SupportCategory.fromJson(Map<String, dynamic> json) {
    return SupportCategory(
      id: json['id'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      faqCount: json['faqCount'] ?? 0,
      isActive: json['isActive'] ?? true,
      createdAt: DateTime.parse(json['createdAt'] ?? DateTime.now().toIso8601String()),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'description': description,
      'faqCount': faqCount,
      'isActive': isActive,
      'createdAt': createdAt.toIso8601String(),
    };
  }

  SupportCategory copyWith({
    String? id,
    String? title,
    String? description,
    int? faqCount,
    bool? isActive,
    DateTime? createdAt,
  }) {
    return SupportCategory(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      faqCount: faqCount ?? this.faqCount,
      isActive: isActive ?? this.isActive,
      createdAt: createdAt ?? this.createdAt,
    );
  }
}
