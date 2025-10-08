const { MongoClient } = require('mongodb');

async function checkDatabaseCategories() {
  const uri = "mongodb+srv://rnz-cropwise-admin:HaLDTNx9mLHwaSGG@rnz-cropwisecluster.o1ihdgd.mongodb.net/rnz-cropwise?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const db = client.db();
    const products = await db.collection('products').find({}).toArray();

    console.log(`\nTotal products in database: ${products.length}`);

    // Get all unique categories from the 'category' field
    const allCategories = new Set();
    const categoryCounts = {};

    products.forEach(product => {
      if (product.category) {
        allCategories.add(product.category);
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      }
    });

    console.log('\n=== ALL UNIQUE CATEGORIES IN DATABASE ===');
    Array.from(allCategories).sort().forEach(category => {
      console.log(`"${category}" - ${categoryCounts[category]} products`);
    });

    console.log('\n=== SAMPLE PRODUCTS WITH CATEGORIES ===');
    products.slice(0, 5).forEach(product => {
      console.log(`\nProduct: ${product.name}`);
      console.log(`Category: ${product.category || 'No category'}`);
      console.log(`Categories array: ${JSON.stringify(product.categories)}`);
    });

    // Check if there are any products without categories
    const productsWithoutCategories = products.filter(p => !p.category);
    if (productsWithoutCategories.length > 0) {
      console.log(`\n⚠️  Products without category: ${productsWithoutCategories.length}`);
      productsWithoutCategories.slice(0, 3).forEach(product => {
        console.log(`- ${product.name}`);
      });
    }

    // Check category distribution
    console.log('\n=== CATEGORY DISTRIBUTION ===');
    const sortedCategories = Array.from(allCategories).sort((a, b) => categoryCounts[b] - categoryCounts[a]);
    sortedCategories.forEach(category => {
      console.log(`${category}: ${categoryCounts[category]} products`);
    });

    // Show sample products for each category
    console.log('\n=== SAMPLE PRODUCTS BY CATEGORY ===');
    sortedCategories.forEach(category => {
      const categoryProducts = products.filter(p => p.category === category).slice(0, 3);
      console.log(`\n${category} (${categoryCounts[category]} products):`);
      categoryProducts.forEach(product => {
        console.log(`  - ${product.name}`);
      });
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkDatabaseCategories();

async function checkDatabaseCategories() {
  const uri = "mongodb+srv://rnz-cropwise-admin:HaLDTNx9mLHwaSGG@rnz-cropwisecluster.o1ihdgd.mongodb.net/rnz-cropwise?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const db = client.db();
    const products = await db.collection('products').find({}).toArray();

    console.log(`\nTotal products in database: ${products.length}`);

    // Get all unique categories from the 'category' field
    const allCategories = new Set();
    const categoryCounts = {};

    products.forEach(product => {
      if (product.category) {
        allCategories.add(product.category);
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      }
    });

    console.log('\n=== ALL UNIQUE CATEGORIES IN DATABASE ===');
    Array.from(allCategories).sort().forEach(category => {
      console.log(`"${category}" - ${categoryCounts[category]} products`);
    });

    console.log('\n=== SAMPLE PRODUCTS WITH CATEGORIES ===');
    products.slice(0, 5).forEach(product => {
      console.log(`\nProduct: ${product.name}`);
      console.log(`Category: ${product.category || 'No category'}`);
      console.log(`Categories array: ${JSON.stringify(product.categories)}`);
    });

    // Check if there are any products without categories
    const productsWithoutCategories = products.filter(p => !p.category);
    if (productsWithoutCategories.length > 0) {
      console.log(`\n⚠️  Products without category: ${productsWithoutCategories.length}`);
      productsWithoutCategories.slice(0, 3).forEach(product => {
        console.log(`- ${product.name}`);
      });
    }

    // Check category distribution
    console.log('\n=== CATEGORY DISTRIBUTION ===');
    const sortedCategories = Array.from(allCategories).sort((a, b) => categoryCounts[b] - categoryCounts[a]);
    sortedCategories.forEach(category => {
      console.log(`${category}: ${categoryCounts[category]} products`);
    });

    // Show sample products for each category
    console.log('\n=== SAMPLE PRODUCTS BY CATEGORY ===');
    sortedCategories.forEach(category => {
      const categoryProducts = products.filter(p => p.category === category).slice(0, 3);
      console.log(`\n${category} (${categoryCounts[category]} products):`);
      categoryProducts.forEach(product => {
        console.log(`  - ${product.name}`);
      });
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkDatabaseCategories();

