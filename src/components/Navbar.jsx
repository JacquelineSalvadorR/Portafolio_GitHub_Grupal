import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavbarFija = () => {
  const location = useLocation();

  // 👇 Ocultar navbar si estamos en "/"
  if (location.pathname === '/') return null;

  return (
    <Navbar expand="lg" fixed="top" className="navbar-glass">
      <Container>
        {/* ✅ Ahora dice "Inicio" y redirige al inicio */}
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-perfiles" />
        <Navbar.Collapse id="navbar-perfiles">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/jacqueline" className="text-white">Jacqueline</Nav.Link>
            <Nav.Link as={Link} to="/francisco" className="text-white">Francisco</Nav.Link>
            <Nav.Link as={Link} to="/edgar" className="text-white">Edgar</Nav.Link>
            <Nav.Link as={Link} to="/alexandra" className="text-white">Alexandra</Nav.Link>
            <Nav.Link as={Link} to="/renzo" className="text-white">Renzo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarFija;
