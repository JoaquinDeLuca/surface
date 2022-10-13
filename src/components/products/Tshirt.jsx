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
      <Link className='cardPhoto'  to={`/shoppingcart/${param._id}`}>
        <img src={param.photo} alt='tshirt'/>
      </Link>
        <div className='cardBody'>
          <div className='cardInfo'>
            <h3>{param.name}</h3>
            <p>${param.price}</p>
          </div>
          <div className='buttonAddCart' onClick={ () => addCart(param)}>
            Añadir al carrito
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pageContainer">
      <div className='productsContainer'>
        {data.map(generateCard)}
      </div>
    </div>
  )
}
