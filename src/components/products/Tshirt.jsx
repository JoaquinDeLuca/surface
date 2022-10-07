import React from 'react'
import {useGetTShirtQuery} from '../../features/actions/tShirtAPI'
import './product.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCart, setPrice } from '../../features/Cart/CartSlice'


export default function Tshirt() {
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

  const addCart = (item) =>{
    dispatch(setCart(item.target.id))
    dispatch(setPrice(Number(item.target.title)))
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
         <div className='buttonAddCart' title={param.price} id={param._id}  onClick={addCart}>Añadir al carrito</div>
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
