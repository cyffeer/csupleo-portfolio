import React from 'react';
import './Education.css';
import Education_Data from '../../assets/education_data';

const Education = () => {
    return (
        <div id='education' className='education'>
            <div className="education-title">
                <h1>Education</h1>
                <div className="education-title-underline"></div>
            </div>
            <div className="education-container">
                {Education_Data.map((education, index) => {
                    return (
                        <div key={index} className='education-format'>
                            {education.degree && <h3>{education.degree}</h3>}
                            {education.institution && <h4>{education.institution}</h4>}
                            <div className="education-dates">
                                {education.startDate && <p className="start-date">{education.startDate}</p>}
                                {education.endDate && <p className="end-date">{education.endDate}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;