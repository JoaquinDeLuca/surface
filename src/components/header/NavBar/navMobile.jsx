import React from 'react';
import classes from './navBar.module.css'
import NavLinks from './navLinks'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const NavMobile = () => {
  
  const [open, setOpen] = useState(false)

  function openMenu(){
    setOpen(true)
  }

  function closeMenu() {
    setOpen(false)
  }

  return (
    <nav className={classes.mobileNavigation}>
      {open === false ? <AiOutlineMenu size='30px' className={classes.Hamburguer} onClick={openMenu}/> : <AiOutlineClose size='30px' className={classes.Hamburguer} onClick={closeMenu}/>}
      {open && <NavLinks/>}
    </nav>
  );
}

export default NavMobile;