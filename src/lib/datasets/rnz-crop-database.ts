// RNZ Crop Database - Built from RNZ Product Specifications
// This database maps crops to specific RNZ products based on scientific agricultural principles

export interface CropData {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  varieties: string[];
  growthStages: GrowthStage[];
  soilRequirements: SoilRequirements;
  climateRequirements: ClimateRequirements;
  yieldPotential: YieldPotential;
  commonDiseases: Disease[];
  marketData: MarketData;
}

export interface GrowthStage {
  stage: string;
  duration: string;
  criticalFactors: string[];
  nutritionNeeds: {
    nitrogen: 'low' | 'medium' | 'high';
    phosphorus: 'low' | 'medium' | 'high';
    potassium: 'low' | 'medium' | 'high';
    micronutrients: string[];
  };
  recommendedRNZProducts: {
    primary: string;
    secondary?: string;
    micronutrients?: string[];
    organic?: string;
  };
  applicationTiming: string;
  expectedResponse: string;
}

export interface SoilRequirements {
  pH: { min: number; max: number; optimal: number };
  texture: string[];
  drainage: string;
  organicMatter: { min: number; optimal: number };
  nutrients: {
    nitrogen: { min: number; optimal: number; unit: string };
    phosphorus: { min: number; optimal: number; unit: string };
    potassium: { min: number; optimal: number; unit: string };
  };
}

export interface ClimateRequirements {
  temperature: {
    germination: { min: number; max: number; optimal: number };
    growth: { min: number; max: number; optimal: number };
    flowering: { min: number; max: number; optimal: number };
    maturity: { min: number; max: number; optimal: number };
  };
  rainfall: { min: number; max: number; optimal: number; unit: string };
  humidity: { min: number; max: number; optimal: number };
  photoperiod: string;
  frostTolerance: 'low' | 'medium' | 'high';
}

export interface YieldPotential {
  irrigated: { min: number; max: number; average: number };
  rainfed: { min: number; max: number; average: number };
  unit: string;
  factors: {
    variety: number;
    soil: number;
    climate: number;
    management: number;
    nutrition: number;
  };
}

export interface Disease {
  name: string;
  scientificName: string;
  symptoms: string[];
  conditions: {
    temperature?: { min: number; max: number };
    humidity?: { min: number; max: number };
    moisture?: string;
  };
  rnzTreatment: {
    preventive: string[];
    curative: string[];
    dosage: { [productName: string]: string };
  };
  severity: 'low' | 'medium' | 'high';
  economicLoss: { min: number; max: number; unit: string };
}

export interface MarketData {
  averagePrice: { min: number; max: number; unit: string };
  demand: 'low' | 'medium' | 'high';
  seasonality: string[];
  exportPotential: boolean;
  processingUse: string[];
}

