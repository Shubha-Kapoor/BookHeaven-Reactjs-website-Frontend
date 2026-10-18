import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  cover: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  rating: { type: Number, required: true },
  synopsis: { type: String, required: true },
  pdfUrl: { type: String, required: true }, // Link to read PDF online
  isPremium: { type: Boolean, default: false }, // Free vs Subscriber-only
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);

// // File location: server/models/Book.js

// const mongoose = require("mongoose");

// const bookSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Please add a book title"],
//       trim: true,
//     },
//     author: {
//       type: String,
//       required: [true, "Please add an author name"],
//       trim: true,
//     },
//     category: {
//       type: String,
//       required: [true, "Please select a category"],
//     },
//     publishedYear: {
//       type: Number,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       default: 4.5,
//       min: 1,
//       max: 5,
//     },
//     synopsis: {
//       type: String,
//       required: [true, "Please provide a book description/synopsis"],
//     },
//     cover: {
//       type: String,
//       default: "https://via.placeholder.com/240x320?text=No+Cover",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Book", bookSchema);