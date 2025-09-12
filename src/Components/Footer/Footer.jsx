import React from 'react';
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>© 2024 Cyfer Nikolai Supleo. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;