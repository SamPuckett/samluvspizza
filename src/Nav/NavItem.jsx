import React from "react";
import "./NavItem.css";

const NavItem = ({ navItemNumber, navItemName }) => {
  return (
    <div className='nav-item'>
      <span className='nav-item-number'>{navItemNumber}</span>
      <span className='nav-item-name'>{navItemName}</span>
    </div>
  );
};

export default NavItem;
