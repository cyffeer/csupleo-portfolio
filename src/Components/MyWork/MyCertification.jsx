import React from 'react';
import './MyCertification.css'; // Make sure to create this CSS file
import Certification_data from '../../assets/certification_data'; // Import your certification data
import arrow_icon from '../../assets/eye.png'; // Use the same arrow icon or a different one

const MyCertification = () => {
    return (
        <div id='certifications' className='mycertification'>
            <div className="mycertification-title">
                <h1>My Certifications</h1>
            </div>
            <div className="mycertification-container">
                {Certification_data.map((certification, index) => {
                    return (
                        <div key={index} className="mycertification-item">
                            <div className="mycertification-image-wrapper">
                                <img src={certification.image} alt={certification.title} className="mycertification-image" />
                                <div className="mycertification-details">
                                    <h2>{certification.title}</h2>
                                    <p>{certification.institution}</p>
                                    <p>{certification.date}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mycertification-showmore">
                <a href="https://www.credly.com/users/cyfersupleo" className="mycertification-showmore-link"> {/* Add your link here */}
                    <p>View More Certifications</p>
                    <img src={arrow_icon} alt="Arrow icon" />
                </a>
            </div>
        </div>
    );
};

export default MyCertification;
