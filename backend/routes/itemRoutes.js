import express from "express";
import Item from "../models/Item.js";
import Brand from "../models/Brand.js";

const router = express.Router();

// GET items by brand slug
router.get("/brand/:brandId", async (req, res) => {
  const { brandId } = req.params;
  try {
    const brand = await Brand.findById(brandId);
    if (!brand) return res.status(404).json({ message: "Brand not found" });

    const items = await Item.find({ brandId });
    res.json({ brandName: brand.name, items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
