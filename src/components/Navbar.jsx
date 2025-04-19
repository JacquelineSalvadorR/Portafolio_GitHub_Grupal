import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Portafolio Grupal</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
