import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1>Hi, I am <span>Cyfer Nikolai Supleo</span>, Computer Science Student</h1>
            <p>Fullstack Developer | Automation Engineer</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href="https://drive.google.com/file/d/15Z_oxP_eNamySw40viwVMUP2mvBNnfGL/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
