import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import portfolioData from '../data/info';
import '../styles/Jacqueline.css'; // asegúrate que exista este archivo

const Jacqueline = () => {
  const perfil = portfolioData.find((p) => p.info.name === 'Jacqueline Salvador');

  if (!perfil) return <p>Perfil no encontrado</p>;

  const { info, skills, projects } = perfil;

  return (
    <motion.div
      className="perfil-jacqueline"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="my-4">
        <h2 className="text-center mb-2">{info.name}</h2>

        <motion.h5
          className="text-center text-muted mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {info.tagline}
        </motion.h5>

        <motion.p
          className="text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {info.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h4>Habilidades</h4>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h4 className="mt-4">Proyectos</h4>
          <div className="proyectos-scroll">
            {projects.map((project) => (
              <Card key={project.id} className="shadow" style={{ minWidth: '250px', flex: '0 0 auto' }}>
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: 'cover', height: '160px' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Jacqueline;
