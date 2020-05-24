import React, { useState } from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const [jobCounter, setJobCounter] = useState(0);
  const jobObject = {
    0: {
      buttonName: 'Front-End Developer Intern',
      jobTitle: 'Front-End React Developer & UI/UX Intern',
      companyName: 'Novo Technologies',
      date: 'November 2019 - April, 2020',
      jobDuties: [
        'Improving scalability of a production application tremendously by incorporating the React Front-End library and other modern web technologies.',
        "Accelerating users' turnaround time on average 200% after overhauling UI/UX of a production application.",
        'Improving the aesthetic of production applications by incorporating UI/UX design practices.',
        "Improving my team's productivity by drafting user stories, flowcharts, personas, tasks, and sprint backlogs for scrum sprints.",
      ],
    },
    1: {
      buttonName: 'Google Developer Group',
      jobTitle: 'Google Developer Group Organizer & Mentor',
      companyName: 'Google Developer Group Cloud Turlock',
      date: 'August 2018 - Present',
      jobDuties: [
        'Conducting technical workshops where students learn popular computer science topics and technologies.',
        'Improving my Computer Science knowledge tremendously by teaching workshops.',
        'Increasing yearly budget by 4x-fold by building relationships with sponsors, meeting with co-organizers to plan events, establish/monitor budgets.',
        'Increasing the overall number of members within the Developer Group by building a welcoming community of Computer Science Students and organizing team building events.',
      ],
    },
    2: {
      buttonName: 'Undergrad Research',
      jobTitle: 'CSU Stanislaus Kinesiology Department',
      companyName: 'Chatbot - Undergrad Research',
      date: 'August 2019 - December 2019',
      jobDuties: [
        'Created a chatbot with Amazon Lex, HTML, CSS, and JavaScript in order to help students taking kinesiology courses have success in their classes.',
        'Decreased the number of questions the professor was asked via email in half.',
        'Worked with professor to survey previous classes and asked what were their most frequent questions in the courses and what they struggled with the most in order to implement the chatbot to cover all of those questions.',
      ],
    },
  };

  const incrementCounter = (number) => {
    setJobCounter(number);
  };

  return (
    <>
      <div className='workexperience' id='Experience'>
        <div className='buttons-column'>
          <button
            class='job-button'
            onClick={() => {
              incrementCounter(0);
            }}
          >
            {jobObject[0].buttonName}
          </button>
          <button
            class='job-button'
            onClick={() => {
              incrementCounter(1);
            }}
          >
            {jobObject[1].buttonName}
          </button>
          <button
            class='job-button'
            onClick={() => {
              incrementCounter(2);
            }}
          >
            {jobObject[2].buttonName}
          </button>
        </div>
        <div className='workexperience-info'>
          <h3 className='workexperience-header'>
            <span style={{ color: 'var(--accent-color)' }}>02.</span> Work
            Experience
          </h3>
          <h4 className='job-title-text'>
            {jobObject[jobCounter].jobTitle}{' '}
            <span className='company-name-text'>
              @ {jobObject[jobCounter].companyName}
            </span>
          </h4>
          <p className='workexperience-text'>{jobObject[jobCounter].date}</p>
          <ul className='job-ul'>
            {jobObject[jobCounter].jobDuties.map((Duty, index) => (
              <li className='job-li' key={index}>
                {Duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
