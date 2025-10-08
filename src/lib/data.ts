import type { Product, Brochure, FilterOptions, SupportTicket, FAQ } from './types';
// Use MongoDB native client instead of Mongoose models
import clientPromise from './mongodb/client';

// Static data arrays (fallback) - These can be imported by client components
export const products: Product[] = [
  // 1. Water Soluble NPK
  {
    id: 'prod-1',
    name: 'NPK 19-19-19',
    description: 'A balanced water-soluble fertilizer for all-purpose use.',
    longDescription: 'NPK 19-19-19 is a fully water-soluble fertilizer with a balanced ratio of Nitrogen, Phosphorus, and Potassium. It is designed for general-purpose use throughout the crop growth cycle to ensure healthy vegetative and reproductive development. Ideal for fertigation and foliar application.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['Moderate', 'High'],
    categories: ['Water Soluble NPK (100% Soluble Powders)'],
  },
  {
    id: 'prod-2',
    name: 'NPK 13-40-13',
    description: 'High-phosphorus formula for root development and flowering.',
    longDescription: 'A water-soluble fertilizer rich in Phosphorus, essential for establishing a strong root system, promoting flowering, and improving fruit set. Recommended for use during the early growth and pre-flowering stages.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['Moderate'],
    categories: ['Water Soluble NPK (100% Soluble Powders)'],
  },
  {
    id: 'prod-3',
    name: 'NPK 13-00-45',
    description: 'Potassium Nitrate for improved fruit quality and stress resistance.',
    longDescription: 'A fully soluble source of potassium and nitrogen, crucial for fruit development, improved quality (size, color, sugar content), and enhanced plant tolerance to abiotic stress.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Water Soluble NPK (100% Soluble Powders)', 'Straights Items'],
  },
  {
    id: 'prod-4',
    name: 'NPK 06-12-36',
    description: 'Potassium-rich fertilizer for fruit development and quality.',
    longDescription: 'This high-potassium formula is designed to enhance fruit size, color, and sweetness. It also improves plant hardiness and resistance to stress. Best applied during the fruit development and maturation stages.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['Moderate', 'High'],
    categories: ['Water Soluble NPK (100% Soluble Powders)'],
  },
  {
    id: 'prod-5',
    name: 'NPK 30-10-10',
    description: 'High-nitrogen fertilizer for rapid vegetative growth.',
    longDescription: 'A nitrogen-dominant formula perfect for stimulating rapid vegetative growth, especially in leafy greens and young plants. It promotes lush, green foliage and is ideal for the initial growth phase.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['High'],
    categories: ['Water Soluble NPK (100% Soluble Powders)'],
  },
  {
    id: 'prod-6',
    name: 'NPK 17-03-26',
    description: 'Balanced growth formula with high potassium for various crops.',
    longDescription: 'Provides a balanced mix of nutrients with an emphasis on potassium to support overall plant health, from vegetative growth to fruit production. Suitable for a wide range of crops.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['Moderate'],
    categories: ['Water Soluble NPK (100% Soluble Powders)'],
  },
  {
    id: 'prod-7',
    name: 'NPK 13-05-26',
    description: 'Potassium-focused fertilizer for mid to late season application.',
    longDescription: 'A formulation designed for application during the mid to late growth stages, providing essential potassium to support fruit filling, quality enhancement, and plant strength.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Water Soluble NPK'],
  },
  {
    id: 'prod-8',
    name: 'NPK 00-52-34',
    description: 'Mono Potassium Phosphate (MKP) for flowering and fruiting.',
    longDescription: 'A highly concentrated source of Phosphorus and Potassium, completely water-soluble and free of nitrogen. Ideal for inducing flowering and supporting fruit development.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Water Soluble NPK', 'Straights Items'],
  },
  {
    id: 'prod-9',
    name: 'NPK 20-20-20',
    description: 'An evenly balanced NPK formula for all growth stages.',
    longDescription: 'A versatile 1:1:1 ratio NPK fertilizer that provides a balanced nutrient supply throughout the plant\'s lifecycle, supporting vegetative growth, flowering, and fruiting.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Water Soluble NPK'],
  },
  {
    id: 'prod-10',
    name: 'NPK 28-14-14+TE',
    description: 'High-nitrogen formula with trace elements for early growth.',
    longDescription: 'A growth-boosting formula with high nitrogen content and a full spectrum of trace elements (TE). Excellent for the vegetative stage to ensure vigorous plant development.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['High'],
    categories: ['Water Soluble NPK'],
  },
  {
    id: 'prod-11',
    name: 'NPK 12-12-36+TE',
    description: 'High-potassium formula with trace elements for maturation.',
    longDescription: 'A potassium-rich formula supplemented with trace elements, designed for the maturation and reproductive stages. Improves fruit quality, shelf life, and plant resilience.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
    soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Water Soluble NPK'],
  },
  // 2. Granular NPK Grades
  {
    id: 'prod-12',
    name: 'NPK 12-11-18',
    description: 'A balanced granular fertilizer for steady nutrient release.',
    longDescription: 'A high-quality granular NPK fertilizer providing a balanced supply of essential nutrients for sustained crop growth. Its granular form ensures a slow and steady release, feeding the plants over a longer period.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Potatoes', 'Cotton', 'Fruit Trees', 'Oilseeds', 'Rice', 'Legumes', 'Citrus'],
    soilTypes: ['Loam', 'Clay', 'Sandy', 'Chalky'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Granular NPK'],
  },
  {
    id: 'prod-13',
    name: 'NPK 12-12-17+2MgO+TE',
    description: 'Complex granular fertilizer with Magnesium and Trace Elements.',
    longDescription: 'A comprehensive granular formula that provides NPK, Magnesium, and essential trace elements. Supports robust growth and helps prevent nutrient deficiencies.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Potatoes', 'Cotton', 'Fruit Trees', 'Oilseeds', 'Rice', 'Legumes', 'Citrus'],
    soilTypes: ['Loam', 'Clay', 'Sandy', 'Chalky'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Granular NPK'],
  },
  {
    id: 'prod-14',
    name: 'NPK 15-15-15',
    description: 'An all-purpose granular fertilizer with equal nutrient ratios.',
    longDescription: 'A versatile granular fertilizer with a 1:1:1 nutrient ratio, making it suitable for a wide variety of crops and soil types. It provides a solid foundation for healthy plant growth from start to finish.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Potatoes', 'Cotton', 'Fruit Trees', 'Oilseeds', 'Rice', 'Legumes', 'Citrus'],
    soilTypes: ['Loam', 'Clay', 'Sandy', 'Chalky'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Granular NPK'],
  },
  {
    id: 'prod-15',
    name: 'NPK 18-5-18',
    description: 'Balanced granular NPK for sustained growth and development.',
    longDescription: 'A granular fertilizer with balanced Nitrogen and Potassium, and lower Phosphorus, suitable for maintenance and production phases in many crops.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Potatoes', 'Cotton', 'Fruit Trees', 'Oilseeds', 'Rice', 'Legumes', 'Citrus'],
    soilTypes: ['Loam', 'Clay', 'Sandy', 'Chalky'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Granular NPK'],
  },
  {
    id: 'prod-16',
    name: 'NPK 19-19-19 (Granular)',
    description: 'All-purpose 1:1:1 granular fertilizer for broad application.',
    longDescription: 'The granular version of the classic 19-19-19, providing balanced nutrition in a slow-release form for soil application.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Potatoes', 'Cotton', 'Fruit Trees', 'Oilseeds', 'Rice', 'Legumes', 'Citrus'],
    soilTypes: ['Loam', 'Clay', 'Sandy', 'Chalky'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Granular NPK'],
  },
  {
    id: 'prod-17',
    name: 'NPK 10-10-40+',
    description: 'High-potassium granular mix for finishing stages.',
    longDescription: 'A granular blend with a high concentration of potassium, designed for the final growth stages to maximize yield and quality.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Soybeans', 'Potatoes', 'Cotton', 'Fruit Trees', 'Oilseeds', 'Rice', 'Legumes', 'Citrus'],
    soilTypes: ['Loam', 'Clay', 'Sandy', 'Chalky'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Granular NPK'],
  },
  // 3. Liquid Items
  {
    id: 'prod-18',
    name: 'NPK 02-07-14',
    description: 'Low nitrogen liquid fertilizer for flowering and fruiting.',
    longDescription: 'A liquid formulation with low nitrogen and high phosphorus and potassium, designed to promote flowering and enhance fruit development without encouraging excessive vegetative growth.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-19',
    name: 'Urea Liquid',
    description: 'A concentrated liquid nitrogen source for quick uptake.',
    longDescription: 'Urea Liquid provides a fast-acting source of nitrogen, readily absorbed by plants through both foliar and soil application. It is excellent for correcting nitrogen deficiencies and boosting vegetative growth.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-20',
    name: 'NPK 10-08-10',
    description: 'General purpose liquid NPK for balanced growth.',
    longDescription: 'A balanced liquid NPK formulation suitable for use throughout the crop cycle to maintain healthy growth and development.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-21',
    name: 'NPK 10-10-10',
    description: 'Balanced liquid 1:1:1 NPK for versatile application.',
    longDescription: 'A versatile and balanced liquid fertilizer, perfect for a wide range of plants and growth stages, providing equal parts N, P, and K.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-22',
    name: 'Seaweed Liquid',
    description: 'Organic biostimulant to enhance plant health and stress tolerance.',
    longDescription: 'A natural, organic liquid derived from seaweed. It is rich in hormones, micronutrients, and vitamins that stimulate root growth, improve nutrient uptake, and enhance the plant\'s ability to withstand environmental stress.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse', 'Organic Farming'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items', 'Bio/Organic Items'],
  },
  {
    id: 'prod-23',
    name: 'Phosphoric Acid',
    description: 'Acidifying agent and phosphorus source for irrigation systems.',
    longDescription: 'Used to lower the pH of irrigation water and as a source of phosphorus. Helps prevent clogging of drip systems and makes nutrients more available in alkaline soils.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-24',
    name: 'Salt Corrector',
    description: 'Liquid soil amendment to manage soil salinity.',
    longDescription: 'A specialized liquid product designed to improve soil structure and reduce the negative effects of high salinity on crop growth by improving water infiltration and leaching of excess salts.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse', 'Drought-Prone Crops'],
    soilTypes: ['Saline Soils', 'Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Arid Regions', 'Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-25',
    name: 'Liquid NPKs',
    description: 'A range of custom liquid NPK formulations.',
    longDescription: 'Represents a diverse range of custom-blended liquid NPK fertilizers, tailored to specific crop needs and grower requirements.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-26',
    name: 'Calcium Thiosulphate (CaTS)',
    description: 'Liquid source of calcium and sulphur.',
    longDescription: 'A clear liquid fertilizer that provides readily available calcium and thiosulfate sulfur. It improves soil structure, enhances water infiltration, and supplies essential nutrients.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-27',
    name: 'Ammonium Polyphosphate (APP)',
    description: 'Liquid phosphate fertilizer for starter applications.',
    longDescription: 'A highly soluble liquid fertilizer containing nitrogen and phosphorus. Commonly used as a starter fertilizer to promote early root growth and seedling vigor.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  {
    id: 'prod-28',
    name: 'Potassium Thiosulphate (KTS)',
    description: 'Liquid source of potassium and sulphur, chloride-free.',
    longDescription: 'A clear, chloride-free liquid fertilizer providing a high concentration of potassium and thiosulfate sulfur. Ideal for improving yield and quality in a wide range of crops.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Leafy Greens', 'Lettuce', 'Tomatoes', 'Peppers', 'Berries', 'Grapes', 'Vegetables', 'Ornamentals', 'Greenhouse'],
    soilTypes: ['Hydroponics', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Liquid Items'],
  },
  // 4. Suspension Items
  {
    id: 'prod-74',
    name: 'NPK 0-52-34 (Suspension)',
    description: 'High P and K suspension for flowering and fruiting.',
    longDescription: 'A high analysis suspension of Mono Potassium Phosphate (MKP), providing a concentrated dose of phosphorus and potassium to encourage robust flowering and fruit development.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Cotton', 'Oilseeds', 'Rice', 'Citrus', 'Fruit Trees'],
    soilTypes: ['Loam', 'Clay', 'Chalky', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Suspension Items'],
  },
  {
    id: 'prod-29',
    name: 'NPK 12-6-60',
    description: 'High potassium suspension for late-season application.',
    longDescription: 'A suspension fertilizer with a very high potassium content, designed for the final stages of crop development to maximize fruit size, quality, and storage potential.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Cotton', 'Oilseeds', 'Rice', 'Citrus', 'Fruit Trees'],
    soilTypes: ['Loam', 'Clay', 'Chalky', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Suspension Items'],
  },
  {
    id: 'prod-30',
    name: 'NPK 12-52-08',
    description: 'High phosphorus suspension for root and flower development.',
    longDescription: 'A suspension formula rich in phosphorus to vigorously promote root establishment and flower formation, setting the stage for high yields.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Cotton', 'Oilseeds', 'Rice', 'Citrus', 'Fruit Trees'],
    soilTypes: ['Loam', 'Clay', 'Chalky', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Suspension Items'],
  },
  {
    id: 'prod-31',
    name: 'NPK 12-61-0',
    description: 'Mono-Ammonium Phosphate (MAP) suspension.',
    longDescription: 'A suspension form of MAP, offering a high concentration of phosphorus and nitrogen for easy handling and application, promoting strong early growth.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Cotton', 'Oilseeds', 'Rice', 'Citrus', 'Fruit Trees'],
    soilTypes: ['Loam', 'Clay', 'Chalky', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Suspension Items', 'Straights Items'],
  },
  {
    id: 'prod-32',
    name: 'NPK 25-25-25',
    description: 'Balanced 1:1:1 NPK suspension for all stages.',
    longDescription: 'A highly concentrated and balanced NPK suspension fertilizer, suitable for providing a complete nutritional package throughout the crop lifecycle.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Cotton', 'Oilseeds', 'Rice', 'Citrus', 'Fruit Trees'],
    soilTypes: ['Loam', 'Clay', 'Chalky', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Suspension Items'],
  },
  {
    id: 'prod-33',
    name: 'NPK 40-10-10',
    description: 'High nitrogen suspension for vegetative boost.',
    longDescription: 'A suspension fertilizer with a high nitrogen content to fuel rapid vegetative growth and ensure a strong start for crops.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Cotton', 'Oilseeds', 'Rice', 'Citrus', 'Fruit Trees'],
    soilTypes: ['Loam', 'Clay', 'Chalky', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Suspension Items'],
  },
  {
    id: 'prod-34',
    name: 'NPK 21-21-21',
    description: 'Balanced suspension fertilizer for continuous feeding.',
    longDescription: 'A stable, balanced NPK suspension that provides continuous nutrition, suitable for a wide range of crops and application methods.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Corn', 'Wheat', 'Cotton', 'Oilseeds', 'Rice', 'Citrus', 'Fruit Trees'],
    soilTypes: ['Loam', 'Clay', 'Chalky', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Suspension Items'],
  },
  // 5. Sulphur Based
  {
    id: 'prod-35',
    name: 'RNZ SB+ (SB 90%)',
    description: 'High-purity Sulphur for correcting deficiencies and improving soil.',
    longDescription: 'A high-analysis sulphur product (90% SB) for rapid correction of sulphur deficiency. It plays a crucial role in protein synthesis and enzyme function, and also helps in lowering soil pH in alkaline conditions.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Oilseeds', 'Legumes', 'Rice', 'Cotton', 'Wheat', 'Drought-Prone Crops'],
    soilTypes: ['Alkaline', 'Loam', 'Sandy', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphur Based'],
  },
  {
    id: 'prod-36',
    name: 'RNZ ES 99.5%',
    description: 'Elemental Sulphur with 99.5% purity for agriculture.',
    longDescription: 'An extremely pure form of elemental sulphur, essential for plant growth and for amending alkaline soils. Its slow release provides season-long availability.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Oilseeds', 'Legumes', 'Rice', 'Cotton', 'Wheat', 'Drought-Prone Crops'],
    soilTypes: ['Alkaline', 'Loam', 'Sandy', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphur Based'],
  },
  {
    id: 'prod-37',
    name: 'RNZ SB+Zn 8%',
    description: 'Sulphur bentonite with 8% Zinc for combined nutrition.',
    longDescription: 'Combines the benefits of sulphur with zinc in a single granule, ensuring balanced nutrition and addressing common deficiencies simultaneously.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Oilseeds', 'Legumes', 'Rice', 'Cotton', 'Wheat', 'Drought-Prone Crops'],
    soilTypes: ['Alkaline', 'Loam', 'Sandy', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphur Based'],
  },
  {
    id: 'prod-38',
    name: 'RNZ SB+Zn18%',
    description: 'Sulphur bentonite with 18% Zinc for high-demand crops.',
    longDescription: 'A high-zinc sulphur bentonite formulation for crops with a higher demand for zinc, promoting strong growth and enzymatic functions.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Oilseeds', 'Legumes', 'Rice', 'Cotton', 'Wheat', 'Drought-Prone Crops'],
    soilTypes: ['Alkaline', 'Loam', 'Sandy', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphur Based'],
  },
  {
    id: 'prod-39',
    name: 'RNZ SB+B1.20%',
    description: 'Sulphur bentonite fortified with 1.20% Boron.',
    longDescription: 'Provides essential sulphur and boron together, crucial for nitrogen metabolism, cell wall formation, and reproductive growth.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Oilseeds', 'Legumes', 'Rice', 'Cotton', 'Wheat', 'Drought-Prone Crops'],
    soilTypes: ['Alkaline', 'Loam', 'Sandy', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphur Based'],
  },
  {
    id: 'prod-40',
    name: 'RNZ NS 10+ (10-0-0-7.5S)',
    description: 'Liquid nitrogen and sulphur blend.',
    longDescription: 'A liquid fertilizer providing a balanced ratio of nitrogen and sulphur, critical for protein synthesis and overall plant vigor.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Oilseeds', 'Legumes', 'Rice', 'Cotton', 'Wheat', 'Drought-Prone Crops'],
    soilTypes: ['Alkaline', 'Loam', 'Sandy', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphur Based', 'Liquid Items'],
  },
  {
    id: 'prod-41',
    name: 'RNZ NS 20+ (20-0-0-50S)',
    description: 'High-sulphur liquid fertilizer with nitrogen.',
    longDescription: 'A concentrated liquid blend of nitrogen and high levels of sulphur, designed for crops with high sulphur requirements to maximize yield and quality.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Oilseeds', 'Legumes', 'Rice', 'Cotton', 'Wheat', 'Drought-Prone Crops'],
    soilTypes: ['Alkaline', 'Loam', 'Sandy', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphur Based', 'Liquid Items'],
  },
  // 6. Straights Items
  {
    id: 'prod-42',
    name: 'Prilled / Granular Urea',
    description: 'Cost-effective solid nitrogen fertilizer.',
    longDescription: 'A widely used solid nitrogen fertilizer, available in prilled and granular forms, providing a high concentration of nitrogen for soil application.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Loam', 'Clay', 'Sandy'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-43',
    name: 'Mono Ammonium Phosphate',
    description: 'A highly soluble source of nitrogen and phosphorus.',
    longDescription: 'Commonly known as MAP, this is a highly efficient source of phosphorus and nitrogen (as ammonia). It is fully water-soluble and ideal for use in the initial growth stages to promote root development.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Acidic', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-44',
    name: 'Mono Potassium Phosphate',
    description: 'Highly soluble P and K source, also known as MKP.',
    longDescription: 'A chloride-free, fully water-soluble fertilizer containing high concentrations of phosphorus and potassium. Ideal for flowering and fruiting stages.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-45',
    name: 'Potassium Nitrate (Powder & Prilled)',
    description: 'Soluble potassium and nitrate-nitrogen source.',
    longDescription: 'A versatile fertilizer providing readily available potassium and nitrate nitrogen. Available in powder for fertigation and prilled for soil application.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Loam', 'Sandy', 'Silt', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-46',
    name: 'Calcium Nitrate with Boron',
    description: 'Soluble calcium and nitrogen with added boron.',
    longDescription: 'Provides readily available calcium and nitrate-nitrogen, fortified with boron to improve cell wall strength, reduce fruit cracking, and enhance pollination.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Acidic', 'Peat', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-47',
    name: 'Calcium Nitrate – Soluble',
    description: 'A water-soluble source of calcium and nitrogen.',
    longDescription: 'A highly soluble fertilizer used to supply calcium and nitrate nitrogen to crops, essential for cell division, growth, and preventing calcium-related disorders.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Acidic', 'Peat', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-48',
    name: 'Potassium Magnesium Sulphate',
    description: 'Natural source of potassium, magnesium, and sulphur.',
    longDescription: 'A natural mineral fertilizer providing a balanced supply of three essential nutrients: potassium, magnesium, and sulphur in a sulphate form. Low in chlorides, ideal for sensitive crops.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Sandy', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-49',
    name: 'Potassium Sulphate (Standard, Soluble, Granular)',
    description: 'Chloride-free potassium source, also known as SOP.',
    longDescription: 'A premium source of potassium, virtually free of chlorides, making it ideal for chloride-sensitive crops. Available in various grades for different application methods.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Sandy', 'Loam', 'Hydroponics'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-50',
    name: 'Triple Superphosphate',
    description: 'Concentrated granular phosphate fertilizer.',
    longDescription: 'TSP is a high-analysis phosphorus fertilizer, used to correct phosphorus deficiencies in soil and provide a foundation for strong root development and energy transfer.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Acidic', 'Loam', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items'],
  },
  {
    id: 'prod-51',
    name: 'TSP, DAP, MAP – Granular',
    description: 'Essential granular phosphate fertilizers.',
    longDescription: 'A group of fundamental granular phosphate fertilizers (Triple Superphosphate, Di-Ammonium Phosphate, Mono-Ammonium Phosphate) used as base applications to supply essential phosphorus and nitrogen.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['All Crops'],
    soilTypes: ['Acidic', 'Loam', 'Clay'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Straights Items', 'Granular NPK'],
  },
  // 7. Micro Elements
  {
    id: 'prod-52',
    name: 'Fe EDDHA 6%',
    description: 'High-performance iron chelate for correcting iron deficiency.',
    longDescription: 'A premium, highly effective iron chelate (Fe EDDHA 6%) for the correction of iron deficiency in high pH and calcareous soils. It ensures iron availability, preventing yellowing of leaves and promoting photosynthesis.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Alkaline', 'Chalky'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-53',
    name: 'Fe EDTA 12%',
    description: 'Stable and soluble iron chelate.',
    longDescription: 'A fully chelated iron EDTA, providing a stable and soluble source of iron for fertigation and foliar applications, effective in slightly acidic to neutral pH conditions.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-54',
    name: 'Fe EDTA 15%',
    description: 'Highly concentrated iron chelate.',
    longDescription: 'A more concentrated version of iron EDTA, delivering more iron per unit, suitable for correcting moderate to severe iron deficiencies.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-55',
    name: 'Cu EDTA 15%',
    description: 'Chelated copper for essential plant functions.',
    longDescription: 'A chelated source of copper, protecting the nutrient from being locked up in the soil and ensuring its availability for vital enzymatic activities and photosynthesis.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-56',
    name: 'Mn EDTA 13%',
    description: 'Chelated manganese for photosynthesis and metabolism.',
    longDescription: 'Provides manganese in a stable, chelated form. Manganese is crucial for photosynthesis, nitrogen metabolism, and synthesis of chlorophyll.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables', 'Soybeans', 'Wheat'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-57',
    name: 'Zn EDTA 15%',
    description: 'Chelated zinc for hormone and enzyme production.',
    longDescription: 'A highly effective, chelated form of zinc that is readily available to plants. Zinc is essential for the synthesis of auxins (growth hormones) and enzyme activation.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables', 'Corn', 'Rice'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-58',
    name: 'MgNa EDTA 6%',
    description: 'Chelated magnesium for chlorophyll and photosynthesis.',
    longDescription: 'Provides magnesium in a chelated form, ensuring its availability. Magnesium is the central atom of the chlorophyll molecule and is vital for photosynthesis.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-59',
    name: 'Di-Sodium Octa Borate Tetrahydrate',
    description: 'Soluble boron source for reproductive growth.',
    longDescription: 'A highly soluble form of boron, essential for cell wall formation, pollen viability, and seed set. Corrects boron deficiency efficiently.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-60',
    name: 'DOT (Boron - 21%)',
    description: 'Highly concentrated soluble boron.',
    longDescription: 'Also known as Di-Sodium Octa Borate Tetrahydrate, this is a high-purity, highly soluble boron source for agricultural use.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-61',
    name: 'Boric Acid',
    description: 'Soluble boron for foliar and fertigation applications.',
    longDescription: 'A soluble form of boron used to correct deficiencies. Boron is critical for plant growth, development, and reproduction.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  {
    id: 'prod-62',
    name: 'Combi Mix',
    description: 'A balanced blend of essential chelated micronutrients.',
    longDescription: 'A comprehensive cocktail of essential micronutrients (Fe, Mn, Zn, Cu, etc.) in chelated form, designed to prevent and correct multiple micro-element deficiencies with a single application.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Fruit Trees', 'Citrus', 'Grapes', 'Berries', 'Leafy Greens', 'Vegetables'],
    soilTypes: ['Acidic', 'Sandy', 'Loam', 'Peat'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Micro Elements'],
  },
  // 8. Sulphates Products
  {
    id: 'prod-63',
    name: 'Zinc Sulphate – Hepta & Mono',
    description: 'Essential zinc source for enzyme activation and growth.',
    longDescription: 'Provides essential zinc in sulphate form (Heptahydrate and Monohydrate). Zinc is vital for the synthesis of growth hormones and the activation of many enzymes, essential for overall plant development.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Rice', 'Wheat', 'Oilseeds', 'Citrus', 'Vegetables', 'Leafy Greens'],
    soilTypes: ['Sandy', 'Acidic', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphates Products'],
  },
  {
    id: 'prod-64',
    name: 'Magnesium Sulphate – Hepta, Mono & Anhydrous',
    description: 'Source of magnesium and sulphur for photosynthesis.',
    longDescription: 'Commonly known as Epsom salt (Heptahydrate), it provides readily available magnesium and sulphur. Available in various hydration levels for different applications.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Rice', 'Wheat', 'Oilseeds', 'Citrus', 'Vegetables', 'Leafy Greens', 'Tomatoes', 'Peppers'],
    soilTypes: ['Sandy', 'Acidic', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphates Products'],
  },
  {
    id: 'prod-65',
    name: 'Manganese Sulphate',
    description: 'Soluble manganese source for plant metabolism.',
    longDescription: 'Provides water-soluble manganese, essential for photosynthesis and other metabolic processes in the plant. Used to correct manganese deficiencies.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Rice', 'Wheat', 'Oilseeds', 'Citrus', 'Vegetables', 'Leafy Greens', 'Soybeans'],
    soilTypes: ['Sandy', 'Acidic', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphates Products'],
  },
  {
    id: 'prod-66',
    name: 'Ferrous Sulphate – Hepta & Mono',
    description: 'Source of iron and sulphur to correct chlorosis.',
    longDescription: 'Used to correct iron deficiency (chlorosis), providing iron and sulphur in a soluble form. Can also be used to lower the pH of soil.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Rice', 'Wheat', 'Oilseeds', 'Citrus', 'Vegetables', 'Leafy Greens'],
    soilTypes: ['Sandy', 'Acidic', 'Loam', 'Alkaline'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphates Products'],
  },
  {
    id: 'prod-67',
    name: 'Copper Sulphate – Pentahydrate',
    description: 'Source of copper, also used as a fungicide.',
    longDescription: 'Provides essential copper for plant growth and also has traditional uses as a fungicide to control various plant diseases.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Rice', 'Wheat', 'Oilseeds', 'Citrus', 'Vegetables', 'Leafy Greens', 'Grapes'],
    soilTypes: ['Sandy', 'Acidic', 'Loam'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Sulphates Products'],
  },
  // 9. Bio/Organic Items
  {
    id: 'prod-68',
    name: 'Granular Gypsum',
    description: 'Soil conditioner to improve soil structure and supply calcium.',
    longDescription: 'A natural mineral (Calcium Sulphate) used to improve the structure of heavy clay soils, reduce salinity, and provide essential calcium and sulphur to crops.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Organic Farming', 'Leafy Greens', 'Vegetables', 'Fruit Trees', 'Citrus', 'Ornamentals'],
    soilTypes: ['Loam', 'Sandy', 'Clay', 'Peat', 'Acidic', 'Saline Soils', 'Compacted'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Bio/Organic Items'],
  },
  {
    id: 'prod-69',
    name: 'Guano Phosphate',
    description: 'Natural, organic source of phosphorus.',
    longDescription: 'Derived from natural seabird droppings, Guano Phosphate is an excellent organic source of phosphorus and calcium, promoting strong root growth and flowering.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Organic Farming', 'Leafy Greens', 'Vegetables', 'Fruit Trees', 'Citrus', 'Ornamentals'],
    soilTypes: ['Loam', 'Sandy', 'Clay', 'Peat', 'Acidic'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Bio/Organic Items'],
  },
  {
    id: 'prod-70',
    name: 'Humic / Fulvic Acid',
    description: 'Natural soil conditioner to improve nutrient uptake.',
    longDescription: 'A blend of Humic and Fulvic acids, which are natural organic compounds that improve soil structure, enhance nutrient absorption, and stimulate microbial activity. They act as a natural chelator, making nutrients more available to plants.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Organic Farming', 'Leafy Greens', 'Vegetables', 'Fruit Trees', 'Citrus', 'Ornamentals'],
    soilTypes: ['Loam', 'Sandy', 'Clay', 'Peat', 'Acidic'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Bio/Organic Items'],
  },
  {
    id: 'prod-71',
    name: 'Seaweed Range',
    description: 'A range of organic seaweed-based biostimulants.',
    longDescription: 'Our seaweed range includes various extracts and formulations designed to boost plant growth, enhance stress tolerance, and improve overall crop health through natural means.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Organic Farming', 'Leafy Greens', 'Vegetables', 'Fruit Trees', 'Citrus', 'Ornamentals'],
    soilTypes: ['Loam', 'Sandy', 'Clay', 'Peat', 'Acidic'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Bio/Organic Items'],
  },
  {
    id: 'prod-72',
    name: 'Soil Conditioners',
    description: 'Products to improve soil health and fertility.',
    longDescription: 'A category of products, including gypsum, compost, and other amendments, designed to improve the physical, chemical, and biological properties of soil for better crop performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Organic Farming', 'Leafy Greens', 'Vegetables', 'Fruit Trees', 'Citrus', 'Ornamentals'],
    soilTypes: ['Loam', 'Sandy', 'Clay', 'Peat', 'Acidic', 'Compacted'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Bio/Organic Items'],
  },
  {
    id: 'prod-73',
    name: 'Amino Acids',
    description: 'Organic biostimulant for enhanced growth and stress recovery.',
    longDescription: 'A plant-based amino acid mixture that provides a rapid energy boost to plants. It helps improve protein synthesis, enhances tolerance to abiotic stress, and aids in quick recovery from adverse conditions.',
    imageUrl: 'https://placehold.co/600x400.png',
    crops: ['Organic Farming', 'Leafy Greens', 'Vegetables', 'Fruit Trees', 'Citrus', 'Ornamentals'],
    soilTypes: ['Loam', 'Sandy', 'Clay', 'Peat', 'Acidic'],
    regions: ['Worldwide'],
    moistureLevels: ['All'],
    categories: ['Bio/Organic Items'],
  },
];

