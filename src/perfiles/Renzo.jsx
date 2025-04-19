import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa";
import "../styles/Jacqueline.css";
import fotoRenzo from "../assets/img/renzo.jpg";

const Renzo = () => {
  const info = {
    nombre: "Renzo Damian",
    tagline: "Desarrollador Web Full Stack",
    descripcion: "Soy un estudiante de Ingeniería de Sistemas con un enfoque en el desarrollo web full stack. Me apasiona crear aplicaciones web modernas y escalables.",
    habilidades: ["HTML", "CSS", "C#"],
    proyectos: [
      {
        id: 1,
        titulo: "Proyecto 1",
        descripcion: "Diseño de página web corporativa.",
        imagen: require("../assets/img/z1.jpg"),
      },
      {
        id: 2,
        titulo: "Proyecto 2",
        descripcion: "Aplicación de gestión interna.",
        imagen: require("../assets/img/z2.jpg"),
      },
      {
        id: 3,
        titulo: "Proyecto 3",
        descripcion: "Sistema de inventarios.",
        imagen: require("../assets/img/z22.jpg"),
      },
    ],
    redes: {
      linkedin: "https://www.linkedin.com/in/renzogamarra",
      github: "https://github.com/renzogamarra",
      twitter: "https://x.com/renzogamarra",
      discord: "https://discord.com/users/renzo2025",
    },
  };

  const skillIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    "C#": <FaCode />,
  };

  return (
    <motion.div className="perfil-jacqueline" style={{ background: "linear-gradient(to right, #1e3c72,rgb(134, 173, 240))" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="text-center my-5">
        <img
          src={fotoRenzo}
          alt="Renzo Damian"
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

export default Renzo;
