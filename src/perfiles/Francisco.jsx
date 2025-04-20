import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaReact, FaGitAlt, FaCss3Alt, FaDocker, FaNodeJs,
  FaLinkedin, FaGithub, FaTwitter, FaDiscord
} from 'react-icons/fa';
import '../styles/Jacqueline.css';
import portfolioData from '../data/info';
import fotoFrancisco from '../assets/img/francisco.jpg';
import contactoImg from '../assets/img/contacto.png';

const Francisco = () => {
  const perfil = portfolioData.find((p) => p.info.name === 'Francisco Chambi');
  if (!perfil) return <p>Perfil no encontrado</p>;

  const { info, skills, projects } = perfil;

  const skillIcons = {
    Git: <FaGitAlt />,
    CSS: <FaCss3Alt />,
    Docker: <FaDocker />,
    React: <FaReact />,
    'Node.js': <FaNodeJs />
  };

  return (
    <motion.div
      className="perfil-jacqueline"
      style={{
        background: "linear-gradient(to right,rgb(219, 217, 230), #2c5364)",
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        position: 'relative',
        top: 0
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="text-center my-5">
        <img src={fotoFrancisco} alt="Francisco Chambi" className="perfil-foto" />
        <h1 className="perfil-nombre">{info.name}</h1>
        <h4 className="perfil-titulo">{info.tagline}</h4>
        <p className="perfil-descripcion">{info.description}</p>

        <hr className="separador" />
        <h4 className="seccion-titulo">Habilidades</h4>
        <Row className="justify-content-center">
          {skills.map((skill, idx) => (
            <Col key={idx} xs={6} md={3} className="mb-4">
              <motion.div
                className="skill-icon"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div>{skillIcons[skill] || '💡'}</div>
                <p>{skill}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        <hr className="separador" />
        <h4 className="seccion-titulo">Proyectos</h4>
        <div className="proyectos-grid">
          {projects.map((project, idx) => (
            <motion.div
              className="proyecto-card"
              key={project.id}
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.25, ease: 'easeOut' }}
              whileHover={{ scale: 1.08 }}
            >
              <img src={project.image} alt={project.title} className="proyecto-imagen" />
              <div className="proyecto-overlay">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <hr className="separador" />
        <h4 className="seccion-titulo text-center" style={{ fontSize: "2rem", fontFamily: "Poppins, sans-serif" }}>
          Contáctame
        </h4>
        <div className="contacto-form d-flex flex-md-row flex-column-reverse align-items-center justify-content-center gap-4">
          <div className="contacto-img-box text-center">
            <img src={contactoImg} alt="Decoración" className="contacto-img img-fluid" />
          </div>

          <div className="contacto-form-box">
            <Form>
              <Form.Control className="mb-3" type="text" placeholder="Tu nombre" />
              <Form.Control className="mb-3" type="email" placeholder="Tu correo" />
              <Form.Control className="mb-3" as="textarea" rows={3} placeholder="Tu mensaje" />
              <Button variant="light" type="submit">Enviar</Button>
            </Form>

            <div className="redes-footer mt-4 d-flex justify-content-center gap-3">
              <a href="#"><FaLinkedin size={30} /></a>
              <a href="#"><FaGithub size={30} /></a>
              <a href="#"><FaTwitter size={30} /></a>
              <a href="#"><FaDiscord size={30} /></a>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Francisco;
