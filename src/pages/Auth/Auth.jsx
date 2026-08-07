import React, { useState } from 'react';
import './Auth.css';

function Auth({ setCurrentPage }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const [authForm, setAuthForm] = useState({ email: '', password: '', username: '' });

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    alert(isLoginView ? "Successfully Signed In!" : "Successfully Registered Account!");
    setCurrentPage('home');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLoginView ? "Welcome Back!" : "Create Account"}</h2>
        <p className="auth-subtitle">Access your personal BookHeaven oasis shelf</p>
        
        <form onSubmit={handleAuthSubmit} className="auth-form">
          {!isLoginView && (
            <div className="auth-group">
              <label>Username</label>
              <input 
                type="text" 
                required 
                value={authForm.username} 
                onChange={(e) => setAuthForm({...authForm, username: e.target.value})} 
              />
            </div>
          )}
          
          <div className="auth-group">
            <label>Email Address</label>
            <input 
              type="email" 
              required 
              value={authForm.email} 
              onChange={(e) => setAuthForm({...authForm, email: e.target.value})} 
            />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input 
              type="password" 
              required 
              value={authForm.password} 
              onChange={(e) => setAuthForm({...authForm, password: e.target.value})} 
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            {isLoginView ? "Sign In" : "Register Now"}
          </button>
        </form>

        <div className="auth-toggle-row">
          {isLoginView ? (
            <p>Don't have an account? <span onClick={() => setIsLoginView(false)}>Register here</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setIsLoginView(true)}>Sign In here</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;