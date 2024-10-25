import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1>Hi, I am <span>Cyfer Nikolai Supleo</span>, Computer Science Student</h1>
            <p>Frontend Developer | Backend Developer | Fullstack Developer</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href="https://drive.google.com/file/d/1em7tWzRLU-QOkwcZbW7jgcYbkwlqVZVN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
