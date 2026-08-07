import { initialBooks } from '../data/books.js';

// Helper to simulate a network request delay (e.g., 500ms)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const bookApi = {
  /**
   * Fetches all books from local storage or returns initial mock data
   */
  getAllBooks: async () => {
    await delay(500); // Simulate network latency
    const savedBooks = localStorage.getItem('library_books');
    return savedBooks ? JSON.parse(savedBooks) : initialBooks;
  },

  /**
   * Saves a new book to the local storage shelf
   */
  addBook: async (newBook) => {
    await delay(400); 
    const savedBooks = localStorage.getItem('library_books');
    const currentBooks = savedBooks ? JSON.parse(savedBooks) : initialBooks;
    
    const updatedBooks = [newBook, ...currentBooks];
    localStorage.setItem('library_books', JSON.stringify(updatedBooks));
    return newBook;
  },

  /**
   * Fetches a specific book details by its unique ID
   */
  getBookById: async (id) => {
    await delay(300);
    const savedBooks = localStorage.getItem('library_books');
    const currentBooks = savedBooks ? JSON.parse(savedBooks) : initialBooks;
    return currentBooks.find(book => book.id === Number(id)) || null;
  }
};