import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
  _id: { type: String }, // slugified brand name
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String } // filename in /public/assets/brands/
});

export default mongoose.model("Brand", BrandSchema);
