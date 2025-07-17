import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="wrapper">
        <div className="hero-container">
            <h3>Welcome to Bacteriophage</h3>
            <h1>Make Your Research Easier and Faster</h1>

            <p>Accelerate your research with a single platform that fetches genomes, predicts virulence and resistance, and profiles phages—no bioinformatics expertise required.</p>

            <button><a href="#about">Learn More</a></button>
        </div>
    </div>
    
    </>
  )
}

export default Hero