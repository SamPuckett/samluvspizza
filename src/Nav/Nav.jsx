import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";
import "./Nav.css";

const Nav = () => {
  return (
    <div className='nav'>
      <span className='logo'>
        <Logo />
      </span>
      <span className='right-side-nav'>
        <NavItem navItem='01. About' />
        <NavItem navItem='02. Experience' />
        <NavItem navItem='03. Work' />
        <NavItem navItem='04. Contact' />
        <ResumeButton />
      </span>
    </div>
  );
};

export default Nav;
