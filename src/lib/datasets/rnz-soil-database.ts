// RNZ Soil Database - Comprehensive soil analysis and RNZ product mapping
// Based on scientific soil classification and nutrient management principles

export interface SoilTestParameters {
  physical: PhysicalProperties;
  chemical: ChemicalProperties;
  biological: BiologicalProperties;
  classification: SoilClassification;
  rnzRecommendations: RNZSoilProgram;
}

export interface PhysicalProperties {
  texture: {
    sand: number; // percentage
    silt: number; // percentage
    clay: number; // percentage
    classification: 'sandy' | 'loamy' | 'clay' | 'silt';
  };
  structure: {
    type: 'granular' | 'blocky' | 'platy' | 'massive';
    grade: 'strong' | 'moderate' | 'weak';
    stability: number; // 1-10 scale
  };
  density: {
    bulk: number; // g/cm³
    particle: number; // g/cm³
    porosity: number; // percentage
  };
  waterProperties: {
    fieldCapacity: number; // percentage
    wiltingPoint: number; // percentage
    availableWater: number; // percentage
    infiltrationRate: number; // mm/hr
    permeability: 'slow' | 'moderate' | 'rapid';
  };
  temperature: {
    soilTemp: number; // °C
    thermalConductivity: number;
  };
}

export interface ChemicalProperties {
  pH: {
    value: number;
    category: 'very_acidic' | 'acidic' | 'slightly_acidic' | 'neutral' | 'slightly_alkaline' | 'alkaline' | 'very_alkaline';
    buffering: 'low' | 'medium' | 'high';
  };
  electricalConductivity: {
    value: number; // dS/m
    salinity: 'normal' | 'slightly_saline' | 'moderately_saline' | 'highly_saline';
  };
  cationExchangeCapacity: {
    value: number; // cmol/kg
    category: 'low' | 'medium' | 'high';
  };
  baseSaturation: {
    calcium: number; // percentage
    magnesium: number; // percentage
    potassium: number; // percentage
    sodium: number; // percentage
    total: number; // percentage
  };
  macronutrients: {
    nitrogen: {
      total: number; // kg/ha
      available: number; // kg/ha
      category: 'low' | 'medium' | 'high';
      form: 'nitrate' | 'ammonium' | 'organic';
    };
    phosphorus: {
      total: number; // kg/ha
      available: number; // kg/ha
      category: 'low' | 'medium' | 'high';
      fixation: 'low' | 'medium' | 'high';
    };
    potassium: {
      total: number; // kg/ha
      exchangeable: number; // kg/ha
      category: 'low' | 'medium' | 'high';
      fixation: 'low' | 'medium' | 'high';
    };
    sulfur: {
      total: number; // kg/ha
      available: number; // kg/ha
      category: 'low' | 'medium' | 'high';
    };
  };
  micronutrients: {
    iron: { value: number; unit: 'ppm'; status: 'deficient' | 'adequate' | 'excess' };
    zinc: { value: number; unit: 'ppm'; status: 'deficient' | 'adequate' | 'excess' };
    manganese: { value: number; unit: 'ppm'; status: 'deficient' | 'adequate' | 'excess' };
    copper: { value: number; unit: 'ppm'; status: 'deficient' | 'adequate' | 'excess' };
    boron: { value: number; unit: 'ppm'; status: 'deficient' | 'adequate' | 'excess' };
    molybdenum: { value: number; unit: 'ppm'; status: 'deficient' | 'adequate' | 'excess' };
  };
  organicMatter: {
    total: number; // percentage
    active: number; // percentage
    carbon: number; // percentage
    nitrogenRatio: number; // C:N ratio
    category: 'low' | 'medium' | 'high';
  };
  toxicElements: {
    aluminum: { value: number; unit: 'ppm'; toxicity: 'none' | 'slight' | 'moderate' | 'severe' };
    sodium: { value: number; unit: 'ppm'; sodicity: 'none' | 'slight' | 'moderate' | 'severe' };
    heavyMetals: { [metal: string]: { value: number; unit: string; status: string } };
  };
}

