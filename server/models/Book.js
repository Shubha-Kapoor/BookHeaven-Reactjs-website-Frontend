// File location: server/models/Book.js

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a book title"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Please add an author name"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 1,
      max: 5,
    },
    synopsis: {
      type: String,
      required: [true, "Please provide a book description/synopsis"],
    },
    cover: {
      type: String,
      default: "https://via.placeholder.com/240x320?text=No+Cover",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);