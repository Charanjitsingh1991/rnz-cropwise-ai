class DiseaseDetectionInput {
  final String imageUrl;
  final String? cropType;
  final String? description;

  DiseaseDetectionInput({
    required this.imageUrl,
    this.cropType,
    this.description,
  });

  factory DiseaseDetectionInput.fromJson(Map<String, dynamic> json) {
    return DiseaseDetectionInput(
      imageUrl: json['imageUrl'] ?? '',
      cropType: json['cropType'],
      description: json['description'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'imageUrl': imageUrl,
      'cropType': cropType,
      'description': description,
    };
  }
}
