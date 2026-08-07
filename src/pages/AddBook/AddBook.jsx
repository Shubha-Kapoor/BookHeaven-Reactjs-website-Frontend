import React, { useState } from 'react';
import './AddBook.css';

function AddBook({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Fantasy',
    publishedYear: '',
    rating: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...formData,
      id: Date.now(),
      publishedYear: parseInt(formData.publishedYear),
      rating: parseFloat(formData.rating)
    };
    onAdd(newBook);
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Book Title *</label>
          <input type="text" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Author *</label>
          <input type="text" required value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
            </select>
          </div>
          <div className="form-group">
            <label>Published Year *</label>
            <input type="number" required value={formData.publishedYear} onChange={(e) => setFormData({...formData, publishedYear: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Rating (1-5) *</label>
            <input type="number" step="0.1" min="1" max="5" required value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="4" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
          <button type="submit" className="submit-btn">Add to Shelf</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;