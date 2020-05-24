import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <>
      <div className='workexperience' id='About'>
        <div className='buttons-column'>
          <button>1) Novo</button>
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
            Front-End React Developer & UI/UX Intern{' '}
            <span class='company-name-text'>@ Novo Technologies</span>
          </h4>
          <p className='workexperience-text'>November 2019 - Present</p>
          <ul class='job-ul'>
            <li class='job-li'>
              Improving scalability of a production application tremendously by
              incorporating the React Front-End library and other modern web
              technologies.
            </li>
            <li class='job-li'>
              Accelerating users' turnaround time on average 200% after
              overhauling UI/UX of a production application.
            </li>
            <li class='job-li'>
              Improving the aesthetic of production applications by
              incorporating UI/UX design practices.
            </li>
            <li class='job-li'>
              Improving my team's productivity by drafting user stories,
              flowcharts, personas, tasks, and sprint backlogs for scrum
              sprints.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
