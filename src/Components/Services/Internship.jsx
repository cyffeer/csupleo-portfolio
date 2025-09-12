import React from 'react';
import './Internship.css';
import Internship_Data from '../../assets/internship_data';

const Internship = () => {
    return (
        <div id='intern' className='internship'>
            <div className="internship-title">
                <h1>Experiences</h1>
                <div className="internship-title-underline"></div>
            </div>
            <div className="internship-container">
                {Internship_Data.map((internship, index) => {
                    return (
                        <div key={index} className='internship-format'>
                            <div className="internship-content">
                                {internship.title && <h3>{internship.title}</h3>}
                                {internship.company && <h4>{internship.company}</h4>}
                                <div className="internship-dates">
                                    {internship.startDate && <p className="start-date">{internship.startDate}</p>}
                                    {internship.endDate && <p className="end-date">{internship.endDate}</p>}
                                </div>
                                {internship.image && (
                                    <div className="internship-image-wrapper">
                                        <img className='internship-image' src={internship.image} alt={internship.title} />
                                    </div>
                                )}
                                {internship.link && (
                                    <button onClick={() => window.open(internship.link, "_blank")}>
                                        Visit Company
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Internship;