import type { Product, Brochure, FilterOptions, SupportTicket, FAQ } from './types';

// Comprehensive static data arrays with all 79 organized products
export const products: Product[] = [
  {
    "id": "prod-1",
    "name": "NPK 19-19-19",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 19-19-19 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2019-19-19",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-1",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-2",
    "name": "NPK 13-40-13",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 13-40-13 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2013-40-13",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-2",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-3",
    "name": "NPK 13-00-45",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 13-00-45 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2013-00-45",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-3",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-4",
    "name": "NPK 06-12-36",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 06-12-36 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2006-12-36",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-4",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-5",
    "name": "NPK 30-10-10",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 30-10-10 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2030-10-10",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-5",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-6",
    "name": "NPK 17-03-26",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 17-03-26 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2017-03-26",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-6",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-7",
    "name": "NPK 13-05-26",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 13-05-26 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2013-05-26",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-7",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-8",
    "name": "NPK 00-52-34",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 00-52-34 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2000-52-34",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-8",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-9",
    "name": "NPK 20-20-20",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 20-20-20 is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2020-20-20",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-9",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-10",
    "name": "NPK 28-14-14+TE",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 28-14-14+TE is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2028-14-14%2BTE",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-10",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-11",
    "name": "NPK 12-12-36+TE",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "NPK 12-12-36+TE is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2012-12-36%2BTE",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-11",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-12",
    "name": "+100 Customized Formula",
    "description": "High-purity fully soluble grades for quick uptake.",
    "longDescription": "+100 Customized Formula is a wsf powder product. High-purity fully soluble grades for quick uptake. Suitable for all crops; strong for vegetables, fruits, hydroponics. Recommended during vegetative to flowering; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=%2B100%20Customized%20Formula",
    "crops": [
      "All crops",
      "strong for vegetables",
      "fruits",
      "hydroponics"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Silt",
      "Hydroponics"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Water Soluble NPK (100% Soluble Powders)"
    ],
    "_id": "prod-12",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-13",
    "name": "NPK 12-11-18",
    "description": "Uniform granules; balanced macronutrients.",
    "longDescription": "NPK 12-11-18 is a granular product. Uniform granules; balanced macronutrients. Suitable for cereals, legumes, potatoes, cotton, fruit trees, citrus. Recommended during base/planting & vegetative topdress. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2012-11-18",
    "crops": [
      "Cereals",
      "legumes",
      "potatoes",
      "cotton",
      "fruit trees",
      "citrus"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Sandy",
      "Chalky"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Granular NPK Grades"
    ],
    "_id": "prod-13",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-14",
    "name": "NPK 12-12-17+2MgO+TE",
    "description": "Uniform granules; balanced macronutrients.",
    "longDescription": "NPK 12-12-17+2MgO+TE is a granular product. Uniform granules; balanced macronutrients. Suitable for cereals, legumes, potatoes, cotton, fruit trees, citrus. Recommended during base/planting & vegetative topdress. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2012-12-17%2B2MgO%2BTE",
    "crops": [
      "Cereals",
      "legumes",
      "potatoes",
      "cotton",
      "fruit trees",
      "citrus"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Sandy",
      "Chalky"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Granular NPK Grades"
    ],
    "_id": "prod-14",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-15",
    "name": "NPK 15-15-15",
    "description": "Uniform granules; balanced macronutrients.",
    "longDescription": "NPK 15-15-15 is a granular product. Uniform granules; balanced macronutrients. Suitable for cereals, legumes, potatoes, cotton, fruit trees, citrus. Recommended during base/planting & vegetative topdress. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2015-15-15",
    "crops": [
      "Cereals",
      "legumes",
      "potatoes",
      "cotton",
      "fruit trees",
      "citrus"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Sandy",
      "Chalky"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Granular NPK Grades"
    ],
    "_id": "prod-15",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-16",
    "name": "NPK 18-5-18",
    "description": "Uniform granules; balanced macronutrients.",
    "longDescription": "NPK 18-5-18 is a granular product. Uniform granules; balanced macronutrients. Suitable for cereals, legumes, potatoes, cotton, fruit trees, citrus. Recommended during base/planting & vegetative topdress. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2018-5-18",
    "crops": [
      "Cereals",
      "legumes",
      "potatoes",
      "cotton",
      "fruit trees",
      "citrus"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Sandy",
      "Chalky"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Granular NPK Grades"
    ],
    "_id": "prod-16",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-17",
    "name": "NPK 19-19-19",
    "description": "Uniform granules; balanced macronutrients.",
    "longDescription": "NPK 19-19-19 is a granular product. Uniform granules; balanced macronutrients. Suitable for cereals, legumes, potatoes, cotton, fruit trees, citrus. Recommended during base/planting & vegetative topdress. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2019-19-19",
    "crops": [
      "Cereals",
      "legumes",
      "potatoes",
      "cotton",
      "fruit trees",
      "citrus"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Sandy",
      "Chalky"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Granular NPK Grades"
    ],
    "_id": "prod-17",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-18",
    "name": "NPK 10-10-40+",
    "description": "Uniform granules; balanced macronutrients.",
    "longDescription": "NPK 10-10-40+ is a granular product. Uniform granules; balanced macronutrients. Suitable for cereals, legumes, potatoes, cotton, fruit trees, citrus. Recommended during base/planting & vegetative topdress. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2010-10-40%2B",
    "crops": [
      "Cereals",
      "legumes",
      "potatoes",
      "cotton",
      "fruit trees",
      "citrus"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Sandy",
      "Chalky"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Granular NPK Grades"
    ],
    "_id": "prod-18",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-19",
    "name": "+100 Customized Formula",
    "description": "Uniform granules; balanced macronutrients.",
    "longDescription": "+100 Customized Formula is a granular product. Uniform granules; balanced macronutrients. Suitable for cereals, legumes, potatoes, cotton, fruit trees, citrus. Recommended during base/planting & vegetative topdress. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=%2B100%20Customized%20Formula",
    "crops": [
      "Cereals",
      "legumes",
      "potatoes",
      "cotton",
      "fruit trees",
      "citrus"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Sandy",
      "Chalky"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Granular NPK Grades"
    ],
    "_id": "prod-19",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-20",
    "name": "NPK 02-07-14",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "NPK 02-07-14 is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2002-07-14",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-20",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-21",
    "name": "Urea Liquid",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Urea Liquid is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Urea%20Liquid",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-21",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-22",
    "name": "NPK 10-08-10",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "NPK 10-08-10 is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2010-08-10",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-22",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-23",
    "name": "NPK 10-10-10",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "NPK 10-10-10 is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2010-10-10",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-23",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-24",
    "name": "Seaweed Liquid",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Seaweed Liquid is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Seaweed%20Liquid",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-24",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-25",
    "name": "Phosphoric Acid",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Phosphoric Acid is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Phosphoric%20Acid",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-25",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-26",
    "name": "Salt Corrector",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Salt Corrector is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Salt%20Corrector",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-26",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-27",
    "name": "Liquid NPK's",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Liquid NPK's is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Liquid%20NPK%E2%80%99s",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-27",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-28",
    "name": "Calcium Thiosulphate (CaTS)",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Calcium Thiosulphate (CaTS) is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Calcium%20Thiosulphate%20%28CaTS%29",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-28",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-29",
    "name": "Ammonium Polyphosphate (APP)",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Ammonium Polyphosphate (APP) is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Ammonium%20Polyphosphate%20%28APP%29",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-29",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-30",
    "name": "Potassium Thiosulphate (KTS)",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "Potassium Thiosulphate (KTS) is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Potassium%20Thiosulphate%20%28KTS%29",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-30",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-31",
    "name": "+100 Customized Formula",
    "description": "Concentrated liquids for rapid response.",
    "longDescription": "+100 Customized Formula is a liquid product. Concentrated liquids for rapid response. Suitable for leafy greens, vegetables, fruits, hydroponics, ornamentals. Recommended during foliar/fertigation across stages; fast correction. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=%2B100%20Customized%20Formula",
    "crops": [
      "Leafy greens",
      "vegetables",
      "fruits",
      "hydroponics",
      "ornamentals"
    ],
    "soilTypes": [
      "Hydroponics",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Liquid Items"
    ],
    "_id": "prod-31",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-32",
    "name": "NPK 0-52-34",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "NPK 0-52-34 is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%200-52-34",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-32",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-33",
    "name": "NPK 12-6-60",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "NPK 12-6-60 is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2012-6-60",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-33",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-34",
    "name": "NPK 12-52-08",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "NPK 12-52-08 is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2012-52-08",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-34",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-35",
    "name": "NPK 12-61-0",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "NPK 12-61-0 is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2012-61-0",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-35",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-36",
    "name": "NPK 25-25-25",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "NPK 25-25-25 is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2025-25-25",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-36",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-37",
    "name": "NPK 40-10-10",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "NPK 40-10-10 is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2040-10-10",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-37",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-38",
    "name": "NPK 21-21-21",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "NPK 21-21-21 is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=NPK%2021-21-21",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-38",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-39",
    "name": "+10 Customized Formula",
    "description": "Stable suspensions delivering high analysis NPK.",
    "longDescription": "+10 Customized Formula is a suspension product. Stable suspensions delivering high analysis NPK. Suitable for cereals, cotton, rice, citrus, fruit trees. Recommended during vegetative to fruiting; fertigation/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=%2B10%20Customized%20Formula",
    "crops": [
      "Cereals",
      "cotton",
      "rice",
      "citrus",
      "fruit trees"
    ],
    "soilTypes": [
      "Loam",
      "Clay",
      "Chalky",
      "Alkaline"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Suspension Items"
    ],
    "_id": "prod-39",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-40",
    "name": "RNZ SB+ (SB 90%)",
    "description": "Elemental/compound S with optional Zn/B; pH & S correction.",
    "longDescription": "RNZ SB+ (SB 90%) is a sulphur/amendment product. Elemental/compound S with optional Zn/B; pH & S correction. Suitable for oilseeds, legumes, cereals; s & zn correction. Recommended during pre-plant or early season; soil amendment. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=RNZ%20SB%2B%20%28SB%2090%25%29",
    "crops": [
      "Oilseeds",
      "legumes",
      "cereals",
      "S & Zn correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Loam",
      "Sandy",
      "Clay"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphur Based"
    ],
    "_id": "prod-40",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-41",
    "name": "RNZ ES 99.5%",
    "description": "Elemental/compound S with optional Zn/B; pH & S correction.",
    "longDescription": "RNZ ES 99.5% is a sulphur/amendment product. Elemental/compound S with optional Zn/B; pH & S correction. Suitable for oilseeds, legumes, cereals; s & zn correction. Recommended during pre-plant or early season; soil amendment. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=RNZ%20ES%2099.5%25",
    "crops": [
      "Oilseeds",
      "legumes",
      "cereals",
      "S & Zn correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Loam",
      "Sandy",
      "Clay"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphur Based"
    ],
    "_id": "prod-41",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-42",
    "name": "RNZ SB+Zn 8%",
    "description": "Elemental/compound S with optional Zn/B; pH & S correction.",
    "longDescription": "RNZ SB+Zn 8% is a sulphur/amendment product. Elemental/compound S with optional Zn/B; pH & S correction. Suitable for oilseeds, legumes, cereals; s & zn correction. Recommended during pre-plant or early season; soil amendment. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=RNZ%20SB%2BZn%208%25",
    "crops": [
      "Oilseeds",
      "legumes",
      "cereals",
      "S & Zn correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Loam",
      "Sandy",
      "Clay"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphur Based"
    ],
    "_id": "prod-42",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-43",
    "name": "RNZ SB+Zn18%",
    "description": "Elemental/compound S with optional Zn/B; pH & S correction.",
    "longDescription": "RNZ SB+Zn18% is a sulphur/amendment product. Elemental/compound S with optional Zn/B; pH & S correction. Suitable for oilseeds, legumes, cereals; s & zn correction. Recommended during pre-plant or early season; soil amendment. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=RNZ%20SB%2BZn18%25",
    "crops": [
      "Oilseeds",
      "legumes",
      "cereals",
      "S & Zn correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Loam",
      "Sandy",
      "Clay"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphur Based"
    ],
    "_id": "prod-43",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-44",
    "name": "RNZ SB+B1.20%",
    "description": "Elemental/compound S with optional Zn/B; pH & S correction.",
    "longDescription": "RNZ SB+B1.20% is a sulphur/amendment product. Elemental/compound S with optional Zn/B; pH & S correction. Suitable for oilseeds, legumes, cereals; s & zn correction. Recommended during pre-plant or early season; soil amendment. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=RNZ%20SB%2BB1.20%25",
    "crops": [
      "Oilseeds",
      "legumes",
      "cereals",
      "S & Zn correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Loam",
      "Sandy",
      "Clay"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphur Based"
    ],
    "_id": "prod-44",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-45",
    "name": "RNZ NS 10+ (10-0-0-7.5S)",
    "description": "Elemental/compound S with optional Zn/B; pH & S correction.",
    "longDescription": "RNZ NS 10+ (10-0-0-7.5S) is a sulphur/amendment product. Elemental/compound S with optional Zn/B; pH & S correction. Suitable for oilseeds, legumes, cereals; s & zn correction. Recommended during pre-plant or early season; soil amendment. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=RNZ%20NS%2010%2B%20%2810-0-0-7.5S%29",
    "crops": [
      "Oilseeds",
      "legumes",
      "cereals",
      "S & Zn correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Loam",
      "Sandy",
      "Clay"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphur Based"
    ],
    "_id": "prod-45",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-46",
    "name": "RNZ NS 20+ (20-0-0-50S)",
    "description": "Elemental/compound S with optional Zn/B; pH & S correction.",
    "longDescription": "RNZ NS 20+ (20-0-0-50S) is a sulphur/amendment product. Elemental/compound S with optional Zn/B; pH & S correction. Suitable for oilseeds, legumes, cereals; s & zn correction. Recommended during pre-plant or early season; soil amendment. Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=RNZ%20NS%2020%2B%20%2820-0-0-50S%29",
    "crops": [
      "Oilseeds",
      "legumes",
      "cereals",
      "S & Zn correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Loam",
      "Sandy",
      "Clay"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphur Based"
    ],
    "_id": "prod-46",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-47",
    "name": "Prilled / Granular Urea",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Prilled / Granular Urea is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Prilled%20/%20Granular%20Urea",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-47",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-48",
    "name": "Mono Ammonium Phosphate",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Mono Ammonium Phosphate is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Mono%20Ammonium%20Phosphate",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-48",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-49",
    "name": "Mono Potassium Phosphate",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Mono Potassium Phosphate is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Mono%20Potassium%20Phosphate",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-49",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-50",
    "name": "Potassium Nitrate (Powder & Prilled)",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Potassium Nitrate (Powder & Prilled) is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Potassium%20Nitrate%20%28Powder%20%26%20Prilled%29",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-50",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-51",
    "name": "Calcium Nitrate with Boron",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Calcium Nitrate with Boron is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Calcium%20Nitrate%20with%20Boron",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-51",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-52",
    "name": "Calcium Nitrate – Soluble",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Calcium Nitrate – Soluble is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Calcium%20Nitrate%20%E2%80%93%20Soluble",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-52",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-53",
    "name": "Potassium Magnesium Sulphate",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Potassium Magnesium Sulphate is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Potassium%20Magnesium%20Sulphate",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-53",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-54",
    "name": "Potassium Sulphate (Standard, Soluble, Granular)",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Potassium Sulphate (Standard, Soluble, Granular) is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Potassium%20Sulphate%20%28Standard%2C%20Soluble%2C%20Granular%29",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-54",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-55",
    "name": "Triple Superphosphate",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "Triple Superphosphate is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=Triple%20Superphosphate",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-55",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-56",
    "name": "TSP, DAP, MAP – Granular",
    "description": "Single-nutrient or binary sources (N, P, K, Ca, etc.).",
    "longDescription": "TSP, DAP, MAP – Granular is a straight product. Single-nutrient or binary sources (N, P, K, Ca, etc.). Suitable for all crops (depending on nutrient need). Recommended during as per nutrient plan (base/topdress/foliar). Application: Soil Application; At planting and topdress.",
    "imageUrl": "https://placehold.co/600x400.png?text=TSP%2C%20DAP%2C%20MAP%20%E2%80%93%20Granular",
    "crops": [
      "All crops (depending on nutrient need)"
    ],
    "soilTypes": [
      "Varies",
      "common: Loam",
      "Clay",
      "Sandy"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Straights Items"
    ],
    "_id": "prod-56",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-57",
    "name": "Fe EDDHA 6%",
    "description": "Chelated/available trace elements.",
    "longDescription": "Fe EDDHA 6% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Fe%20EDDHA%206%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-57",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-58",
    "name": "Fe EDTA 12%",
    "description": "Chelated/available trace elements.",
    "longDescription": "Fe EDTA 12% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Fe%20EDTA%2012%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-58",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-59",
    "name": "Fe EDTA 15%",
    "description": "Chelated/available trace elements.",
    "longDescription": "Fe EDTA 15% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Fe%20EDTA%2015%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-59",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-60",
    "name": "Cu EDTA 15%",
    "description": "Chelated/available trace elements.",
    "longDescription": "Cu EDTA 15% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Cu%20EDTA%2015%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-60",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-61",
    "name": "Mn EDTA 13%",
    "description": "Chelated/available trace elements.",
    "longDescription": "Mn EDTA 13% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Mn%20EDTA%2013%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-61",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-62",
    "name": "Zn EDTA 15%",
    "description": "Chelated/available trace elements.",
    "longDescription": "Zn EDTA 15% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Zn%20EDTA%2015%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-62",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-63",
    "name": "Zn EDTA 15%",
    "description": "Chelated/available trace elements.",
    "longDescription": "Zn EDTA 15% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Zn%20EDTA%2015%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-63",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-64",
    "name": "MgNa EDTA 6%",
    "description": "Chelated/available trace elements.",
    "longDescription": "MgNa EDTA 6% is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=MgNa%20EDTA%206%25",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-64",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-65",
    "name": "Di-Sodium Octa Borate Tetrahydrate",
    "description": "Chelated/available trace elements.",
    "longDescription": "Di-Sodium Octa Borate Tetrahydrate is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Di-Sodium%20Octa%20Borate%20Tetrahydrate",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-65",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-66",
    "name": "DOT (Boron - 21%)",
    "description": "Chelated/available trace elements.",
    "longDescription": "DOT (Boron - 21%) is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=DOT%20%28Boron%20-%2021%25%29",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-66",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-67",
    "name": "Boric Acid",
    "description": "Chelated/available trace elements.",
    "longDescription": "Boric Acid is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Boric%20Acid",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-67",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-68",
    "name": "Combi Mix",
    "description": "Chelated/available trace elements.",
    "longDescription": "Combi Mix is a micronutrient product. Chelated/available trace elements. Suitable for fruit trees, citrus, grapes, greens; deficiency correction. Recommended during as deficiency appears; foliar or fertigation. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Combi%20Mix",
    "crops": [
      "Fruit trees",
      "citrus",
      "grapes",
      "greens",
      "deficiency correction"
    ],
    "soilTypes": [
      "Alkaline",
      "Acidic (per element)",
      "Sandy",
      "Loam",
      "Peat"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Micro Elements"
    ],
    "_id": "prod-68",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-69",
    "name": "Zinc Sulphate – Hepta & Mono",
    "description": "Sulphate salts of Zn, Mg, Mn, Fe, Cu.",
    "longDescription": "Zinc Sulphate – Hepta & Mono is a micronutrient (sulphate) product. Sulphate salts of Zn, Mg, Mn, Fe, Cu. Suitable for cereals, vegetables, oilseeds; mg/zn/mn/fe/cu correction. Recommended during deficiency correction; soil/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Zinc%20Sulphate%20%E2%80%93%20Hepta%20%26%20Mono",
    "crops": [
      "Cereals",
      "vegetables",
      "oilseeds",
      "Mg",
      "Zn",
      "Mn",
      "Fe",
      "Cu correction"
    ],
    "soilTypes": [
      "Sandy",
      "Acidic",
      "Loam"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphates Products"
    ],
    "_id": "prod-69",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-70",
    "name": "Magnesium Sulphate – Hepta, Mono & Anhydrous",
    "description": "Sulphate salts of Zn, Mg, Mn, Fe, Cu.",
    "longDescription": "Magnesium Sulphate – Hepta, Mono & Anhydrous is a micronutrient (sulphate) product. Sulphate salts of Zn, Mg, Mn, Fe, Cu. Suitable for cereals, vegetables, oilseeds; mg/zn/mn/fe/cu correction. Recommended during deficiency correction; soil/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Magnesium%20Sulphate%20%E2%80%93%20Hepta%2C%20Mono%20%26%20Anhydrous",
    "crops": [
      "Cereals",
      "vegetables",
      "oilseeds",
      "Mg",
      "Zn",
      "Mn",
      "Fe",
      "Cu correction"
    ],
    "soilTypes": [
      "Sandy",
      "Acidic",
      "Loam"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphates Products"
    ],
    "_id": "prod-70",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-71",
    "name": "Manganese Sulphate",
    "description": "Sulphate salts of Zn, Mg, Mn, Fe, Cu.",
    "longDescription": "Manganese Sulphate is a micronutrient (sulphate) product. Sulphate salts of Zn, Mg, Mn, Fe, Cu. Suitable for cereals, vegetables, oilseeds; mg/zn/mn/fe/cu correction. Recommended during deficiency correction; soil/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Manganese%20Sulphate",
    "crops": [
      "Cereals",
      "vegetables",
      "oilseeds",
      "Mg",
      "Zn",
      "Mn",
      "Fe",
      "Cu correction"
    ],
    "soilTypes": [
      "Sandy",
      "Acidic",
      "Loam"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphates Products"
    ],
    "_id": "prod-71",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-72",
    "name": "Ferrous Sulphate – Hepta & Mono",
    "description": "Sulphate salts of Zn, Mg, Mn, Fe, Cu.",
    "longDescription": "Ferrous Sulphate – Hepta & Mono is a micronutrient (sulphate) product. Sulphate salts of Zn, Mg, Mn, Fe, Cu. Suitable for cereals, vegetables, oilseeds; mg/zn/mn/fe/cu correction. Recommended during deficiency correction; soil/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Ferrous%20Sulphate%20%E2%80%93%20Hepta%20%26%20Mono",
    "crops": [
      "Cereals",
      "vegetables",
      "oilseeds",
      "Mg",
      "Zn",
      "Mn",
      "Fe",
      "Cu correction"
    ],
    "soilTypes": [
      "Sandy",
      "Acidic",
      "Loam"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphates Products"
    ],
    "_id": "prod-72",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-73",
    "name": "Copper Sulphate – Pentahydrate",
    "description": "Sulphate salts of Zn, Mg, Mn, Fe, Cu.",
    "longDescription": "Copper Sulphate – Pentahydrate is a micronutrient (sulphate) product. Sulphate salts of Zn, Mg, Mn, Fe, Cu. Suitable for cereals, vegetables, oilseeds; mg/zn/mn/fe/cu correction. Recommended during deficiency correction; soil/foliar. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Copper%20Sulphate%20%E2%80%93%20Pentahydrate",
    "crops": [
      "Cereals",
      "vegetables",
      "oilseeds",
      "Mg",
      "Zn",
      "Mn",
      "Fe",
      "Cu correction"
    ],
    "soilTypes": [
      "Sandy",
      "Acidic",
      "Loam"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Sulphates Products"
    ],
    "_id": "prod-73",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-74",
    "name": "Granular Gypsum",
    "description": "Biostimulants & soil improvers.",
    "longDescription": "Granular Gypsum is a organic/bio product. Biostimulants & soil improvers. Suitable for all crops; organic & soil health programs. Recommended during any stage; soil conditioning. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Granular%20Gypsum",
    "crops": [
      "All crops",
      "organic & soil health programs"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Clay",
      "Peat",
      "Acidic"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Bio/Organic Items"
    ],
    "_id": "prod-74",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-75",
    "name": "Guano Phosphate",
    "description": "Biostimulants & soil improvers.",
    "longDescription": "Guano Phosphate is a organic/bio product. Biostimulants & soil improvers. Suitable for all crops; organic & soil health programs. Recommended during any stage; soil conditioning. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Guano%20Phosphate",
    "crops": [
      "All crops",
      "organic & soil health programs"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Clay",
      "Peat",
      "Acidic"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Bio/Organic Items"
    ],
    "_id": "prod-75",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-76",
    "name": "Humic / Fulvic Acid",
    "description": "Biostimulants & soil improvers.",
    "longDescription": "Humic / Fulvic Acid is a organic/bio product. Biostimulants & soil improvers. Suitable for all crops; organic & soil health programs. Recommended during any stage; soil conditioning. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Humic%20/%20Fulvic%20Acid",
    "crops": [
      "All crops",
      "organic & soil health programs"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Clay",
      "Peat",
      "Acidic"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Bio/Organic Items"
    ],
    "_id": "prod-76",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-77",
    "name": "Seaweed Range",
    "description": "Biostimulants & soil improvers.",
    "longDescription": "Seaweed Range is a organic/bio product. Biostimulants & soil improvers. Suitable for all crops; organic & soil health programs. Recommended during any stage; soil conditioning. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Seaweed%20Range",
    "crops": [
      "All crops",
      "organic & soil health programs"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Clay",
      "Peat",
      "Acidic"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Bio/Organic Items"
    ],
    "_id": "prod-77",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-78",
    "name": "Soil Conditioners",
    "description": "Biostimulants & soil improvers.",
    "longDescription": "Soil Conditioners is a organic/bio product. Biostimulants & soil improvers. Suitable for all crops; organic & soil health programs. Recommended during any stage; soil conditioning. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Soil%20Conditioners",
    "crops": [
      "All crops",
      "organic & soil health programs"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Clay",
      "Peat",
      "Acidic"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Bio/Organic Items"
    ],
    "_id": "prod-78",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  },
  {
    "id": "prod-79",
    "name": "Amino Acids",
    "description": "Biostimulants & soil improvers.",
    "longDescription": "Amino Acids is a organic/bio product. Biostimulants & soil improvers. Suitable for all crops; organic & soil health programs. Recommended during any stage; soil conditioning. Application: Foliar, Fertigation; Every 7-15 days.",
    "imageUrl": "https://placehold.co/600x400.png?text=Amino%20Acids",
    "crops": [
      "All crops",
      "organic & soil health programs"
    ],
    "soilTypes": [
      "Loam",
      "Sandy",
      "Clay",
      "Peat",
      "Acidic"
    ],
    "regions": [
      "Worldwide"
    ],
    "moistureLevels": [
      "All"
    ],
    "categories": [
      "Bio/Organic Items"
    ],
    "_id": "prod-79",
    "isActive": true,
    "isFeatured": false,
    "tags": [],
    "specifications": {},
    "application": {
      "method": ["Foliar", "Fertigation"],
      "rate": { "min": 2, "max": 5, "unit": "kg/ha" },
      "frequency": "Every 7-15 days",
      "timing": "As per growth stage"
    },
    "createdAt": "2025-08-18T13:25:40.499Z",
    "updatedAt": "2025-08-18T13:25:40.499Z"
  }
];

