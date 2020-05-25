import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div className='projects-container' id='Experience'>
        <h3 className='projects-header'>
          <span style={{ color: 'var(--accent-color)' }}>03.</span> Things I've
          Built
        </h3>
        <div className='project-row'>
          <div className='image-holder'>Image Placeholder</div>
          <div className='image-text-details-column'>
            <h4>Featured Project</h4>
            <h3>Quizz App</h3>
            <div className='image-text-details'>Details </div>
            <p>Tech Stack</p>
            <p>Link Icons</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
