import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <>
      <div className='workexperience' id='About'>
        <div className='buttons-column'>
          <button>Job #1</button>
          <button>Job #2</button>
          <button>Job #3</button>
          <button>Job #4</button>
          <button>Job #5</button>
        </div>
        <div className='workexperience-info'>
          <h3 className='workexperience-header'>
            <span style={{ color: 'var(--accent-color)' }}>02.</span> Work
            Experience
          </h3>
          <h4 className='job-title-text'>
            Job Title <span class='company-name-text'>@ Company Name</span>
          </h4>
          <p className='workexperience-text'>May 2019 - Present</p>
          <ul>
            <li class='job-li'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              maecenas sed enim.
            </li>
            <li class='job-li'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li class='job-li'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque eleifend donec pretium vulputate.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
