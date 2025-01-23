import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleLogout = () => {
    // Handle logout logic (e.g., clear tokens, user session, etc.)
    localStorage.removeItem('authToken'); // Example: clear auth token from localStorage
    
    // Optionally, show a message or perform other cleanup actions
    alert('You have logged out.');

    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/myreact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Cart
          </NavLink>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;