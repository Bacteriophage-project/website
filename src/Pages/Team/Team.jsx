import React from 'react'
import './Team.css'
import cyan from '../../profiles/Cyan.jpg'
import dan from '../../profiles/Daniel.jpg'
import kalii from '../../profiles/Kalii.jpg'
import cynthia from '../../profiles/Cynthia.jpg'
import nesh from '../../profiles/Nesh.jpg'
import abidha from '../../profiles/Abidha.jpg'
import dekow from '../../profiles/Dekow.jpg'
import placeholder from '../../Assets/logo.png'

const Team = () => {
  return (
    <>
    <div className="team-container" id='team'>
        <h2>Our Team</h2>
        <h1>Our Dedicated Team Members</h1>
        <hr />

        <div className="members">
            <div className="member">
                <div className="member-image">
                    <img src={placeholder} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Dr Lawrence Nderu</h5>
                <p>Chairman Computing</p>
            </div>

            <div className="member">
                <div className="member-image">
                    <img src={cyan} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Dr Julia Cyan</h5>
                <p>Research Consultant</p>
            </div>

            <div className="member">
                <div className="member-image">
                    <img src={dan} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Daniel</h5>
                <p>Frontend Engineer</p>
            </div>
            <div className="member">
                <div className="member-image">
                    <img src={dekow} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Mohamed Dekow</h5>
                <p>Cyber-Security Engineer</p>
            </div>
            <div className="member">
                <div className="member-image">
                    <img src={nesh} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Josphat Munene</h5>
                <p>Artificial Intelligence</p>
            </div>
            <div className="member">
                <div className="member-image">
                    <img src={kalii} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Emmanuel Kalii</h5>
                <p>Data Analyst</p>
            </div>
            
            <div className="member">
                <div className="member-image">
                    <img src={cynthia} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Cynthia Vaati</h5>
                <p>Project Lead</p>
            </div>
            <div className="member">
                <div className="member-image">
                    <img src={abidha} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Kelvin Abidha</h5>
                <p>Machine Learning</p>
            </div>
            
            <div className="member">
                <div className="member-image">
                    <img src={placeholder} alt="" />
                    <div className="hover">
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <h5>Victor Nduati</h5>
                <p>Data Analyst</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team