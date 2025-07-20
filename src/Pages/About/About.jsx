import React, { useEffect, useRef } from 'react';
import './About.css';
import about_image from '../../Assets/about.jpeg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.left img', {
        scrollTrigger: {
          trigger: '.left img',
          start: 'top 80%',
          toggleActions: 'play none none none',
          scrub: true,
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.right', {
        scrollTrigger: {
          trigger: '.right',
          start: 'top 90%',
          end: 'bottom 90%',
          toggleActions: 'play none none none',
          scrub: true,
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-container" id="about" ref={aboutRef}>
      <h1>Who We Are</h1>
      <hr />

      <div className="about">
        <div className="left">
          <img src={about_image} alt="" />
        </div>

        <div className="right">
          <h3>About Us</h3>
          <h2>The shortcut to faster and better research just a few clicks away</h2>
          <p>We are a team of researchers and developers dedicated to simplifying bacteriophage and AMR research. By integrating tools like NCBI, ResFinder, VFDB, and PHASTEST into one easy-to-use platform, we help scientists move from raw data to meaningful insights faster than ever.
          </p>

          <div className="stats">
            <div><span>4+</span>Integrated websites</div>
            <div><span>1300+</span>Active users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;