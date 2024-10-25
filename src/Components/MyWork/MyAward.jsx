import React from 'react';
import './MyAward.css';
import Award_data from '../../assets/award_data'; // Make sure to create this data file
import trophy_icon from '../../assets/trophy_icon.png'; // Replace with your trophy icon path if needed

const MyAward = () => {
    return (
        <div id='awards' className='myaward'>
            <div className="myaward-title">
                <h1>My Awards and Honors</h1>
            </div>
            <div className="myaward-container">
                {Award_data.map((award, index) => {
                    return (
                        <div key={index} className="myaward-item">
                            <div className="myaward-image-wrapper">
                                <img src={award.image} alt={award.title} className="myaward-image" />
                                <div className="myaward-details">
                                    <h2>{award.title} </h2>
                                    <p>{award.date} </p>
                                    <p>{award.description} </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="myaward-showmore">
                <p>View More Awards</p>
                <img src={trophy_icon} alt="" />
            </div>
        </div>
    );
};

export default MyAward;
