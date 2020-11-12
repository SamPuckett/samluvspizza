import React from "react";
import "./Button.css";

const Button = ({ buttonName }) => {
  return (
    <div className='button'>
      <a href='mailto:samuelruizdev@gmail.com'>{buttonName}</a>
    </div>
  );
};

export default Button;
