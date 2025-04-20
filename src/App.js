import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Inicio from './Inicio';
import Jacqueline from './perfiles/Jacqueline';
import Edgar from './perfiles/Edgar';
import Alexandra from './perfiles/Alexandra';
import Francisco from './perfiles/Francisco';
import Renzo from './perfiles/Renzo';
import Navbar from './components/Navbar';

const Rutas = () => {
  const location = useLocation();
  const mostrarNavbar = location.pathname !== "/";

  return (
    <>
      {mostrarNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil/jacqueline-salvador" element={<Jacqueline />} />
        <Route path="/perfil/edgar-aliaga" element={<Edgar />} />
        <Route path="/perfil/alexandra-tipacti" element={<Alexandra />} />
        <Route path="/perfil/francisco-chambi" element={<Francisco />} />
        <Route path="/perfil/renzo-damian" element={<Renzo />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Rutas />
    </BrowserRouter>
  );
}

export default App;

