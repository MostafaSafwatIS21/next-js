const Product = require("../models/products").default;
const productsData = require("./data.json");
const connectToDatabase = require("../lib/db").default;

(async function seedDatabase() {
  try {
    console.log("Connecting to database...");
    await connectToDatabase();

    console.log("Seeding database...");
    console.log("Clearing existing products...");

    await Product.deleteMany({});
    console.log("Existing products cleared.");
    await Product.insertMany(productsData.products);
    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
})();
