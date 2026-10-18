import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/Book.js";

dotenv.config();

const digitalLibraryBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    cover: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=400&q=80",
    publishedYear: 1937,
    rating: 4.8,
    synopsis: "The Hobbit is an unforgettable classic fantasy adventure that follows the unexpected journey of Bilbo Baggins.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    isPremium: false,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
    publishedYear: 1965,
    rating: 4.9,
    synopsis: "Set on the desert planet of Arrakis, Dune is a brilliant blend of political intrigue, mysticism, and environmentalism.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    isPremium: true, // Premium subscriber exclusive book!
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Tech",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    publishedYear: 2008,
    rating: 4.8,
    synopsis: "Vital guide breaking down best architectural practices for writing pristine, highly maintainable software.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    isPremium: true,
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Atlas for Digital Library Seeding...");

    await Book.deleteMany();
    await Book.insertMany(digitalLibraryBooks);

    console.log("Digital library seeded with PDF links and premium flags!");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();