class User {
  final String id;
  final String email;
  final String fullName;
  final String displayName;
  final String country;
  final String phoneNumber;
  final bool isAdmin;
  final String? fcmToken;
  final DateTime createdAt;
  final DateTime updatedAt;
  final bool isEmailVerified;
  final String? profileImage;

  User({
    required this.id,
    required this.email,
    required this.fullName,
    required this.displayName,
    required this.country,
    required this.phoneNumber,
    this.isAdmin = false,
    this.fcmToken,
    required this.createdAt,
    required this.updatedAt,
    this.isEmailVerified = false,
    this.profileImage,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['_id'] ?? json['id'],
      email: json['email'],
      fullName: json['fullName'],
      displayName: json['displayName'],
      country: json['country'],
      phoneNumber: json['phoneNumber'],
      isAdmin: json['isAdmin'] ?? false,
      fcmToken: json['fcmToken'],
      createdAt: DateTime.parse(json['createdAt']),
      updatedAt: DateTime.parse(json['updatedAt']),
      isEmailVerified: json['isEmailVerified'] ?? false,
      profileImage: json['profileImage'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'email': email,
      'fullName': fullName,
      'displayName': displayName,
      'country': country,
      'phoneNumber': phoneNumber,
      'isAdmin': isAdmin,
      'fcmToken': fcmToken,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
      'isEmailVerified': isEmailVerified,
      'profileImage': profileImage,
    };
  }

  User copyWith({
    String? id,
    String? email,
    String? fullName,
    String? displayName,
    String? country,
    String? phoneNumber,
    bool? isAdmin,
    String? fcmToken,
    DateTime? createdAt,
    DateTime? updatedAt,
    bool? isEmailVerified,
    String? profileImage,
  }) {
    return User(
      id: id ?? this.id,
      email: email ?? this.email,
      fullName: fullName ?? this.fullName,
      displayName: displayName ?? this.displayName,
      country: country ?? this.country,
      phoneNumber: phoneNumber ?? this.phoneNumber,
      isAdmin: isAdmin ?? this.isAdmin,
      fcmToken: fcmToken ?? this.fcmToken,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      isEmailVerified: isEmailVerified ?? this.isEmailVerified,
      profileImage: profileImage ?? this.profileImage,
    );
  }
}