export interface BiologicalProperties {
  microbialActivity: {
    biomass: number; // mg C/kg soil
    respiration: number; // mg CO2/kg/day
    activity: 'low' | 'medium' | 'high';
  };
  enzymeActivity: {
    urease: number;
    phosphatase: number;
    dehydrogenase: number;
    activity: 'low' | 'medium' | 'high';
  };
  diversity: {
    bacterialCount: number; // CFU/g
    fungalCount: number; // CFU/g
    diversityIndex: number;
  };
  healthIndicators: {
    soilHealth: 'poor' | 'fair' | 'good' | 'excellent';
    sustainability: 'low' | 'medium' | 'high';
    resilience: 'low' | 'medium' | 'high';
  };
}

export interface SoilClassification {
  taxonomy: {
    order: string;
    suborder: string;
    greatGroup: string;
    subgroup: string;
  };
  local: {
    name: string;
    classification: string;
    characteristics: string[];
  };
  suitability: {
    agriculture: 'excellent' | 'good' | 'fair' | 'poor';
    limitations: string[];
    potentialUses: string[];
  };
}

export interface RNZSoilProgram {
  immediate: RNZTreatment[];
  seasonal: RNZTreatment[];
  longTerm: RNZTreatment[];
  maintenance: RNZTreatment[];
  monitoring: {
    parameters: string[];
    frequency: string;
    expectedChanges: { parameter: string; timeframe: string; target: number }[];
  };
}

export interface RNZTreatment {
  product: string;
  category: string;
  purpose: string;
  dosage: { amount: number; unit: string };
  applicationMethod: string;
  timing: string;
  frequency: string;
  expectedResponse: string;
  duration: string;
  costEstimate: number;
  priority: 'high' | 'medium' | 'low';
}

