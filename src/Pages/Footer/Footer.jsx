import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Bacteriophage</h2>
          <p>Your genomic analysis partner.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@bacteriophage.com</p>
          <p>Phone: +254 700 000 000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bacteriophage Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
