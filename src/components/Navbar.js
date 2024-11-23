import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      path: '/', 
      label: 'Home',
      icon: '🏠'
    },
    { 
      path: '/keanekaragaman', 
      label: 'Keanekaragaman',
      icon: '🌿'
    },
    { 
      path: '/virus', 
      label: 'Virus',
      icon: '🦠'
    },
    { 
      path: '/protista', 
      label: 'Protista',
      icon: '🔬'
    },
    { 
      path: '/fungi', 
      label: 'Fungi',
      icon: '🍄'
    },
    { 
      path: '/plantae', 
      label: 'Plantae',
      icon: '🌱'
    },
    { 
      path: '/animalia', 
      label: 'Animalia',
      icon: '🦋'
    },
    { 
      path: '/quiz', 
      label: 'Quiz',
      icon: '📝'
    }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <div className="logo-container">
            <img src="/images/logo (3).jpg" className="custom-logo" alt="Logo"/>

          </div>
        </Link>
      </div>

      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-menu-container ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {location.pathname === item.path && <span className="active-indicator" />}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            <span className="btn-icon">👤</span>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

