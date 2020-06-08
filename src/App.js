import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Body from './Components/Body/Body';
import AboutMe from './Components/AboutMe/AboutMe';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Projects from './Components/Projects/Projects';
import Project2 from './Components/Projects/Project2';
import Project3 from './Components/Projects/Project3';
import Project4 from './Components/Projects/Project4';
import MoreProjects from './Components/MoreProjects/MoreProjects';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';

import './App.css';

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const transition = useTransition(isMobileMenuOpen, null, {
    from: {
      transform: 'translate3d(100%,0px,0px)',
    },
    enter: {
      transform: 'translate3d(0px,0px,0px)',
    },
    leave: {
      transform: 'translate3d(100%,0px,0px)',
    },
  });

  return (
    <div className='main-container-mobile'>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className='mobile-menu'>
              <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </animated.div>
          )
      )}
      <Nav
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {/* <LeftMenu /> */}
      {/* <RightMenu /> */}
      <Body />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Project2 />
      <Project3 />
      <Project4 />
      <MoreProjects />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default App;
