import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portafolio Grupal</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/jacqueline">Jacqueline</Link></li>
        <li><Link to="/francisco">Francisco</Link></li>
        <li><Link to="/renzo">Renzo</Link></li>
        <li><Link to="/edgar">Edgar</Link></li>
        <li><Link to="/alexandra">Alexandra</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
