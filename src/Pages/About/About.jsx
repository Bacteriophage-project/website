import React from 'react'
import './About.css'
import about_image from '../../Assets/about.jpeg'

const About = () => {
  return (
    <>
    <div className="about-container" id='about'>
        <h1>Who We Are</h1>
        <hr />

        <div className="about">
            <div className="left">
                <img src={about_image} alt="" />
            </div>

            <div className="right">
                <h3>About Us</h3>
                <h2>The shortcut to faster and better research just a few clicks away</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore debitis facere ad sint obcaecati ipsa mollitia, doloremque saepe harum facilis consequatur nam dolor eius autem! Quas consequuntur beatae quidem labore.</p>

                <div className="stats">
                    <div><span>4+</span>Integrated websites</div>
                    <div><span>1300+</span>Active users</div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default About