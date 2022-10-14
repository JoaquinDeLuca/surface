import React, {useState, useEffect} from 'react';
import {useSignInMutation} from '../../../features/actions/authAPI.js'
import * as jose from 'jose'
import { useDispatch } from 'react-redux'
import {setCredentials} from '../../../features/actions/UserStatus.js'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";




const SignIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [singIn] = useSignInMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userData = {
    email: email,
    password: password,
    from: 'form'
  }

    async function handleSubmit(e){
    e.preventDefault()
    try{
      const user = await singIn(userData)
      const token = user.data.response.token
      const userDecoded = jose.decodeJwt(token)
      const dataUser = {
        id: userDecoded.id,
        name: userDecoded.name,
        email: userDecoded.mail,
        photo: userDecoded.photo,
        role: userDecoded.role,
        buyer: userDecoded.buyer
      }
      dispatch(setCredentials(dataUser))
      swal({
        title: "Iniciaste sesion con exito!",
        icon: "success",
        onClose: navigate('/'),
      });
      e.target.reset()
    }catch(err){
      console.error(err)
      swal({
        title: "Sus credenciales no son validas",
        text: "Ingreso mal sus credenciales o no verifico su cuenta!",
        icon: "error",
      });
    }
    
  }

  function handleChange(e){
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <form className='containerForm' onSubmit={handleSubmit} method='post'>
      <div className='containerInput'> 
        <label className='label' for='email'>Correo</label>
        <input className='input' type='text' onChange={handleChange} id='email' placeholder='ejemplo@ejemplo.com' name='email'></input>
        <label className='label' for='password'>Contraseña</label>
        <input className='input' type='password' onChange={handleChange}  placeholder='******' id='password' name='password'></input>
      </div>
      <button className='btnRegistrarse'  type='submit' >Iniciar sesion!</button>
    </form>
  )
}

export default SignIn;
