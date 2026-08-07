import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar({ setCurrentPage, currentPage, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flavorLabels = {
    matcha: "🍵 Matcha Latte",
    cyan: "🔹 Cyan Blue",
    lavender: "🔮 Lavender Milk",
    boba: "🧋 Taro Boba",
    pebble: "⚫ Black Pebble",
    classic: "🧋 Classic Milk Tea"
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => setCurrentPage('home')}>
        <span className="brand-title-text">BookHeaven</span>
      </div>
      
      <div className="nav-right">
        <div className="custom-dropdown-container" ref={dropdownRef}>
          <span className="dropdown-label">✨ Theme:</span>
          <div className={`dropdown-header ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span>{flavorLabels[theme] || flavorLabels['matcha']}</span>
            <span className="dropdown-chevron">▾</span>
          </div>
          
          {isOpen && (
            <ul className="dropdown-list">
              {Object.keys(flavorLabels).map((key) => (
                <li 
                  key={key} 
                  className={`dropdown-item ${theme === key ? 'selected' : ''}`}
                  onClick={() => { setTheme(key); setIsOpen(false); }}
                >
                  {flavorLabels[key]}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="nav-links">
          <button className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')}>Home</button>
          <button className={`nav-btn ${currentPage === 'books' ? 'active' : ''}`} onClick={() => setCurrentPage('books')}>Browse</button>
          <button className={`nav-btn ${currentPage === 'add' ? 'active' : ''}`} onClick={() => setCurrentPage('add')}>+ Add</button>
          {/* Placed next to add button */}
          <button className={`nav-btn login ${currentPage === 'auth' ? 'active' : ''}`} onClick={() => setCurrentPage('auth')}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;