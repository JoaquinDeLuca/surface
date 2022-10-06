import React from 'react'

import './product.css'
import { Link } from 'react-router-dom'
import { useReadAllQuery } from '../../features/actions/capAPI'


export default function Cap() {


const { 
  data: caps,
  isSuccess
  
} = useReadAllQuery()

let data = []
if (isSuccess) {
  data = caps.response
}

console.log(data)



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
          <div>Futuro select</div>
          <Link style={{ textDecoration: "none"}}  to={`/shoppingcart/${item._id}`}><div className='buttonAddCart'>Añadir al carrito</div></Link>
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
