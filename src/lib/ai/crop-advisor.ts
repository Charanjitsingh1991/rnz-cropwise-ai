// AI-Powered Crop Advisor Service using RNZ Product Database
import { products } from '@/lib/static-data';
import type { Product } from '@/lib/types';
import { cropDatabase } from '@/lib/datasets/rnz-crop-database';
import { diseaseDatabase } from '@/lib/datasets/rnz-disease-database';
import { globalRegions, climateZoneSpecs } from '@/lib/datasets/rnz-geography-database';
import { soilTypeDatabase, nutrientDeficiencyDatabase } from '@/lib/datasets/rnz-soil-database';

export interface SoilData {
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organicMatter: number;
  texture: 'sandy' | 'loamy' | 'clay';
  moisture: number;
}

export interface ClimateData {
  temperature: number;
  humidity: number;
  rainfall: number;
  sunlight: number;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
}

export interface MarketData {
  cropName: string;
  currentPrice: number;
  demandTrend: 'high' | 'medium' | 'low';
  supplyLevel: 'high' | 'medium' | 'low';
  priceTrend: 'rising' | 'stable' | 'falling';
}

export interface CropRecommendation {
  cropName: string;
  confidence: number;
  reasons: string[];
  expectedYield: number;
  marketPotential: number;
  riskLevel: 'low' | 'medium' | 'high';
  estimatedProfit: number;
  recommendedProducts: Product[]; // Actual RNZ products from database
}

export interface DiseaseDetection {
  diseaseName: string;
  confidence: number;
  symptoms: string[];
  treatments: string[];
  prevention: string[];
  severity: 'low' | 'medium' | 'high';
  recommendedProducts: Product[]; // RNZ products for treatment
}

export interface YieldPrediction {
  predictedYield: number;
  confidence: number;
  factors: {
    weather: number;
    soil: number;
    management: number;
    historical: number;
  };
  recommendations: string[];
  recommendedProducts: Product[]; // RNZ products to improve yield
}

export interface FertilizerRecommendation {
  fertilizerType: string;
  amount: number;
  unit: string;
  applicationMethod: string;
  timing: string;
  cost: number;
  expectedBenefit: number;
  rnzProduct: Product; // Specific RNZ product from database
}

export class CropAdvisorAI {
  // Disease database mapped to RNZ products that can treat them
  private readonly diseaseDatabase = {
    blight: {
      symptoms: ['Brown spots on leaves', 'Yellowing foliage', 'Wilting'],
      treatments: ['Apply fungicide', 'Improve air circulation', 'Remove affected parts'],
      prevention: ['Proper spacing', 'Avoid overhead watering', 'Crop rotation'],
      rnzProductTypes: ['Micro Elements', 'Sulphates Products'] // Categories that help with disease resistance
    },
    powdery_mildew: {
      symptoms: ['White powdery coating on leaves', 'Stunted growth', 'Leaf curling'],
      treatments: ['Fungicide application', 'Increase air flow', 'Remove infected leaves'],
      prevention: ['Proper spacing', 'Avoid high humidity', 'Resistant varieties'],
      rnzProductTypes: ['Micro Elements', 'Bio/Organic Items']
    },
    root_rot: {
      symptoms: ['Yellowing leaves', 'Stunted growth', 'Dark, mushy roots'],
      treatments: ['Improve drainage', 'Reduce watering', 'Apply fungicide'],
      prevention: ['Well-draining soil', 'Proper watering', 'Healthy soil microbes'],
      rnzProductTypes: ['Sulphur Based', 'Bio/Organic Items']
    },
    nutrient_deficiency: {
      symptoms: ['Yellowing leaves', 'Poor growth', 'Discoloration'],
      treatments: ['Apply balanced fertilizer', 'Soil testing', 'Foliar feeding'],
      prevention: ['Regular fertilization', 'Soil health maintenance', 'Proper pH'],
      rnzProductTypes: ['Water Soluble NPK (100% Soluble Powders)', 'Micro Elements', 'Straights Items']
    }
  };

