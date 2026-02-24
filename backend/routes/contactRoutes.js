import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();

// Submit contact/feedback
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;