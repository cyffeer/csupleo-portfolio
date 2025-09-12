import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="Cyfer Nikolai Supleo" />
            <h1>Hi</h1>
            <h1>I am <span>Cyfer Nikolai Supleo</span></h1>
            <p>Full Stack Developer | Automation Engineer | AI Developer </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href="https://drive.google.com/file/d/102tnPZvHJIW5EVmwVOElyPFOb2q6I16Q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
