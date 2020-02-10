import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import ResumeButton from "./ResumeButton";
import "./Nav.css";

const Nav = () => {
  return (
    <div className='nav'>
      <Logo />
      <NavItems />
      <ResumeButton />
    </div>
  );
};

export default Nav;
