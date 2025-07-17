import React from 'react'
import './Mission.css'

const Mission = () => {
  return (
    <>
    <div className="mission-container">
        <div className="left">
            <hr />

            <div className="left-text">
                <h1>Our Mission</h1>
                <h2>Our Mission</h2>

                <p>Our mission is to integrate the best bioinformatics tools—NCBI, ResFinder, Phastest, and VFDB—into a unified, user-friendly interface.We empower clinicians, microbiologists, and bioinformatics researchers to go from sequence to insight in just a few clicks.</p>
            </div>
        </div>

        <div className="right">

            <div className="right-text">
                <h1>Our Vision</h1>
                <h2>Our Vision</h2>

                <p>The Bacteriophage Project aims to simplify and accelerate bacteriophage genome research by providing an all-in-one platform for genome retrieval, AMR detection, and phage annotation—empowering scientists to combat antibiotic resistance and advance phage therapy with confidence.</p>
            </div>

            <hr />
        </div>
    </div>
    </>
  )
}

export default Mission