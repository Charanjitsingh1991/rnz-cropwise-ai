
export interface Product {
  id: string;
  _id?: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  images?: string[];
  crops: string[];
  soilTypes: string[];
  regions: string[];
  moistureLevels: string[];
  categories: string[];
  // Additional properties for the enhanced form
  category?: string;
  suitableCrops?: string;
  suitableSoils?: string;
  form?: string;
  growthStage?: string;
  brochures?: string[];
  certifications?: string[];
  // Additional metadata
  isActive?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  specifications?: {
    solubility?: string;
    ph?: { min: number; max: number };
    npk?: { nitrogen: number; phosphorus: number; potassium: number };
  };
  application?: {
    method: string[];
    rate: { min: number; max: number; unit: string };
    frequency: string;
    timing: string;
  };
  availability?: {
    inStock: boolean;
    quantity: number;
    unit: string;
  };
  safety?: {
    toxicity: string;
    handling: string;
    storage: string;
  };
  pricing?: {
    retail: number;
    wholesale: number;
    currency: string;
  };
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Brochure {
  id: string;
  title: string;
  fileUrl: string;
  assignedProducts: string[];
}

export interface FilterOptions {
  crops: string[];
  soilTypes: string[];
  regions: string[];
  moistureLevels: string[];
  categories: string[];
  growthStages: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: {
    title: string;
    page: string;
    url: string;
  }[];
  suggestions?: string[];
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  country?: string;
  phoneNumber?: string;
  fcmToken?: string;
}

export interface SupportMessage {
  id: string;
  author: 'user' | 'admin';
  authorName: string;
  timestamp: string;
  content: string;
}

export interface SupportTicket {
  id: string;
  userId: string;
  userName: string;
  subject: string;
  status: 'Open' | 'Answered' | 'Closed';
  createdAt: string;
  updatedAt: string;
  messages: SupportMessage[];
  isReadByUser?: boolean; // To track notification status
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    keywords: string[];
    category?: string;
}

export interface QuoteRequest {
    id: string;
    userId: string;
    userName: string;
    userEmail: string;
    location: string;
    quantity: number;
    productId: string;
    productName: string;
    productImageUrl: string;
    status: 'Pending' | 'Contacted' | 'Closed';
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
}
