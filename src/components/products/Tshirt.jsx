import React from 'react'
import {useGetTShirtQuery} from '../../features/actions/tShirtAPI'
import './product.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/Cart/CartSlice'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";


export default function Tshirt() {

  const navigate = useNavigate()
  const userID = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  let query = ''

  const {
    data: shirts,
    isSuccess,
  } = useGetTShirtQuery(query)

  let data = []

  if(isSuccess){
    data = shirts.response
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

  function generateCard(param){
    return(
      <div key={param._id} className='cardProduct'>
        <div className='imgContainer'>
          <img src={param.photo} alt='tshirt'/>
        </div>
        <div className='cardBody'>
          <h3>X nombre</h3>
          <p className='asd'>Descripcion: {param.description}</p>
          <div className='cardData'>
            <p>Stock: {param.stock}</p>
            <p>Precio: ${param.price}</p>
          </div>
          <div className='addCart'>
            <div>Futuro select</div>
            <Link style={{ textDecoration: "none"}}  to={`/shoppingcart/${param._id}`} ><div className='buttonAddCart' >Ver mas</div></Link>
         <div className='buttonAddCart' onClick={() => addCart(param)}>Añadir al carrito</div>
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
