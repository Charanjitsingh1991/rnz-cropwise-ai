class SupportMessage {
  final String id;
  final String author;
  final String authorName;
  final DateTime timestamp;
  final String content;

  SupportMessage({
    required this.id,
    required this.author,
    required this.authorName,
    required this.timestamp,
    required this.content,
  });

  factory SupportMessage.fromJson(Map<String, dynamic> json) {
    return SupportMessage(
      id: json['_id']?.toString() ?? json['id'] ?? '',
      author: json['author'] ?? '',
      authorName: json['authorName'] ?? '',
      timestamp: json['timestamp'] != null 
          ? DateTime.parse(json['timestamp'].toString())
          : DateTime.now(),
      content: json['content'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'author': author,
      'authorName': authorName,
      'timestamp': timestamp.toIso8601String(),
      'content': content,
    };
  }
}

class SupportTicket {
  final String id;
  final String userId;
  final String userName;
  final String subject;
  final String status;
  final List<SupportMessage> messages;
  final bool isReadByUser;
  final DateTime createdAt;
  final DateTime? updatedAt;

  SupportTicket({
    required this.id,
    required this.userId,
    required this.userName,
    required this.subject,
    required this.status,
    required this.messages,
    required this.isReadByUser,
    required this.createdAt,
    this.updatedAt,
  });

  factory SupportTicket.fromJson(Map<String, dynamic> json) {
    return SupportTicket(
      id: json['_id']?.toString() ?? json['id'] ?? '',
      userId: json['userId'] ?? '',
      userName: json['userName'] ?? '',
      subject: json['subject'] ?? '',
      status: json['status'] ?? 'Open',
      messages: (json['messages'] as List<dynamic>?)
          ?.map((msg) => SupportMessage.fromJson(msg))
          .toList() ?? [],
      isReadByUser: json['isReadByUser'] ?? false,
      createdAt: json['createdAt'] != null 
          ? DateTime.parse(json['createdAt'].toString())
          : DateTime.now(),
      updatedAt: json['updatedAt'] != null 
          ? DateTime.parse(json['updatedAt'].toString())
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'userId': userId,
      'userName': userName,
      'subject': subject,
      'status': status,
      'messages': messages.map((msg) => msg.toJson()).toList(),
      'isReadByUser': isReadByUser,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
    };
  }

  SupportTicket copyWith({
    String? id,
    String? userId,
    String? userName,
    String? subject,
    String? status,
    List<SupportMessage>? messages,
    bool? isReadByUser,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return SupportTicket(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      userName: userName ?? this.userName,
      subject: subject ?? this.subject,
      status: status ?? this.status,
      messages: messages ?? this.messages,
      isReadByUser: isReadByUser ?? this.isReadByUser,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }

  // Helper methods
  bool get isOpen => status == 'Open';
  bool get isAnswered => status == 'Answered';
  bool get isClosed => status == 'Closed';
  
  SupportMessage? get lastMessage => messages.isNotEmpty ? messages.last : null;
}
