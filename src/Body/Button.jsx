import React from "react";
import "./Button.css";

const Button = ({ buttonName }) => {
  return (
    <div className='button'>
      <a href='mailto:samuelruiz1994@gmail.com'>{buttonName}</a>
    </div>
  );
};

export default Button;
