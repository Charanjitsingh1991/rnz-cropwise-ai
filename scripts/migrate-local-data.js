const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Import data from the TypeScript file (we'll need to compile this)
const { products, brochures, supportTickets, faqs, filterOptions } = require('../src/lib/data.ts');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/rnz-cropwise';

async function migrateLocalData() {
  const client = new MongoClient(mongoUri);
  
  try {
    await client.connect();
    const db = client.db();
    
    console.log('🚀 Starting local data migration...');
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
    
    console.log('\n🎉 Local data migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    await client.close();
  }
}

migrateLocalData().catch(console.error);