export const brochures: Brochure[] = [
  {
    id: 'broch-1',
    title: 'Water Soluble NPK Guide',
    fileUrl: '/brochures/water-soluble-npk.pdf',
    assignedProducts: ['prod-1', 'prod-2', 'prod-3', 'prod-4', 'prod-5', 'prod-6', 'prod-7', 'prod-8', 'prod-9', 'prod-10', 'prod-11'],
  },
  {
    id: 'broch-2',
    title: 'Granular Fertilizers Specs',
    fileUrl: '/brochures/granular-fertilizers.pdf',
    assignedProducts: ['prod-12', 'prod-13', 'prod-14', 'prod-15', 'prod-16', 'prod-17', 'prod-51'],
  },
  {
    id: 'broch-3',
    title: 'Liquid & Suspension Application',
    fileUrl: '/brochures/liquid-suspension.pdf',
    assignedProducts: [
      'prod-18', 'prod-19', 'prod-20', 'prod-21', 'prod-22', 'prod-23', 'prod-24', 'prod-25', 'prod-26', 'prod-27', 'prod-28',
      'prod-29', 'prod-30', 'prod-31', 'prod-32', 'prod-33', 'prod-34', 'prod-40', 'prod-41', 'prod-74'
    ],
  },
  {
    id: 'broch-4',
    title: 'Sulphur & Straights Guide',
    fileUrl: '/brochures/sulphur-straights.pdf',
    assignedProducts: [
      'prod-35', 'prod-36', 'prod-37', 'prod-38', 'prod-39',
      'prod-42', 'prod-43', 'prod-44', 'prod-45', 'prod-46', 'prod-47', 'prod-48', 'prod-49', 'prod-50', 'prod-51'
    ],
  },
  {
    id: 'broch-5',
    title: 'Micro Elements & Sulphates',
    fileUrl: '/brochures/micro-sulphates.pdf',
    assignedProducts: [
      'prod-52', 'prod-53', 'prod-54', 'prod-55', 'prod-56', 'prod-57', 'prod-58', 'prod-59', 'prod-60', 'prod-61', 'prod-62',
      'prod-63', 'prod-64', 'prod-65', 'prod-66', 'prod-67'
    ],
  },
  {
    id: 'broch-6',
    title: 'Bio/Organic Product Range',
    fileUrl: '/brochures/bio-organic.pdf',
    assignedProducts: ['prod-22', 'prod-68', 'prod-69', 'prod-70', 'prod-71', 'prod-72', 'prod-73'],
  }
];

