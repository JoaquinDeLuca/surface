import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
import { useDispatch } from 'react-redux';
import { removeCartItem, decrease, addToCart, clearCart } from '../../features/Cart/CartSlice';
import { AiOutlinePlus, AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";
import swal from 'sweetalert'
import { useItbuyerMutation } from '../../features/actions/authAPI';

const CartComponent = () => {
  const {products, totalAmout, totalCount} = useSelector(state => state.cart)
  const { email } = useSelector(state => state.user )

  const arrayProducts = useSelector( state => state.cart.products)
  // console.log(arrayProducts)

  const [itbuyer] = useItbuyerMutation()

  const clear = async() => {
    console.log("vacias carro")
    swal({
      title: "Tu compra se realizo con exito!",
      icon: "success",
      buttons:{
        ok: 'Ok!',
      }
    })

     await itbuyer({email: email}).then (res => console.log(res))
    
    dispatch(clearCart())

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
      { arrayProducts != 0 
      ? 
        products.map(showProduct) 
      :  
        <> <h2 className='cartEmpty'>Añade productos al carrito!</h2> </>
      }
      {arrayProducts == 0 ?
       <></> 
      : 
      <>
        <button className='cartbtnDelete' onClick={() => clear()} >Vaciar Carrito</button>
        <h3 className='totalAndML'>Total: ${totalAmout}</h3>
        <button className='cartbtnPay' onClick={() => clear()} >Pagar</button>
      </>
      }
      
    </div>
  )
}

export default CartComponent