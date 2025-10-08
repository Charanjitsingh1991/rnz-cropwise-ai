import '../models/product_category.dart';

class ProductCategories {
  static final List<ProductCategory> categories = [
    ProductCategory(
      id: 'water-soluble-npk',
      name: 'Water Soluble NPK',
      description: 'High-purity fully soluble grades for quick uptake in fertigation and foliar programs.',
      summary: 'High-purity fully soluble grades for quick uptake in fertigation and foliar programs.',
      typicalApplication: 'Vegetative to flowering; fertigation/foliar',
      suitableCrops: 'All crops; strong for vegetables, fruits, hydroponics',
      suitableSoils: 'Loam, Sandy, Silt, Hydroponics',
      form: 'WSF Powder',
    ),
    ProductCategory(
      id: 'granular-npk',
      name: 'Granular NPK',
      description: 'Uniform granules delivering balanced macronutrients for field crops and orchards.',
      summary: 'Uniform granules delivering balanced macronutrients for field crops and orchards.',
      typicalApplication: 'Base/planting & vegetative topdress',
      suitableCrops: 'Cereals, legumes, potatoes, cotton, fruit trees, citrus',
      suitableSoils: 'Loam, Clay, Sandy, Chalky',
      form: 'Granular',
    ),
    ProductCategory(
      id: 'liquid-items',
      name: 'Liquid Items',
      description: 'Concentrated liquid formulations for foliar application and fertigation systems.',
      summary: 'Concentrated liquid formulations for foliar application and fertigation systems.',
      typicalApplication: 'Foliar application, fertigation',
      suitableCrops: 'All crops, especially vegetables and fruits',
      suitableSoils: 'All soil types',
      form: 'Liquid',
    ),
    ProductCategory(
      id: 'suspension-items',
      name: 'Suspension Items',
      description: 'Stable suspensions for uniform application and extended shelf life.',
      summary: 'Stable suspensions for uniform application and extended shelf life.',
      typicalApplication: 'Foliar and soil application',
      suitableCrops: 'Field crops, vegetables, fruits',
      suitableSoils: 'All soil types',
      form: 'Suspension',
    ),
    ProductCategory(
      id: 'sulphur-based',
      name: 'Sulphur Based',
      description: 'Sulphur-enriched products for soil acidification and micronutrient availability.',
      summary: 'Sulphur-enriched products for soil acidification and micronutrient availability.',
      typicalApplication: 'Soil application, pre-planting',
      suitableCrops: 'Cereals, oilseeds, legumes',
      suitableSoils: 'Alkaline, calcareous soils',
      form: 'Granular/Powder',
    ),
    ProductCategory(
      id: 'straights-items',
      name: 'Straights Items',
      description: 'Single nutrient products for targeted fertilization programs.',
      summary: 'Single nutrient products for targeted fertilization programs.',
      typicalApplication: 'Targeted application based on deficiency',
      suitableCrops: 'All crops based on specific needs',
      suitableSoils: 'All soil types',
      form: 'Various',
    ),
    ProductCategory(
      id: 'micro-elements',
      name: 'Micro Elements',
      description: 'Essential micronutrients for plant health and development.',
      summary: 'Essential micronutrients for plant health and development.',
      typicalApplication: 'Foliar application, soil application',
      suitableCrops: 'All crops, especially fruits and vegetables',
      suitableSoils: 'All soil types',
      form: 'Liquid/Powder',
    ),
    ProductCategory(
      id: 'sulphates-products',
      name: 'Sulphates Products',
      description: 'Sulphate-based products for improved nutrient uptake and soil health.',
      summary: 'Sulphate-based products for improved nutrient uptake and soil health.',
      typicalApplication: 'Soil application, fertigation',
      suitableCrops: 'All crops',
      suitableSoils: 'All soil types',
      form: 'Granular/Powder',
    ),
    ProductCategory(
      id: 'bio-organic-items',
      name: 'Bio/Organic Items',
      description: 'Organic and bio-based products for sustainable agriculture.',
      summary: 'Organic and bio-based products for sustainable agriculture.',
      typicalApplication: 'Soil application, foliar application',
      suitableCrops: 'Organic farming, all crops',
      suitableSoils: 'All soil types',
      form: 'Liquid/Powder',
    ),
  ];

  static ProductCategory? getCategoryById(String id) {
    try {
      return categories.firstWhere((category) => category.id == id);
    } catch (e) {
      return null;
    }
  }

  static ProductCategory? getCategoryByName(String name) {
    try {
      return categories.firstWhere((category) => category.name == name);
    } catch (e) {
      return null;
    }
  }

  static List<ProductCategory> searchCategories(String query) {
    final lowercaseQuery = query.toLowerCase();
    return categories.where((category) {
      return category.name.toLowerCase().contains(lowercaseQuery) ||
             category.description.toLowerCase().contains(lowercaseQuery) ||
             category.summary.toLowerCase().contains(lowercaseQuery);
    }).toList();
  }
}