// Comprehensive Crop Database Based on RNZ Products
export const cropDatabase: CropData[] = [
  {
    id: 'wheat',
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    category: 'Cereal',
    varieties: ['HD-2967', 'PBW-343', 'DBW-88', 'HD-3086'],
    growthStages: [
      {
        stage: 'sowing_emergence',
        duration: '0-15 days',
        criticalFactors: ['soil moisture', 'temperature', 'seed quality'],
        nutritionNeeds: {
          nitrogen: 'low',
          phosphorus: 'high',
          potassium: 'medium',
          micronutrients: ['zinc', 'boron']
        },
        recommendedRNZProducts: {
          primary: 'NPK 13-40-13', // High P for root development
          secondary: 'Zinc Sulphate – Hepta & Mono',
          micronutrients: ['Zn EDTA 15%', 'Boric Acid']
        },
        applicationTiming: 'At sowing as basal dose',
        expectedResponse: 'Better germination and root establishment'
      },
      {
        stage: 'tillering',
        duration: '15-45 days',
        criticalFactors: ['nitrogen availability', 'moisture', 'temperature'],
        nutritionNeeds: {
          nitrogen: 'high',
          phosphorus: 'medium',
          potassium: 'medium',
          micronutrients: ['zinc', 'iron']
        },
        recommendedRNZProducts: {
          primary: 'NPK 30-10-10', // High N for vegetative growth
          secondary: 'Prilled / Granular Urea',
          micronutrients: ['Fe EDTA 12%'],
          organic: 'Seaweed Range'
        },
        applicationTiming: '20-25 days after sowing',
        expectedResponse: 'Increased tiller number and vigorous growth'
      },
      {
        stage: 'jointing_booting',
        duration: '45-75 days',
        criticalFactors: ['balanced nutrition', 'water stress management'],
        nutritionNeeds: {
          nitrogen: 'medium',
          phosphorus: 'medium',
          potassium: 'high',
          micronutrients: ['potassium', 'sulphur']
        },
        recommendedRNZProducts: {
          primary: 'NPK 19-19-19', // Balanced nutrition
          secondary: 'Potassium Sulphate (Standard, Soluble, Granular)',
          micronutrients: ['RNZ SB+ (SB 90%)', 'Potassium Magnesium Sulphate']
        },
        applicationTiming: '45-50 days after sowing',
        expectedResponse: 'Strong stem development and spike formation'
      },
      {
        stage: 'heading_flowering',
        duration: '75-90 days',
        criticalFactors: ['potassium', 'micronutrients', 'water management'],
        nutritionNeeds: {
          nitrogen: 'low',
          phosphorus: 'medium',
          potassium: 'high',
          micronutrients: ['boron', 'zinc', 'iron']
        },
        recommendedRNZProducts: {
          primary: 'NPK 13-00-45', // High K for grain filling
          secondary: 'Potassium Nitrate (Powder & Prilled)',
          micronutrients: ['DOT (Boron - 21%)', 'Combi Mix'],
          organic: 'Humic / Fulvic Acid'
        },
        applicationTiming: 'Foliar spray at 50% flowering',
        expectedResponse: 'Better grain setting and quality'
      },
      {
        stage: 'grain_filling_maturity',
        duration: '90-120 days',
        criticalFactors: ['potassium', 'calcium', 'disease management'],
        nutritionNeeds: {
          nitrogen: 'low',
          phosphorus: 'low',
          potassium: 'high',
          micronutrients: ['calcium', 'magnesium']
        },
        recommendedRNZProducts: {
          primary: 'NPK 06-12-36', // High K for grain quality
          secondary: 'Calcium Nitrate – Soluble',
          micronutrients: ['Magnesium Sulphate – Hepta, Mono & Anhydrous'],
          organic: 'Amino Acids'
        },
        applicationTiming: 'Foliar spray 2-3 times during grain filling',
        expectedResponse: 'Higher test weight and grain quality'
      }
    ],
    soilRequirements: {
      pH: { min: 6.0, max: 7.5, optimal: 6.8 },
      texture: ['loam', 'clay-loam', 'silt-loam'],
      drainage: 'well-drained',
      organicMatter: { min: 0.5, optimal: 1.5 },
      nutrients: {
        nitrogen: { min: 200, optimal: 400, unit: 'kg/ha' },
        phosphorus: { min: 15, optimal: 25, unit: 'kg/ha' },
        potassium: { min: 150, optimal: 250, unit: 'kg/ha' }
      }
    },
    climateRequirements: {
      temperature: {
        germination: { min: 4, max: 37, optimal: 20 },
        growth: { min: 10, max: 25, optimal: 18 },
        flowering: { min: 16, max: 20, optimal: 18 },
        maturity: { min: 14, max: 20, optimal: 16 }
      },
      rainfall: { min: 300, max: 1000, optimal: 600, unit: 'mm' },
      humidity: { min: 50, max: 70, optimal: 60 },
      photoperiod: 'long day plant',
      frostTolerance: 'medium'
    },
    yieldPotential: {
      irrigated: { min: 4.0, max: 8.0, average: 6.0 },
      rainfed: { min: 2.0, max: 4.0, average: 3.0 },
      unit: 'tons/ha',
      factors: {
        variety: 20,
        soil: 25,
        climate: 20,
        management: 20,
        nutrition: 15
      }
    },
    commonDiseases: [
      {
        name: 'Wheat Rust',
        scientificName: 'Puccinia graminis',
        symptoms: ['Orange-red pustules on leaves', 'Yellow stripes', 'Premature leaf drying'],
        conditions: {
          temperature: { min: 15, max: 25 },
          humidity: { min: 80, max: 100 },
          moisture: 'high humidity with dew'
        },
        rnzTreatment: {
          preventive: ['Zinc Sulphate – Hepta & Mono', 'Manganese Sulphate'],
          curative: ['Copper Sulphate – Pentahydrate', 'Fe EDTA 12%'],
          dosage: {
            'Zinc Sulphate – Hepta & Mono': '2-3 kg/ha foliar',
            'Copper Sulphate – Pentahydrate': '1-2 kg/ha foliar'
          }
        },
        severity: 'high',
        economicLoss: { min: 10, max: 70, unit: 'percent' }
      }
    ],
    marketData: {
      averagePrice: { min: 1800, max: 2500, unit: 'INR/quintal' },
      demand: 'high',
      seasonality: ['March-May harvest', 'Year-round consumption'],
      exportPotential: true,
      processingUse: ['flour', 'bread', 'pasta', 'biscuits']
    }
  },
  {
    id: 'rice',
    name: 'Rice',
    scientificName: 'Oryza sativa',
    category: 'Cereal',
    varieties: ['Pusa-44', 'IR-64', 'Swarna', 'Basmati-370'],
    growthStages: [
      {
        stage: 'nursery_transplanting',
        duration: '0-25 days',
        criticalFactors: ['seedbed preparation', 'phosphorus availability'],
        nutritionNeeds: {
          nitrogen: 'low',
          phosphorus: 'high',
          potassium: 'medium',
          micronutrients: ['zinc', 'iron']
        },
        recommendedRNZProducts: {
          primary: 'NPK 12-61-0', // High P for nursery
          secondary: 'Triple Superphosphate',
          micronutrients: ['Zn EDTA 15%', 'Fe EDDHA 6%']
        },
        applicationTiming: 'In nursery bed before sowing',
        expectedResponse: 'Healthy seedlings for transplanting'
      },
      {
        stage: 'vegetative',
        duration: '25-65 days',
        criticalFactors: ['nitrogen management', 'water level', 'zinc availability'],
        nutritionNeeds: {
          nitrogen: 'high',
          phosphorus: 'medium',
          potassium: 'medium',
          micronutrients: ['zinc', 'iron', 'manganese']
        },
        recommendedRNZProducts: {
          primary: 'NPK 25-25-25', // Balanced nutrition
          secondary: 'Prilled / Granular Urea',
          micronutrients: ['Zinc Sulphate – Hepta & Mono', 'Ferrous Sulphate – Hepta & Mono'],
          organic: 'Seaweed Range'
        },
        applicationTiming: '15 days after transplanting',
        expectedResponse: 'Vigorous tillering and green foliage'
      },
      {
        stage: 'reproductive',
        duration: '65-95 days',
        criticalFactors: ['panicle initiation', 'flowering', 'grain setting'],
        nutritionNeeds: {
          nitrogen: 'medium',
          phosphorus: 'high',
          potassium: 'high',
          micronutrients: ['boron', 'zinc']
        },
        recommendedRNZProducts: {
          primary: 'NPK 12-52-08', // High P&K for reproductive phase
          secondary: 'Potassium Sulphate (Standard, Soluble, Granular)',
          micronutrients: ['DOT (Boron - 21%)', 'Zn EDTA 15%'],
          organic: 'Humic / Fulvic Acid'
        },
        applicationTiming: 'At panicle initiation and 50% flowering',
        expectedResponse: 'Better grain setting and panicle size'
      },
      {
        stage: 'grain_filling',
        duration: '95-120 days',
        criticalFactors: ['grain filling', 'quality parameters'],
        nutritionNeeds: {
          nitrogen: 'low',
          phosphorus: 'medium',
          potassium: 'high',
          micronutrients: ['potassium', 'calcium']
        },
        recommendedRNZProducts: {
          primary: 'NPK 12-6-60', // High K for grain filling
          secondary: 'Potassium Nitrate (Powder & Prilled)',
          micronutrients: ['Calcium Nitrate – Soluble'],
          organic: 'Amino Acids'
        },
        applicationTiming: 'During grain filling stage',
        expectedResponse: 'Higher grain weight and quality'
      }
    ],
    soilRequirements: {
      pH: { min: 5.5, max: 7.0, optimal: 6.5 },
      texture: ['clay', 'clay-loam', 'silty-clay'],
      drainage: 'poor to moderate (flooded conditions)',
      organicMatter: { min: 1.0, optimal: 2.5 },
      nutrients: {
        nitrogen: { min: 150, optimal: 300, unit: 'kg/ha' },
        phosphorus: { min: 20, optimal: 30, unit: 'kg/ha' },
        potassium: { min: 100, optimal: 200, unit: 'kg/ha' }
      }
    },
    climateRequirements: {
      temperature: {
        germination: { min: 20, max: 35, optimal: 30 },
        growth: { min: 20, max: 35, optimal: 25 },
        flowering: { min: 20, max: 30, optimal: 25 },
        maturity: { min: 18, max: 25, optimal: 22 }
      },
      rainfall: { min: 1000, max: 2500, optimal: 1500, unit: 'mm' },
      humidity: { min: 80, max: 95, optimal: 85 },
      photoperiod: 'short day plant',
      frostTolerance: 'low'
    },
    yieldPotential: {
      irrigated: { min: 5.0, max: 10.0, average: 7.5 },
      rainfed: { min: 2.5, max: 5.0, average: 3.5 },
      unit: 'tons/ha',
      factors: {
        variety: 25,
        soil: 20,
        climate: 25,
        management: 20,
        nutrition: 10
      }
    },
    commonDiseases: [
      {
        name: 'Bacterial Blight',
        scientificName: 'Xanthomonas oryzae',
        symptoms: ['Water-soaked lesions', 'Yellow stripes', 'Leaf tip burning'],
        conditions: {
          temperature: { min: 25, max: 30 },
          humidity: { min: 85, max: 95 },
          moisture: 'high humidity with flooding'
        },
        rnzTreatment: {
          preventive: ['Zinc Sulphate – Hepta & Mono', 'Copper Sulphate – Pentahydrate'],
          curative: ['Copper Sulphate – Pentahydrate', 'Manganese Sulphate'],
          dosage: {
            'Copper Sulphate – Pentahydrate': '2 kg/ha foliar',
            'Zinc Sulphate – Hepta & Mono': '3 kg/ha foliar'
          }
        },
        severity: 'high',
        economicLoss: { min: 20, max: 80, unit: 'percent' }
      }
    ],
    marketData: {
      averagePrice: { min: 1600, max: 2200, unit: 'INR/quintal' },
      demand: 'high',
      seasonality: ['September-November harvest', 'Year-round consumption'],
      exportPotential: true,
      processingUse: ['milled rice', 'parboiled rice', 'rice flour', 'rice bran oil']
    }
  }
];

