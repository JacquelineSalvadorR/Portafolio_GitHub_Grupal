import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaNetworkWired, FaServer, FaPython } from "react-icons/fa";
import "../styles/Jacqueline.css";
import fotoEdgar from "../assets/img/edgar.jpg";

const Edgar = () => {
  const info = {
    nombre: "Edgar Aliaga",
    tagline: "Infraestructuras de red y telecomunicaciones",
    descripcion: "Soy Técnico en Telecomunicaciones y estudiante de Ingeniería de Sistemas e Informática. Me interesa el desarrollo de software, la inteligencia artificial, la ciberseguridad y la infraestructura de telecomunicaciones.",
    habilidades: ["CISCO", "MIKROTIK", "PYTHON", "REDES"],
    proyectos: [
      {
        id: 1,
        titulo: "Proyecto 1",
        descripcion: "Proyecto de telecomunicaciones.",
        imagen: require("../assets/img/e1.jpg"),
      },
      {
        id: 2,
        titulo: "Proyecto 2",
        descripcion: "Instalación de redes y seguridad.",
        imagen: require("../assets/img/e2.jpg"),
      },
      {
        id: 3,
        titulo: "Proyecto 3",
        descripcion: "Simulación de redes virtuales.",
        imagen: require("../assets/img/e3.jpg"),
      },
    ],
    redes: {
      linkedin: "https://www.linkedin.com/in/edgarsalazar",
      github: "https://github.com/edgarsalazar",
      twitter: "https://x.com/edgarsalazar",
      discord: "https://discord.com/users/edgars2025",
    },
  };

  const skillIcons = {
    CISCO: <FaNetworkWired />,
    MIKROTIK: <FaServer />,
    PYTHON: <FaPython />,
    REDES: <FaNetworkWired />,
  };

  return (
    <motion.div className="perfil-jacqueline" style={{ background: "linear-gradient(to right, #232526, #414345)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="text-center my-5">
        <img
          src={fotoEdgar}
          alt="Edgar Aliaga"
          className="foto-perfil mx-auto"
        />

        <h2 className="nombre">{info.nombre}</h2>
        <h5 className="tagline">{info.tagline}</h5>
        <div className="descripcion-box">
          <p className="descripcion mx-auto">{info.descripcion}</p>
        </div>

        <hr className="separador" />

        <h4 className="seccion-titulo">Habilidades</h4>
        <Row className="justify-content-center">
          {info.habilidades.map((habilidad, index) => (
            <Col key={index} xs={6} md={3} className="mb-4">
              <motion.div
                className="skill-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div>{skillIcons[habilidad] || "💡"}</div>
                <p>{habilidad}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        <hr className="separador" />

        <h4 className="seccion-titulo">Proyectos</h4>
        <div className="proyectos-grid">
          {info.proyectos.map((proyecto, idx) => (
            <motion.div
              className="card-overlay-proyecto"
              key={proyecto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="overlay">
                <h5>{proyecto.titulo}</h5>
                <p>{proyecto.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <hr className="separador" />

        <h4 className="seccion-titulo">Contáctame</h4>
        <Row className="contacto-form align-items-center">
          <Col md={6} className="mb-4">
            <img
              src={require("../assets/img/contacto.png")}
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
              <a href={info.redes.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={30} color="white" />
              </a>
              <a href={info.redes.github} target="_blank" rel="noreferrer">
                <FaGithub size={30} color="white" />
              </a>
              <a href={info.redes.twitter} target="_blank" rel="noreferrer">
                <FaTwitter size={30} color="white" />
              </a>
              <a href={info.redes.discord} target="_blank" rel="noreferrer">
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


