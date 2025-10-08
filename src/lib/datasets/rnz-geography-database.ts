// RNZ Geography Database - Location-specific agricultural data
// Global coverage with focus on major agricultural regions

export interface LocationData {
  id: string;
  country: string;
  countryCode: string;
  state?: string;
  region: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  climateZone: string;
  averageClimate: ClimateProfile;
  soilProfile: SoilProfile;
  majorCrops: CropSuitability[];
  rnzDistribution: DistributionInfo;
  seasonalPattern: SeasonalPattern;
  marketAccess: MarketAccess;
}

export interface ClimateProfile {
  temperature: {
    annual: { min: number; max: number; average: number };
    summer: { min: number; max: number; average: number };
    winter: { min: number; max: number; average: number };
    monsoon?: { min: number; max: number; average: number };
  };
  rainfall: {
    annual: { min: number; max: number; average: number };
    pattern: 'bimodal' | 'unimodal' | 'uniform' | 'irregular';
    wetSeason: string;
    drySeason: string;
  };
  humidity: {
    annual: { min: number; max: number; average: number };
    seasonal: { wet: number; dry: number };
  };
  sunshine: {
    hoursPerDay: { min: number; max: number; average: number };
    intensity: 'low' | 'medium' | 'high';
  };
  windSpeed: {
    average: number;
    maxGust: number;
    direction: string;
  };
  extremeEvents: string[];
}

export interface SoilProfile {
  dominantTypes: string[];
  pH: { min: number; max: number; average: number };
  organicMatter: { min: number; max: number; average: number };
  nutrients: {
    nitrogen: 'low' | 'medium' | 'high';
    phosphorus: 'low' | 'medium' | 'high';
    potassium: 'low' | 'medium' | 'high';
  };
  micronutrients: {
    deficient: string[];
    adequate: string[];
    excess?: string[];
  };
  physicalProperties: {
    texture: string;
    drainage: 'poor' | 'moderate' | 'good' | 'excessive';
    waterHolding: 'low' | 'medium' | 'high';
    erosionRisk: 'low' | 'medium' | 'high';
  };
  commonProblems: string[];
  rnzSolutions: {
    soilAmendment: string[];
    nutritionProgram: string[];
    problemCorrection: string[];
  };
}

export interface CropSuitability {
  crop: string;
  suitability: 'excellent' | 'good' | 'fair' | 'poor';
  yieldPotential: { irrigated: number; rainfed: number; unit: string };
  majorConstraints: string[];
  rnzProgram: {
    primary: string[];
    secondary: string[];
    timing: string[];
  };
  bestVarieties: string[];
  growingSeasons: string[];
}

export interface DistributionInfo {
  availability: 'excellent' | 'good' | 'limited' | 'developing';
  distributors: number;
  serviceLevel: 'full' | 'basic' | 'limited';
  technicalSupport: boolean;
  deliveryTime: string;
  popularProducts: string[];
}

export interface SeasonalPattern {
  seasons: {
    name: string;
    months: string[];
    characteristics: string[];
    majorActivities: string[];
    rnzProducts: string[];
  }[];
  plantingCalendar: {
    crop: string;
    plantingTime: string[];
    harvestTime: string[];
    rnzSchedule: { timing: string; products: string[] }[];
  }[];
}

export interface MarketAccess {
  infrastructure: 'excellent' | 'good' | 'fair' | 'poor';
  storageCapacity: 'adequate' | 'limited' | 'insufficient';
  processing: string[];
  exportOpportunities: string[];
  priceVolatility: 'low' | 'medium' | 'high';
  marketingChannels: string[];
}