export const filterOptions: FilterOptions = {
  crops: [
    'All Crops', 'Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming', 'Oilseeds', 'Legumes', 'Drought-Prone Crops', 'Greenhouse',
  ],
  soilTypes: [
    'All', 'Loam', 'Sandy', 'Silt', 'Hydroponics', 'Clay', 'Chalky', 'Peat', 'Alkaline', 'Acidic', 'Saline Soils', 'Compacted',
  ],
  growthStages: [
    'All Stages', 'Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Maturation'
  ],
  regions: [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia',
    'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
    'Oman',
    'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar',
    'Romania', 'Russia', 'Rwanda',
    'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan',
    'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
    'Yemen',
    'Zambia', 'Zimbabwe',
  ],
  moistureLevels: ['All', 'Low', 'Moderate', 'High'],
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
  ],
};

const faqCategoryTitles: Record<string, string> = {
    'Product Categories & General Use': 'faq-cat-1',
    'Crop-Specific Recommendations': 'faq-cat-2',
    'Soil Condition & Environment': 'faq-cat-3',
    'Nutrient Deficiency Solutions': 'faq-cat-4',
    'Special & Value-Added Products': 'faq-cat-5',
    'Application & Safety': 'faq-cat-6',
}

export const faqs: FAQ[] = [
    // Product Categories & General Use
    {
        id: 'faq-5',
        question: 'What types of fertilizers does RNZ offer?',
        answer: 'RNZ offers a full range of fertilizers including **Water Soluble NPK (100% Soluble Powders)** for quick nutrient uptake, **Granular NPK Grades** for field application, **Liquid Items** for rapid correction and easy application, **Suspension Items** for high-analysis NPK delivery, **Sulphur-Based products** for sulphur and micronutrient correction, **Straights Items** for single nutrient sources, **Micro Elements** for trace nutrient correction, **Sulphates Products**, and **Bio/Organic Items** for soil health.',
        keywords: ['types', 'categories', 'products', 'fertilizers', 'range'],
        category: 'Product Categories & General Use',
    },
    {
        id: 'faq-6',
        question: 'What is the difference between Water Soluble NPK, Granular NPK, Liquid Items, and Suspension Items?',
        answer: '• **Water Soluble NPK** – fully soluble, ideal for fertigation and foliar spraying.\n• **Granular NPK** – slow-release field fertilizer for base dressing and topdressing.\n• **Liquid Items** – concentrated liquid nutrients for quick uptake and rapid correction.\n• **Suspension Items** – high-nutrient slurries applied via fertigation or foliar, often for flowering/fruiting.',
        keywords: ['difference', 'water soluble', 'granular', 'liquid', 'suspension', 'npk'],
        category: 'Product Categories & General Use',
    },
    {
        id: 'faq-7',
        question: 'Which products are suitable for foliar feeding vs. fertigation?',
        answer: 'Most **Water Soluble NPK**, **Liquid Items**, and **Micronutrients** are suitable for both foliar feeding and fertigation. Granular products are mainly for soil application.',
        keywords: ['foliar feeding', 'fertigation', 'drip irrigation', 'spray', 'application method'],
        category: 'Product Categories & General Use',
    },
    {
        id: 'faq-8',
        question: 'What is the shelf life of RNZ products?',
        answer: 'When stored in a cool, dry place away from direct sunlight, RNZ fertilizers generally maintain quality for **2–3 years**.',
        keywords: ['shelf life', 'storage', 'expiry', 'how long'],
        category: 'Product Categories & General Use',
    },
    {
        id: 'faq-9',
        question: 'Are RNZ fertilizers suitable for organic farming?',
        answer: 'Yes. Our **Bio/Organic Items** (e.g., Humic/Fulvic Acid, Seaweed Range, Granular Gypsum) are suitable for organic and soil health programs.',
        keywords: ['organic', 'bio', 'natural', 'certified farm', 'seaweed', 'humic acid'],
        category: 'Product Categories & General Use',
    },
    // Crop-Specific Recommendations
    {
        id: 'faq-10',
        question: 'Which RNZ products are recommended for maize at different growth stages?',
        answer: '• Early vegetative: **NPK 15-15-15** or **Prilled/Granular Urea**\n• Pre-flowering: **NPK 19-19-19** (Water Soluble)\n• Flowering & grain fill: **NPK 06-12-36** or **NPK 0-52-34** (Suspension)',
        keywords: ['maize', 'corn', 'growth stages', 'recommendation'],
        category: 'Crop-Specific Recommendations',
    },
    {
        id: 'faq-11',
        question: 'What\'s the best RNZ fertilizer for tomatoes in flowering stage?',
        answer: '**NPK 06-12-36** (Water Soluble) or **NPK 0-52-34** (Suspension) provide high potassium for fruit set and quality.',
        keywords: ['tomatoes', 'flowering', 'fruit set', 'high potassium'],
        category: 'Crop-Specific Recommendations',
    },
    {
        id: 'faq-12',
        question: 'Which products are ideal for potatoes in sandy soil?',
        answer: '**Potassium Sulphate (Standard, Soluble, Granular)**, **Magnesium Sulphate**, and **Humic/Fulvic Acid** to improve nutrient retention.',
        keywords: ['potatoes', 'sandy soil', 'nutrient retention', 'potassium', 'magnesium'],
        category: 'Crop-Specific Recommendations',
    },
    {
        id: 'faq-13',
        question: 'What RNZ products are best for turf, golf courses, and sports fields?',
        answer: 'Balanced water solubles like **NPK 19-19-19**, granular **NPK 15-15-15** for base feeding, and **NPK 06-12-36** for stress tolerance. **Fe EDDHA 6%** for turf color.',
        keywords: ['turf', 'golf course', 'sports field', 'grass', 'lawn', 'color'],
        category: 'Crop-Specific Recommendations',
    },
    {
        id: 'faq-14',
        question: 'Which RNZ fertilizers are good for citrus during fruit setting?',
        answer: '**NPK 06-12-36**, **NPK 0-52-34**, and **Calcium Nitrate** to support fruit development and prevent disorders.',
        keywords: ['citrus', 'orange', 'lemon', 'fruit setting', 'calcium'],
        category: 'Crop-Specific Recommendations',
    },
    {
        id: 'faq-15',
        question: 'What products can I use for hydroponic systems?',
        answer: '**NPK 19-19-19**, **NPK 20-20-20**, **Liquid NPKs**, and **Seaweed Liquid**.',
        keywords: ['hydroponics', 'soilless', 'nutrient solution'],
        category: 'Crop-Specific Recommendations',
    },
    // Soil Condition & Environment
    {
        id: 'faq-16',
        question: 'Which RNZ products work best in alkaline soils?',
        answer: '**NPK 0-52-34** (Suspension), **RNZ SB+** (Sulphur-Based), and **Fe EDDHA 6%** for iron availability.',
        keywords: ['alkaline soil', 'high ph', 'iron', 'sulphur'],
        category: 'Soil Condition & Environment',
    },
    {
        id: 'faq-17',
        question: 'What\'s recommended for acidic soils?',
        answer: '**Calcium Nitrate**, **Dolomitic products**, and **Granular Gypsum** to raise pH and supply calcium/magnesium.',
        keywords: ['acidic soil', 'low ph', 'lime', 'calcium', 'magnesium'],
        category: 'Soil Condition & Environment',
    },
    {
        id: 'faq-18',
        question: 'How can I improve soil structure and nutrient retention with RNZ products?',
        answer: '**Humic/Fulvic Acid**, **Granular Gypsum**, and **Seaweed Range**.',
        keywords: ['soil structure', 'nutrient retention', 'compaction', 'soil health', 'humic'],
        category: 'Soil Condition & Environment',
    },
    {
        id: 'faq-19',
        question: 'Which products help manage salinity in soil or irrigation water?',
        answer: '**Salt Corrector** and **Calcium Thiosulphate (CaTS)**.',
        keywords: ['salinity', 'salt', 'salty soil', 'high ec', 'water quality'],
        category: 'Soil Condition & Environment',
    },
    // Nutrient Deficiency Solutions
    {
        id: 'faq-20',
        question: 'What should I use for iron deficiency in crops?',
        answer: '**Fe EDDHA 6%** for alkaline soils, **Fe EDTA** for neutral/acidic soils.',
        keywords: ['iron deficiency', 'chlorosis', 'yellow leaves', 'chelated iron'],
        category: 'Nutrient Deficiency Solutions',
    },
    {
        id: 'faq-21',
        question: 'Which product helps with zinc deficiency in maize?',
        answer: '**Zn EDTA 15%** for foliar/fertigation, or **Zinc Sulphate** for soil application.',
        keywords: ['zinc deficiency', 'maize', 'corn', 'zn', 'chelated zinc'],
        category: 'Nutrient Deficiency Solutions',
    },
    {
        id: 'faq-22',
        question: 'What RNZ products correct magnesium deficiency?',
        answer: '**Magnesium Sulphate – Hepta, Mono & Anhydrous**.',
        keywords: ['magnesium deficiency', 'mg', 'epsom salt'],
        category: 'Nutrient Deficiency Solutions',
    },
    {
        id: 'faq-23',
        question: 'How do I manage sulphur deficiency in crops?',
        answer: '**RNZ SB+ (SB 90%)**, **RNZ NS 20+**, or **Sulphate-based products**.',
        keywords: ['sulphur deficiency', 's', 'sulfur'],
        category: 'Nutrient Deficiency Solutions',
    },
    // Special & Value-Added Products
    {
        id: 'faq-24',
        question: 'What does Calcium Thiosulphate (CaTS) do and when should I use it?',
        answer: 'Supplies calcium and sulphur, improves soil structure, and mitigates sodium in saline soils.',
        keywords: ['cats', 'calcium thiosulphate', 'saline soil', 'calcium'],
        category: 'Special & Value-Added Products',
    },
    {
        id: 'faq-25',
        question: 'What\'s the benefit of Potassium Thiosulphate (KTS) in my program?',
        answer: 'Supplies potassium and sulphur in liquid form, suitable for fertigation.',
        keywords: ['kts', 'potassium thiosulphate', 'liquid potassium', 'fertigation'],
        category: 'Special & Value-Added Products',
    },
    {
        id: 'faq-26',
        question: 'How can Seaweed products improve crop performance?',
        answer: 'They act as biostimulants, enhancing rooting, stress tolerance, and nutrient uptake.',
        keywords: ['seaweed', 'kelp', 'biostimulant', 'stress tolerance', 'rooting'],
        category: 'Special & Value-Added Products',
    },
    {
        id: 'faq-27',
        question: 'What is Salt Corrector and when should I apply it?',
        answer: 'A liquid product that helps reduce the effects of salinity; apply via irrigation when salinity stress is expected.',
        keywords: ['salt corrector', 'salinity', 'irrigation', 'stress'],
        category: 'Special & Value-Added Products',
    },
    {
        id: 'faq-28',
        question: 'When should I use Humic / Fulvic Acid?',
        answer: 'Use throughout the season to improve soil health, nutrient retention, and root growth.',
        keywords: ['humic acid', 'fulvic acid', 'soil health', 'organic matter'],
        category: 'Special & Value-Added Products',
    },
    // Application & Safety
    {
        id: 'faq-29',
        question: 'Can RNZ fertilizers be mixed with pesticides?',
        answer: 'Many RNZ products can be tank-mixed, but always do a jar test before mixing and follow label instructions.',
        keywords: ['tank mix', 'mix pesticides', 'compatibility', 'jar test'],
        category: 'Application & Safety',
    },
    {
        id: 'faq-30',
        question: 'How do I store RNZ fertilizers to maintain quality?',
        answer: 'Keep in a cool, dry, well-ventilated place, away from direct sunlight and moisture.',
        keywords: ['storage', 'shelf life', 'maintain quality', 'cool dry place'],
        category: 'Application & Safety',
    },
    {
        id: 'faq-31',
        question: 'Can I apply RNZ products through drip irrigation?',
        answer: 'Yes. Water Soluble NPK, Liquid Items, and many Suspension Items are designed for drip systems.',
        keywords: ['drip irrigation', 'fertigation', 'application method'],
        category: 'Application & Safety',
    },
    {
        id: 'faq-32',
        question: 'Do I need to adjust pH when using RNZ products in fertigation?',
        answer: 'It depends on the water source and crop requirements; some products like **Phosphoric Acid** can help lower pH.',
        keywords: ['ph adjustment', 'fertigation', 'water ph', 'phosphoric acid'],
        category: 'Application & Safety',
    },
];

