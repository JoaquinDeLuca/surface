import React from 'react';
import classes from './navBar.module.css'
import NavLinks from './navLinks'

const NavDesktop = () => {
  return (
    <nav className={classes.desktopNavigation}>
      <NavLinks/>
    </nav>
  );
}

export default NavDesktop;
