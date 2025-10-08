const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function fetchAllProducts() {
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    const db = client.db();
    const products = await db.collection('products').find({}).sort({ createdAt: -1 }).toArray();
    
    console.log(`Found ${products.length} products`);
    console.log(JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    await client.close();
  }
}

fetchAllProducts();