// Global Agricultural Regions Database
export const globalRegions: LocationData[] = [
  {
    id: 'north_india_punjab',
    country: 'India',
    countryCode: 'IN',
    state: 'Punjab',
    region: 'North India - Indo-Gangetic Plains',
    coordinates: { latitude: 30.9010, longitude: 75.8573 },
    climateZone: 'Semi-arid subtropical',
    averageClimate: {
      temperature: {
        annual: { min: 5, max: 47, average: 24 },
        summer: { min: 25, max: 47, average: 36 },
        winter: { min: 5, max: 20, average: 12 },
        monsoon: { min: 20, max: 35, average: 28 }
      },
      rainfall: {
        annual: { min: 400, max: 800, average: 600 },
        pattern: 'unimodal',
        wetSeason: 'July-September',
        drySeason: 'October-June'
      },
      humidity: {
        annual: { min: 40, max: 85, average: 62 },
        seasonal: { wet: 80, dry: 45 }
      },
      sunshine: {
        hoursPerDay: { min: 6, max: 11, average: 8.5 },
        intensity: 'high'
      },
      windSpeed: { average: 8, maxGust: 25, direction: 'SW during monsoon' },
      extremeEvents: ['heat waves', 'hailstorms', 'fog', 'occasional floods']
    },
    soilProfile: {
      dominantTypes: ['alluvial', 'loamy', 'sandy-loam'],
      pH: { min: 7.0, max: 8.5, average: 7.8 },
      organicMatter: { min: 0.3, max: 1.2, average: 0.7 },
      nutrients: { nitrogen: 'medium', phosphorus: 'low', potassium: 'medium' },
      micronutrients: {
        deficient: ['zinc', 'iron', 'manganese'],
        adequate: ['copper', 'boron'],
        excess: ['sodium in some areas']
      },
      physicalProperties: {
        texture: 'Sandy-loam to loam',
        drainage: 'good',
        waterHolding: 'medium',
        erosionRisk: 'low'
      },
      commonProblems: ['zinc deficiency', 'salinity in some areas', 'declining organic matter'],
      rnzSolutions: {
        soilAmendment: ['Granular Gypsum', 'RNZ SB+ (SB 90%)', 'Humic / Fulvic Acid'],
        nutritionProgram: ['NPK 12-12-17+2MgO+TE', 'Zinc Sulphate – Hepta & Mono', 'Potassium Sulphate (Standard, Soluble, Granular)'],
        problemCorrection: ['RNZ SB+Zn 8%', 'Calcium Thiosulphate (CaTS)', 'Seaweed Range']
      }
    },
    majorCrops: [
      {
        crop: 'wheat',
        suitability: 'excellent',
        yieldPotential: { irrigated: 6.5, rainfed: 3.5, unit: 'tons/ha' },
        majorConstraints: ['heat stress', 'zinc deficiency', 'terminal heat'],
        rnzProgram: {
          primary: ['NPK 12-12-17+2MgO+TE', 'Prilled / Granular Urea', 'NPK 13-00-45'],
          secondary: ['Zinc Sulphate – Hepta & Mono', 'Potassium Sulphate (Standard, Soluble, Granular)'],
          timing: ['basal at sowing', 'first irrigation', 'flag leaf stage']
        },
        bestVarieties: ['PBW-343', 'HD-2967', 'DBW-88'],
        growingSeasons: ['Rabi (November-April)']
      },
      {
        crop: 'rice',
        suitability: 'excellent',
        yieldPotential: { irrigated: 7.5, rainfed: 4.0, unit: 'tons/ha' },
        majorConstraints: ['water management', 'zinc deficiency', 'bacterial blight'],
        rnzProgram: {
          primary: ['NPK 25-25-25', 'Prilled / Granular Urea', 'NPK 12-6-60'],
          secondary: ['Zinc Sulphate – Hepta & Mono', 'Potassium Sulphate (Standard, Soluble, Granular)'],
          timing: ['nursery', 'transplanting', 'tillering', 'panicle initiation']
        },
        bestVarieties: ['PR-126', 'Pusa-44', 'Basmati-385'],
        growingSeasons: ['Kharif (June-October)']
      }
    ],
    rnzDistribution: {
      availability: 'excellent',
      distributors: 25,
      serviceLevel: 'full',
      technicalSupport: true,
      deliveryTime: '24-48 hours',
      popularProducts: ['NPK 12-12-17+2MgO+TE', 'Zinc Sulphate – Hepta & Mono', 'Potassium Sulphate (Standard, Soluble, Granular)']
    },
    seasonalPattern: {
      seasons: [
        {
          name: 'Rabi Season',
          months: ['November', 'December', 'January', 'February', 'March', 'April'],
          characteristics: ['cool dry weather', 'irrigation dependent', 'wheat season'],
          majorActivities: ['wheat sowing', 'irrigation', 'harvesting'],
          rnzProducts: ['NPK 12-12-17+2MgO+TE', 'Prilled / Granular Urea', 'Zinc Sulphate – Hepta & Mono']
        },
        {
          name: 'Kharif Season',
          months: ['June', 'July', 'August', 'September', 'October'],
          characteristics: ['hot humid weather', 'monsoon rains', 'rice season'],
          majorActivities: ['rice transplanting', 'pest management', 'harvesting'],
          rnzProducts: ['NPK 25-25-25', 'Zinc Sulphate – Hepta & Mono', 'Copper Sulphate – Pentahydrate']
        }
      ],
      plantingCalendar: [
        {
          crop: 'wheat',
          plantingTime: ['November 1-30'],
          harvestTime: ['April 1-30'],
          rnzSchedule: [
            { timing: 'At sowing', products: ['NPK 12-12-17+2MgO+TE', 'Zinc Sulphate – Hepta & Mono'] },
            { timing: 'First irrigation (21 DAS)', products: ['Prilled / Granular Urea'] },
            { timing: 'Second irrigation (40 DAS)', products: ['NPK 19-19-19'] },
            { timing: 'Flag leaf stage', products: ['NPK 13-00-45', 'Potassium Sulphate (Standard, Soluble, Granular)'] }
          ]
        }
      ]
    },
    marketAccess: {
      infrastructure: 'excellent',
      storageCapacity: 'adequate',
      processing: ['flour mills', 'rice mills', 'food processing'],
      exportOpportunities: ['basmati rice', 'wheat'],
      priceVolatility: 'low',
      marketingChannels: ['mandis', 'direct purchase', 'cooperatives', 'private traders']
    }
  },
  {
    id: 'maharashtra_sugarcane',
    country: 'India',
    countryCode: 'IN',
    state: 'Maharashtra',
    region: 'Western India - Deccan Plateau',
    coordinates: { latitude: 19.7515, longitude: 75.7139 },
    climateZone: 'Tropical semi-arid',
    averageClimate: {
      temperature: {
        annual: { min: 12, max: 42, average: 26 },
        summer: { min: 20, max: 42, average: 31 },
        winter: { min: 12, max: 30, average: 21 },
        monsoon: { min: 18, max: 35, average: 26 }
      },
      rainfall: {
        annual: { min: 400, max: 1200, average: 700 },
        pattern: 'unimodal',
        wetSeason: 'June-September',
        drySeason: 'October-May'
      },
      humidity: {
        annual: { min: 35, max: 90, average: 62 },
        seasonal: { wet: 85, dry: 40 }
      },
      sunshine: {
        hoursPerDay: { min: 7, max: 10, average: 8.5 },
        intensity: 'high'
      },
      windSpeed: { average: 6, maxGust: 20, direction: 'SW during monsoon' },
      extremeEvents: ['drought', 'heat waves', 'hailstorms', 'cyclones (coastal)']
    },
    soilProfile: {
      dominantTypes: ['black cotton (vertisols)', 'red lateritic', 'alluvial'],
      pH: { min: 6.5, max: 8.5, average: 7.8 },
      organicMatter: { min: 0.2, max: 1.0, average: 0.5 },
      nutrients: { nitrogen: 'low', phosphorus: 'medium', potassium: 'high' },
      micronutrients: {
        deficient: ['zinc', 'iron', 'boron'],
        adequate: ['manganese', 'copper'],
        excess: ['sodium in some areas']
      },
      physicalProperties: {
        texture: 'Clay to clay-loam',
        drainage: 'poor',
        waterHolding: 'high',
        erosionRisk: 'medium'
      },
      commonProblems: ['zinc deficiency', 'iron chlorosis', 'waterlogging', 'salinity'],
      rnzSolutions: {
        soilAmendment: ['Granular Gypsum', 'RNZ SB+ (SB 90%)', 'Soil Conditioners'],
        nutritionProgram: ['NPK 19-19-19', 'RNZ SB+Zn 8%', 'Fe EDDHA 6%'],
        problemCorrection: ['Calcium Thiosulphate (CaTS)', 'Zn EDTA 15%', 'Fe EDTA 12%']
      }
    },
    majorCrops: [
      {
        crop: 'sugarcane',
        suitability: 'excellent',
        yieldPotential: { irrigated: 120, rainfed: 60, unit: 'tons/ha' },
        majorConstraints: ['water stress', 'red rot', 'micronutrient deficiency'],
        rnzProgram: {
          primary: ['NPK 19-19-19', 'NPK 12-6-60', 'Prilled / Granular Urea'],
          secondary: ['RNZ SB+Zn 8%', 'Fe EDDHA 6%', 'Potassium Sulphate (Standard, Soluble, Granular)'],
          timing: ['planting', '45 days', '90 days', '6 months', '9 months']
        },
        bestVarieties: ['Co-86032', 'Co-0238', 'Co-94008'],
        growingSeasons: ['Annual crop - plant October-March']
      },
      {
        crop: 'cotton',
        suitability: 'good',
        yieldPotential: { irrigated: 2.5, rainfed: 1.2, unit: 'tons/ha' },
        majorConstraints: ['bollworm', 'sucking pests', 'nutrient management'],
        rnzProgram: {
          primary: ['NPK 19-19-19', 'NPK 13-00-45', 'Calcium Nitrate with Boron'],
          secondary: ['Zinc Sulphate – Hepta & Mono', 'DOT (Boron - 21%)', 'Potassium Sulphate (Standard, Soluble, Granular)'],
          timing: ['sowing', 'square formation', 'flowering', 'boll formation']
        },
        bestVarieties: ['Bt cotton hybrids'],
        growingSeasons: ['Kharif (June-December)']
      }
    ],
    rnzDistribution: {
      availability: 'good',
      distributors: 18,
      serviceLevel: 'full',
      technicalSupport: true,
      deliveryTime: '48-72 hours',
      popularProducts: ['NPK 19-19-19', 'RNZ SB+Zn 8%', 'Fe EDDHA 6%']
    },
    seasonalPattern: {
      seasons: [
        {
          name: 'Kharif Season',
          months: ['June', 'July', 'August', 'September', 'October'],
          characteristics: ['monsoon season', 'high humidity', 'disease pressure'],
          majorActivities: ['cotton sowing', 'pest management', 'harvesting'],
          rnzProducts: ['NPK 19-19-19', 'Copper Sulphate – Pentahydrate', 'Zinc Sulphate – Hepta & Mono']
        },
        {
          name: 'Rabi Season',
          months: ['November', 'December', 'January', 'February', 'March'],
          characteristics: ['dry cool weather', 'irrigation dependent'],
          majorActivities: ['wheat/gram sowing', 'sugarcane planting', 'harvesting'],
          rnzProducts: ['NPK 12-12-17+2MgO+TE', 'Triple Superphosphate', 'Potassium Sulphate (Standard, Soluble, Granular)']
        }
      ],
      plantingCalendar: [
        {
          crop: 'sugarcane',
          plantingTime: ['October-March'],
          harvestTime: ['12-15 months after planting'],
          rnzSchedule: [
            { timing: 'At planting', products: ['NPK 12-12-17+2MgO+TE', 'RNZ SB+Zn 8%'] },
            { timing: '45 days', products: ['Prilled / Granular Urea', 'Potassium Sulphate (Standard, Soluble, Granular)'] },
            { timing: '90 days', products: ['NPK 19-19-19'] },
            { timing: '6 months', products: ['NPK 12-6-60', 'Fe EDDHA 6%'] }
          ]
        }
      ]
    },
    marketAccess: {
      infrastructure: 'good',
      storageCapacity: 'adequate',
      processing: ['sugar mills', 'cotton ginning', 'textile mills'],
      exportOpportunities: ['cotton', 'sugar', 'processed foods'],
      priceVolatility: 'medium',
      marketingChannels: ['cooperatives', 'sugar mills', 'cotton procurement centers', 'private traders']
    }
  }
];

