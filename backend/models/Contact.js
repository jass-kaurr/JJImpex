import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: {
    type: String,
    default: "General Inquiry"
  },
  message: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);