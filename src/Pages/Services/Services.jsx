import React, { useLayoutEffect, useRef } from 'react';
import './Services.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef([]);

  useLayoutEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",    
      start: "top 80%",
      end: "bottom 85%",
      scrub: true,    
    },
  });

  tl.fromTo(
    servicesRef.current,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.2,
    }
  );
}, []);


  return (
    <>
      <div className="services-container" id="services">
        <h1>Services</h1>
        <hr />
        <h2>Access genomes faster. Analyze with ease.</h2>

        <div className="services">
          <div className="service" ref={(el) => (servicesRef.current[0] = el)}>
            <i className="fas fa-dna icon"></i>
            <h3>Genome Fetching</h3>
            <p>Retrieve genome data directly from public repositories like NCBI with customizable filters.</p>
          </div>
          <div className="service" ref={(el) => (servicesRef.current[1] = el)}>
            <i className="fas fa-vials icon"></i>
            <h3>AMR Detection</h3>
            <p>Detect antimicrobial resistance genes in genome sequences using integrated analysis tools.</p>
          </div>
          <div className="service" ref={(el) => (servicesRef.current[2] = el)}>
            <i className="fas fa-project-diagram icon"></i>
            <h3>Phage-Host Visualization</h3>
            <p>Visualize relationships between bacteriophages and host bacteria through interactive graphs.</p>
          </div>
          <div className="service" ref={(el) => (servicesRef.current[3] = el)}>
            <i className="fas fa-thermometer-half icon"></i>
            <h3>Heat Map Generation</h3>
            <p>Generate heat maps for gene presence, resistance profiles, or host interaction patterns.</p>
          </div>
          <div className="service" ref={(el) => (servicesRef.current[4] = el)}>
            <i className="fas fa-notes-medical icon"></i>
            <h3>Gene Annotation</h3>
            <p>Annotate genetic features and functions using standard bioinformatics pipelines.</p>
          </div>
          <div className="service" ref={(el) => (servicesRef.current[5] = el)}>
            <i className="fas fa-file-download icon"></i>
            <h3>Export and Downloading</h3>
            <p>Download analysis results in multiple formats for publication, sharing, or offline study.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;