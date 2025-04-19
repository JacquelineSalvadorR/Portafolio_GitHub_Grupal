import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import manosDaVinci from './assets/lotties/manosDaVinci.json';
import './Inicio.css';
import portfolioData from './data/info'; 
import { useNavigate } from 'react-router-dom';

const Inicio = ({ onEnter }) => {
  const navigate = useNavigate();

  return (
    <div className="inicio-container" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Container
        className="d-flex flex-column align-items-center justify-content-start text-center"
        style={{
          minHeight: '100vh',
          paddingTop:'5vh',
          paddingBottom: '2rem',
          color: 'white',
        }}
      >
  <div style={{
  width: '400px',
  height: '400px',
  marginBottom: '2rem'
}}>
  <Lottie
    animationData={manosDaVinci}
    loop={true}
    style={{ width: '100%', height: '100%' }}
  />
</div>


        <h1 style={{
          fontSize: '3.2rem',
          marginBottom: '1.5rem',
          fontWeight: 700
        }}>
          <Typewriter
            words={['Bienvenidos al Portafolio del Grupo C']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p style={{ maxWidth: '700px', fontSize: '1.3rem', fontWeight: 400 }}>
          Conoce a nuestro equipo y los proyectos que desarrollamos con pasión, creatividad y tecnología.
        </p>

        {/* NUEVO: Botones por nombre del equipo */}
        <div className="nombres-lista" style={{ marginTop: '3rem' }}>
          {portfolioData.map((perfil, idx) => {
            const nombreRuta = perfil.info.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <Button
                key={idx}
                variant="outline-light"
                size="lg"
                className="nombre-integrante"
                style={{ margin: '0.5rem' }}
                onClick={() => navigate(`/perfil/${nombreRuta}`)}
              >
                {perfil.info.name}
              </Button>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Inicio;
