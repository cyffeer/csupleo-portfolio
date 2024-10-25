import React from 'react';
import './About.css';
import profile_img1 from '../../assets/about_profile.jpg';
import profile_img2 from '../../assets/about_profile2.jpg';
const About = () => {
    return (
        <div id='about' className='about'> 
            <div className="about-title">
                <h1>About me</h1>
                {/*add img for design*/}
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img1} alt="Profile" />
                    <img src={profile_img2} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a dedicated web developer and student at FEU Institute of Technology, with a strong passion for building innovative and user-friendly applications. My journey in technology has equipped me with skills in various programming languages, and I thrive on exploring new challenges in the digital landscape.</p>
                        <p>In addition to coding, I embrace my role as a student-athlete, balancing rigorous academic pursuits with competitive sports. This blend of disciplines fuels my drive and teaches me the value of teamwork and perseverance. Let's collaborate to turn ideas into reality!</p>
                    </div>
                    <div className="about-skills">
                        <div className='skill'><div className="about-skill"><p>Front-End: HTML, CSS, JavaScript, React</p></div>
                        <hr style={{width:"70%"}}/>
                        </div>
                        <div className='skill'><div className="about-skill"><p>Back-End: PHP, Python, Java</p></div>
                        <hr style={{width:"60%"}}/>
                        </div>
                        <div className='skill'><div className="about-skill"><p>Database: MySQL</p></div>
                        <hr style={{width:"80%"}}/>
                        </div>
                        <div className='skill'><div className="about-skill"><p>Web Development</p></div>
                        <hr style={{width:"60%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>4</h1>
                    <p>CERTIFICATIONS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4</h1>
                    <p>AWARDS & HONORS</p>
                </div>
            </div>
        </div>
    );
};

export default About;