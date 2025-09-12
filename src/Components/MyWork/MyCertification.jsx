import React from 'react';
import './MyCertification.css';
import Certification_data from '../../assets/certification_data';
import arrow_icon from '../../assets/eye.png';

const MyCertification = () => {
    return (
        <div id='certifications' className='mycertification'>
            <div className="mycertification-title">
                <h1>Certifications</h1>
                <div className="mycertification-title-underline"></div>
            </div>
            <div className="mycertification-container">
                {Certification_data.map((certification, index) => {
                    return (
                        <div key={index} className="mycertification-item">
                            <div className="mycertification-image-wrapper">
                                <img src={certification.image} alt={certification.title} className="mycertification-image" />
                                <div className="mycertification-overlay">
                                    <div className="mycertification-details">
                                        <h2>{certification.title}</h2>
                                        <div className="mycertification-divider"></div>
                                        <p className="mycertification-institution">{certification.institution}</p>
                                        <p className="mycertification-date">{certification.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mycertification-showmore">
                <a href="https://www.credly.com/users/cyfersupleo" className="mycertification-showmore-link">
                    <span>View More Certifications</span>
                    <img src={arrow_icon} alt="Arrow icon" />
                </a>
            </div>
        </div>
    );
};

export default MyCertification;