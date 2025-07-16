import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Bacteriophage Logo" className="navbar-logo-img" />
        <span className="navbar-logo-text">Bacteriophage</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#team">Team</a></li>
      </ul>

      <div className="navbar-right">
        <a href="#get-started" className="get-started-btn">Get Started</a>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
