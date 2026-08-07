import React from 'react';
import BookCard from '../../components/BookCard/BookCard.jsx';
import './Home.css';

function Home({ setCurrentPage, onBookClick, books }) {
  return (
    <div className="home-container">
      {/* High impact hero box using the themed gradient variables */}
      <div className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">✨ Welcome to Your Cute Boba Reading Nook</span>
          <h1>BookHeaven</h1>
          <p>Your ultimate digital bookshelf oasis. Browse collections, organize structures, and discover your next great read in a beautiful space.</p>
          <button className="cta-btn" onClick={() => setCurrentPage('books')}>
            Explore Entire Menu Catalog →
          </button>
        </div>
      </div>

      <div className="featured-section">
        <div className="section-header-row">
          <h2>Daily Featured Selection</h2>
        </div>
        <div className="books-grid">
          {/* Renders card list directly */}
          {books.map(book => (
            <BookCard key={book.id} book={book} onBookClick={onBookClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 