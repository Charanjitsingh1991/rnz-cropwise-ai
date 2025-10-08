class User {
  final String id;
  final String? name; // Display name
  final String fullName;
  final String email;
  final String phone;
  final String location; // country
  final String farmSize; // state
  final String cropType; // city
  final String experience;
  final String? profileImageUrl;
  final DateTime createdAt;
  final DateTime updatedAt;

  User({
    required this.id,
    this.name,
    required this.fullName,
    required this.email,
    required this.phone,
    required this.location,
    required this.farmSize,
    required this.cropType,
    required this.experience,
    this.profileImageUrl,
    required this.createdAt,
    required this.updatedAt,
  });

  factory User.fromJson(Map<String, dynamic> json) {
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

    final idValue = json['id'] ?? json['_id'] ?? json['uid'] ?? '';
    final idString = idValue is Map && idValue['\$oid'] != null ? idValue['\$oid'].toString() : idValue.toString();

    return User(
      id: idString,
      name: json['name'] ?? json['displayName'],
      fullName: json['fullName'] ?? json['displayName'] ?? json['name'] ?? '',
      email: json['email'] ?? '',
      phone: json['phone'] ?? json['phoneNumber'] ?? '',
      location: json['location'] ?? json['country'] ?? '',
      farmSize: json['farmSize'] ?? json['state'] ?? '',
      cropType: json['cropType'] ?? json['city'] ?? '',
      experience: json['experience'] ?? '',
      profileImageUrl: json['profileImageUrl'],
      createdAt: parseDate(json['createdAt']),
      updatedAt: parseDate(json['updatedAt']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'fullName': fullName,
      'email': email,
      'phone': phone,
      'location': location,
      'farmSize': farmSize,
      'cropType': cropType,
      'experience': experience,
      'profileImageUrl': profileImageUrl,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
    };
  }

  User copyWith({
    String? id,
    String? name,
    String? fullName,
    String? email,
    String? phone,
    String? location,
    String? farmSize,
    String? cropType,
    String? experience,
    String? profileImageUrl,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return User(
      id: id ?? this.id,
      name: name ?? this.name,
      fullName: fullName ?? this.fullName,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      location: location ?? this.location,
      farmSize: farmSize ?? this.farmSize,
      cropType: cropType ?? this.cropType,
      experience: experience ?? this.experience,
      profileImageUrl: profileImageUrl ?? this.profileImageUrl,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}
