import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
import { useDispatch } from 'react-redux';
import { removeCartItem, decrease, addToCart, clearCart } from '../../features/Cart/CartSlice';
import { AiOutlinePlus, AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";
import { useItbuyerMutation } from '../../features/actions/authAPI';
import { setbuyer } from '../../features/actions/UserStatus';
import { usePayMutation } from '../../features/actions/Checkout';
import Spinner from '../Spinner/Spinner';

const CartComponent = () => {
  const {products, totalAmout} = useSelector(state => state.cart)
  const { email } = useSelector(state => state.user )

  const arrayProducts = useSelector( state => state.cart.products)

  const [loading, setLoading] = useState(false)


  // clear cart
  const clear = async() => {
    dispatch(clearCart())
  }

  const [itbuyer] = useItbuyerMutation()
  const [pay] = usePayMutation()

  let productos = [];

  useEffect(()=>{
    products.forEach( item => {
      productos.push(item)
    });
  },[totalAmout])


  const toPay = async () => {
    setLoading(true)
    dispatch(setbuyer())
    await itbuyer({email: email})

    await pay({items: productos}) 
    .then(res => window.location.replace(res.data.url))

    dispatch(clearCart())
    setLoading(false)
  }


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
      <div className='container1' key={item._id}>
        <div className='cartContainer'>
          <div className='cartImgContainer'>
            <img className='cartImg' src={item.photo} alt={item.name} />
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
      { arrayProducts.length !== 0 ? 
        products.map(showProduct) 
      :  
        <h2 className='cartEmpty'>Añade productos al carrito!</h2>
      }
      {arrayProducts.length !== 0 &&
      <>
        <button className='cartbtnDelete' onClick={() => clear()} >Vaciar Carrito</button>
        <h3 className='totalAndML'>Total: ${totalAmout}</h3>
        {loading ? <Spinner text='Cargando MP...' /> : <button className='cartbtnPay' onClick={() => toPay()}>Pagar Mercado Pago</button>}
      </>
      }
    </div>
  )
}

export default CartComponent