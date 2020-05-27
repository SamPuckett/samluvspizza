import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className='get-in-touch-container'>
      <h3 className='get-in-touch-header' id='Work'>
        <span style={{ color: 'var(--accent-color)' }}>04.</span> What's Next?
      </h3>
      <p className='get-in-touch-text'>
        I'm currently looking for new Developer opportunities, <br />
        my inbox is always open. Whether you have a question <br />
        or just want to say hi, I'll try my best to get back to you!
      </p>
      <button className='button' style={{ margin: '0' }}>
        <a href='mailto:samuelruiz1994@gmail.com'>Say Hi! 😊</a>
      </button>
    </div>
  );
};

export default GetInTouch;
