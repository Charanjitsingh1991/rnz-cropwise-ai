class AIAdvisorInput {
  final String crop;
  final String soil;
  final String region;
  final String moisture;
  final String growthStage;
  final String? country;
  final String? state;
  final String? district;

  AIAdvisorInput({
    required this.crop,
    required this.soil,
    required this.region,
    required this.moisture,
    required this.growthStage,
    this.country,
    this.state,
    this.district,
  });

  factory AIAdvisorInput.fromJson(Map<String, dynamic> json) {
    return AIAdvisorInput(
      crop: json['crop'] ?? '',
      soil: json['soil'] ?? '',
      region: json['region'] ?? '',
      moisture: json['moisture'] ?? '',
      growthStage: json['growthStage'] ?? '',
      country: json['country'],
      state: json['state'],
      district: json['district'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'crop': crop,
      'soil': soil,
      'region': region,
      'moisture': moisture,
      'growthStage': growthStage,
      'country': country,
      'state': state,
      'district': district,
    };
  }
}
