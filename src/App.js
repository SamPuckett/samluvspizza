import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import MobileMenu from "./MobileMenu/MobileMenu";
import Body from "./Body/Body";
import Nav from "./Nav/Nav";

import "./App.css";

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const transition = useTransition(isMobileMenuOpen, null, {
    from: {
      transform: "translate3d(100%,0px,0px)"
    },
    enter: {
      transform: "translate3d(0px,0px,0px)"
    },
    leave: {
      transform: "translate3d(100%,0px,0px)"
    }
  });

  return (
    <div>
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
    </div>
  );
};

export default App;
