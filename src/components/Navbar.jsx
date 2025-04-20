import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'
;
const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="navbar-left">
        <Link to="/" className="nav-link">Inicio</Link>
      </div>
      <div className="navbar-right">
        <Link to="/perfil/jacqueline-salvador" className="nav-link">Jacqueline</Link>
        <Link to="/perfil/edgar-aliaga" className="nav-link">Edgar</Link>
        <Link to="/perfil/alexandra-tipacti" className="nav-link">Alexandra</Link>
        <Link to="/perfil/francisco-chambi" className="nav-link">Francisco</Link>
        <Link to="/perfil/renzo-damian" className="nav-link">Renzo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
