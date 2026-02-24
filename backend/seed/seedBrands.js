import mongoose from "mongoose";
import dotenv from "dotenv";
import Brand from "../models/Brand.js";

dotenv.config();

// Slug helper
const slugify = (text) =>
  text.toString().toLowerCase().trim().replace(/\s+/g, "-");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const brands = [
  { name: "Golden Crown", description: "Premium oils and butter products", image: "golden-crown.png" },
  { name: "Vedica", description: "Organic and natural food products", image: "vedica.png" },
  { name: "Agnesi", description: "Italian pasta and sauces", image: "agnesi.png" },
  { name: "Lee kum kee", description: "Authentic Asian sauces and condiments", image: "lee-kum-kee.png" },
  { name: "Mapro", description: "Fruits, jams, and syrups", image: "mapro.png" },
  { name: "Monin", description: "Premium flavoring syrups for beverages", image: "monin.png" },
  { name: "Zone", description: "Snacks and packaged foods", image: "zone.png" },
  { name: "Veeba", description: "Condiments, sauces, and spreads", image: "veeba.png" },
];

const seedBrands = async () => {
  for (const brand of brands) {
    const _id = slugify(brand.name);
    const exists = await Brand.findById(_id);
    if (!exists) {
      await Brand.create({ _id, ...brand });
      console.log(`Brand "${brand.name}" inserted!`);
    } else {
      console.log(`Brand "${brand.name}" already exists. Skipping.`);
    }
  }
  mongoose.connection.close();
};

seedBrands();


// node seed/seedBrands.js