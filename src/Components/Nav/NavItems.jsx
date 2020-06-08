import React from "react";
import NavItem from "./NavItem";
import "./NavItems.css";

const NavItems = () => {
  return (
    <div className='nav-items'>
      <NavItem navItemNumber='01.' navItemName='About' />
      <NavItem navItemNumber='02.' navItemName='Experience' />
      <NavItem navItemNumber='03.' navItemName='Work' />
      <NavItem navItemNumber='04.' navItemName='Contact' />
    </div>
  );
};

export default NavItems;
