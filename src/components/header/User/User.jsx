import React from 'react';
import {useState} from 'react'
import './user.css'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css'


const User = () => {

  const [display, setDisplay] = useState('none')

  function changeDisplay(){
    if(display === 'none'){
      setDisplay('flex')
    }else{
      setDisplay('none')
    }
  }

  const userSettings = [
    <Link style={{ textDecoration: "none"}} to={"/signup"}><p className="navLinks2">Registrate</p></Link>,
    <div>Iniciar Sesion</div>,
  ]

const {totalCount} = useSelector(state => state.cart)

  return (
    <>
      <div className='userContent-img'>
        {totalCount}
        <Link to='/cart' style={{ color: "white"}}><AiOutlineShoppingCart  size='28px' className='cart'/></Link>
        <AiOutlineUser size='28px'  onClick={changeDisplay}  style={{width:'54px', borderRadius:'100%', cursor:'pointer'}} />
      </div>
      <div className='dropDown' style={{display, position: 'absolute'}}>
        {userSettings}
      </div>
    </>
  );
}

export default User;



