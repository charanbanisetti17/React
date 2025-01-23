import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = ({ cartItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const cartItemCount = cartItems.length;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <h1>One Click to Eat</h1>
      <div className="header-actions">
        {/* Search Bar and Button */}
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
            placeholder="Search food..."
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            Search
          </button>
        </div>

        {/* Cart Link */}
        <nav>
          <Link
            to="/cart"
            className={`cart-link ${cartItemCount > 0 ? 'has-items' : ''}`}
          >
            {cartItemCount > 0 ? `Cart (${cartItemCount})` : 'Your cart is empty'}
          </Link>
        </nav>

        {/* Login & Sign Up Links */}
        <div className="auth-links">
          <Link to="/login" className="auth-link">Login</Link>
          <Link to="/signup" className="auth-link signup-link">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;