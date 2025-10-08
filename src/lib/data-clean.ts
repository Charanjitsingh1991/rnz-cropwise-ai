import type { Product, Brochure, FilterOptions, SupportTicket, FAQ } from './types';
import connectDB from './mongodb/connection';
import { Product as ProductModel } from './mongodb/models/Product';
import { SupportTicket as SupportTicketModel } from './mongodb/models/SupportTicket';
import { Brochure as BrochureModel } from './mongodb/models/Brochure';
import { FAQ as FAQModel } from './mongodb/models/FAQ';

// MongoDB Functions
export async function getProduct(id: string) {
  try {
    await connectDB();
    const product = await ProductModel.findOne({ id });
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    // Fallback to static data if MongoDB fails
    return products.find(p => p.id === id);
  }
}

export async function getAllProducts() {
  try {
    await connectDB();
    const products = await ProductModel.find({}).sort({ createdAt: -1 });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to static data if MongoDB fails
    return products;
  }
}

export async function getSupportTickets() {
  try {
    await connectDB();
    const tickets = await SupportTicketModel.find({}).sort({ createdAt: -1 });
    return tickets;
  } catch (error) {
    console.error('Error fetching support tickets:', error);
    // Fallback to static data if MongoDB fails
    return supportTickets;
  }
}

export async function getBrochures() {
  try {
    await connectDB();
    const brochures = await BrochureModel.find({}).sort({ createdAt: -1 });
    return brochures;
  } catch (error) {
    console.error('Error fetching brochures:', error);
    // Fallback to static data if MongoDB fails
    return brochures;
  }
}

export async function getFAQs() {
  try {
    await connectDB();
    const faqs = await FAQModel.find({}).sort({ createdAt: -1 });
    return faqs;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    // Fallback to static data if MongoDB fails
    return faqs;
  }
}

// Static data arrays (fallback)
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
  // Add more products as needed...
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
  // Add more brochures as needed...
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

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What types of fertilizers does RNZ offer?',
    answer: 'RNZ offers a full range of fertilizers including Water Soluble NPK (100% Soluble Powders) for quick nutrient uptake, Granular NPK Grades for field application, Liquid Items for rapid correction and easy application, Suspension Items for high-analysis NPK delivery, Sulphur-Based products for sulphur and micronutrient correction, Straights Items for single nutrient sources, Micro Elements for trace nutrient correction, Sulphates Products, and Bio/Organic Items for soil health.',
    keywords: ['types', 'categories', 'products', 'fertilizers', 'range'],
    category: 'Product Categories & General Use',
  },
  {
    id: 'faq-2',
    question: 'What is the difference between Water Soluble NPK, Granular NPK, Liquid Items, and Suspension Items?',
    answer: 'Water Soluble NPK – fully soluble, ideal for fertigation and foliar spraying. Granular NPK – slow-release field fertilizer for base dressing and topdressing. Liquid Items – concentrated liquid nutrients for quick uptake and rapid correction. Suspension Items – high-nutrient slurries applied via fertigation or foliar, often for flowering/fruiting.',
    keywords: ['difference', 'water soluble', 'granular', 'liquid', 'suspension', 'npk'],
    category: 'Product Categories & General Use',
  },
  // Add more FAQs as needed...
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
  // Add more support tickets as needed...
];
