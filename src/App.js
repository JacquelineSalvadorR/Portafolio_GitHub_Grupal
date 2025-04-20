import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarFija from './components/Navbar';
import Inicio from './Inicio';
import Jacqueline from './perfiles/Jacqueline';
import Edgar from './perfiles/Edgar';
import Alexandra from './perfiles/Alexandra';
import Francisco from './perfiles/Francisco';
import Renzo from './perfiles/Renzo';

function App() {
  return (
    <Router>
      <NavbarFija />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/jacqueline" element={<Jacqueline />} />
        <Route path="/francisco" element={<Francisco />} />
        <Route path="/edgar" element={<Edgar />} />
        <Route path="/alexandra" element={<Alexandra />} />
        <Route path="/renzo" element={<Renzo />} />
      </Routes>
    </Router>
  );
}

export default App;