  // Helper function to filter RNZ products based on conditions
  private filterRNZProducts(
    cropType: string,
    soilType: string,
    growthStage: string,
    productCategories?: string[]
  ): Product[] {
    return products.filter((product: Product) => {
      // Ensure product properties are arrays
      const productCrops = Array.isArray(product.crops) ? product.crops : [];
      const productSoilTypes = Array.isArray(product.soilTypes) ? product.soilTypes : [];
      const productCategories = Array.isArray(product.categories) ? product.categories : [];

      // Check crop compatibility
      const matchesCrop = productCrops.length === 0 || 
                         productCrops.some(crop => 
                           crop.toLowerCase().includes('all') ||
                           crop.toLowerCase().includes(cropType.toLowerCase())
                         );

      // Check soil compatibility  
      const matchesSoil = productSoilTypes.length === 0 ||
                         productSoilTypes.some(soil => 
                           soil.toLowerCase().includes('all') ||
                           soil.toLowerCase().includes(soilType.toLowerCase())
                         );

      // Check category filter if provided
      const matchesCategory = !productCategories || 
                             productCategories.some(cat => 
                               productCategories.includes(cat)
                             );

      return matchesCrop && matchesSoil && matchesCategory;
    });
  }

  // Get appropriate RNZ products for specific growth stage
  private getProductsForGrowthStage(
    cropType: string,
    soilType: string,
    growthStage: string
  ): Product[] {
    let preferredCategories: string[] = [];

    switch (growthStage.toLowerCase()) {
      case 'seedling':
      case 'germination':
        preferredCategories = ['Water Soluble NPK (100% Soluble Powders)', 'Straights Items'];
        break;
      case 'vegetative':
        preferredCategories = ['Water Soluble NPK (100% Soluble Powders)', 'Granular NPK Grades'];
        break;
      case 'flowering':
      case 'reproductive':
        preferredCategories = ['Water Soluble NPK (100% Soluble Powders)', 'Micro Elements'];
        break;
      case 'fruiting':
      case 'maturity':
        preferredCategories = ['Liquid Items', 'Micro Elements', 'Bio/Organic Items'];
        break;
      default:
        preferredCategories = ['Water Soluble NPK (100% Soluble Powders)'];
    }

    return this.filterRNZProducts(cropType, soilType, growthStage, preferredCategories);
  }

  async getCropRecommendations(
    soilData: SoilData,
    climateData: ClimateData,
    marketData: MarketData[],
    location: string
  ): Promise<CropRecommendation[]> {
    // Analyze soil and climate to recommend crops
    const suitableCrops = this.analyzeSuitableCrops(soilData, climateData);
    
    const recommendations: CropRecommendation[] = [];

    for (const crop of suitableCrops) {
      // Get RNZ products suitable for this crop
      const recommendedProducts = this.filterRNZProducts(
        crop.name,
        soilData.texture,
        'vegetative'
      ).slice(0, 3); // Top 3 products

      const confidence = this.calculateCropConfidence(crop.name, soilData, climateData);
      
      recommendations.push({
        cropName: crop.name,
        confidence,
        reasons: crop.reasons,
        expectedYield: crop.expectedYield,
        marketPotential: crop.marketPotential,
        riskLevel: crop.riskLevel,
        estimatedProfit: crop.estimatedProfit,
        recommendedProducts
      });
    }

    return recommendations.sort((a, b) => b.confidence - a.confidence);
  }

  async detectDisease(
    imageUrl: string,
    cropType: string
  ): Promise<DiseaseDetection> {
    // Simulate disease detection (in real implementation, this would use ML/AI)
    const diseases = Object.keys(this.diseaseDatabase);
    const detectedDisease = diseases[Math.floor(Math.random() * diseases.length)];
    const diseaseInfo = this.diseaseDatabase[detectedDisease as keyof typeof this.diseaseDatabase];
    
    // Get RNZ products that can help with this disease
    const recommendedProducts = this.filterRNZProducts(
      cropType,
      'all',
      'all',
      diseaseInfo.rnzProductTypes
    ).slice(0, 3);

    const confidence = 0.75 + Math.random() * 0.2; // 75-95% confidence

    return {
      diseaseName: detectedDisease.replace('_', ' '),
      confidence,
      symptoms: diseaseInfo.symptoms,
      treatments: diseaseInfo.treatments,
      prevention: diseaseInfo.prevention,
      severity: confidence > 0.8 ? 'high' : confidence > 0.6 ? 'medium' : 'low',
      recommendedProducts
    };
  }

