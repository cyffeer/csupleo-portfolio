import React from 'react';
import './Education.css'; // Make sure to create a corresponding CSS file
import Education_Data from '../../assets/education_data'; // Adjust the path if necessary

const Education = () => {
    return (
        <div id='education' className='education'>
            <div className="education-title">
                <h1>Education</h1>
            </div>
            <div className="education-container">
                {Education_Data.map((education, index) => {
                    return (
                        <div key={index} className='education-format'>
                            {education.degree && <h3>{education.degree}</h3>}
                            {education.institution && <h4>{education.institution}</h4>}
                            {education.startDate && <p>{education.startDate}</p>}
                            {education.endDate && <p>{education.endDate}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;
