import React from 'react';
import './MyProject.css';
import MyWork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/eye.png';

const MyProject = () => {
    return (
        <div id='work' className='myproject'>
            <div className="myproject-title">
                <h1>Latest Projects</h1>
                <div className="myproject-title-underline"></div>
            </div>
            <div className="myproject-container">
                {MyWork_data.map((work, index) => {
                    return (
                        <div key={index} className="myproject-item">
                            <div className="myproject-image-wrapper">
                                <img src={work.image} alt={work.title} className="myproject-image" />
                                <div className="myproject-overlay">
                                    <div className="myproject-details">
                                        <h2>{work.title}</h2>
                                        <div className="myproject-divider"></div>
                                        <p>{work.technologies}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="myproject-showmore">
                <a href="https://github.com/cyffeer" className="myproject-showmore-link">
                    <span>View More Projects</span>
                    <img src={arrow_icon} alt="Arrow icon" />
                </a>
            </div>
        </div>
    );
};

export default MyProject;