class SupportTicketMessage {
  final String author; // 'user' or 'admin'
  final String authorName;
  final DateTime timestamp;
  final String content;

  SupportTicketMessage({
    required this.author,
    required this.authorName,
    required this.timestamp,
    required this.content,
  });

  factory SupportTicketMessage.fromJson(Map<String, dynamic> json) {
    return SupportTicketMessage(
      author: json['author'] ?? '',
      authorName: json['authorName'] ?? '',
      timestamp: json['timestamp'] != null 
          ? DateTime.parse(json['timestamp']) 
          : DateTime.now(),
      content: json['content'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'author': author,
      'authorName': authorName,
      'timestamp': timestamp.toIso8601String(),
      'content': content,
    };
  }
}

class SupportTicket {
  final String? id;
  final String userId;
  final String userName;
  final String subject;
  final String status; // 'Open', 'Answered', 'Closed'
  final List<SupportTicketMessage> messages;
  final bool isReadByUser;
  final DateTime createdAt;
  final DateTime updatedAt;

  SupportTicket({
    this.id,
    required this.userId,
    required this.userName,
    required this.subject,
    required this.status,
    required this.messages,
    required this.isReadByUser,
    required this.createdAt,
    required this.updatedAt,
  });

  factory SupportTicket.fromJson(Map<String, dynamic> json) {
    return SupportTicket(
      id: json['_id'],
      userId: json['userId'] ?? '',
      userName: json['userName'] ?? '',
      subject: json['subject'] ?? '',
      status: json['status'] ?? 'Open',
      messages: (json['messages'] as List<dynamic>?)
          ?.map((msg) => SupportTicketMessage.fromJson(msg))
          .toList() ?? [],
      isReadByUser: json['isReadByUser'] ?? false,
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
      if (id != null) '_id': id,
      'userId': userId,
      'userName': userName,
      'subject': subject,
      'status': status,
      'messages': messages.map((msg) => msg.toJson()).toList(),
      'isReadByUser': isReadByUser,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
    };
  }

  SupportTicket copyWith({
    String? id,
    String? userId,
    String? userName,
    String? subject,
    String? status,
    List<SupportTicketMessage>? messages,
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

  String get statusDisplay {
    switch (status) {
      case 'Open':
        return 'Open';
      case 'Answered':
        return 'Answered';
      case 'Closed':
        return 'Closed';
      default:
        return 'Unknown';
    }
  }

  bool get isOpen => status == 'Open';
  bool get isAnswered => status == 'Answered';
  bool get isClosed => status == 'Closed';
  
  SupportTicketMessage? get lastMessage => 
      messages.isNotEmpty ? messages.last : null;
}