// Soil type specific databases
export const soilTypeDatabase = {
  sandy: {
    characteristics: {
      texture: { sand: 85, silt: 10, clay: 5 },
      drainage: 'excessive',
      waterHolding: 'low',
      cec: 'low',
      nutrients: 'highly leachable'
    },
    commonProblems: [
      'rapid nutrient leaching',
      'low water retention',
      'low organic matter',
      'poor nutrient holding capacity',
      'wind erosion'
    ],
    rnzSolutions: [
      {
        product: 'Humic / Fulvic Acid',
        category: 'Bio/Organic Items',
        purpose: 'Improve water and nutrient retention',
        dosage: { amount: 20, unit: 'L/ha' },
        applicationMethod: 'Soil incorporation or fertigation',
        timing: 'Before planting and every 6 months',
        frequency: 'Bi-annual',
        expectedResponse: 'Increased CEC and water holding capacity',
        duration: '3-6 months',
        costEstimate: 4000,
        priority: 'high'
      },
      {
        product: 'NPK 19-19-19',
        category: 'Water Soluble NPK (100% Soluble Powders)',
        purpose: 'Frequent nutrient supply',
        dosage: { amount: 3, unit: 'kg/ha' },
        applicationMethod: 'Fertigation',
        timing: 'Weekly during growing season',
        frequency: 'Every 7 days',
        expectedResponse: 'Consistent nutrient availability',
        duration: 'Growing season',
        costEstimate: 2500,
        priority: 'high'
      },
      {
        product: 'Seaweed Range',
        category: 'Bio/Organic Items',
        purpose: 'Soil conditioning and plant growth promotion',
        dosage: { amount: 2, unit: 'L/ha' },
        applicationMethod: 'Foliar spray or fertigation',
        timing: 'Every 15 days',
        frequency: 'Bi-weekly',
        expectedResponse: 'Improved soil structure and plant vigor',
        duration: 'Growing season',
        costEstimate: 1500,
        priority: 'medium'
      }
    ]
  },
  clay: {
    characteristics: {
      texture: { sand: 20, silt: 30, clay: 50 },
      drainage: 'poor',
      waterHolding: 'high',
      cec: 'high',
      nutrients: 'good retention'
    },
    commonProblems: [
      'poor drainage',
      'waterlogging',
      'compaction',
      'nutrient fixation',
      'poor aeration'
    ],
    rnzSolutions: [
      {
        product: 'Granular Gypsum',
        category: 'Bio/Organic Items',
        purpose: 'Improve soil structure and drainage',
        dosage: { amount: 500, unit: 'kg/ha' },
        applicationMethod: 'Broadcast and incorporate',
        timing: 'Before monsoon or irrigation season',
        frequency: 'Annual',
        expectedResponse: 'Better aggregation and drainage',
        duration: '6-12 months',
        costEstimate: 5000,
        priority: 'high'
      },
      {
        product: 'RNZ SB+ (SB 90%)',
        category: 'Sulphur Based',
        purpose: 'Soil structure improvement and pH management',
        dosage: { amount: 200, unit: 'kg/ha' },
        applicationMethod: 'Soil incorporation',
        timing: 'Pre-planting',
        frequency: 'Annual',
        expectedResponse: 'Improved soil physical properties',
        duration: '12 months',
        costEstimate: 3000,
        priority: 'high'
      },
      {
        product: 'Soil Conditioners',
        category: 'Bio/Organic Items',
        purpose: 'Physical and biological soil improvement',
        dosage: { amount: 100, unit: 'kg/ha' },
        applicationMethod: 'Soil incorporation',
        timing: 'Before planting',
        frequency: 'Bi-annual',
        expectedResponse: 'Enhanced soil structure and biology',
        duration: '6 months',
        costEstimate: 2000,
        priority: 'medium'
      }
    ]
  },
  alkaline: {
    characteristics: {
      pH: { min: 7.5, max: 9.5 },
      commonIssues: ['iron chlorosis', 'zinc deficiency', 'phosphorus fixation'],
      challenges: ['nutrient availability', 'plant stress', 'yield reduction']
    },
    rnzSolutions: [
      {
        product: 'RNZ SB+ (SB 90%)',
        category: 'Sulphur Based',
        purpose: 'pH reduction and sulfur supply',
        dosage: { amount: 400, unit: 'kg/ha' },
        applicationMethod: 'Soil incorporation',
        timing: 'Pre-planting',
        frequency: 'Annual',
        expectedResponse: 'Gradual pH reduction over 6-12 months',
        duration: '12 months',
        costEstimate: 6000,
        priority: 'high'
      },
      {
        product: 'Fe EDDHA 6%',
        category: 'Micro Elements',
        purpose: 'Iron deficiency correction in alkaline soils',
        dosage: { amount: 5, unit: 'kg/ha' },
        applicationMethod: 'Soil application or fertigation',
        timing: 'Early season before symptoms appear',
        frequency: 'Annual',
        expectedResponse: 'Prevention of iron chlorosis',
        duration: '6-8 months',
        costEstimate: 8000,
        priority: 'high'
      },
      {
        product: 'Zn EDTA 15%',
        category: 'Micro Elements',
        purpose: 'Zinc availability in alkaline conditions',
        dosage: { amount: 3, unit: 'kg/ha' },
        applicationMethod: 'Fertigation or foliar spray',
        timing: 'Early growth stage',
        frequency: 'Every 15 days as needed',
        expectedResponse: 'Improved zinc nutrition',
        duration: '2-3 months',
        costEstimate: 4500,
        priority: 'high'
      },
      {
        product: 'Calcium Thiosulphate (CaTS)',
        category: 'Liquid Items',
        purpose: 'Calcium and sulfur supply with pH buffering',
        dosage: { amount: 100, unit: 'L/ha' },
        applicationMethod: 'Fertigation',
        timing: 'With regular irrigation',
        frequency: 'Monthly',
        expectedResponse: 'Improved nutrient balance',
        duration: 'Growing season',
        costEstimate: 3000,
        priority: 'medium'
      }
    ]
  },
  acidic: {
    characteristics: {
      pH: { min: 3.5, max: 6.0 },
      commonIssues: ['aluminum toxicity', 'calcium deficiency', 'phosphorus fixation'],
      challenges: ['root damage', 'nutrient imbalance', 'reduced microbial activity']
    },
    rnzSolutions: [
      {
        product: 'Granular Gypsum',
        category: 'Bio/Organic Items',
        purpose: 'Calcium supply and aluminum amelioration',
        dosage: { amount: 1000, unit: 'kg/ha' },
        applicationMethod: 'Broadcast and incorporate',
        timing: 'Pre-planting',
        frequency: 'Annual',
        expectedResponse: 'Reduced aluminum toxicity, improved pH',
        duration: '12 months',
        costEstimate: 10000,
        priority: 'high'
      },
      {
        product: 'Calcium Nitrate – Soluble',
        category: 'Straights Items',
        purpose: 'Immediate calcium availability',
        dosage: { amount: 100, unit: 'kg/ha' },
        applicationMethod: 'Fertigation or top dressing',
        timing: 'Every month during growing season',
        frequency: 'Monthly',
        expectedResponse: 'Quick calcium nutrition',
        duration: '1 month',
        costEstimate: 8000,
        priority: 'high'
      },
      {
        product: 'Calcium Nitrate with Boron',
        category: 'Straights Items',
        purpose: 'Calcium and boron nutrition',
        dosage: { amount: 75, unit: 'kg/ha' },
        applicationMethod: 'Soil application or fertigation',
        timing: 'Pre-planting and mid-season',
        frequency: 'Bi-annual',
        expectedResponse: 'Improved plant health and yield',
        duration: '3-4 months',
        costEstimate: 6000,
        priority: 'medium'
      }
    ]
  },
  saline: {
    characteristics: {
      ec: { min: 4, max: 15, unit: 'dS/m' },
      commonIssues: ['salt stress', 'osmotic stress', 'specific ion toxicity'],
      challenges: ['germination problems', 'stunted growth', 'yield reduction']
    },
    rnzSolutions: [
      {
        product: 'Granular Gypsum',
        category: 'Bio/Organic Items',
        purpose: 'Sodium displacement and soil structure improvement',
        dosage: { amount: 2000, unit: 'kg/ha' },
        applicationMethod: 'Broadcast, incorporate, and leach',
        timing: 'Before monsoon or heavy irrigation',
        frequency: 'Annual',
        expectedResponse: 'Gradual salinity reduction',
        duration: '12-18 months',
        costEstimate: 20000,
        priority: 'high'
      },
      {
        product: 'Calcium Thiosulphate (CaTS)',
        category: 'Liquid Items',
        purpose: 'Calcium supply and salt amelioration',
        dosage: { amount: 200, unit: 'L/ha' },
        applicationMethod: 'Fertigation with leaching',
        timing: 'With each irrigation',
        frequency: 'With irrigation cycles',
        expectedResponse: 'Improved soil structure and reduced sodicity',
        duration: 'Ongoing',
        costEstimate: 6000,
        priority: 'high'
      },
      {
        product: 'Humic / Fulvic Acid',
        category: 'Bio/Organic Items',
        purpose: 'Soil conditioning and stress tolerance',
        dosage: { amount: 25, unit: 'L/ha' },
        applicationMethod: 'Fertigation',
        timing: 'Monthly',
        frequency: 'Monthly',
        expectedResponse: 'Enhanced stress tolerance and nutrient availability',
        duration: '1 month',
        costEstimate: 5000,
        priority: 'medium'
      },
      {
        product: 'Amino Acids',
        category: 'Bio/Organic Items',
        purpose: 'Plant stress tolerance enhancement',
        dosage: { amount: 2, unit: 'L/ha' },
        applicationMethod: 'Foliar spray',
        timing: 'Every 15 days',
        frequency: 'Bi-weekly',
        expectedResponse: 'Improved plant stress tolerance',
        duration: '15 days',
        costEstimate: 3000,
        priority: 'medium'
      }
    ]
  }
};