export const supportTickets: SupportTicket[] = [
    {
      id: 'ticket-1',
      userId: 'user-123', // Corresponds to a user's UID in a real app
      userName: 'John Doe',
      subject: 'Question about NPK for tomatoes',
      status: 'Answered',
      createdAt: '2024-05-20T10:00:00Z',
      updatedAt: '2024-05-20T14:30:00Z',
      messages: [
        {
          id: 'msg-1',
          author: 'user',
          authorName: 'John Doe',
          timestamp: '2024-05-20T10:00:00Z',
          content: 'Hi, I\'m growing tomatoes in sandy soil and they are starting to flower. Which of your products would be best?'
        },
        {
          id: 'msg-2',
          author: 'admin',
          authorName: 'RNZ Support',
          timestamp: '2024-05-20T14:30:00Z',
          content: 'Hello John, for tomatoes in the flowering stage, especially in sandy soil, we recommend a fertilizer with higher phosphorus and potassium. Our NPK 13-40-13 (Water Soluble) would be an excellent choice for fertigation to support robust flowering and fruit set. Alternatively, our Granular NPK 12-11-18 can provide a steady release of nutrients if you prefer a soil application.'
        }
      ],
      isReadByUser: false, // User has not seen this reply yet
    },
    {
      id: 'ticket-2',
      userId: 'user-456',
      userName: 'Jane Smith',
      subject: 'Alkaline soil issue',
      status: 'Open',
      createdAt: '2024-05-22T09:15:00Z',
      updatedAt: '2024-05-22T09:15:00Z',
      messages: [
        {
          id: 'msg-3',
          author: 'user',
          authorName: 'Jane Smith',
          timestamp: '2024-05-22T09:15:00Z',
          content: 'My soil has a high pH and my citrus trees are showing yellow leaves. What can I do?'
        }
      ]
    },
     {
      id: 'ticket-3',
      userId: 'user-123', // Another ticket for John Doe
      userName: 'John Doe',
      subject: 'Brochure Request',
      status: 'Closed',
      createdAt: '2024-05-18T11:00:00Z',
      updatedAt: '2024-05-18T16:00:00Z',
      messages: [
        {
          id: 'msg-4',
          author: 'user',
          authorName: 'John Doe',
          timestamp: '2024-05-18T11:00:00Z',
          content: 'Can you point me to the brochure for all your organic products?'
        },
        {
          id: 'msg-5',
          author: 'admin',
          authorName: 'RNZ Support',
          timestamp: '2024-05-18T16:00:00Z',
          content: 'Certainly! You can find our Bio/Organic Product Range brochure in the Brochures section of the app. It covers our Seaweed Range, Humic Acids, and more. Let us know if you need anything else!'
        }
      ],
      isReadByUser: true,
    }
  ];

