import React from 'react'
import './NavBar.css'
import menu from './menu.png'
import User from '../User/User'
import { useState, useEffect } from 'react'

export default function NavBar() {

  const resolution = window.innerWidth;

  const [right, setRight] = useState(-150)

  useEffect(() =>{
    if(resolution > 750){
      setRight(-150)
    }

    if(resolution >= 750 && resolution <= 1250){
      setRight(-300)
    }

    if(resolution >= 1250){
      setRight('')
    }
  },[])
  



  function showMenu(){
    if (right === -150) {
      setRight(0)
    }else{
      setRight(-150)
    }

    if (right === -300) {
      setRight(0)
    }else{
      setRight(-300)
    }
  }

  return (
    <div className="navbar">
      <div className="user">
        <User/>
      </div>
      <div className="brand">
        <div className="brand-img">
        </div>
        <div className="brand-name">
          <h1>Surface</h1>
        </div>
      </div>
      <div className='menu'>
        <img className="burguer" onClick={showMenu} src={menu} alt='menu'/>
      </div>
      <div className="navLinks" style={{right}}>
        <div className="navLinks2">Home</div>
        <div className="navLinks2">Productos</div>
        <div className="navLinks2">Concurso</div>
        <div className="navLinks2">Contacto</div>
      </div>
    </div>
  )
}
