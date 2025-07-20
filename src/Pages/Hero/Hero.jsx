import React, { useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-container h3', {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
      .from('.hero-container h1', {
        y: -40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.3')
      .from('.hero-container p', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from('.hero-container button', {
        scale: 0.8,
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="wrapper" ref={heroRef}>
        <div className="hero-container">
          <h3>Welcome to Bacteriophage</h3>
          <h1>Make Your Research Easier and Faster</h1>
          <p>
            Accelerate your research with a single platform that fetches genomes, predicts
            virulence and resistance, and profiles phages—no bioinformatics expertise required.
          </p>
          <button><a href="#about">Learn More</a></button>
        </div>
      </div>
    </>
  );
};

export default Hero;
