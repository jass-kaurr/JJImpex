// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Brand from "../models/Brand.js";
// import Item from "../models/Item.js";

// dotenv.config();

// // Slug helper
// const slugify = (text) =>
//   text.toString().toLowerCase().trim().replace(/\s+/g, "-");

// // Brands array
// const brands = [
//   { name: "Golden Crown", description: "Premium oils and butter products", image: "golden-crown.png" },
//   { name: "Vedica", description: "Organic and natural food products", image: "vedica.png" },
//   { name: "Agnesi", description: "Italian pasta and sauces", image: "agnesi.png" },
//   { name: "Lee kum kee", description: "Authentic Asian sauces and condiments", image: "lee-kum-kee.png" },
//   { name: "Mapro", description: "Fruits, jams, and syrups", image: "mapro.png" },
//   { name: "Monin", description: "Premium flavoring syrups for beverages", image: "monin.png" },
//   { name: "Zone", description: "Snacks and packaged foods", image: "zone.png" },
//   { name: "Veeba", description: "Condiments, sauces, and spreads", image: "veeba.png" }
// ];

// // Items array (example, add more as needed)
// const itemsData = [
//   {
//     brandName: "Golden Crown",
//     items: [
//       { name: "Golden Crown Oil", description: "Premium quality cooking oil", image: "golden-crown-oil.png" },
//       { name: "Golden Crown Butter", description: "Fresh and creamy butter", image: "golden-crown-butter.png" }
//     ]
//   },
//   {
//     brandName: "Vedica",
//     items: [
//       { name: "Vedica Organic Honey", description: "Pure organic honey", image: "vedica-honey.png" },
//       { name: "Vedica Almonds", description: "Premium organic almonds", image: "vedica-almonds.png" }
//     ]
//   },
//   {
//     brandName: "Agnesi",
//     items: [
//       { name: "Agnesi Organic Honey1", description: "Pure organic honey", image: "vedica-honey.png" },
//       { name: "Agnesi Almonds2", description: "Premium organic almonds", image: "vedica-almonds.png" }
//     ]
//   },
//   {
//     brandName: "Lee kum kee",
//     items: [
//       { name: "Lee kum kee 1", description: "Pure organic honey", image: "vedica-honey.png" },
//       { name: "Lee kum kee 2", description: "Premium organic almonds", image: "vedica-almonds.png" }
//     ]
//   },
//   {
//     brandName: "Mapro",
//     items: [
//       { name: "Mapro1", description: "Pure organic honey", image: "vedica-honey.png" },
//       { name: "Mapro2", description: "Premium organic almonds", image: "vedica-almonds.png" }
//     ]
//   },
//   {
//     brandName: "Monin",
//     items: [
//       { name: "Monin1", description: "Pure organic honey", image: "vedica-honey.png" },
//       { name: "Monin2", description: "Premium organic almonds", image: "vedica-almonds.png" }
//     ]
//   },
//   {
//     brandName: "Zone",
//     items: [
//       { name: "Zone1", description: "Pure organic honey", image: "vedica-honey.png" },
//       { name: "Zone2", description: "Premium organic almonds", image: "vedica-almonds.png" }
//     ]
//   },
//   {
//     brandName: "Veeba",
//     items: [
//       { name: "Veeba1", description: "Pure organic honey", image: "vedica-honey.png" },
//       { name: "Veeba2", description: "Premium organic almonds", image: "vedica-almonds.png" }
//     ]
//   },
//   // Add more brands & items
// ];

// // Seed function
// export const seedDatabaseIfEmpty = async () => {
//   try {
//     const brandCount = await Brand.countDocuments();
//     if (brandCount === 0) {
//       console.log("Seeding Brands...");
//       for (const brand of brands) {
//         const _id = slugify(brand.name);
//         await Brand.create({ _id, ...brand });
//         console.log(`Brand "${brand.name}" inserted`);
//       }
//     } else {
//       console.log("Brands already exist. Skipping brand seeding.");
//     }

//     const itemCount = await Item.countDocuments();
//     if (itemCount === 0) {
//       console.log("Seeding Items...");
//       for (const brandItems of itemsData) {
//         const brandSlug = slugify(brandItems.brandName);
//         const brand = await Brand.findById(brandSlug);
//         if (!brand) continue;

//         for (const item of brandItems.items) {
//           const _id = `${slugify(item.name)}-${brandSlug}`;
//           await Item.create({
//             _id,
//             brandId: brandSlug,
//             name: item.name,
//             description: item.description,
//             image: item.image
//           });
//           console.log(`Item "${item.name}" inserted`);
//         }
//       }
//     } else {
//       console.log("Items already exist. Skipping item seeding.");
//     }

//     console.log("Database seeding finished.");
//   } catch (err) {
//     console.error("Seeding error:", err);
//   }
// };
