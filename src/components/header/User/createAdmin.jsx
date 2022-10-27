import React, {useEffect, useState} from 'react'
import {useCreateAdminMutation} from '../../../features/actions/authAPI.js'
import './SignUp.css'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function CreateAdmin() {

  const userRole = useSelector(state => state.user.role)
  const [createAdmin] = useCreateAdminMutation()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')

  const userData = {
    userRole: userRole,
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    photo: photo,
    from: 'form'
  }

  function handleSubmit(e){
    e.preventDefault()
    
    if(name.length <= 2){
      swal({
        title: "Ingresa un nombre valido!",
        icon: "error",
      });
    }else if(lastName.length <= 2){
      swal({
        title: "Ingresa un apellido valido!",
        icon: "error",
        
      });
    }else if( email.length <= 7 ){
      swal({
        title: "Ingresa un email valido!",
        icon: "error",
        
      });
    }else if(password.length <= 5){
      swal({
        title: "Su contraseña debe tener mas de 5 caracteres!",
        icon: "error",
        
      });
    }else if(photo.length <= 8){
      swal({
        title: "Ingresa una url valida!",
        icon: "error",
      });
    }else{
      if(userRole === 'admin'){
        createAdmin(userData)
        .unwrap()
        swal({
          title: "Creaste el usuario con exito!",
          icon: "success",
          text: "Revisa tu email para verificar tu cuenta :)",
          onClose: navigate('/'),
        });
      }else{
        swal({
          title: "No eres administrador!",
          icon: "error",
          onClose: navigate('/'),
        });
      }
      e.target.reset()
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
      <h2>Crear usuario administrador:</h2>
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
      <button className='btnRegistrarse' type='submit'>Registrarme!</button>
    </form>
  )
}