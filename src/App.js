import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Frontend/Home';
import Catalogo from './Frontend/Catalogo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/catalogo" element={<Catalogo />} exact />
      </Routes>
    </Router>
  );
}

export default App;
