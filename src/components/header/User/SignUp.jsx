import React, {useEffect, useState} from 'react'
import {useAddUserSignUpMutation} from '../../../features/actions/authAPI.js'
import './SignUp.css'

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
    <form className='containerForm' actions='' onSubmit={handleSubmit} method='post'>
      <h2>Registrarse</h2>
      <div className='containerInput'>
        <label className='label' for='name'>Nombre</label>
        <input className='input' type='text' onChange={handleChange} id='name' placeholder='Juan' name='name'></input>
        <label className='label' for='lastName'>Apellido</label>
        <input className='input' type='text' onChange={handleChange} id='lastName' placeholder='Perez' name='lastName'></input>
        <label className='label' for='email'>Correo</label>
        <input className='input' type='text' onChange={handleChange} id='email' placeholder='ejemplo@ejemplo.com' name='email'></input>
        <label className='label' for='password'>Contraseña</label>
        <input className='input' type='password' onChange={handleChange}  placeholder='******' id='password' name='password'></input>
        <label className='label' for='photo'>foto URL</label>
        <input className='input' type='text' onChange={handleChange}  placeholder='https://...' id='photo' name='photo'></input>
      </div>
      <button className='btnRegistrarse' type='button' onClick={handleSubmit}>Registrarme!</button>
    </form>
  )
}
