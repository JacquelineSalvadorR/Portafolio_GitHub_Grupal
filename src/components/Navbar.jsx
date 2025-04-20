import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-glass">
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/perfil/jacqueline-salvador">Jacqueline</Link></li>
        <li><Link to="/perfil/edgar-aliaga">Edgar</Link></li>
        <li><Link to="/perfil/alexandra-tipacti">Alexandra</Link></li>
        <li><Link to="/perfil/francisco-chambi">Francisco</Link></li>
        <li><Link to="/perfil/renzo-damian">Renzo</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