// Soil-RNZ Product Mapping Database
export const soilRNZMapping = {
  acidSoils: {
    pH: { min: 3.5, max: 6.4 },
    problems: ['aluminum toxicity', 'phosphorus fixation', 'calcium deficiency'],
    rnzSolutions: [
      {
        product: 'Granular Gypsum',
        purpose: 'pH correction and calcium supply',
        dosage: '500-1000 kg/ha',
        timing: 'Before sowing'
      },
      {
        product: 'RNZ ES 99.5%',
        purpose: 'Soil pH improvement',
        dosage: '200-400 kg/ha',
        timing: 'Soil preparation'
      },
      {
        product: 'Calcium Nitrate – Soluble',
        purpose: 'Calcium supplementation',
        dosage: '100-150 kg/ha',
        timing: 'As basal or top dressing'
      }
    ]
  },
  alkalineSoils: {
    pH: { min: 7.4, max: 9.5 },
    problems: ['iron chlorosis', 'zinc deficiency', 'phosphorus fixation'],
    rnzSolutions: [
      {
        product: 'RNZ SB+ (SB 90%)',
        purpose: 'Sulfur for pH reduction',
        dosage: '300-500 kg/ha',
        timing: 'Before sowing'
      },
      {
        product: 'Fe EDDHA 6%',
        purpose: 'Iron deficiency correction',
        dosage: '5-10 kg/ha',
        timing: 'Foliar spray'
      },
      {
        product: 'Zn EDTA 15%',
        purpose: 'Zinc deficiency correction',
        dosage: '2-5 kg/ha',
        timing: 'Foliar spray'
      }
    ]
  },
  salineSoils: {
    ec: { min: 4, max: 15, unit: 'dS/m' },
    problems: ['salt stress', 'nutrient imbalance', 'poor structure'],
    rnzSolutions: [
      {
        product: 'Granular Gypsum',
        purpose: 'Sodium displacement',
        dosage: '1000-2000 kg/ha',
        timing: 'Soil reclamation'
      },
      {
        product: 'Humic / Fulvic Acid',
        purpose: 'Soil structure improvement',
        dosage: '20-30 L/ha',
        timing: 'With irrigation'
      },
      {
        product: 'Calcium Thiosulphate (CaTS)',
        purpose: 'Calcium and sulfur supply',
        dosage: '100-200 L/ha',
        timing: 'Through drip irrigation'
      }
    ]
  }
};

