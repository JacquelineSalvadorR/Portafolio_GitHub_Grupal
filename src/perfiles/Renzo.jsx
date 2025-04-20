import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaLinkedin, FaGithub, FaTwitter, FaDiscord,
  FaHtml5, FaCss3Alt, FaCode
} from "react-icons/fa";
import "../styles/Jacqueline.css";
import fotoRenzo from "../assets/img/renzo.jpg";
import contactoImg from "../assets/img/contacto.png";

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
    <motion.div
      className="perfil-jacqueline"
      style={{
        background: "linear-gradient(to right, #1e3c72, rgb(164, 195, 248))",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        position: "relative",
        top: 0,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="text-center my-5">
        <img src={fotoRenzo} alt="Renzo Damian" className="perfil-foto" />
        <h1 className="perfil-nombre">{info.nombre}</h1>
        <h4 className="perfil-titulo">{info.tagline}</h4>
        <p className="perfil-descripcion">{info.descripcion}</p>

        <hr className="separador" />
        <h4 className="seccion-titulo">Habilidades</h4>
        <Row className="justify-content-center">
          {info.habilidades.map((habilidad, index) => (
            <Col key={index} xs={6} md={3} className="mb-4">
              <motion.div
                className="skill-icon"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
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
              key={proyecto.id}
              className="proyecto-card"
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.25, ease: "easeOut" }}
              whileHover={{ scale: 1.08 }}
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="proyecto-imagen"
              />
              <div className="proyecto-overlay">
                <h4>{proyecto.titulo}</h4>
                <p>{proyecto.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <hr className="separador" />
        <h4
          className="seccion-titulo text-center"
          style={{ fontSize: "2rem", fontFamily: "Poppins, sans-serif" }}
        >
          Contáctame
        </h4>
        <div className="contacto-form d-flex flex-md-row flex-column-reverse align-items-center justify-content-center gap-4">
          <div className="contacto-img-box text-center">
            <img
              src={contactoImg}
              alt="Decoración"
              className="contacto-img img-fluid"
            />
          </div>

          <div className="contacto-form-box">
            <Form>
              <Form.Control className="mb-3" type="text" placeholder="Tu nombre" />
              <Form.Control className="mb-3" type="email" placeholder="Tu correo" />
              <Form.Control
                className="mb-3"
                as="textarea"
                rows={3}
                placeholder="Tu mensaje"
              />
              <Button variant="light" type="submit">
                Enviar
              </Button>
            </Form>

            <div className="redes-footer mt-4 d-flex justify-content-center gap-3">
              <a href={info.redes.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href={info.redes.github} target="_blank" rel="noreferrer">
                <FaGithub size={30} />
              </a>
              <a href={info.redes.twitter} target="_blank" rel="noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href={info.redes.discord} target="_blank" rel="noreferrer">
                <FaDiscord size={30} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Renzo;
