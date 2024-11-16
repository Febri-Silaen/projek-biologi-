import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">SIBISUK</Link>
      </div>
      <button 
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ruang-lingkup">Ruang Lingkup</Link></li>
        <li><Link to="/keanekaragaman">Keanekaragaman</Link></li>
        <li><Link to="/virus">Virus</Link></li>
        <li><Link to="/protista">Protista</Link></li>
        <li><Link to="/fungi">Fungi</Link></li>
        <li><Link to="/plantae">Plantae</Link></li>
        <li><Link to="/animalia">Animalia</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;