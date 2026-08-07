import React from 'react';
import './NotFound.css';

function NotFound({ setCurrentPage }) {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
        <button className="home-btn" onClick={() => setCurrentPage('home')}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;