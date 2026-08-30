const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// GET single book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// POST a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, category, publishedYear, rating, synopsis, cover } = req.body;
    const newBook = new Book({
      title,
      author,
      category,
      publishedYear,
      rating,
      synopsis,
      cover: cover && cover.trim() !== "" ? cover : undefined,
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: "Invalid book data", error: error.message });
  }
});

// DELETE a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;