// Climate-RNZ Product Mapping
export const climateRNZMapping = {
  droughtStress: {
    conditions: ['low rainfall', 'high temperature', 'low humidity'],
    rnzSolutions: [
      {
        product: 'Potassium Sulphate (Standard, Soluble, Granular)',
        purpose: 'Improve water use efficiency',
        dosage: '50-100 kg/ha',
        timing: 'Before stress period'
      },
      {
        product: 'Seaweed Range',
        purpose: 'Stress tolerance enhancement',
        dosage: '2-3 L/ha',
        timing: 'Foliar spray'
      },
      {
        product: 'Amino Acids',
        purpose: 'Metabolic stress relief',
        dosage: '1-2 L/ha',
        timing: 'Foliar spray'
      }
    ]
  },
  coldStress: {
    conditions: ['low temperature', 'frost', 'chilling'],
    rnzSolutions: [
      {
        product: 'Calcium Nitrate with Boron',
        purpose: 'Cold tolerance improvement',
        dosage: '50-75 kg/ha',
        timing: 'Before cold period'
      },
      {
        product: 'Mn EDTA 13%',
        purpose: 'Enzyme activation',
        dosage: '1-2 kg/ha',
        timing: 'Foliar spray'
      },
      {
        product: 'Seaweed Range',
        purpose: 'Natural stress tolerance',
        dosage: '2-3 L/ha',
        timing: 'Preventive foliar spray'
      }
    ]
  },
  heatStress: {
    conditions: ['high temperature', 'low humidity', 'high radiation'],
    rnzSolutions: [
      {
        product: 'NPK 06-12-36',
        purpose: 'Heat stress tolerance',
        dosage: '2-3 kg/ha',
        timing: 'Foliar spray'
      },
      {
        product: 'Potassium Thiosulphate (KTS)',
        purpose: 'Osmotic adjustment',
        dosage: '5-10 L/ha',
        timing: 'Through fertigation'
      },
      {
        product: 'Amino Acids',
        purpose: 'Protein stability',
        dosage: '1-2 L/ha',
        timing: 'Morning foliar spray'
      }
    ]
  }
};
