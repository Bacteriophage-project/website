import React, { useEffect, useRef } from 'react';
import './Team.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import cyan from '../../profiles/Cyan.jpg';
import dan from '../../profiles/Daniel.jpg';
import kalii from '../../profiles/Kalii.jpg';
import cynthia from '../../profiles/Cynthia.jpg';
import nesh from '../../profiles/Nesh.jpg';
import abidha from '../../profiles/Abidha.jpg';
import dekow from '../../profiles/Dekow.jpg';
import placeholder from '../../Assets/logo.png';
import nderu from '../../profiles/Nderu.png';
import victor from '../../profiles/Victor.jpg'

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const members = gsap.utils.toArray('.member');

      gsap.from(members, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      });

      ScrollTrigger.refresh();
    }, teamRef);

    return () => context.revert();
  }, []);

  return (
    <div className="team-container" id="team" ref={teamRef}>
      <h2>Our Team</h2>
      <h1>Our Dedicated Team Members</h1>
      <hr />

      <div className="members">
        {[
          { img: nderu, name: 'Dr Lawrence Nderu', role: 'Chairman Computing' },
          { img: cyan, name: 'Dr Julia Cyan', role: 'Research Consultant' },
          { img: cynthia, name: 'Cynthia Vaati', role: 'Project Lead' },
          { img: dan, name: 'Daniel Bundi', role: 'Frontend Engineer' },
          { img: dekow, name: 'Mohamed Dekow', role: 'Cyber-Security Engineer' },
          { img: nesh, name: 'Josphat Munene', role: 'Backend Engineer' },
          { img: kalii, name: 'Emmanuel Kalii', role: 'Data Analyst' },
          { img: abidha, name: 'Kelvin Abidha', role: 'Backend Engineer' },
          { img: victor, name: 'Victor Nduati', role: 'Backend Engineer' },
        ].map((member, index) => (
          <div className="member" key={index}>
            <div className="member-image">
              <img src={member.img} alt={member.name} />
              <div className="hover">
                <div className="social-icons">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
            <h5>{member.name}</h5>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
