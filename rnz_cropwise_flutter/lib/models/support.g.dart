// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'support.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

SupportTicket _$SupportTicketFromJson(Map<String, dynamic> json) =>
    SupportTicket(
      id: json['id'] as String,
      mongoId: json['mongoId'] as String?,
      userId: json['userId'] as String,
      userName: json['userName'] as String,
      subject: json['subject'] as String,
      status: json['status'] as String? ?? 'open',
      createdAt: DateTime.parse(json['createdAt'] as String),
      updatedAt: DateTime.parse(json['updatedAt'] as String),
      messages: (json['messages'] as List<dynamic>?)
              ?.map((e) => SupportMessage.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      isReadByUser: json['isReadByUser'] as bool? ?? false,
      category: json['category'] as String?,
      priority: json['priority'] as String? ?? 'medium',
      assignedTo: json['assignedTo'] as String?,
    );

Map<String, dynamic> _$SupportTicketToJson(SupportTicket instance) =>
    <String, dynamic>{
      'id': instance.id,
      'mongoId': instance.mongoId,
      'userId': instance.userId,
      'userName': instance.userName,
      'subject': instance.subject,
      'status': instance.status,
      'createdAt': instance.createdAt.toIso8601String(),
      'updatedAt': instance.updatedAt.toIso8601String(),
      'messages': instance.messages,
      'isReadByUser': instance.isReadByUser,
      'category': instance.category,
      'priority': instance.priority,
      'assignedTo': instance.assignedTo,
    };

SupportMessage _$SupportMessageFromJson(Map<String, dynamic> json) =>
    SupportMessage(
      id: json['id'] as String,
      author: json['author'] as String,
      authorName: json['authorName'] as String,
      timestamp: DateTime.parse(json['timestamp'] as String),
      content: json['content'] as String,
      attachments: (json['attachments'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList(),
      isRead: json['isRead'] as bool? ?? false,
    );

Map<String, dynamic> _$SupportMessageToJson(SupportMessage instance) =>
    <String, dynamic>{
      'id': instance.id,
      'author': instance.author,
      'authorName': instance.authorName,
      'timestamp': instance.timestamp.toIso8601String(),
      'content': instance.content,
      'attachments': instance.attachments,
      'isRead': instance.isRead,
    };

FAQ _$FAQFromJson(Map<String, dynamic> json) => FAQ(
      id: json['id'] as String,
      mongoId: json['mongoId'] as String?,
      question: json['question'] as String,
      answer: json['answer'] as String,
      keywords: (json['keywords'] as List<dynamic>?)
              ?.map((e) => e as String)
              .toList() ??
          const [],
      category: json['category'] as String?,
      isPublished: json['isPublished'] as bool? ?? true,
      viewCount: (json['viewCount'] as num?)?.toInt() ?? 0,
      createdAt: json['createdAt'] == null
          ? null
          : DateTime.parse(json['createdAt'] as String),
      updatedAt: json['updatedAt'] == null
          ? null
          : DateTime.parse(json['updatedAt'] as String),
    );

Map<String, dynamic> _$FAQToJson(FAQ instance) => <String, dynamic>{
      'id': instance.id,
      'mongoId': instance.mongoId,
      'question': instance.question,
      'answer': instance.answer,
      'keywords': instance.keywords,
      'category': instance.category,
      'isPublished': instance.isPublished,
      'viewCount': instance.viewCount,
      'createdAt': instance.createdAt?.toIso8601String(),
      'updatedAt': instance.updatedAt?.toIso8601String(),
    };

FAQCategory _$FAQCategoryFromJson(Map<String, dynamic> json) => FAQCategory(
      id: json['id'] as String,
      title: json['title'] as String,
      description: json['description'] as String?,
      faqCount: (json['faqCount'] as num?)?.toInt() ?? 0,
      isActive: json['isActive'] as bool? ?? true,
    );

Map<String, dynamic> _$FAQCategoryToJson(FAQCategory instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'description': instance.description,
      'faqCount': instance.faqCount,
      'isActive': instance.isActive,
    };