// Brochures are now managed through Firebase Storage and MongoDB
// See /api/brochures for the new brochure system

export const filterOptions: FilterOptions = {
  crops: [
    'All Crops',
    'Corn',
    'Wheat', 
    'Soybeans',
    'Tomatoes',
    'Potatoes',
    'Cotton',
    'Leafy Greens',
    'Fruit Trees',
    'Berries',
    'Grapes',
    'Peppers',
    'Lettuce',
    'Rice',
    'Vegetables',
    'Citrus',
    'Ornamentals',
    'Cereals',
    'Legumes',
    'Oilseeds',
    'Hydroponics'
  ],
  soilTypes: [
    'All',
    'Loam',
    'Sandy',
    'Silt',
    'Clay',
    'Peat',
    'Hydroponics',
    'Chalky',
    'Alkaline',
    'Acidic'
  ],
  regions: [
    'All',
    'Worldwide',
    'North America',
    'Europe',
    'Asia',
    'Africa',
    'South America',
    'Australia'
  ],
  moistureLevels: [
    'All',
    'Low',
    'Moderate',
    'High'
  ],
  growthStages: [
    'All Stages',
    'Seedling',
    'Vegetative',
    'Flowering',
    'Fruiting',
    'Maturity'
  ],
  categories: [
    'All Categories',
    'Water Soluble NPK',
    'Granular NPK',
    'Liquid Items',
    'Suspension Items',
    'Sulphur Based',
    'Straights Items',
    'Micro Elements',
    'Sulphates Products',
    'Bio/Organic Items'
  ]
};

