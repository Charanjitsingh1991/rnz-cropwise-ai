class Country {
  final String name;
  final String code;
  final String phoneCode;
  final List<int> phoneLength;
  final String flag;

  const Country({
    required this.name,
    required this.code,
    required this.phoneCode,
    required this.phoneLength,
    required this.flag,
  });

  factory Country.fromJson(Map<String, dynamic> json) {
    return Country(
      name: json['name'] ?? '',
      code: json['code'] ?? '',
      phoneCode: json['phoneCode'] ?? '',
      phoneLength: List<int>.from(json['phoneLength'] ?? []),
      flag: json['flag'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'code': code,
      'phoneCode': phoneCode,
      'phoneLength': phoneLength,
      'flag': flag,
    };
  }
}
