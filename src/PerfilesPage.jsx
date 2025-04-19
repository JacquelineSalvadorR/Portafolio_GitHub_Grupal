import React, { useState } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import Jacqueline from './perfiles/Jacqueline';
import Francisco from './perfiles/Francisco';
import Edgar from './perfiles/Edgar';
import Alexandra from './perfiles/Alexandra';
import Renzo from './perfiles/Renzo';

const PerfilesPage = () => {
  const [activeTab, setActiveTab] = useState('Jacqueline');

  return (
    <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
      <Container fluid style={{ minHeight: '100vh', padding: '2rem' }}>
        <Nav
          variant="tabs"
          className="justify-content-end mb-4"
          style={{ gap: '1rem' }}
        >
          <Nav.Item>
            <Nav.Link eventKey="Jacqueline">Jacqueline</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Francisco">Francisco</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Edgar">Edgar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Alexandra">Alexandra</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Renzo">Renzo</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="Jacqueline">
            <Jacqueline />
          </Tab.Pane>
          <Tab.Pane eventKey="Francisco">
            <Francisco />
          </Tab.Pane>
          <Tab.Pane eventKey="Edgar">
            <Edgar />
          </Tab.Pane>
          <Tab.Pane eventKey="Alexandra">
            <Alexandra />
          </Tab.Pane>
          <Tab.Pane eventKey="Renzo">
            <Renzo />
          </Tab.Pane>
        </Tab.Content>
      </Container>
    </Tab.Container>
  );
};

export default PerfilesPage;
