class QuoteRequest {
  final String id;
  final String userId;
  final String userName;
  final String userEmail;
  final String location;
  final int quantity;
  final String productId;
  final String productName;
  final String productImageUrl;
  final String status;
  final DateTime createdAt;

  QuoteRequest({
    required this.id,
    required this.userId,
    required this.userName,
    required this.userEmail,
    required this.location,
    required this.quantity,
    required this.productId,
    required this.productName,
    required this.productImageUrl,
    required this.status,
    required this.createdAt,
  });

  factory QuoteRequest.fromJson(Map<String, dynamic> json) {
    return QuoteRequest(
      id: json['_id']?.toString() ?? json['id'] ?? '',
      userId: json['userId'] ?? '',
      userName: json['userName'] ?? '',
      userEmail: json['userEmail'] ?? '',
      location: json['location'] ?? '',
      quantity: json['quantity'] ?? 1,
      productId: json['productId'] ?? '',
      productName: json['productName'] ?? '',
      productImageUrl: json['productImageUrl'] ?? '',
      status: json['status'] ?? 'Pending',
      createdAt: json['createdAt'] != null 
          ? DateTime.parse(json['createdAt'].toString())
          : DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'userId': userId,
      'userName': userName,
      'userEmail': userEmail,
      'location': location,
      'quantity': quantity,
      'productId': productId,
      'productName': productName,
      'productImageUrl': productImageUrl,
      'status': status,
      'createdAt': createdAt.toIso8601String(),
    };
  }

  QuoteRequest copyWith({
    String? id,
    String? userId,
    String? userName,
    String? userEmail,
    String? location,
    int? quantity,
    String? productId,
    String? productName,
    String? productImageUrl,
    String? status,
    DateTime? createdAt,
  }) {
    return QuoteRequest(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      userName: userName ?? this.userName,
      userEmail: userEmail ?? this.userEmail,
      location: location ?? this.location,
      quantity: quantity ?? this.quantity,
      productId: productId ?? this.productId,
      productName: productName ?? this.productName,
      productImageUrl: productImageUrl ?? this.productImageUrl,
      status: status ?? this.status,
      createdAt: createdAt ?? this.createdAt,
    );
  }

  // Helper methods
  bool get isPending => status == 'Pending';
  bool get isContacted => status == 'Contacted';
  bool get isClosed => status == 'Closed';
}
