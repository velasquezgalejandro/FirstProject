import React from 'react';
import ReactDOM from 'react-dom/client';
import Api from './Frontend/Api.js';

import Box from '@mui/material/Box';

import Navbar from './Frontend/Navbar';
import Main from './Frontend/Main';
import Footer from './Frontend/Footer';

import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box sx={{ px: 0.5, py: 0.2 }}>
      <Navbar />
      <Main />
      <Footer />
    </Box>
  </React.StrictMode>
);

reportWebVitals();
