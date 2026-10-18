import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isSubscribed: { type: Boolean, default: false }, // Access to premium PDFs
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }], // Wishlist/Favorites
}, { timestamps: true });

export default mongoose.model("User", userSchema);