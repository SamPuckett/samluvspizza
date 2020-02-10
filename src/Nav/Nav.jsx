import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";
import "./Nav.css";

const Nav = () => {
  return (
    <div className='nav'>
      <Logo />
      <span className='right-side-nav'>
        <NavItem navItemNumber='01.' navItemName='About' />
        <NavItem navItemNumber='02.' navItemName='Experience' />
        <NavItem navItemNumber='03.' navItemName='Work' />
        <NavItem navItemNumber='04.' navItemName='Contact' />
        <ResumeButton />
      </span>
    </div>
  );
};

export default Nav;
