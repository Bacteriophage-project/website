import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
    <div className="services-container" id='services'>
        <hr />
        <h2>Access genomes faster. Analyze with ease.</h2>


        <div className="services">
            <div className="service">
                <i className="fas fa-dna icon"></i>
                <h3>Genome Fetching</h3>
                <p>Retrieve genome data directly from public repositories like NCBI with customizable filters.</p>
            </div>
            <div className="service">
                <i className="fas fa-vials icon"></i>
                <h3>AMR Detection</h3>
                <p>Detect antimicrobial resistance genes in genome sequences using integrated analysis tools.</p>
            </div>
            <div className="service">
                <i className="fas fa-project-diagram icon"></i>
                <h3>Phage-Host Visualization</h3>
                <p>Visualize relationships between bacteriophages and host bacteria through interactive graphs.</p>
            </div>
            <div className="service">
                <i className="fas fa-thermometer-half icon"></i>
                <h3>Heat Map Generation</h3>
                <p>Generate heat maps for gene presence, resistance profiles, or host interaction patterns.</p>
            </div>
            <div className="service">
                <i className="fas fa-notes-medical icon"></i>
                <h3>Gene Annotation</h3>
                <p>Annotate genetic features and functions using standard bioinformatics pipelines.</p>
            </div>
            <div className="service">
                <i className="fas fa-file-download icon"></i>
                <h3>Export and Downloading</h3>
                <p>Download analysis results in multiple formats for publication, sharing, or offline study.</p>
            </div>
            </div>

    </div>
    </>
  )
}

export default Services