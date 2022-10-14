import React from 'react';
import classes from './navBar.module.css'
import NavLinks from './navLinks'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const NavMobile = () => {
  
  const [open, setOpen] = useState(false)

  function handleMenu(){
    setOpen(!open)
  }

  return (
    <nav className={classes.mobileNavigation}>
      {open === false ? <AiOutlineMenu size='30px' className={classes.Hamburguer} onClick={handleMenu}/> : <AiOutlineClose size='30px' className={classes.Hamburguer} onClick={handleMenu}/>}
      {open === true ? <NavLinks onClick={handleMenu} />: null}
    </nav>
  );
}

export default NavMobile;