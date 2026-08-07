import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Books from "./pages/Books/Books.jsx";
import BookDetails from "./pages/BookDetails/BookDetails.jsx";
import AddBook from "./pages/AddBook/AddBook.jsx";
import Auth from "./pages/Auth/Auth.jsx"; // Imported Page
import initialBooks from "./components/Data/Books.js"
import "./App.css";

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("library_books_final");
    return savedBooks ? JSON.parse(savedBooks) : initialBooks;
    console.log(initialBooks)
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app_theme") || "matcha";
  });

  const [currentPage, setCurrentPage] = useState("home");
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("library_books_final", JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app_theme", theme);
  }, [theme]);

  const handleAddBook = (newBook) => {
    setBooks([newBook, ...books]);
    setCurrentPage("books");
  };

  const handleViewBookDetails = (id) => {
    setSelectedBookId(id);
    setCurrentPage("details");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        // CHANGED: slice count from 4 to 6 to display 6 cards on home dashboard view
        return (
          <Home
            setCurrentPage={setCurrentPage}
            onBookClick={handleViewBookDetails}
            books={books.slice(0, 6)}
          />
        );
      case "books":
        return (
          <Books
            books={books}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onBookClick={handleViewBookDetails}
          />
        );
      case "details":
        const selectedBook = books.find((b) => b.id === selectedBookId);
        return (
          <BookDetails
            book={selectedBook}
            onBack={() => setCurrentPage("books")}
          />
        );
      case "add":
        return (
          <AddBook
            onAdd={handleAddBook}
            onCancel={() => setCurrentPage("books")}
          />
        );
      case "auth":
        return <Auth setCurrentPage={setCurrentPage} />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            onBookClick={handleViewBookDetails}
            books={books.slice(0, 6)}
          />
        );
    }
  }

  return (
    <div className="app-container">
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
