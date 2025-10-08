class AppNotification {
  final String id;
  final String title;
  final String message;
  final NotificationType type;
  final bool isRead;
  final DateTime createdAt;
  final String? relatedId;
  final String? relatedModel;

  AppNotification({
    required this.id,
    required this.title,
    required this.message,
    required this.type,
    required this.isRead,
    required this.createdAt,
    this.relatedId,
    this.relatedModel,
  });

  factory AppNotification.fromJson(Map<String, dynamic> json) {
    return AppNotification(
      id: json['_id']?.toString() ?? json['id'] ?? '',
      title: json['title'] ?? '',
      message: json['message'] ?? '',
      type: _parseNotificationType(json['type'] ?? 'general'),
      isRead: json['isRead'] ?? false,
      createdAt: json['createdAt'] != null 
        ? DateTime.parse(json['createdAt'].toString())
        : DateTime.now(),
      relatedId: json['relatedId']?.toString(),
      relatedModel: json['relatedModel'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'message': message,
      'type': type.toString().split('.').last,
      'isRead': isRead,
      'createdAt': createdAt.toIso8601String(),
      'relatedId': relatedId,
      'relatedModel': relatedModel,
    };
  }

  AppNotification copyWith({
    String? id,
    String? title,
    String? message,
    NotificationType? type,
    bool? isRead,
    DateTime? createdAt,
    String? relatedId,
    String? relatedModel,
  }) {
    return AppNotification(
      id: id ?? this.id,
      title: title ?? this.title,
      message: message ?? this.message,
      type: type ?? this.type,
      isRead: isRead ?? this.isRead,
      createdAt: createdAt ?? this.createdAt,
      relatedId: relatedId ?? this.relatedId,
      relatedModel: relatedModel ?? this.relatedModel,
    );
  }

  static NotificationType _parseNotificationType(String type) {
    switch (type.toLowerCase()) {
      case 'brochure_request':
        return NotificationType.brochureRequest;
      case 'brochure_uploaded':
        return NotificationType.brochureUploaded;
      case 'product_update':
        return NotificationType.productUpdate;
      case 'general':
      default:
        return NotificationType.general;
    }
  }
}

enum NotificationType {
  brochureRequest,
  brochureUploaded,
  productUpdate,
  general,
}