// MongoDB Functions - These are server-side only and should not be imported by client components
export async function getProduct(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Try to find by id first, then by _id
    let product = await db.collection('products').findOne({ id });
    
    if (!product) {
      // If not found by id, try to find by _id
      try {
        const { ObjectId } = await import('mongodb');
        if (ObjectId.isValid(id)) {
          product = await db.collection('products').findOne({ _id: new ObjectId(id) });
        }
      } catch (oidError) {
        console.log('Could not convert to ObjectId');
      }
    }
    
    if (product) {
      // Convert MongoDB object to plain object for Next.js serialization
      return {
        ...product,
        id: product.id || product._id?.toString() || `product-${product._id?.toString() || Date.now()}`,
        _id: product._id?.toString() || product._id,
        categories: product.category ? [product.category] : [],
        imageUrl: product.imageUrl || (product.images && product.images.length > 0 ? product.images[0] : ''),
        createdAt: product.createdAt?.toISOString?.() || product.createdAt,
        updatedAt: product.updatedAt?.toISOString?.() || product.updatedAt
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    // Fallback to static data if MongoDB fails
    return products.find(p => p.id === id);
  }
}

export async function getAllProducts() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const products = await db.collection('products').find({}).sort({ createdAt: -1 }).toArray();
    
    // Convert MongoDB objects to plain objects for Next.js serialization
    return products.map(product => ({
      ...product,
      id: product.id || product._id?.toString() || `product-${product._id?.toString() || Date.now()}`,
      _id: product._id?.toString() || product._id,
      // Ensure array properties are always arrays
      crops: Array.isArray(product.crops) ? product.crops : [],
      soilTypes: Array.isArray(product.soilTypes) ? product.soilTypes : [],
      regions: Array.isArray(product.regions) ? product.regions : [],
      categories: product.category ? [product.category] : [],
      moistureLevels: Array.isArray(product.moistureLevels) ? product.moistureLevels : [],
      // Ensure required string properties exist
      name: product.name || '',
      description: product.description || '',
      longDescription: product.longDescription || '',
      imageUrl: product.imageUrl || (product.images && product.images.length > 0 ? product.images[0] : ''),
      createdAt: product.createdAt?.toISOString?.() || product.createdAt,
      updatedAt: product.updatedAt?.toISOString?.() || product.updatedAt
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to static data if MongoDB fails
    return products;
  }
}

export async function getSupportTickets() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const tickets = await db.collection('supportTickets').find({}).sort({ createdAt: -1 }).toArray();
    
    // Convert MongoDB objects to plain objects for Next.js serialization
    return tickets.map(ticket => ({
      ...ticket,
      id: ticket.id || ticket._id?.toString() || `ticket-${ticket._id?.toString() || Date.now()}`,
      _id: ticket._id?.toString() || ticket._id,
      createdAt: ticket.createdAt?.toISOString?.() || ticket.createdAt,
      updatedAt: ticket.updatedAt?.toISOString?.() || ticket.updatedAt
    }));
  } catch (error) {
    console.error('Error fetching support tickets:', error);
    // Fallback to static data if MongoDB fails
    return supportTickets;
  }
}

