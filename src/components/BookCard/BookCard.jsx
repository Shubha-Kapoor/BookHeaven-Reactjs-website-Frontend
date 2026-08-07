import React from 'react';
import './BookCard.css';

function BookCard({ book, onBookClick }) {
  return (
    <div className="book-card" onClick={() => onBookClick(book.id)}>
      <div className="card-image-wrapper">
        <img src={book.cover} alt={book.title} className="card-cover-img" loading="lazy" />
        <div className="book-card-badge">{book.category}</div>
      </div>
      <div className="card-body">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">by {book.author}</p>
        <p className="book-card-snippet">{book.description}</p>
        
        <div className="card-interactive-footer">
          <div className="card-stats">
            <span>📅 {book.publishedYear}</span>
            <span className="rating">⭐ {book.rating}</span>
          </div>
          {/* Neon/Vibrant action pill from reference mockup */}
          <button className="card-action-pill-btn">View Info</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;