  async predictYield(
    cropType: string,
    soilData: SoilData,
    climateData: ClimateData,
    historicalData?: any
  ): Promise<YieldPrediction> {
    // Calculate yield based on conditions
    const soilScore = this.calculateSoilScore(soilData);
    const climateScore = this.calculateClimateScore(climateData);
    const managementScore = 0.8; // Assume good management
    const historicalScore = 0.75; // Average historical performance

    const baseYield = this.getBaseYield(cropType);
    const predictedYield = baseYield * soilScore * climateScore * managementScore;

    // Get RNZ products to improve yield
    const recommendedProducts = this.getProductsForGrowthStage(
      cropType,
      soilData.texture,
      'fruiting'
    ).slice(0, 3);

    return {
      predictedYield,
      confidence: (soilScore + climateScore + managementScore + historicalScore) / 4,
      factors: {
        weather: climateScore,
        soil: soilScore,
        management: managementScore,
        historical: historicalScore
      },
      recommendations: [
        'Apply balanced nutrition during vegetative stage',
        'Monitor soil moisture levels regularly',
        'Use foliar feeding during critical growth periods',
        'Implement integrated pest management'
      ],
      recommendedProducts
    };
  }

  async getFertilizerRecommendations(
    cropType: string,
    soilData: SoilData,
    targetYield: number
  ): Promise<FertilizerRecommendation[]> {
    const recommendations: FertilizerRecommendation[] = [];
    
    // Calculate nutrient requirements
    const nRequirement = this.calculateNitrogenNeed(cropType, targetYield, soilData);
    const pRequirement = this.calculatePhosphorusNeed(cropType, targetYield, soilData);
    const kRequirement = this.calculatePotassiumNeed(cropType, targetYield, soilData);

    // Get suitable RNZ products for different nutrient needs
    const npkProducts = products.filter(p => 
      p.categories?.includes('Water Soluble NPK (100% Soluble Powders)') ||
      p.categories?.includes('Granular NPK Grades')
    );

    const microProducts = products.filter(p => 
      p.categories?.includes('Micro Elements')
    );

    const organicProducts = products.filter(p => 
      p.categories?.includes('Bio/Organic Items')
    );

    // NPK recommendation
    if (npkProducts.length > 0) {
      const selectedNPK = npkProducts[0]; // Take first suitable NPK
      recommendations.push({
        fertilizerType: 'NPK Fertilizer',
        amount: Math.ceil((nRequirement + pRequirement + kRequirement) / 3),
        unit: 'kg/ha',
        applicationMethod: 'Fertigation or Soil Application',
        timing: 'Base application + 2-3 split doses',
        cost: 150,
        expectedBenefit: 0.15,
        rnzProduct: selectedNPK
      });
    }

    // Micronutrient recommendation
    if (microProducts.length > 0) {
      const selectedMicro = microProducts[0];
      recommendations.push({
        fertilizerType: 'Micronutrients',
        amount: 2,
        unit: 'kg/ha',
        applicationMethod: 'Foliar Spray',
        timing: 'Pre-flowering and fruit development',
        cost: 80,
        expectedBenefit: 0.08,
        rnzProduct: selectedMicro
      });
    }

    // Organic amendment recommendation
    if (organicProducts.length > 0) {
      const selectedOrganic = organicProducts[0];
      recommendations.push({
        fertilizerType: 'Organic Amendment',
        amount: 500,
        unit: 'kg/ha',
        applicationMethod: 'Soil Incorporation',
        timing: 'Pre-planting soil preparation',
        cost: 200,
        expectedBenefit: 0.12,
        rnzProduct: selectedOrganic
      });
    }

    return recommendations;
  }

