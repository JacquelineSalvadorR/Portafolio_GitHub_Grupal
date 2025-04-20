import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SiCisco } from "react-icons/si";
import { FaLinkedin, FaGithub, FaTwitter,FaPython, FaDiscord,FaNetworkWired } from 'react-icons/fa';
import '../styles/Jacqueline.css';
import portfolioData from '../data/info';
import fotoEdgar from '../assets/img/edgar.jpg';

const Edgar = () => {
  const perfil = portfolioData.find((p) => p.info.name === 'Edgar Aliaga');
  if (!perfil) return <p>Perfil no encontrado</p>;

  const { info, skills, projects } = perfil;
  const skillIcons = {
      Cisco: <SiCisco />,
      Mikrotik: <FaNetworkWired />,
      Python: <FaPython />,
      Redes: <FaNetworkWired />
    };


  return (
    <motion.div
      className="perfil-jacqueline"
      style={{ background: "linear-gradient(to right, #ff9966, #ff5e62)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="text-center my-5">
        <img
          src={fotoEdgar}
          alt="Edgar Aliaga"
          className="perfil-foto"
        />

        <h1 className="perfil-nombre">{info.name}</h1>
        <h4 className="perfil-titulo">{info.tagline}</h4>

        <div className="descripcion-box">
          <p className="descripcion mx-auto">{info.description}</p>
        </div>

        <hr className="separador" />

        <h4 className="seccion-titulo">Habilidades</h4>
        <Row className="justify-content-center">
          {skills.map((skill, idx) => (
            <Col key={idx} xs={6} md={3} className="mb-4">
              <motion.div
                className="skill-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.2 }}
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
              className="card-overlay-proyecto"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <hr className="separador" />

        <h4 className="seccion-titulo">Contáctame</h4>
        <Row className="contacto-form align-items-center">
          <Col md={6} className="mb-4">
            <img
              src={require('../assets/img/contacto.png')}
              alt="Contacto"
              className="img-fluid contacto-img"
            />
          </Col>
          <Col md={6}>
            <Form>
              <Form.Control className="mb-3" type="text" placeholder="Tu nombre" />
              <Form.Control className="mb-3" type="email" placeholder="Tu correo" />
              <Form.Control className="mb-3" as="textarea" rows={3} placeholder="Tu mensaje" />
              <Button variant="light" type="submit">Enviar</Button>
            </Form>

            <div className="social-links mt-4 d-flex justify-content-center gap-3">
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} color="white" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaGithub size={30} color="white" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter size={30} color="white" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaDiscord size={30} color="white" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Edgar;