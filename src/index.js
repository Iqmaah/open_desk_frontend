import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from './components/pages/Container'
import HomePage from './components/pages/HomePage/HomePage';
import About from './components/pages/About/About'
import Gallery from './components/pages/Gallery/Gallery';
import Login from './components/pages/Login/Login';
import Booking from './components/pages/Booking/Booking';
import Contact from './components/pages/Contact/Contact';
import Dashboard from './components/pages/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage/>

  </React.StrictMode>
);

