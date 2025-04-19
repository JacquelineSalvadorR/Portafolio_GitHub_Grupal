import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Jacqueline from './perfiles/Jacqueline';
import Edgar from './perfiles/Edgar';
import Alexandra from './perfiles/Alexandra';
import Francisco from './perfiles/Francisco';
import Renzo from './perfiles/Renzo';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Inicio onEnter={() => window.scrollTo({ top: 800, behavior: 'smooth' })} />}
        />
        <Route path="/perfil/jacqueline-salvador" element={<Jacqueline />} />
        <Route path="/perfil/edgar-aliaga" element={<Edgar />} />
        <Route path="/perfil/alexandra-tipacti" element={<Alexandra />} />
        <Route path="/perfil/francisco-chambi" element={<Francisco />} />
        <Route path="/perfil/renzo-damian" element={<Renzo />} />
      </Routes>
    </Router>
  );
}

export default App;