export async function getBrochures() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const brochures = await db.collection('brochures').find({}).sort({ createdAt: -1 }).toArray();
    
    // Convert MongoDB objects to plain objects for Next.js serialization
    return brochures.map(brochure => ({
      ...brochure,
      id: brochure.id || brochure._id?.toString() || `brochure-${brochure._id?.toString() || Date.now()}`,
      _id: brochure._id?.toString() || brochure._id,
      createdAt: brochure.createdAt?.toISOString?.() || brochure.createdAt,
      updatedAt: brochure.updatedAt?.toISOString?.() || brochure.updatedAt
    }));
  } catch (error) {
    console.error('Error fetching brochures:', error);
    // Fallback to static data if MongoDB fails
    return brochures;
  }
}

export async function getFAQs() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const faqs = await db.collection('faqs').find({}).sort({ createdAt: -1 }).toArray();
    
    // Convert MongoDB objects to plain objects for Next.js serialization
    return faqs.map(faq => ({
      ...faq,
      id: faq.id || faq._id?.toString() || `faq-${faq._id?.toString() || Date.now()}`,
      _id: faq._id?.toString() || faq._id,
      createdAt: faq.createdAt?.toISOString?.() || faq.createdAt,
      updatedAt: faq.updatedAt?.toISOString?.() || faq.updatedAt
    }));
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return faqs;
  }
}
