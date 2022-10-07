import React from 'react'

import './product.css'
import { Link } from 'react-router-dom'
import { useReadAllQuery } from '../../features/actions/capAPI'
import { useDispatch } from 'react-redux'
import { setCart, setPrice } from '../../features/Cart/CartSlice'


export default function Cap() {

const dispatch = useDispatch()

const { 
  data: caps,
  isSuccess
  
} = useReadAllQuery()

let data = []
if (isSuccess) {
  data = caps.response
}



const addCart = (item) =>{
  dispatch(setCart(item.target.id))
  dispatch(setPrice(Number(item.target.title)))
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
         <div className='buttonAddCart' title={item.price} id={item._id}  onClick={addCart}>Añadir al carrito</div>
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