// Nutrient deficiency diagnosis and RNZ solutions
export const nutrientDeficiencyDatabase = {
  nitrogen: {
    symptoms: {
      early: ['light green to yellow older leaves', 'slow growth'],
      advanced: ['severe yellowing', 'stunted plants', 'reduced tillering'],
      diagnostic: ['V-shaped yellowing from leaf tip', 'affects older leaves first']
    },
    soilTest: {
      critical: 280, // kg/ha
      adequate: 400, // kg/ha
      unit: 'kg/ha'
    },
    rnzCorrection: [
      {
        product: 'Prilled / Granular Urea',
        category: 'Straights Items',
        dosage: { amount: 100, unit: 'kg/ha' },
        applicationMethod: 'Top dressing or fertigation',
        timing: 'Based on crop stage',
        expectedResponse: 'Greening within 7-10 days'
      },
      {
        product: 'NPK 30-10-10',
        category: 'Water Soluble NPK (100% Soluble Powders)',
        dosage: { amount: 25, unit: 'kg/ha' },
        applicationMethod: 'Fertigation',
        timing: 'Weekly during deficiency',
        expectedResponse: 'Rapid growth response'
      }
    ]
  },
  phosphorus: {
    symptoms: {
      early: ['dark green leaves with purple tinge', 'delayed maturity'],
      advanced: ['severe purpling', 'stunted root development', 'poor flowering'],
      diagnostic: ['purple coloration on leaf undersides', 'affects younger leaves']
    },
    soilTest: {
      critical: 11, // kg/ha
      adequate: 22, // kg/ha
      unit: 'kg/ha'
    },
    rnzCorrection: [
      {
        product: 'NPK 13-40-13',
        category: 'Water Soluble NPK (100% Soluble Powders)',
        dosage: { amount: 30, unit: 'kg/ha' },
        applicationMethod: 'Fertigation or foliar spray',
        timing: 'Early growth stage',
        expectedResponse: 'Improved root development and flowering'
      },
      {
        product: 'Triple Superphosphate',
        category: 'Straights Items',
        dosage: { amount: 100, unit: 'kg/ha' },
        applicationMethod: 'Basal application',
        timing: 'At planting',
        expectedResponse: 'Long-term phosphorus availability'
      }
    ]
  },
  potassium: {
    symptoms: {
      early: ['yellowing leaf margins', 'brown spots'],
      advanced: ['leaf edge burn', 'weak stems', 'poor fruit quality'],
      diagnostic: ['marginal leaf burn', 'affects older leaves first']
    },
    soilTest: {
      critical: 108, // kg/ha
      adequate: 280, // kg/ha
      unit: 'kg/ha'
    },
    rnzCorrection: [
      {
        product: 'NPK 13-00-45',
        category: 'Water Soluble NPK (100% Soluble Powders)',
        dosage: { amount: 25, unit: 'kg/ha' },
        applicationMethod: 'Fertigation',
        timing: 'Fruit development stage',
        expectedResponse: 'Improved fruit quality and disease resistance'
      },
      {
        product: 'Potassium Sulphate (Standard, Soluble, Granular)',
        category: 'Straights Items',
        dosage: { amount: 50, unit: 'kg/ha' },
        applicationMethod: 'Top dressing or fertigation',
        timing: 'Based on crop requirement',
        expectedResponse: 'Enhanced stress tolerance'
      }
    ]
  }
};

