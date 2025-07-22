import React from 'react';
import './Internship.css';
import Internship_Data from '../../assets/internship_data';

const Internship = () => {
    return (
        <div id='intern' className='internship'>
            <div className="internship-title">
                <h1>Experiences</h1>
            </div>
            <div className="internship-container">
                {Internship_Data.map((internship, index) => {
                    return <div key={index} className='internship-format'>
                            <div className="internship-content">
                                {internship.title && <h3>{internship.title}</h3>}
                                {internship.company && <h4>{internship.company}</h4>}
                                <div className="internship-dates">
                                    {internship.startDate && <p>{internship.startDate}</p>}
                                    {internship.endDate && <p> - {internship.endDate}</p>}
                                </div>
                                {internship.image && <img className='internship-image' src={internship.image} alt={internship.title} />}
                                {internship.link && <button onClick={() => window.open(internship.link, "https://flowerstore.ph/")}>Visit Company</button>}
                            </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Internship;