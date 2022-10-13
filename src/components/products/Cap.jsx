import React from 'react'

import './product.css'
import { Link } from 'react-router-dom'
import { useReadAllQuery } from '../../features/actions/capAPI'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/Cart/CartSlice'


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
  dispatch(addToCart(item))
}

function generateCard(item){
  return(
        <div key={item._id} className='cardProduct'>
        <Link className='cardPhoto'  to={`/shoppingcart/${item._id}`}>
          <img src={item.photo} alt='tshirt'/>
        </Link>
          <div className='cardBody'>
            <div className='cardInfo'>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div className='buttonAddCart' onClick={ () => addCart(item)}>
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
