class BrochureRequest {
  final String id;
  final String productId;
  final String productName;
  final String requestedBy;
  final String userEmail;
  final String userName;
  final String status;
  final DateTime createdAt;
  final DateTime? updatedAt;

  BrochureRequest({
    required this.id,
    required this.productId,
    required this.productName,
    required this.requestedBy,
    required this.userEmail,
    required this.userName,
    required this.status,
    required this.createdAt,
    this.updatedAt,
  });

  factory BrochureRequest.fromJson(Map<String, dynamic> json) {
    return BrochureRequest(
      id: json['_id']?.toString() ?? json['id'] ?? '',
      productId: json['productId'] ?? '',
      productName: json['productName'] ?? '',
      requestedBy: json['requestedBy'] ?? '',
      userEmail: json['userEmail'] ?? '',
      userName: json['userName'] ?? '',
      status: json['status'] ?? 'pending',
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
      'productId': productId,
      'productName': productName,
      'requestedBy': requestedBy,
      'userEmail': userEmail,
      'userName': userName,
      'status': status,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
    };
  }
}
