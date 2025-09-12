import React from 'react';
import './About.css';
import profile_img1 from '../../assets/about_profile.jpg';
import profile_img2 from '../../assets/about_profile2.jpg';
import profile_img3 from '../../assets/about_profile3.jpg';
import profile_img4 from '../../assets/about_profile4.jpg';
import skills from '../../assets/skills.js';

const About = () => {
    return (
        <div id='about' className='about'> 
            <div className="about-container">
                <div className="about-title">
                    <h1>About me</h1>
                    <div className="about-title-underline"></div>
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img1} alt="Profile" />
                        <img src={profile_img2} alt="Profile" />
                        <img src={profile_img3} alt="Profile" />
                        <img src={profile_img4} alt="Profile" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>I'm a dedicated Developer, with a strong passion for building innovative and user-friendly applications. My journey in technology has equipped me with skills in various programming languages, and I thrive on exploring new challenges in the digital landscape.</p>
                            <p>In addition to coding, I embrace my role as a student-athlete, balancing rigorous academic pursuits with competitive sports. This blend of disciplines fuels my drive and teaches me the value of teamwork and perseverance. Let's collaborate to turn ideas into reality!</p>
                        </div>
                        <div className="about-skills">
                            {skills.map((category, index) => (
                                <div key={index} className="skill-category">
                                    <div className="skill-header">
                                        <div className="skill-title">
                                            <span className="skill-icon">{category.icon}</span>
                                            <h3>{category.title}</h3>
                                        </div>
                                    </div>
                                    <div className="skill-tags">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>4</h1>
                        <p>CERTIFICATIONS</p>
                    </div>
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <div className="about-achievement">
                        <h1>7</h1>
                        <p>AWARDS & HONORS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;