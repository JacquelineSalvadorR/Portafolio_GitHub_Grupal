import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import portfolioData from '../data/info';

const Alexandra = () => {
  const perfil = portfolioData.find((p) => p.info.name === 'Alexandra Tipacti');
  if (!perfil) return <p>Perfil no encontrado</p>;

  const { info, skills, projects } = perfil;

  return (
    <motion.div className="perfil-wrapper" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Container className="my-4">
        <h2 className="text-center">{info.name}</h2>
        <motion.h5 className="text-center text-muted" transition={{ delay: 0.4 }}>
          {info.tagline}
        </motion.h5>
        <motion.p className="text-justify" transition={{ delay: 0.6 }}>
          {info.description}
        </motion.p>

        <h4>Habilidades</h4>
        <ul>{skills.map((skill, idx) => <li key={idx}>{skill}</li>)}</ul>

        <h4 className="mt-4">Proyectos</h4>
        <Row xs={1} md={2} lg={2} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={project.image} alt={project.title} style={{ objectFit: 'cover', height: '200px' }} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Alexandra;
