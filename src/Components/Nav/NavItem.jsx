import React from 'react';
import './NavItem.css';

const NavItem = ({ navItemNumber, navItemName, setMobileMenuOpen }) => {
  return (
    <a
      className='nav-item'
      href={`#${navItemName}`}
      onClick={() => setMobileMenuOpen(false)}
    >
      <span className='nav-item-number'>{navItemNumber}</span>
      <span className='nav-item-name'>{navItemName}</span>
    </a>
  );
};

export default NavItem;
