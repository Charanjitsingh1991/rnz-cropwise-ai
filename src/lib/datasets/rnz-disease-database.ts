// RNZ Disease Database - Comprehensive disease management using RNZ products
// Based on agricultural research and RNZ product specifications

export interface DiseaseInfo {
  id: string;
  name: string;
  scientificName: string;
  type: 'fungal' | 'bacterial' | 'viral' | 'nematode' | 'nutritional';
  affectedCrops: string[];
  symptoms: {
    early: string[];
    advanced: string[];
    diagnostic: string[];
  };
  conditions: {
    temperature: { min: number; max: number; optimal: number };
    humidity: { min: number; max: number; optimal: number };
    moisture: string;
    soilConditions?: string[];
    spread: string[];
  };
  economicImpact: {
    yieldLoss: { min: number; max: number; unit: string };
    qualityImpact: string[];
    marketValue: { reduction: number; unit: string };
  };
  rnzManagement: {
    preventive: RNZTreatment[];
    curative: RNZTreatment[];
    integrated: RNZProgram;
  };
  resistanceManagement: {
    rotationProducts: string[];
    alternativeProducts: string[];
  };
}

export interface RNZTreatment {
  product: string;
  category: string;
  activeIngredient?: string;
  dosage: {
    amount: number;
    unit: string;
    concentration?: string;
  };
  applicationMethod: string[];
  timing: string[];
  frequency: string;
  mixingInstructions: string;
  safetyPeriod: string;
  effectivenessPeriod: string;
  expectedResponse: string;
  costEffectiveness: 'high' | 'medium' | 'low';
}

export interface RNZProgram {
  stage1: {
    products: string[];
    timing: string;
    purpose: string;
  };
  stage2: {
    products: string[];
    timing: string;
    purpose: string;
  };
  stage3?: {
    products: string[];
    timing: string;
    purpose: string;
  };
  supportNutrition: string[];
  soilHealth: string[];
}

