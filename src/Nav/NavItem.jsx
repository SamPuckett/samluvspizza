import React from "react";
import "./NavItem.css";

const NavItem = ({ navItemNumber, navItemName }) => {
  return (
    <a className='nav-item' href={`#${navItemName}`}>
      <span className='nav-item-number'>{navItemNumber}</span>
      <span className='nav-item-name'>{navItemName}</span>
    </a>
  );
};

export default NavItem;
