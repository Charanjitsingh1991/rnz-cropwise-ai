class QuoteRequest {
  final String id;
  final String userId;
  final String userName;
  final String userEmail;
  final String userPhoneNumber;
  final String location;
  final String productId;
  final String productName;
  final String? productImageUrl;
  final int quantity;
  final String status;
  final DateTime createdAt;
  final DateTime updatedAt;

  QuoteRequest({
    required this.id,
    required this.userId,
    required this.userName,
    required this.userEmail,
    required this.userPhoneNumber,
    required this.location,
    required this.productId,
    required this.productName,
    this.productImageUrl,
    required this.quantity,
    required this.status,
    required this.createdAt,
    required this.updatedAt,
  });

  factory QuoteRequest.fromJson(Map<String, dynamic> json) {
    DateTime parseDate(dynamic value) {
      if (value == null) return DateTime.now();
      if (value is int) return DateTime.fromMillisecondsSinceEpoch(value);
      if (value is String) return DateTime.tryParse(value) ?? DateTime.now();
      // Mongo style {"$date": {"$numberLong": "..."}}
      final dateField = value['\$date'];
      if (dateField is Map && dateField['\$numberLong'] != null) {
        final millis = int.tryParse(dateField['\$numberLong'].toString());
        if (millis != null) return DateTime.fromMillisecondsSinceEpoch(millis);
      }
      return DateTime.now();
    }

    final idValue = json['_id'] ?? json['id'] ?? '';
    final idString = idValue is Map && idValue['\$oid'] != null ? idValue['\$oid'].toString() : idValue.toString();

    return QuoteRequest(
      id: idString,
      userId: json['userId'] ?? '',
      userName: json['userName'] ?? '',
      userEmail: json['userEmail'] ?? '',
      userPhoneNumber: json['userPhoneNumber'] ?? '',
      location: json['location'] ?? '',
      productId: json['productId'] ?? '',
      productName: json['productName'] ?? '',
      productImageUrl: json['productImageUrl'],
      quantity: json['quantity'] ?? 1,
      status: json['status'] ?? 'Pending',
      createdAt: parseDate(json['createdAt']),
      updatedAt: parseDate(json['updatedAt']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'userName': userName,
      'userEmail': userEmail,
      'userPhoneNumber': userPhoneNumber,
      'location': location,
      'productId': productId,
      'productName': productName,
      'productImageUrl': productImageUrl,
      'quantity': quantity,
      'status': status,
    };
  }
}
