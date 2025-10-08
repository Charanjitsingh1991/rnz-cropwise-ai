const { MongoClient } = require('mongodb');

// Direct data import (you can copy-paste your data here)
const products = [
  // Copy your products array from src/lib/data.ts here
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
  }
  // Add more products here...
];

const brochures = [
  // Copy your brochures array from src/lib/data.ts here
  {
    id: 'broch-1',
    title: 'Water Soluble NPK Guide',
    fileUrl: '/brochures/water-soluble-npk.pdf',
    assignedProducts: ['prod-1', 'prod-2', 'prod-3', 'prod-4', 'prod-5', 'prod-6', 'prod-7', 'prod-8', 'prod-9', 'prod-10', 'prod-11'],
  }
  // Add more brochures here...
];

const supportTickets = [
  // Copy your supportTickets array from src/lib/data.ts here
  {
    id: 'ticket-1',
    userId: 'user-123',
    userName: 'John Doe',
    subject: 'Product Inquiry',
    status: 'Open',
    createdAt: '2024-05-18T10:00:00Z',
    updatedAt: '2024-05-18T10:00:00Z',
    messages: [
      {
        id: 'msg-1',
        author: 'user',
        authorName: 'John Doe',
        timestamp: '2024-05-18T10:00:00Z',
        content: 'I need information about your NPK fertilizers for corn farming.'
      }
    ],
    isReadByUser: false,
  }
  // Add more tickets here...
];

const faqs = [
  // Copy your faqs array from src/lib/data.ts here
  {
    id: 'faq-1',
    question: 'What is NPK fertilizer?',
    answer: 'NPK fertilizer contains three essential nutrients: Nitrogen (N), Phosphorus (P), and Potassium (K). These are the primary nutrients required for plant growth.',
    keywords: ['NPK', 'fertilizer', 'nutrients', 'nitrogen', 'phosphorus', 'potassium'],
    category: 'Fertilizers'
  }
  // Add more FAQs here...
];

const filterOptions = {
  // Copy your filterOptions from src/lib/data.ts here
  crops: ['Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Organic Farming'],
  soilTypes: ['All', 'Loam', 'Sandy', 'Silt', 'Hydroponics'],
  regions: ['Worldwide', 'North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia'],
  moistureLevels: ['All', 'Low', 'Moderate', 'High'],
  categories: ['Water Soluble NPK', 'Granular Fertilizers', 'Liquid & Suspension', 'Sulphur & Straights', 'Micro Elements & Sulphates', 'Bio/Organic Items'],
  growthStages: ['Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Harvest']
};

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/rnz-cropwise';

async function migrateData() {
  const client = new MongoClient(mongoUri);
  
  try {
    await client.connect();
    const db = client.db();
    
    console.log('🚀 Starting data migration...');
    console.log(`📊 MongoDB URI: ${mongoUri}`);
    
    // Migrate Products
    if (products && products.length > 0) {
      const productsCollection = db.collection('products');
      await productsCollection.deleteMany({}); // Clear existing
      const result = await productsCollection.insertMany(products);
      console.log(`✅ Products: ${result.insertedCount} documents migrated`);
    }
    
    // Migrate Brochures
    if (brochures && brochures.length > 0) {
      const brochuresCollection = db.collection('brochures');
      await brochuresCollection.deleteMany({}); // Clear existing
      const result = await brochuresCollection.insertMany(brochures);
      console.log(`✅ Brochures: ${result.insertedCount} documents migrated`);
    }
    
    // Migrate Support Tickets
    if (supportTickets && supportTickets.length > 0) {
      const ticketsCollection = db.collection('supportTickets');
      await ticketsCollection.deleteMany({}); // Clear existing
      const result = await ticketsCollection.insertMany(supportTickets);
      console.log(`✅ Support Tickets: ${result.insertedCount} documents migrated`);
    }
    
    // Migrate FAQs
    if (faqs && faqs.length > 0) {
      const faqsCollection = db.collection('faqs');
      await faqsCollection.deleteMany({}); // Clear existing
      const result = await faqsCollection.insertMany(faqs);
      console.log(`✅ FAQs: ${result.insertedCount} documents migrated`);
    }
    
    // Store Filter Options
    if (filterOptions) {
      const configCollection = db.collection('config');
      await configCollection.updateOne(
        { key: 'filterOptions' },
        { $set: { key: 'filterOptions', value: filterOptions } },
        { upsert: true }
      );
      console.log('✅ Filter Options: Configuration stored');
    }
    
    console.log('\n🎉 Data migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Run: npm run mongo:setup (to create admin user)');
    console.log('2. Run: npm run mongo:change-password (to change admin password)');
    console.log('3. Start your app: npm run dev');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    await client.close();
  }
}

migrateData().catch(console.error);
