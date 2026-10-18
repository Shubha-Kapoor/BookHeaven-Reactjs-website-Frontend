import Book from "../models/Book.js";

// @desc    Get all books (with optional category filter & search query)
// @route   GET /api/books
export const getBooks = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    // Filter by category if provided
    if (category && category !== "All") {
      query.category = category;
    }

    // Search by title or author if query provided
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
      ];
    }

    const books = await Book.find(query);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single book by ID (includes PDF link logic)
// @route   GET /api/books/:id
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new book (Admin only)
// @route   POST /api/books
export const createBook = async (req, res) => {
  try {
    const { title, author, category, cover, publishedYear, rating, synopsis, pdfUrl, isPremium } = req.body;

    const book = new Book({
      title,
      author,
      category,
      cover,
      publishedYear,
      rating,
      synopsis,
      pdfUrl,
      isPremium,
    });

    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};