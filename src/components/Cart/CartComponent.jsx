import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
import { useDispatch } from 'react-redux';
import { removeCartItem, decrease, addToCart } from '../../features/Cart/CartSlice';
import { AiOutlinePlus, AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";

const CartComponent = () => {
  const {products, totalAmout, totalCount} = useSelector(state => state.cart)
  // console.log(products)
  // console.log(totalAmout)

  // Function Remove, Add,  subtract Products
  const dispatch = useDispatch()

  const remove = (item) => {
    dispatch(removeCartItem(item))
  }

  const add = (item) => {
    dispatch(addToCart(item))
  }

  const subtract = (item) => {
    dispatch(decrease(item))
  } 


  const showProduct = (item) => {
    return(
      <div className='container1'>
        <div className='cartContainer'>
          <div className='cartImgContainer'>
            <img className='cartImg' src={item.photo} />
          </div>
          <div className='containerInfo'>
            <div className='cartInfo'>
              <div className='infoP'>
                <p>{item.name}</p>
                <p className='cartP'>${item.price} c/u</p>
              </div>

              <div className='cartAddAndDecrease'>
                <button onClick={() => add(item)} className='cartbtn'>
                  <AiOutlinePlus size="20" />
                </button>
                <p>{item.cartQuantity}</p>
                <button onClick={() => subtract(item)} className='cartbtn'>
                  <AiOutlineMinus size="20" />
                </button>
              </div>
              <button onClick={() => remove(item)}  className='cartbtnDelete'>
                <AiOutlineDelete  size="20"  /> 
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='cartContainerPrincipal'>
      {products.map(showProduct)}
      <h3 className='totalAndML'>Total: ${totalAmout}</h3>
      <p className='totalAndML'>Pagar con ML</p>
    </div>
  )
}

export default CartComponent