// Comprehensive Disease Database with RNZ Solutions
export const diseaseDatabase: DiseaseInfo[] = [
  {
    id: 'late_blight',
    name: 'Late Blight',
    scientificName: 'Phytophthora infestans',
    type: 'fungal',
    affectedCrops: ['potato', 'tomato'],
    symptoms: {
      early: ['Small, dark, water-soaked spots on leaves', 'Irregular brown lesions'],
      advanced: ['Large brown-black lesions', 'White fuzzy growth on leaf undersides', 'Rapid leaf death'],
      diagnostic: ['Characteristic white sporulation', 'Fishy odor', 'Rapid spread in humid conditions']
    },
    conditions: {
      temperature: { min: 10, max: 25, optimal: 18 },
      humidity: { min: 80, max: 100, optimal: 95 },
      moisture: 'Continuous leaf wetness for 12+ hours',
      soilConditions: ['excess moisture', 'poor drainage'],
      spread: ['wind', 'rain splash', 'infected tubers', 'contaminated tools']
    },
    economicImpact: {
      yieldLoss: { min: 30, max: 100, unit: 'percent' },
      qualityImpact: ['tuber rot', 'storage loss', 'market rejection'],
      marketValue: { reduction: 50, unit: 'percent' }
    },
    rnzManagement: {
      preventive: [
        {
          product: 'Copper Sulphate – Pentahydrate',
          category: 'Sulphates Products',
          activeIngredient: 'Copper Sulfate',
          dosage: { amount: 2, unit: 'kg/ha', concentration: '0.2%' },
          applicationMethod: ['foliar_spray'],
          timing: ['before_disease_onset', 'favorable_conditions'],
          frequency: 'Every 7-10 days',
          mixingInstructions: 'Dissolve in water, add sticker',
          safetyPeriod: '7 days before harvest',
          effectivenessPeriod: '7-10 days',
          expectedResponse: 'Protective barrier formation',
          costEffectiveness: 'high'
        },
        {
          product: 'Zinc Sulphate – Hepta & Mono',
          category: 'Sulphates Products',
          dosage: { amount: 3, unit: 'kg/ha', concentration: '0.3%' },
          applicationMethod: ['foliar_spray'],
          timing: ['plant_strengthening'],
          frequency: 'Every 15 days',
          mixingInstructions: 'Tank mix compatible',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: '15 days',
          expectedResponse: 'Enhanced plant immunity',
          costEffectiveness: 'high'
        }
      ],
      curative: [
        {
          product: 'Copper Sulphate – Pentahydrate',
          category: 'Sulphates Products',
          dosage: { amount: 3, unit: 'kg/ha', concentration: '0.3%' },
          applicationMethod: ['foliar_spray'],
          timing: ['early_infection', 'disease_confirmation'],
          frequency: 'Every 5-7 days',
          mixingInstructions: 'Use with spreader-sticker',
          safetyPeriod: '10 days before harvest',
          effectivenessPeriod: '5-7 days',
          expectedResponse: 'Disease progression halt',
          costEffectiveness: 'medium'
        },
        {
          product: 'Manganese Sulphate',
          category: 'Sulphates Products',
          dosage: { amount: 2, unit: 'kg/ha', concentration: '0.2%' },
          applicationMethod: ['foliar_spray'],
          timing: ['with_copper_treatment'],
          frequency: 'Every 7 days',
          mixingInstructions: 'Tank mix with copper',
          safetyPeriod: '5 days before harvest',
          effectivenessPeriod: '7 days',
          expectedResponse: 'Synergistic disease control',
          costEffectiveness: 'high'
        }
      ],
      integrated: {
        stage1: {
          products: ['Zinc Sulphate – Hepta & Mono', 'Seaweed Range'],
          timing: 'Early growth stage',
          purpose: 'Plant immunity building'
        },
        stage2: {
          products: ['Copper Sulphate – Pentahydrate', 'Humic / Fulvic Acid'],
          timing: 'Disease pressure period',
          purpose: 'Active protection'
        },
        stage3: {
          products: ['Manganese Sulphate', 'Amino Acids'],
          timing: 'Recovery phase',
          purpose: 'Plant recovery and health'
        },
        supportNutrition: ['NPK 19-19-19', 'Calcium Nitrate – Soluble'],
        soilHealth: ['Granular Gypsum', 'Soil Conditioners']
      }
    },
    resistanceManagement: {
      rotationProducts: ['Manganese Sulphate', 'Ferrous Sulphate – Hepta & Mono'],
      alternativeProducts: ['Zn EDTA 15%', 'Cu EDTA 15%']
    }
  },
  {
    id: 'powdery_mildew',
    name: 'Powdery Mildew',
    scientificName: 'Erysiphe cichoracearum',
    type: 'fungal',
    affectedCrops: ['tomato', 'grape', 'cucumber', 'wheat'],
    symptoms: {
      early: ['White powdery spots on upper leaf surface', 'Slight leaf curling'],
      advanced: ['Complete white coating on leaves', 'Yellowing and drying', 'Stunted growth'],
      diagnostic: ['Powdery white coating', 'No leaf wetness required', 'Spreads in dry conditions']
    },
    conditions: {
      temperature: { min: 20, max: 30, optimal: 25 },
      humidity: { min: 40, max: 70, optimal: 55 },
      moisture: 'Dry conditions with moderate humidity',
      soilConditions: ['nitrogen excess', 'poor air circulation'],
      spread: ['wind', 'dry spores', 'close plant spacing']
    },
    economicImpact: {
      yieldLoss: { min: 10, max: 40, unit: 'percent' },
      qualityImpact: ['fruit quality reduction', 'premature ripening', 'surface blemishes'],
      marketValue: { reduction: 25, unit: 'percent' }
    },
    rnzManagement: {
      preventive: [
        {
          product: 'RNZ SB+ (SB 90%)',
          category: 'Sulphur Based',
          activeIngredient: 'Sulfur',
          dosage: { amount: 20, unit: 'kg/ha' },
          applicationMethod: ['soil_application', 'dusting'],
          timing: ['soil_preparation', 'early_growth'],
          frequency: 'Once per season',
          mixingInstructions: 'Apply as dust or incorporate in soil',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: 'Season long',
          expectedResponse: 'Fungal spore suppression',
          costEffectiveness: 'high'
        },
        {
          product: 'Potassium Sulphate (Standard, Soluble, Granular)',
          category: 'Straights Items',
          dosage: { amount: 50, unit: 'kg/ha' },
          applicationMethod: ['fertigation', 'foliar_spray'],
          timing: ['vegetative_growth'],
          frequency: 'Every 15 days',
          mixingInstructions: 'Dissolve completely before application',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: '15 days',
          expectedResponse: 'Enhanced disease resistance',
          costEffectiveness: 'medium'
        }
      ],
      curative: [
        {
          product: 'RNZ ES 99.5%',
          category: 'Sulphur Based',
          dosage: { amount: 3, unit: 'kg/ha', concentration: '0.3%' },
          applicationMethod: ['foliar_spray'],
          timing: ['early_infection'],
          frequency: 'Every 7 days',
          mixingInstructions: 'Use wettable sulfur formulation',
          safetyPeriod: '3 days before harvest',
          effectivenessPeriod: '7 days',
          expectedResponse: 'Mycelium destruction',
          costEffectiveness: 'high'
        }
      ],
      integrated: {
        stage1: {
          products: ['RNZ SB+ (SB 90%)', 'NPK 19-19-19'],
          timing: 'Soil preparation',
          purpose: 'Preventive soil treatment'
        },
        stage2: {
          products: ['Potassium Sulphate (Standard, Soluble, Granular)', 'Seaweed Range'],
          timing: 'Growing season',
          purpose: 'Plant resistance building'
        },
        supportNutrition: ['NPK 13-00-45', 'Calcium Nitrate with Boron'],
        soilHealth: ['Humic / Fulvic Acid', 'Soil Conditioners']
      }
    },
    resistanceManagement: {
      rotationProducts: ['RNZ ES 99.5%', 'RNZ SB+Zn 8%'],
      alternativeProducts: ['Potassium Magnesium Sulphate', 'RNZ SB+B1.20%']
    }
  },
  {
    id: 'iron_chlorosis',
    name: 'Iron Chlorosis',
    scientificName: 'Iron Deficiency',
    type: 'nutritional',
    affectedCrops: ['citrus', 'grape', 'apple', 'soybean', 'sorghum'],
    symptoms: {
      early: ['Yellowing between leaf veins', 'Green veins remain'],
      advanced: ['Complete leaf yellowing', 'White or scorched leaf edges', 'Stunted growth'],
      diagnostic: ['Interveinal chlorosis', 'Younger leaves affected first', 'Green veins prominent']
    },
    conditions: {
      temperature: { min: 15, max: 35, optimal: 25 },
      humidity: { min: 30, max: 80, optimal: 60 },
      moisture: 'Variable - soil pH dependent',
      soilConditions: ['high pH', 'alkaline soils', 'excess calcium', 'waterlogged conditions'],
      spread: ['soil conditions', 'pH imbalance', 'nutrient interactions']
    },
    economicImpact: {
      yieldLoss: { min: 15, max: 60, unit: 'percent' },
      qualityImpact: ['fruit quality reduction', 'poor color development', 'reduced sugar content'],
      marketValue: { reduction: 40, unit: 'percent' }
    },
    rnzManagement: {
      preventive: [
        {
          product: 'Fe EDDHA 6%',
          category: 'Micro Elements',
          activeIngredient: 'Iron EDDHA',
          dosage: { amount: 5, unit: 'kg/ha' },
          applicationMethod: ['soil_application', 'fertigation'],
          timing: ['early_season', 'before_symptoms'],
          frequency: 'Once per season',
          mixingInstructions: 'Dissolve in slightly acidic water',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: '60-90 days',
          expectedResponse: 'Sustained iron availability',
          costEffectiveness: 'high'
        },
        {
          product: 'RNZ SB+ (SB 90%)',
          category: 'Sulphur Based',
          dosage: { amount: 300, unit: 'kg/ha' },
          applicationMethod: ['soil_incorporation'],
          timing: ['soil_preparation'],
          frequency: 'Annual application',
          mixingInstructions: 'Incorporate before planting',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: 'Season long',
          expectedResponse: 'Soil pH reduction, improved iron availability',
          costEffectiveness: 'high'
        }
      ],
      curative: [
        {
          product: 'Fe EDTA 12%',
          category: 'Micro Elements',
          dosage: { amount: 2, unit: 'kg/ha', concentration: '0.2%' },
          applicationMethod: ['foliar_spray'],
          timing: ['symptom_appearance'],
          frequency: 'Every 10-15 days',
          mixingInstructions: 'Early morning or evening application',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: '10-15 days',
          expectedResponse: 'Rapid greening of new growth',
          costEffectiveness: 'medium'
        },
        {
          product: 'Fe EDTA 15%',
          category: 'Micro Elements',
          dosage: { amount: 1.5, unit: 'kg/ha', concentration: '0.15%' },
          applicationMethod: ['foliar_spray'],
          timing: ['severe_symptoms'],
          frequency: 'Every 7 days',
          mixingInstructions: 'Add surfactant for better uptake',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: '7 days',
          expectedResponse: 'Quick symptom relief',
          costEffectiveness: 'medium'
        }
      ],
      integrated: {
        stage1: {
          products: ['RNZ SB+ (SB 90%)', 'Granular Gypsum'],
          timing: 'Soil preparation',
          purpose: 'Soil pH and structure improvement'
        },
        stage2: {
          products: ['Fe EDDHA 6%', 'Humic / Fulvic Acid'],
          timing: 'Growing season',
          purpose: 'Long-term iron availability'
        },
        stage3: {
          products: ['Fe EDTA 12%', 'Amino Acids'],
          timing: 'As needed for symptoms',
          purpose: 'Quick correction'
        },
        supportNutrition: ['NPK 19-19-19', 'Potassium Sulphate (Standard, Soluble, Granular)'],
        soilHealth: ['Seaweed Range', 'Soil Conditioners']
      }
    },
    resistanceManagement: {
      rotationProducts: ['Fe EDTA 15%', 'Ferrous Sulphate – Hepta & Mono'],
      alternativeProducts: ['Combi Mix', 'MgNa EDTA 6%']
    }
  },
  {
    id: 'zinc_deficiency',
    name: 'Zinc Deficiency',
    scientificName: 'Zinc Deficiency',
    type: 'nutritional',
    affectedCrops: ['rice', 'wheat', 'corn', 'citrus', 'apple'],
    symptoms: {
      early: ['Small, narrow leaves', 'Interveinal chlorosis', 'Stunted growth'],
      advanced: ['White bud', 'Rosetting', 'Delayed maturity', 'Poor fruit set'],
      diagnostic: ['Shortened internodes', 'Little leaf syndrome', 'Bronzing of leaves']
    },
    conditions: {
      temperature: { min: 10, max: 40, optimal: 25 },
      humidity: { min: 40, max: 90, optimal: 65 },
      moisture: 'Especially in waterlogged or alkaline conditions',
      soilConditions: ['high pH', 'alkaline soils', 'high phosphorus', 'organic matter excess'],
      spread: ['soil fixation', 'pH imbalance', 'nutrient interactions']
    },
    economicImpact: {
      yieldLoss: { min: 20, max: 70, unit: 'percent' },
      qualityImpact: ['poor grain filling', 'reduced fruit size', 'delayed maturity'],
      marketValue: { reduction: 35, unit: 'percent' }
    },
    rnzManagement: {
      preventive: [
        {
          product: 'RNZ SB+Zn 8%',
          category: 'Sulphur Based',
          activeIngredient: 'Zinc Sulfate + Sulfur',
          dosage: { amount: 25, unit: 'kg/ha' },
          applicationMethod: ['soil_application'],
          timing: ['soil_preparation'],
          frequency: 'Annual application',
          mixingInstructions: 'Broadcast and incorporate',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: 'Season long',
          expectedResponse: 'Sustained zinc availability',
          costEffectiveness: 'high'
        },
        {
          product: 'Zinc Sulphate – Hepta & Mono',
          category: 'Sulphates Products',
          dosage: { amount: 25, unit: 'kg/ha' },
          applicationMethod: ['soil_application', 'seed_treatment'],
          timing: ['pre_planting'],
          frequency: 'Annual application',
          mixingInstructions: 'Can be mixed with fertilizers',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: 'Season long',
          expectedResponse: 'Adequate zinc supply',
          costEffectiveness: 'high'
        }
      ],
      curative: [
        {
          product: 'Zn EDTA 15%',
          category: 'Micro Elements',
          dosage: { amount: 2, unit: 'kg/ha', concentration: '0.2%' },
          applicationMethod: ['foliar_spray'],
          timing: ['symptom_appearance'],
          frequency: 'Every 10-15 days',
          mixingInstructions: 'Morning application preferred',
          safetyPeriod: 'No restriction',
          effectivenessPeriod: '10-15 days',
          expectedResponse: 'Rapid symptom correction',
          costEffectiveness: 'medium'
        }
      ],
      integrated: {
        stage1: {
          products: ['RNZ SB+Zn 8%', 'RNZ SB+ (SB 90%)'],
          timing: 'Soil preparation',
          purpose: 'Soil zinc and pH management'
        },
        stage2: {
          products: ['Zinc Sulphate – Hepta & Mono', 'NPK 19-19-19'],
          timing: 'Growing season',
          purpose: 'Balanced nutrition with zinc'
        },
        supportNutrition: ['Potassium Magnesium Sulphate', 'Calcium Nitrate – Soluble'],
        soilHealth: ['Humic / Fulvic Acid', 'Seaweed Range']
      }
    },
    resistanceManagement: {
      rotationProducts: ['RNZ SB+Zn18%', 'Combi Mix'],
      alternativeProducts: ['Ferrous Sulphate – Hepta & Mono', 'Manganese Sulphate']
    }
  }
];

