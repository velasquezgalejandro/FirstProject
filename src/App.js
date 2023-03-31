import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Frontend/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route  path="/" component={<Home />} > */}
        <Route path="/" element={<Home />} exact />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
