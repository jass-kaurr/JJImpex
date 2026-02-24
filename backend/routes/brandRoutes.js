import express from "express";
import Brand from "../models/Brand.js";

const router = express.Router();

// GET /api/brands
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
