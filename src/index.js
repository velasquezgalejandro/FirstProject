import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Frontend/Navbar';
import Main from './Frontend/Main';
import Footer from './Frontend/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
