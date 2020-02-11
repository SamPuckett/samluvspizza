import React from "react";
import Button from "./Button";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className='body'>
        <h3>Hi, my name is</h3>
        <h1>Samuel Ruiz</h1>
        <h2>Front-End Web Dev &amp; Lover of Pizza.</h2>
        <p className='body-text'>
          I'm a React Developer with a passion for front end web developement.
          I'm currently a senior at California State University, Stanislaus
          pursuiting a B.S. in Computer Science (May 2020 Expexted Graduation).
        </p>
        <Button buttonName='Get In Touch' />
      </div>
    </>
  );
};

export default Body;
