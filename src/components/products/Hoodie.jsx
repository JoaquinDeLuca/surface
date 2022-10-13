import React from 'react'
import { useGetHoodieQuery } from '../../features/actions/hoodieAPI';
import './product.css'
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCart, setPrice, addToCart } from '../../features/Cart/CartSlice';

export default function Hoodie() {
  const dispatch = useDispatch()
    let params = ''
    const { 
        data: hoodie,
        isLoading, 
        isSuccess,
        
    } = useGetHoodieQuery(params)

    let data = [];

    if(isLoading){
        data = []
    }
    if(isSuccess){
        data = hoodie.response
    }
    // console.log(hoodie)
    const addCart = (item) => {
      // console.log(item)
      dispatch(addToCart(item))
    }

    const PrintHoodie = (hoodie) => {
        return(
              <div key={hoodie._id} className='cardProduct'>
              <Link className='cardPhoto'  to={`/shoppingcart/${hoodie._id}`}>
                <img src={hoodie.photo} alt='tshirt'/>
              </Link>
                <div className='cardBody'>
                  <div className='cardInfo'>
                    <h3>{hoodie.name}</h3>
                    <p>${hoodie.price}</p>
                  </div>
                  <div className='buttonAddCart' onClick={ () => addCart(hoodie)}>
                    Añadir al carrito
                  </div>
                </div>
              </div>
        )
    }

    return (
        <div className="pageContainer">
          <div className='productsContainer'>
            {data.map(PrintHoodie)}
          </div>
        </div>
    )
}
