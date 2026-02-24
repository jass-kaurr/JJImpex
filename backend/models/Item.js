import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  _id: { type: String }, // optional: slugified "itemname-brandslug"
  brandId: { type: String, ref: "Brand", required: true }, // must match Brand _id
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String } // filename in /public/assets/brands/
});

export default mongoose.model("Item", ItemSchema);
