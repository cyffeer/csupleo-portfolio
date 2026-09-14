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
            <p>Software Programmer</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href="https://drive.google.com/file/d/1yGjFoogn0b-AMK7A88cArrXU-OQYveQH/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