// Country-wise agricultural profiles
export const countryProfiles = {
  India: {
    totalArea: 328.7, // million hectares
    cultivatedArea: 156.0, // million hectares
    majorRegions: ['Indo-Gangetic Plains', 'Deccan Plateau', 'Coastal Plains', 'Western Ghats'],
    dominantCrops: ['rice', 'wheat', 'sugarcane', 'cotton', 'pulses', 'oilseeds'],
    climaticZones: ['tropical', 'subtropical', 'temperate', 'arid', 'semi-arid'],
    soilTypes: ['alluvial', 'black cotton', 'red lateritic', 'desert', 'mountain'],
    rnzPenetration: 'high',
    marketSize: 'large',
    growthPotential: 'high',
    regulatoryEnvironment: 'favorable'
  },
  USA: {
    totalArea: 916.2, // million hectares
    cultivatedArea: 157.7, // million hectares
    majorRegions: ['Great Plains', 'Corn Belt', 'California Central Valley', 'Southeast'],
    dominantCrops: ['corn', 'soybeans', 'wheat', 'cotton', 'fruits', 'vegetables'],
    climaticZones: ['temperate', 'subtropical', 'arid', 'continental'],
    soilTypes: ['prairie', 'alluvial', 'mountain', 'coastal'],
    rnzPenetration: 'developing',
    marketSize: 'large',
    growthPotential: 'medium',
    regulatoryEnvironment: 'strict'
  },
  Brazil: {
    totalArea: 845.9, // million hectares
    cultivatedArea: 80.0, // million hectares
    majorRegions: ['Cerrado', 'Amazon', 'Atlantic Forest', 'Pampas'],
    dominantCrops: ['soybeans', 'corn', 'sugarcane', 'coffee', 'cotton'],
    climaticZones: ['tropical', 'subtropical', 'temperate'],
    soilTypes: ['oxisols', 'ultisols', 'alfisols'],
    rnzPenetration: 'developing',
    marketSize: 'large',
    growthPotential: 'high',
    regulatoryEnvironment: 'moderate'
  }
};

