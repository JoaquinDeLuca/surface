import React from 'react'
import { useSelector } from 'react-redux'

const CartComponent = () => {
    const {items, totalAmount} = useSelector(state => state.cart)
  return (
    <div>Carrito</div>
  )
}

export default CartComponent