import type { Product, Brochure, FilterOptions, SupportTicket, FAQ } from './types';

// Static data arrays - Safe for client components
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
    categories: ['Water Soluble NPK'],
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
    categories: ['Water Soluble NPK'],
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
    categories: ['Water Soluble NPK', 'Straights Items'],
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
    categories: ['Water Soluble NPK'],
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
    categories: ['Water Soluble NPK'],
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
    categories: ['Water Soluble NPK'],
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
  // Add more products as needed - this is just a sample
];

export const brochures: Brochure[] = [
  {
    id: 'broch-1',
    title: 'Water Soluble NPK Guide',
    fileUrl: '/brochures/water-soluble-npk.pdf',
    assignedProducts: ['prod-1', 'prod-2', 'prod-3'],
  },
  // Add more brochures as needed
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
    'Worldwide', 'North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia'
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
    }
];

export const supportTickets: SupportTicket[] = [
    {
      id: 'ticket-1',
      userId: 'user-123',
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
      isReadByUser: false,
    },
    // Add more support tickets as needed
];