// Climate zone specifications with RNZ recommendations
export const climateZoneSpecs = {
  tropical: {
    characteristics: ['high temperature', 'high rainfall', 'high humidity'],
    challenges: ['disease pressure', 'nutrient leaching', 'pest buildup'],
    rnzSolutions: [
      'Copper Sulphate – Pentahydrate',
      'Zinc Sulphate – Hepta & Mono',
      'NPK 19-19-19',
      'Seaweed Range'
    ],
    applicationAdjustments: {
      frequency: 'increased',
      timing: 'avoid rainy periods',
      formulation: 'weather-resistant'
    }
  },
  subtropical: {
    characteristics: ['moderate temperature', 'seasonal rainfall', 'variable humidity'],
    challenges: ['seasonal stress', 'nutrient imbalance', 'pest cycles'],
    rnzSolutions: [
      'NPK 12-12-17+2MgO+TE',
      'Potassium Sulphate (Standard, Soluble, Granular)',
      'Fe EDTA 12%',
      'Humic / Fulvic Acid'
    ],
    applicationAdjustments: {
      frequency: 'seasonal',
      timing: 'growth stage specific',
      formulation: 'balanced'
    }
  },
  arid: {
    characteristics: ['low rainfall', 'high temperature', 'low humidity'],
    challenges: ['water stress', 'salt accumulation', 'micronutrient deficiency'],
    rnzSolutions: [
      'Potassium Thiosulphate (KTS)',
      'Calcium Thiosulphate (CaTS)',
      'RNZ SB+ (SB 90%)',
      'Amino Acids'
    ],
    applicationAdjustments: {
      frequency: 'with irrigation',
      timing: 'early morning/evening',
      formulation: 'soluble'
    }
  },
  temperate: {
    characteristics: ['moderate temperature', 'regular rainfall', 'seasonal variation'],
    challenges: ['seasonal nutrient availability', 'soil pH variation', 'cold stress'],
    rnzSolutions: [
      'NPK 15-15-15',
      'Calcium Nitrate with Boron',
      'Magnesium Sulphate – Hepta, Mono & Anhydrous',
      'Granular Gypsum'
    ],
    applicationAdjustments: {
      frequency: 'seasonal',
      timing: 'growing season',
      formulation: 'slow-release preferred'
    }
  }
};
