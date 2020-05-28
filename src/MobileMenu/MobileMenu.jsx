import React from 'react';
import HamburgerMenu from '../Nav/HamburgerMenu';
import NavItem from '../Nav/NavItem';

import './MobileMenu.css';

const MobileMenu = ({ isMobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <div className='mobile-menu-row-1'>
        <span className='mobile-hamburger-menu'>
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            width='50px'
            height='50px'
          />
        </span>
      </div>
      <div className='mobile-menu-row-2'>
        <span className='mobile-menu-nav-item'>
          <NavItem
            navItemNumber='01.'
            navItemName='About'
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </span>
        <span className='mobile-menu-nav-item'>
          <NavItem
            navItemNumber='02.'
            navItemName='Experience'
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </span>
        <span className='mobile-menu-nav-item'>
          <NavItem
            navItemNumber='03.'
            navItemName='Work'
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </span>
        <span className='mobile-menu-nav-item'>
          <NavItem
            navItemNumber='04.'
            navItemName='Contact'
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </span>
      </div>
    </>
  );
};

export default MobileMenu;
