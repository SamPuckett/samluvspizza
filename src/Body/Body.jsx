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
          I’m a software engineer based in Modesto, CA specializing in building
          (and occasionally designing) exceptional, high-quality websites and
          applications.
        </p>
        <Button buttonName='Get In Touch' />
      </div>
    </>
  );
};

export default Body;
