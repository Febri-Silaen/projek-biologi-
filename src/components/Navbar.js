import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <div className="logo-container">
            <img 
              src="/images/logo (3).jpg" 
              className="custom-logo"
            />
          </div>
        </Link>
      </div>
      
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/keanekaragaman', label: 'Keanekaragaman' },
          { path: '/virus', label: 'Virus' },
          { path: '/protista', label: 'Protista' },
          { path: '/fungi', label: 'Fungi' },
          { path: '/plantae', label: 'Plantae' },
          { path: '/animalia', label: 'Animalia' },
          { path: '/quiz', label: 'Quiz' },
        ].map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="login-item">
          <Link
            to="/login"
            className={`login ${isActive('/login') ? 'active' : ''}`}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
