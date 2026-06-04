import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
  },
  thumbnail: {
    type: String,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
