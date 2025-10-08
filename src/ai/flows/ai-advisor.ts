/**
 * @fileOverview Enhanced AI agent that provides crop care advice based on user inputs.
 * 
 * ENHANCED FEATURES:
 * - Uses comprehensive RNZ product catalog (79 products)
 * - Integrates with enhanced location data (world-countries-complete.ts)
 * - Growth stage specific recommendations
 * - Regional agricultural data integration
 * - Advanced product filtering and matching
 * - Uses existing comprehensive filter options from data.ts
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { filterOptions } from '@/lib/data';
import { pilotCountriesData } from '@/lib/datasets/pilot-countries-locations';
import type { Product } from '@/lib/types';
import { worldCountries, getStatesByCountryCode } from '@/lib/datasets/world-countries-complete';
import { getStatesByCountry, getCitiesByState } from '@/lib/datasets/pilot-countries-locations';
import { Product as ProductModel } from '@/lib/mongodb/models';
import connectDB from '@/lib/mongodb/connection';

const AiAdvisorInputSchema = z.object({
  crop: z.string().describe('The type of crop.'),
  soil: z.string().describe('The type of soil.'),
  region: z.string().describe('The region where the crop is grown.'),
  moisture: z.string().describe('The moisture level of the soil.'),
  growthStage: z.string().describe('The current growth stage of the crop.'),
  country: z.string().optional().describe('Country code for regional recommendations.'),
  state: z.string().optional().describe('State/province for local recommendations.'),
  district: z.string().optional().describe('District for hyper-local recommendations.'),
});

export type AiAdvisorInput = z.infer<typeof AiAdvisorInputSchema>;

const AiAdvisorOutputSchema = z.object({
  recommendedProducts: z.array(z.object({
    name: z.string(),
    productId: z.string().optional(), // Link to actual product
    description: z.string(),
    applicationMethod: z.string(),
    dosage: z.string(),
    timing: z.string(),
    expectedBenefit: z.string(),
    regionalAdaptation: z.string().optional(),
    category: z.string().optional(),
  })),
  explanation: z.string(),
  regionalInsights: z.string().optional(),
  agriculturalData: z.object({
    hasRegionalData: z.boolean(),
    dataCompleteness: z.string(),
    lastUpdated: z.string().optional(),
  }).optional(),
});

export type AiAdvisorOutput = z.infer<typeof AiAdvisorOutputSchema>;

export async function aiAdvisor(input: AiAdvisorInput): Promise<AiAdvisorOutput> {
  console.log('AI Advisor called with input:', JSON.stringify(input, null, 2));
  
  // CRITICAL: Check if user's country is in pilot countries
  const userCountry = input.country || '';
  const isPilotCountry = pilotCountriesData.some(country => 
    country.code === userCountry || country.name === userCountry
  );
  
  if (!isPilotCountry) {
    return {
      recommendedProducts: [],
      explanation: `Sorry, AI Crop Advisor is currently only available for pilot countries: ${pilotCountriesData.map(c => c.name).join(', ')}. Please contact support for access to other regions.`,
      regionalInsights: 'Service not available in your region.',
      agriculturalData: {
        hasRegionalData: false,
        dataCompleteness: 'Not Available',
        lastUpdated: new Date().toISOString()
      }
    };
  }
  
  // Fetch products from database
  let products: Product[] = [];
  try {
    await connectDB();
    const dbProducts = await ProductModel.find({ isActive: true }).lean();
    // Convert MongoDB documents to Product type
    products = dbProducts.map(product => ({
      ...product,
      id: product.id || product._id?.toString() || `product-${product._id?.toString() || Date.now()}`,
      _id: product._id?.toString() || product._id,
      categories: product.category ? [product.category] : [],
      crops: Array.isArray(product.crops) ? product.crops : [],
      soilTypes: Array.isArray(product.soilTypes) ? product.soilTypes : [],
      regions: Array.isArray(product.regions) ? product.regions : [],
      moistureLevels: Array.isArray(product.moistureLevels) ? product.moistureLevels : [],
      name: product.name || '',
      description: product.description || '',
      longDescription: product.longDescription || '',
      imageUrl: product.imageUrl || '',
      createdAt: product.createdAt?.toISOString?.() || product.createdAt,
      updatedAt: product.updatedAt?.toISOString?.() || product.updatedAt
    })) as Product[];
    console.log(`Fetched ${products.length} products from database`);
  } catch (error) {
    console.error('Error fetching products from database:', error);
    // Fallback to static data from data.ts (same as web app) if database fails
    const { getAllProducts } = await import('@/lib/data');
    const fallbackProducts = await getAllProducts();
    products = fallbackProducts as Product[];
    console.log(`Using ${products.length} static products as fallback from data.ts`);
  }
  
  // Enhanced product filtering with regional data
  const suitableProducts = getEnhancedProductRecommendations(input, products);
  
  // Get regional agricultural insights
  const regionalInsights = getRegionalAgriculturalInsights(input);
  
  // Enhanced AI prompt with regional context
  const enhancedPrompt = ai.definePrompt({
    name: 'enhancedAiAdvisorPrompt',
  input: {schema: z.object({
    crop: z.string(),
    soil: z.string(),
    region: z.string(),
    moisture: z.string(),
    growthStage: z.string(),
      country: z.string().optional(),
      state: z.string().optional(),
      district: z.string().optional(),
    suitableProducts: z.array(z.object({
        name: z.string(),
        description: z.string()
    }))
  })},
  output: {schema: AiAdvisorOutputSchema},
    prompt: `You are an expert agricultural advisor for RNZ products specializing in FOCUSED REGIONS: India, Pakistan, Sri Lanka, Bangladesh, and GCC countries. You must ONLY recommend products from the provided list.

🌱 REGIONAL FOCUS - SPECIFIC MARKETS:
- India: Rice, wheat, cotton, sugarcane, vegetables, seasonal farming
- Pakistan: Wheat, rice, cotton, sugarcane, fruits, irrigation farming
- Sri Lanka: Tea, rubber, coconut, rice, spices, monsoon farming
- Bangladesh: Rice, jute, tea, vegetables, delta farming
- GCC: Dates, vegetables, dairy, controlled environment farming

FARM CONDITIONS:
Crop: {{{crop}}}
Soil Type: {{{soil}}}
Region: {{{region}}}
Moisture Level: {{{moisture}}}
Growth Stage: {{{growthStage}}}
{{#if country}}Country: {{{country}}}{{/if}}
{{#if state}}State/Province: {{{state}}}{{/if}}
{{#if district}}District: {{{district}}}{{/if}}

AVAILABLE RNZ PRODUCTS (ONLY USE THESE EXACT NAMES AND INCLUDE PRODUCT IDS):
{{#each suitableProducts}}
- {{name}} (ID: {{productId}}, Category: {{category}}): {{description}}
{{/each}}

INSTRUCTIONS:
1. Choose 2-3 most relevant products from the list above
2. Use EXACT product names from the list - DO NOT MODIFY THE NAMES
3. Include the EXACT productId from the list for each product
4. Consider the growth stage as primary factor
5. Provide application method, dosage, and timing for each product
6. Explain expected benefits for the specific focused region
7. Consider regional farming practices and climate conditions
8. Use the exact category from the product list

Return recommendations in this exact format:
{
  "recommendedProducts": [
    {
      "name": "EXACT_PRODUCT_NAME_FROM_LIST",
      "productId": "EXACT_PRODUCT_ID_FROM_LIST",
      "description": "Product description",
      "applicationMethod": "Foliar/Fertigation",
      "dosage": "2-5 kg/ha",
      "timing": "Every 7-15 days",
      "expectedBenefit": "Expected benefit for this crop and stage in the focused region",
      "category": "EXACT_CATEGORY_FROM_LIST"
    }
  ],
  "explanation": "Overall recommendation explanation tailored for the focused region"
}

IMPORTANT: Copy the exact name, productId, and category from the available products list above. Do not modify or create new names.`,
  });

  // Enhanced AI flow with regional data
  const enhancedAiAdvisorFlow = ai.defineFlow({
    name: 'enhancedAiAdvisorFlow',
    inputSchema: AiAdvisorInputSchema,
    outputSchema: AiAdvisorOutputSchema,
  }, async (input) => {
    console.log('Enhanced AI Advisor Input:', input);
    console.log(`Total products available: ${products.length}`);
    
    // Get filtered products with proper IDs and categories
    const filteredProducts = getEnhancedProductRecommendations(input, products);
    console.log(`Filtered products count: ${filteredProducts.length}`);
    
    // Transform products to match expected format with IDs
    const transformedProducts = filteredProducts.map(product => ({
      name: product.name,
      productId: product.id || product._id?.toString() || `product-${Date.now()}`,
      description: product.description || 'RNZ product for agricultural use',
      category: product.categories && product.categories.length > 0 ? product.categories[0] : 'General'
    }));

    console.log('Transformed products for AI:', transformedProducts.slice(0, 5));

    const result = await enhancedPrompt({
      ...input,
      suitableProducts: transformedProducts
    });

    // Validate that only valid RNZ products are recommended
    if (result.output && result.output.recommendedProducts) {
      validateProductNames(result.output.recommendedProducts, products);
    }

    return result.output!;
  });

  return await enhancedAiAdvisorFlow(input);
}

// Validation function to ensure only valid RNZ products are recommended
function validateProductNames(recommendedProducts: any[], availableProducts: Product[]) {
  const validProductNames = availableProducts.map(p => p.name);
  const invalidProducts = recommendedProducts.filter(product => 
    !validProductNames.includes(product.name)
  );
  
  if (invalidProducts.length > 0) {
    console.error('INVALID PRODUCT NAMES DETECTED:', invalidProducts.map(p => p.name));
    console.error('Valid product names:', validProductNames);
    
    // Instead of throwing an error, let's log and continue with valid products
    console.warn('Some invalid products detected, filtering them out...');
    
    // Filter out invalid products and return only valid ones
    const validRecommendations = recommendedProducts.filter(product => 
      validProductNames.includes(product.name)
    );
    
    if (validRecommendations.length === 0) {
      // If no valid products, return some default recommendations
      console.warn('No valid products found, returning default recommendations');
             return availableProducts.slice(0, 3).map(product => ({
         name: product.name,
         productId: product._id?.toString() || product.id,
         description: product.description || 'RNZ product for agricultural use',
         applicationMethod: 'Foliar/Fertigation',
         dosage: '2-5 kg/ha',
         timing: 'Every 7-15 days',
         expectedBenefit: 'Suitable for your crop and soil conditions',
         category: product.categories && product.categories.length > 0 ? product.categories[0] : 'General'
       }));
    }
    
    return validRecommendations;
  }
  
  return recommendedProducts;
}

// Enhanced product recommendation function using existing filter options
function getEnhancedProductRecommendations(input: AiAdvisorInput, products: Product[]) {
  console.log('Filtering products for:', input);
  
  // First, get growth stage specific products
  const stageProducts = getGrowthStageProducts(input.growthStage);
  console.log('Growth stage specific products:', stageProducts);

  // Filter function
  const filterProduct = (product: Product) => {
    // If we have growth stage specific products, prioritize them
    if (stageProducts.length > 0 && stageProducts.includes(product.name)) {
      return true;
    }

        const productCrops = Array.isArray(product.crops) ? product.crops : [];
        const productSoilTypes = Array.isArray(product.soilTypes) ? product.soilTypes : [];
        const productMoistureLevels = Array.isArray(product.moistureLevels) ? product.moistureLevels : [];
        
    // More flexible matching logic
        const matchesCrop = productCrops.length === 0 || 
                           productCrops.includes('All Crops') || 
                       productCrops.includes('All crops') ||
                           productCrops.includes(input.crop) ||
                           productCrops.some(crop => crop.toLowerCase().includes('all'));
                           
        const matchesSoil = productSoilTypes.length === 0 || 
                           productSoilTypes.includes('All') || 
                           productSoilTypes.includes(input.soil) ||
                           productSoilTypes.some(soil => soil.toLowerCase().includes('all'));
                             
        const matchesMoisture = productMoistureLevels.length === 0 || 
                               productMoistureLevels.includes('All') || 
                               productMoistureLevels.includes(input.moisture) ||
                               productMoistureLevels.some(moisture => moisture.toLowerCase().includes('all'));
        
    // Basic products should always be available
    const isBasicProduct = product.name.includes('NPK') || 
                          product.name.includes('Urea') || 
                          product.name.includes('Zinc') || 
                          product.name.includes('Iron') || 
                          product.name.includes('Humic');

    return matchesCrop && matchesSoil && matchesMoisture || isBasicProduct;
  };

  // Apply filters
  const filteredProducts = products.filter(filterProduct);
  console.log(`Found ${filteredProducts.length} products after filtering`);
  console.log('Filtered products:', filteredProducts.map(p => p.name));

  // If no products found, return general products
  if (filteredProducts.length === 0) {
    console.log('No products found with strict filtering, returning general products');
    return products.filter(p => 
      p.crops.includes('All Crops') || 
      p.crops.includes('All crops') ||
      p.soilTypes.includes('All') || 
      p.regions.includes('Worldwide')
    ).slice(0, 10);
  }

  // Return products with enhanced data including IDs
  return filteredProducts.map(product => {
    // Use the actual MongoDB _id for proper linking
    const productId = product._id?.toString() || product.id || `prod-${product.name.toLowerCase().replace(/\s+/g, '-')}`;
    const category = product.categories && product.categories.length > 0 ? product.categories[0] : 'General';
    
    console.log(`Product: ${product.name}, ID: ${productId}, Category: ${category}`);
    
    return {
      ...product,
      productId: productId,
      category: category
    };
  });
}

// Get products specific to a growth stage
function getGrowthStageProducts(growthStage: string): string[] {
  const stageSpecificProducts = {
    'seedling': [
      'NPK 10-52-10',    // High phosphorus for root development
      'NPK 13-40-13',    // Balanced with high phosphorus
      'Humic / Fulvic Acid', // Root development
      'Seaweed Range',   // Growth promotion
      'Zinc Sulphate – Hepta & Mono', // Essential micronutrient
      'Fe EDTA 13%'      // Iron for chlorophyll
    ],
    'vegetative': [
      'NPK 19-19-19',    // Balanced growth
      'NPK 30-10-10',    // High nitrogen
      'NPK 20-20-20',    // Balanced nutrition
      'NPK 15-15-15',    // Balanced for all crops
      'Urea',            // Nitrogen source
      'Zinc Sulphate – Hepta & Mono' // Leaf development
    ],
    'flowering': [
      'NPK 13-00-45',    // High potassium
      'NPK 06-12-36',    // Balanced for flowering
      'NPK 00-00-50',    // Pure potassium
      'NPK 10-52-10',    // Phosphorus boost
      'Boron 17%',       // Flower development
      'Calcium Nitrate'  // Cell strength
    ],
    'fruiting': [
      'NPK 13-00-45',    // Fruit development
      'NPK 00-00-50',    // Fruit quality
      'Calcium Nitrate', // Prevent deficiency
      'Magnesium Sulphate', // Photosynthesis
      'Potassium Sulphate', // Fruit quality
      'Boron 17%'        // Fruit set
    ],
    'maturity': [
      'NPK 06-12-36',    // Ripening
      'NPK 00-00-50',    // Final stage
      'Magnesium Sulphate', // Quality
      'Humic / Fulvic Acid', // Soil health
      'Potassium Sulphate', // Maturity
      'Calcium Nitrate'  // Fruit quality
    ]
  };

  const stage = growthStage.toLowerCase();
  const stageProducts = stageSpecificProducts[stage as keyof typeof stageSpecificProducts] || [];
  
  // If no specific products for this stage or if it's "all stages"
  if (stageProducts.length === 0 || stage === 'all stages') {
    // Return basic products that work for all stages
    return [
      'NPK 19-19-19',
      'NPK 20-20-20',
      'NPK 15-15-15',
      'Humic / Fulvic Acid',
      'Seaweed Range',
      'Zinc Sulphate – Hepta & Mono'
    ];
  }
  
  return stageProducts;
}

// Get regional agricultural insights for pilot countries
function getRegionalAgriculturalInsights(input: AiAdvisorInput) {
  if (!input.country) return { insights: '', agriculturalData: null };

  // Check if country is in supported list
  const isSupportedCountry = pilotCountriesData.some(c => c.code === input.country);
  if (!isSupportedCountry) {
    return { 
      insights: '⚠️ REGIONAL FOCUS: This country is not yet supported. Please select from our pilot countries: India, Pakistan, Sri Lanka, Bangladesh, GCC countries, Malaysia, South Africa, Kenya, Brazil, New Zealand, Canada, Egypt, Cambodia, and China.', 
      agriculturalData: null 
    };
  }

  const country = worldCountries.find(c => c.code === input.country);
  if (!country) return { insights: '', agriculturalData: null };

  // Supported country specific insights
  const supportedCountryInsights = {
    'IN': 'Major agricultural country with diverse crops including rice, wheat, cotton, sugarcane, and vegetables. Seasonal farming patterns.',
    'PK': 'Agricultural economy with wheat, rice, cotton, sugarcane, and fruits. Irrigation-dependent farming.',
    'LK': 'Tropical agriculture with tea, rubber, coconut, rice, and spices. Monsoon-dependent farming.',
    'BD': 'Rice-based agriculture with jute, tea, and vegetables. Delta region farming.',
    'AE': 'Desert agriculture with date palms, vegetables, and controlled environment farming.',
    'SA': 'Large-scale agriculture with wheat, dates, vegetables, and dairy. Modern farming techniques.',
    'KW': 'Limited agriculture with focus on dates, vegetables, and controlled farming.',
    'QA': 'Modern agriculture with vegetables, dates, and dairy. Advanced farming technology.',
    'BH': 'Small-scale agriculture with dates, vegetables, and dairy farming.',
    'OM': 'Diverse agriculture with dates, fruits, vegetables, and dairy. Traditional and modern farming.'
  };

  const countryInsight = supportedCountryInsights[input.country as keyof typeof supportedCountryInsights] || 'Agricultural region with diverse farming practices.';
  
  let insights = `🌱 FOCUSED REGION: ${country.name} - ${countryInsight}\n`;
  
  if (country.agriculturalProfile) {
    insights += `- Total Agricultural Area: ${country.agriculturalProfile.totalAgriculturalArea}\n`;
    insights += `- Major Crops: ${country.agriculturalProfile.majorCrops.join(', ')}\n`;
    insights += `- Climate Zones: ${country.agriculturalProfile.climateZones.join(', ')}\n`;
    insights += `- Soil Types: ${country.agriculturalProfile.soilTypes.join(', ')}\n`;
    insights += `- Farming Systems: ${country.agriculturalProfile.farmingSystems.join(', ')}\n`;
  }

  if (input.state) {
    const states = getStatesByCountry(input.country);
    const state = states.find(s => s.code === input.state);
    if (state) {
      insights += `\nState Level (${state.name}):\n`;
      if (state.cities && state.cities.length > 0) {
        insights += `- Major Cities: ${state.cities.slice(0, 5).join(', ')}\n`;
      }
    }
  }

  if (input.district) {
    insights += `\nCity Level (${input.district}):\n`;
    insights += `- Local agricultural practices and crop patterns\n`;
    insights += `- Micro-climate considerations\n`;
  }

  return {
    insights,
    agriculturalData: country.agriculturalDataStatus
  };
}