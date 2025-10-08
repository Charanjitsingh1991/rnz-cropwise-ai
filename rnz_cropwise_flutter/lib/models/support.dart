import 'package:json_annotation/json_annotation.dart';

part 'support.g.dart';

@JsonSerializable()
class SupportTicket {
  final String id;
  final String? mongoId;
  final String userId;
  final String userName;
  final String subject;
  final String status;
  final DateTime createdAt;
  final DateTime updatedAt;
  final List<SupportMessage> messages;
  final bool isReadByUser;
  final String? category;
  final String? priority;
  final String? assignedTo;

  SupportTicket({
    required this.id,
    this.mongoId,
    required this.userId,
    required this.userName,
    required this.subject,
    this.status = 'open',
    required this.createdAt,
    required this.updatedAt,
    this.messages = const [],
    this.isReadByUser = false,
    this.category,
    this.priority = 'medium',
    this.assignedTo,
  });

  factory SupportTicket.fromJson(Map<String, dynamic> json) => _$SupportTicketFromJson(json);
  Map<String, dynamic> toJson() => _$SupportTicketToJson(this);

  SupportTicket copyWith({
    String? id,
    String? mongoId,
    String? userId,
    String? userName,
    String? subject,
    String? status,
    DateTime? createdAt,
    DateTime? updatedAt,
    List<SupportMessage>? messages,
    bool? isReadByUser,
    String? category,
    String? priority,
    String? assignedTo,
  }) {
    return SupportTicket(
      id: id ?? this.id,
      mongoId: mongoId ?? this.mongoId,
      userId: userId ?? this.userId,
      userName: userName ?? this.userName,
      subject: subject ?? this.subject,
      status: status ?? this.status,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      messages: messages ?? this.messages,
      isReadByUser: isReadByUser ?? this.isReadByUser,
      category: category ?? this.category,
      priority: priority ?? this.priority,
      assignedTo: assignedTo ?? this.assignedTo,
    );
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is SupportTicket && other.id == id;
  }

  @override
  int get hashCode => id.hashCode;

  @override
  String toString() {
    return 'SupportTicket(id: $id, subject: $subject, status: $status)';
  }

  // Getter for description (first message content)
  String get description => messages.isNotEmpty ? messages.first.content : '';
}

@JsonSerializable()
class SupportMessage {
  final String id;
  final String author;
  final String authorName;
  final DateTime timestamp;
  final String content;
  final List<String>? attachments;
  final bool isRead;

  SupportMessage({
    required this.id,
    required this.author,
    required this.authorName,
    required this.timestamp,
    required this.content,
    this.attachments,
    this.isRead = false,
  });

  factory SupportMessage.fromJson(Map<String, dynamic> json) => _$SupportMessageFromJson(json);
  Map<String, dynamic> toJson() => _$SupportMessageToJson(this);

  SupportMessage copyWith({
    String? id,
    String? author,
    String? authorName,
    DateTime? timestamp,
    String? content,
    List<String>? attachments,
    bool? isRead,
  }) {
    return SupportMessage(
      id: id ?? this.id,
      author: author ?? this.author,
      authorName: authorName ?? this.authorName,
      timestamp: timestamp ?? this.timestamp,
      content: content ?? this.content,
      attachments: attachments ?? this.attachments,
      isRead: isRead ?? this.isRead,
    );
  }
}

@JsonSerializable()
class FAQ {
  final String id;
  final String? mongoId;
  final String question;
  final String answer;
  final List<String> keywords;
  final String? category;
  final bool isPublished;
  final int viewCount;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  FAQ({
    required this.id,
    this.mongoId,
    required this.question,
    required this.answer,
    this.keywords = const [],
    this.category,
    this.isPublished = true,
    this.viewCount = 0,
    this.createdAt,
    this.updatedAt,
  });

  factory FAQ.fromJson(Map<String, dynamic> json) => _$FAQFromJson(json);
  Map<String, dynamic> toJson() => _$FAQToJson(this);

  FAQ copyWith({
    String? id,
    String? mongoId,
    String? question,
    String? answer,
    List<String>? keywords,
    String? category,
    bool? isPublished,
    int? viewCount,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return FAQ(
      id: id ?? this.id,
      mongoId: mongoId ?? this.mongoId,
      question: question ?? this.question,
      answer: answer ?? this.answer,
      keywords: keywords ?? this.keywords,
      category: category ?? this.category,
      isPublished: isPublished ?? this.isPublished,
      viewCount: viewCount ?? this.viewCount,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is FAQ && other.id == id;
  }

  @override
  int get hashCode => id.hashCode;

  @override
  String toString() {
    return 'FAQ(id: $id, question: $question, category: $category)';
  }
}

@JsonSerializable()
class FAQCategory {
  final String id;
  final String title;
  final String? description;
  final int faqCount;
  final bool isActive;

  FAQCategory({
    required this.id,
    required this.title,
    this.description,
    this.faqCount = 0,
    this.isActive = true,
  });

  factory FAQCategory.fromJson(Map<String, dynamic> json) => _$FAQCategoryFromJson(json);
  Map<String, dynamic> toJson() => _$FAQCategoryToJson(this);
}