// Soil health improvement programs
export const soilHealthPrograms = {
  organic_matter_building: {
    objective: 'Increase soil organic matter from <0.5% to >1.5%',
    duration: '3-5 years',
    rnzProducts: [
      {
        product: 'Humic / Fulvic Acid',
        schedule: 'Every 6 months',
        dosage: '20 L/ha',
        purpose: 'Organic matter accumulation'
      },
      {
        product: 'Seaweed Range',
        schedule: 'Monthly during growing season',
        dosage: '2 L/ha',
        purpose: 'Microbial activity enhancement'
      },
      {
        product: 'Amino Acids',
        schedule: 'Bi-weekly foliar application',
        dosage: '1 L/ha',
        purpose: 'Plant residue quality improvement'
      }
    ],
    expectedOutcomes: [
      'Increased water retention',
      'Improved nutrient holding capacity',
      'Enhanced microbial activity',
      'Better soil structure'
    ],
    monitoring: {
      parameters: ['organic matter %', 'microbial count', 'aggregate stability'],
      frequency: 'Annual soil testing'
    }
  },
  salinity_management: {
    objective: 'Reduce soil EC from >4 dS/m to <2 dS/m',
    duration: '2-3 years',
    rnzProducts: [
      {
        product: 'Granular Gypsum',
        schedule: 'Annual application before monsoon',
        dosage: '1500-2000 kg/ha',
        purpose: 'Sodium displacement'
      },
      {
        product: 'Calcium Thiosulphate (CaTS)',
        schedule: 'With each irrigation',
        dosage: '50-100 L/ha',
        purpose: 'Continuous amelioration'
      },
      {
        product: 'RNZ SB+ (SB 90%)',
        schedule: 'Annual incorporation',
        dosage: '300 kg/ha',
        purpose: 'Soil structure improvement'
      }
    ],
    expectedOutcomes: [
      'Reduced electrical conductivity',
      'Improved water infiltration',
      'Better crop establishment',
      'Enhanced yield potential'
    ],
    monitoring: {
      parameters: ['EC', 'SAR', 'infiltration rate', 'crop performance'],
      frequency: 'Every 6 months'
    }
  }
};
