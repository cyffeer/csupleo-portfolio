import React from 'react';
import './Experience.css';
import Services_Data from  '../../assets/service_data';

const Experience = () => {
    return (
        <div id='services' className='experiences'>
            <div className="experiences-title">
                <h1>Leadership Experiences</h1>
            </div>
            <div className="experience-container">
                {Services_Data.map((service,index) => {
                    return <div key={index} className='services-format'>
                            {service.title && <h3>{service.title}</h3>}
                            {service.company && <h4>{service.company}</h4>}
                            {service.startDate && <p> {service.startDate}</p>}
                            {service.endDate && <p>{service.endDate}</p>}
                    </div>
                })}
            </div>
        </div>
    );
};

export default Experience;