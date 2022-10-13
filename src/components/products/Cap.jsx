import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { useReadAllQuery } from '../../features/actions/capAPI'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/Cart/CartSlice'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";




export default function Cap() {

  const navigate = useNavigate()
  const userID = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  const { 
    data: caps,
    isSuccess
    
  } = useReadAllQuery()

  let data = []
  if (isSuccess) {
    data = caps.response
  }

  const addCart = (item) => {
    if(userID !== null){
      dispatch(addToCart(item))
    }else{
      swal({
        title: "Inicia sesion para agregar al carrito!",
        icon: "warning",
        buttons:{
          ok: 'Ok!',
          iniciarSesion: {
            text: "Inicia Sesion!",
            value: "singIn"
          },
        }
      }).then((value) => {
        switch (value) {
      
          case "singIn":
            navigate('/signin')
            break;
      
          default:
            console.log('');
        }
      });
    }
  }

  function generateCard(item){
    return(
      <div key={item._id} className='cardProduct'>
        <div className='imgContainer'>
          <img src={item.photo} alt='tshirt'/>
        </div>
        <div className='cardBody'>
          <h3>{item.name}</h3>
          <p className='asd'>Descripcion: {item.description}</p>
          <div className='cardData'>
            <p>Stock: {item.stock}</p>
            <p>Precio: ${item.price}</p>
          </div>
          <div className='addCart'>
          <Link style={{ textDecoration: "none"}}  to={`/shoppingcart/${item._id}`}><div className='buttonAddCart' >Ver mas</div></Link>
          <div className='buttonAddCart' onClick={() => addCart(item)}>Añadir al carrito</div>
          </div>
        </div>
      </div>
    )
  }



  return (
    <div className="container">
        {data.map(generateCard)}
    </div>
  )
}
