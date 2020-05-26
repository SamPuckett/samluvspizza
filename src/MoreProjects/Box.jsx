import React from 'react';
import './MoreProjects.css';

const Box = ({
  link,
  projectDescription = 'Blank',
  projectName = 'Blank',
  techStack = 'Tech | Tech | Tech | Tech',
}) => {
  return (
    <div className='more-projects-box'>
      <div className='box-icon-row'>
        <div className='box-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 26 26'
            width='26px'
            height='26px'
            fill='none'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='feather feather-code'
          >
            <polyline points='16 18 22 12 16 6'></polyline>
            <polyline points='8 6 2 12 8 18'></polyline>
          </svg>
        </div>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='box-icon'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 26 26'
            width='26px'
            height='26px'
            stroke='none'
          >
            <path d='M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z' />
          </svg>
        </a>
      </div>
      <h2 className='box-header'>{projectName}</h2>
      <p className='box-description'>{projectDescription}</p>
      <p className='box-tech-stack'>{techStack}</p>
    </div>
  );
};

export default Box;
