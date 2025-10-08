class ProductCategory {
  final String id;
  final String name;
  final String description;
  final String summary;
  final String typicalApplication;
  final String suitableCrops;
  final String suitableSoils;
  final String form;

  ProductCategory({
    required this.id,
    required this.name,
    required this.description,
    required this.summary,
    required this.typicalApplication,
    required this.suitableCrops,
    required this.suitableSoils,
    required this.form,
  });

  factory ProductCategory.fromJson(Map<String, dynamic> json) {
    return ProductCategory(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      description: json['description'] ?? '',
      summary: json['summary'] ?? '',
      typicalApplication: json['typicalApplication'] ?? '',
      suitableCrops: json['suitableCrops'] ?? '',
      suitableSoils: json['suitableSoils'] ?? '',
      form: json['form'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'description': description,
      'summary': summary,
      'typicalApplication': typicalApplication,
      'suitableCrops': suitableCrops,
      'suitableSoils': suitableSoils,
      'form': form,
    };
  }
}
