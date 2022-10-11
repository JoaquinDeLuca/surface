import React, {useEffect, useState} from 'react'
import {useAddUserSignUpMutation} from '../../../features/actions/authAPI.js'

export default function SignUp() {

  const [singUp] = useAddUserSignUpMutation()

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')

  const userData = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    photo: photo,
    from: 'form'
  }

  function handleSubmit(e){
    e.preventDefault()
    singUp(userData)
      .unwrap()
      .then( res => console.log(res) )
      .catch( err => console.error(err) )
  }

  function handleChange(e){
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'photo':
        setPhoto(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
    
      default:
        break;
    }
  }

  return (
    <form actions='' onSubmit={handleSubmit} method='post'>
      <label for='name'>Nombre:</label>
      <input type='text' onChange={handleChange} id='name' placeholder='...' name='name'></input>
      <label for='lastName'>Apellido:</label>
      <input type='text' onChange={handleChange} id='lastName' placeholder='...' name='lastName'></input>
      <label for='email'>Correo:</label>
      <input type='text' onChange={handleChange} id='email' placeholder='ejemplo@ejemplo.com' name='email'></input>
      <label for='password'>Contraseña:</label>
      <input type='password' onChange={handleChange}  placeholder='***' id='password' name='password'></input>
      <label for='photo'>foto URL:</label>
      <input type='text' onChange={handleChange}  placeholder='***' id='photo' name='photo'></input>
      <button type='button' onClick={handleSubmit}>Registrarme!</button>
    </form>
  )
}
