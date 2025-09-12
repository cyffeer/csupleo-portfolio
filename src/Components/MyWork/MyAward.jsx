import React from 'react';
import './MyAward.css';
import Award_data from '../../assets/award_data';
import trophy_icon from '../../assets/trophy_icon.png';

const MyAward = () => {
    return (
        <div id='awards' className='myaward'>
            <div className="myaward-title">
                <h1>Awards and Honors</h1>
                <div className="myaward-title-underline"></div>
            </div>
            <div className="myaward-container">
                {Award_data.map((award, index) => {
                    return (
                        <div key={index} className="myaward-item">
                            <div className="myaward-image-wrapper">
                                <img src={award.image} alt={award.title} className="myaward-image" />
                                <div className="myaward-overlay">
                                    <div className="myaward-details">
                                        <h2>{award.title}</h2>
                                        <div className="myaward-divider"></div>
                                        <p className="myaward-date">{award.date}</p>
                                        <p className="myaward-description">{award.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="myaward-showmore">
                <a href="https://edith.feutech.edu.ph/briefcase/profile/csupleo" className="myaward-showmore-link">
                    <span>View More Awards</span>
                    <img src={trophy_icon} alt="Trophy icon" />
                </a>
            </div>
        </div>
    );
};

export default MyAward;