import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import gsap from 'gsap';
import PhageHover from './PhageHover';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.navbar', {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: 'power2.out'
      })
      .from('.navbar-left', {
        x: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.navbar-links li', {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.navbar-right', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }, '-=0.3');
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
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
          <PhageHover/>
          <a href="#get-started" className="get-started-btn">Get Started</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
