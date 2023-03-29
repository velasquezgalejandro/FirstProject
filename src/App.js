import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Frontend/Home';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