  // Helper methods for calculations
  private analyzeSuitableCrops(soilData: SoilData, climateData: ClimateData) {
    // This would normally be more sophisticated
    const crops = [
      {
        name: 'Tomatoes',
        reasons: ['Good pH match', 'Suitable climate conditions', 'High market demand'],
        expectedYield: 45,
        marketPotential: 0.85,
        riskLevel: 'medium' as const,
        estimatedProfit: 2500
      },
      {
        name: 'Wheat',
        reasons: ['Excellent soil match', 'Climate favorable', 'Stable market'],
        expectedYield: 4.2,
        marketPotential: 0.75,
        riskLevel: 'low' as const,
        estimatedProfit: 1800
      },
      {
        name: 'Corn',
        reasons: ['Good growing conditions', 'High yield potential'],
        expectedYield: 8.5,
        marketPotential: 0.80,
        riskLevel: 'medium' as const,
        estimatedProfit: 2200
      }
    ];

    return crops;
  }

  private calculateCropConfidence(cropName: string, soilData: SoilData, climateData: ClimateData): number {
    let score = 0.5; // Base score

    // pH suitability
    if (soilData.ph >= 6.0 && soilData.ph <= 7.5) score += 0.2;
    
    // Temperature suitability
    if (climateData.temperature >= 15 && climateData.temperature <= 30) score += 0.2;
    
    // Moisture suitability
    if (soilData.moisture >= 20 && soilData.moisture <= 80) score += 0.1;

    return Math.min(score, 0.95);
  }

  private calculateSoilScore(soilData: SoilData): number {
    let score = 0.5;
    
    // pH score
    if (soilData.ph >= 6.0 && soilData.ph <= 7.5) score += 0.2;
    else if (soilData.ph >= 5.5 && soilData.ph <= 8.0) score += 0.1;
    
    // Nutrient scores
    if (soilData.nitrogen >= 30) score += 0.1;
    if (soilData.phosphorus >= 15) score += 0.1;
    if (soilData.potassium >= 100) score += 0.1;
    
    return Math.min(score, 1.0);
  }

  private calculateClimateScore(climateData: ClimateData): number {
    let score = 0.5;
    
    // Temperature score
    if (climateData.temperature >= 15 && climateData.temperature <= 30) score += 0.2;
    
    // Humidity score
    if (climateData.humidity >= 40 && climateData.humidity <= 70) score += 0.15;
    
    // Rainfall score
    if (climateData.rainfall >= 50 && climateData.rainfall <= 150) score += 0.15;
    
    return Math.min(score, 1.0);
  }

  private getBaseYield(cropType: string): number {
    const baseYields: { [key: string]: number } = {
      'wheat': 4.0,
      'corn': 8.0,
      'rice': 6.0,
      'soybeans': 3.0,
      'cotton': 1.5,
      'tomatoes': 40.0
    };
    
    return baseYields[cropType.toLowerCase()] || 3.0;
  }

  private calculateNitrogenNeed(cropType: string, targetYield: number, soilData: SoilData): number {
    const nRequirementPerUnit = {
      'wheat': 25,
      'corn': 20,
      'rice': 18,
      'soybeans': 5,
      'cotton': 15,
      'tomatoes': 3
    };
    
    const baseRequirement = (nRequirementPerUnit[cropType.toLowerCase()] || 20) * targetYield;
    const soilN = soilData.nitrogen;
    
    return Math.max(0, baseRequirement - soilN);
  }

  private calculatePhosphorusNeed(cropType: string, targetYield: number, soilData: SoilData): number {
    const pRequirementPerUnit = {
      'wheat': 12,
      'corn': 10,
      'rice': 8,
      'soybeans': 8,
      'cotton': 10,
      'tomatoes': 2
    };
    
    const baseRequirement = (pRequirementPerUnit[cropType.toLowerCase()] || 10) * targetYield;
    const soilP = soilData.phosphorus;
    
    return Math.max(0, baseRequirement - soilP);
  }

  private calculatePotassiumNeed(cropType: string, targetYield: number, soilData: SoilData): number {
    const kRequirementPerUnit = {
      'wheat': 15,
      'corn': 18,
      'rice': 20,
      'soybeans': 20,
      'cotton': 12,
      'tomatoes': 4
    };
    
    const baseRequirement = (kRequirementPerUnit[cropType.toLowerCase()] || 15) * targetYield;
    const soilK = soilData.potassium;
    
    return Math.max(0, baseRequirement - soilK);
  }
}