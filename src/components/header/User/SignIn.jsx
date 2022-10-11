import React, {useState, useEffect} from 'react';
import {useSignInMutation} from '../../../features/actions/authAPI.js'
import * as jose from 'jose'
import { useSelector, useDispatch } from 'react-redux'
import {setCredentials} from '../../../features/actions/UserStatus.js'



const SignIn = () => {
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
      }
      dispatch(setCredentials(dataUser))
    }catch(err){
      console.error(err)
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
    <form onSubmit={handleSubmit} method='post'>
      <label for='email'>Correo:</label>
      <input type='text' onChange={handleChange} id='email' placeholder='ejemplo@ejemplo.com' name='email'></input>
      <label for='password'>Contraseña:</label>
      <input type='password' onChange={handleChange}  placeholder='***' id='password' name='password'></input>
      <button type='button' onClick={handleSubmit}>Iniciar sesion!</button>
    </form>
  )
}

export default SignIn;
