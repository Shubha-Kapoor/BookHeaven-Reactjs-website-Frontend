import User from "../models/User.js";
import Book from "../models/Book.js";

// @desc    Toggle book in user favorites (Wishlist)
// @route   POST /api/users/favorite/:bookId
// @access  Private (Requires token)
export const toggleFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const bookId = req.params.bookId;

    // Check if book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const isFavorite = user.favorites.includes(bookId);

    if (isFavorite) {
      // Remove from favorites
      user.favorites.pull(bookId);
      await user.save();
      res.json({ message: "Book removed from favorites", favorites: user.favorites });
    } else {
      // Add to favorites
      user.favorites.push(bookId);
      await user.save();
      res.json({ message: "Book added to favorites", favorites: user.favorites });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user's favorite books
// @route   GET /api/users/favorites
// @access  Private
export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Simulate subscribing to premium library access
// @route   PUT /api/users/subscribe
// @access  Private
export const updateSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.isSubscribed = true; // Toggle or set subscription active
    await user.save();

    res.json({
      message: "Successfully subscribed to premium library!",
      isSubscribed: user.isSubscribed,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};