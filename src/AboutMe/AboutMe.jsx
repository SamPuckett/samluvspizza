import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className='about-me'>
      <div className='about-me-column-1'>
        <h1 className='about-me-header'>
          01. About Me -------------------------
        </h1>
        <p>
          Hello! I'm Sam, a React developer based in Modesto, CA who enjoys
          building things that live on the internet. I develop exceptional
          website and web apps that provide intuitive, pixel-perfect user
          experiences with efficient and modern backends.
        </p>
        <p>
          I am a Senior at California State University, Stanislaus. During the
          first semester of my senior year, I had the opportunity to intern at
          Novo Technologies where I worked on a wide variety of interesting and
          meaningful projects on a daily basis.
        </p>
        <p>Here are some technolgies I've been working with recently:</p>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>SQL</li>
          <li>C#</li>
          <li>.NET Framework</li>
        </ul>
      </div>
      <div className='about-me-column-2'>
        <p>Image</p>
      </div>
    </div>
  );
};

export default AboutMe;
