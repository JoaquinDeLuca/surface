import React from 'react';
import { useState, useEffect } from 'react'
import './user.css'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css'
import {removeCredentials} from '../../../features/actions/UserStatus'
import {useSignOutMutation} from '../../../features/actions/authAPI'


const User = () => {

  const [signOut] = useSignOutMutation()
  const dispatch = useDispatch()
  const userID = useSelector(state => state.user.id)
  const userImg = useSelector(state => state.user.photo)
  const userName = useSelector(state => state.user.name)
  const userEmail = useSelector(state => state.user.email)
  const userRole = useSelector(state => state.user.role)
  const [display, setDisplay] = useState('none')
  const [menuOptions, setMenuOptions] = useState([<Link style={{ textDecoration: "none", height: "auto !important"}} to={"/signup"}><p className="navLinks2" style={{ margin:'none !important'}}>Registrate</p></Link>,
  <Link style={{ textDecoration: "none", height: "auto !important"}} to={"/signin"}><p className="navLinks2" style={{ margin:'none !important'}}>Inicia sesion</p></Link>])


  function changeDisplay(){
    if(display === 'none'){
      setDisplay('flex')
    }else{
      setDisplay('none')
    }
  }

  function handleCloseSession(){
    dispatch(removeCredentials())
    signOut({id: userID})
  }

  useEffect(() => {
    if(userRole === 'user'){
      setMenuOptions([
        <div>
          <p>{userName}</p>
          <p>{userEmail}</p>
        </div>,
        <p className="navLinks2" style={{ margin:'none !important'}}>Editar perfil</p>,
        <p className="navLinks2" style={{ margin:'none !important'}} onClick={handleCloseSession}>Cerrar sesion</p>
      ])
    }
    if(userRole === 'admin'){
      setMenuOptions([
      <div>
        <p>{userName}</p>
        <p>{userEmail}</p>
      </div>,
      <p className="navLinks2" style={{ margin:'none !important'}}>Editar perfil</p>,
      <p className="navLinks2" style={{ margin:'none !important'}} onClick={handleCloseSession}>Cerrar sesion</p>,
      <p className="navLinks2" style={{ margin:'none !important'}}>Crear admin</p>
    ])}

    if(userRole === null){
      setMenuOptions([<Link style={{ textDecoration: "none", height: "auto !important"}} to={"/signup"}><p className="navLinks2" style={{ margin:'none !important'}}>Registrate</p></Link>,
      <Link style={{ textDecoration: "none", height: "auto !important"}} to={"/signin"}><p className="navLinks2" style={{ margin:'none !important'}}>Inicia sesion</p></Link>])
    }
    
  },[userRole, userName, userEmail])

const {totalCount} = useSelector(state => state.cart)

  return (
    <>
      <div className='userContent-img'>
        {totalCount}
        <Link to='/cart' style={{ color: "white"}}><AiOutlineShoppingCart  size='28px' className='cart'/></Link>
        {userImg === null ? <AiOutlineUser size='28px'  onClick={changeDisplay}  style={{width:'54px', borderRadius:'100%', cursor:'pointer'}} /> : <img style={{width:'54px', height:'54px', borderRadius:'100%', cursor:'pointer'}} onClick={changeDisplay} src={userImg} alt='user'/>}
        
      </div>
      <div className='dropDown' style={{display, position: 'absolute', right:'5px'}}>
        {menuOptions}
      </div>
    </>
  );
}

export default User;