// Disease Risk Assessment Database
export const diseaseRiskFactors = {
  environmental: {
    highHumidity: {
      diseases: ['late_blight', 'bacterial_blight', 'downy_mildew'],
      riskLevel: 'high',
      rnzPreventives: ['Copper Sulphate – Pentahydrate', 'Zinc Sulphate – Hepta & Mono']
    },
    alkalineSoil: {
      diseases: ['iron_chlorosis', 'zinc_deficiency', 'manganese_deficiency'],
      riskLevel: 'high',
      rnzPreventives: ['RNZ SB+ (SB 90%)', 'Fe EDDHA 6%', 'Zn EDTA 15%']
    },
    coldWetConditions: {
      diseases: ['damping_off', 'root_rot', 'pythium'],
      riskLevel: 'medium',
      rnzPreventives: ['Copper Sulphate – Pentahydrate', 'Calcium Nitrate with Boron']
    }
  },
  nutritional: {
    nitrogenExcess: {
      diseases: ['powdery_mildew', 'bacterial_diseases', 'aphid_buildup'],
      riskLevel: 'medium',
      rnzCorrection: ['Potassium Sulphate (Standard, Soluble, Granular)', 'Calcium Nitrate – Soluble']
    },
    potassiumDeficiency: {
      diseases: ['fungal_diseases', 'bacterial_soft_rot', 'stress_susceptibility'],
      riskLevel: 'high',
      rnzCorrection: ['NPK 13-00-45', 'Potassium Sulphate (Standard, Soluble, Granular)']
    }
  }
};
