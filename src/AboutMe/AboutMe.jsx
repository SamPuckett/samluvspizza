import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className='aboutme' id='About'>
        <div className='aboutme-row-of-columns'>
          <div className='aboutme-left-column'>
            <h3 className='aboutme-header'>
              <span style={{ color: "var(--accent-color)" }}>01.</span> About Me
            </h3>
            <p className='aboutme-text'>
              Hello! I'm Sam, a Front-End Developer based in Modesto, California
              who enjoys designing things on the web. I am passionate about web
              development and creating products that users can easily use
              without having to think.
            </p>
            <p className='aboutme-text'>
              I am currently attending Stanislaus University, and during my time
              as a student I was fortunate enough to be able to join Novo
              Technologies as a Software Developer Intern where I practiced
              agile development and worked with JavaScript, React and a variety
              of modern web technologies on a daily basis.
            </p>
            <p className='aboutme-text'>
              Here are a few technologies I've been working with recently:
            </p>
            <div className='aboutme-list-row'>
              <ul className='aboutme-column'>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML</li>
              </ul>
              <ul className='aboutme-column aboutme-second-ul'>
                <li>CSS</li>
                <li>C#</li>
                <li>SignalR</li>
                <li>Google Cloud Platform</li>
              </ul>
            </div>
          </div>
          <div className='aboutme-right-column'>
            <div className='sam-image-border'></div>
            <img
              className='sam-image'
              src='https://res.cloudinary.com/dnrbgmcm4/image/upload/c_scale,q_auto:eco,w_600/v1583566519/sam_vcfzsi.png'
              alt='sam at the google hispanic student leadership summit'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
