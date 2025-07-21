import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Team from './Pages/Team/Team';
import Footer from './Pages/Footer/Footer';
import Services from './Pages/Services/Services';
import Navbar from './Pages/Navbar/Navbar';
import Mission from './Pages/Mission/Mission'
import QABot from './QABot';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mission/>
      <Team/>
      <Footer/>
      <QABot/>
    </div>
  );
}

export default App;
