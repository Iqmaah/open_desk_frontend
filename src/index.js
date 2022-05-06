import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
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
    <Gallery/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
