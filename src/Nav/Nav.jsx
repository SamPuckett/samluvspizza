import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import ResumeButton from "./ResumeButton";
import HamburgerMenu from "./HamburgerMenu";
import "./Nav.css";

const Nav = () => {
  return (
    <div className='nav'>
      <Logo />
      <NavItems />
      <ResumeButton />
      <HamburgerMenu width='50px' height='50px' />
    </div>
  );
};

export default Nav;