export const supportTickets: SupportTicket[] = [
  {
    id: 'ticket-1',
    userId: 'user-123',
    userName: 'John Farmer',
    subject: 'Product recommendation for tomatoes',
    status: 'Open',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    messages: [
      {
        id: 'msg-1',
        author: 'user',
        authorName: 'John Farmer',
        timestamp: '2024-01-15T10:30:00Z',
        content: 'I need help selecting the right fertilizer for my tomato crop. I have a 2-hectare field with sandy loam soil.'
      }
    ],
    isReadByUser: false,
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is the best NPK ratio for tomatoes?',
    answer: 'For tomatoes, a balanced NPK ratio like 19-19-19 works well during vegetative growth, while 13-40-13 is excellent during flowering and fruit set.',
    category: 'Product Usage',
    keywords: ['npk', 'tomatoes', 'fertilizer'],
  },
  {
    id: 'faq-2', 
    question: 'How often should I apply water-soluble fertilizers?',
    answer: 'Water-soluble fertilizers can be applied every 7-14 days depending on crop needs and growth stage. Always follow the recommended application rates.',
    category: 'Application',
    keywords: ['application', 'frequency', 'water-soluble'],
  },
];

// NOTE: Pilot countries moved to dedicated file: @/lib/datasets/pilot-countries-locations.ts
// This ensures single source of truth and prevents sync issues
