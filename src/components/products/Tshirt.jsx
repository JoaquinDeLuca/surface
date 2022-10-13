import React from 'react'
import {useGetTShirtQuery} from '../../features/actions/tShirtAPI'
import './product.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/Cart/CartSlice'


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
    dispatch(addToCart(item))
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
