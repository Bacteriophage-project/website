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
                <p>We are a team of researchers and developers dedicated to simplifying bacteriophage and AMR research. By integrating tools like NCBI, ResFinder, VFDB, and PHASTEST into one easy-to-use platform, we help scientists move from raw data to meaningful insights faster than ever.</p>

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