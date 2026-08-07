import React from 'react';
import BookCard from '../../components/BookCard/BookCard.jsx';
import './Books.css';

function Books({ books, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, onBookClick }) {
  // Updated list containing 5 clean, distinct database categories
  const categories = ['All', 'Fiction', 'Sci-Fi', 'Fantasy', 'Biography', 'Tech'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="books-page">
      <div className="controls-row">
        <input 
          type="text" 
          placeholder="Search by title or author..." 
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard key={book.id} book={book} onBookClick={onBookClick} />
          ))
        ) : (
          <p className="no-results">No books found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Books;