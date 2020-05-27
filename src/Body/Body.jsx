import React from 'react';
import Button from './Button';
import './Body.css';

const Body = () => {
  return (
    <>
      <div className='body'>
        <h3>Hi, my name is</h3>
        <h1>Samuel Ruiz</h1>
        <h2>Front-End Web Dev &amp; Lover of Pizza.</h2>
        <p className='body-text'>
          I'm a React Developer with a passion for front end web developement.
          I'm currently a senior at{' '}
          <a className='stan-link' href='https://www.csustan.edu/'>
            California State University, Stanislaus
          </a>{' '}
          pursuing a B.S. in Computer Science (May 2020 Expexted Graduation).
        </p>
        <Button buttonName='Contact Me' />
      </div>
    </>
  );
};

export default Body;
