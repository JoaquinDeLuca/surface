import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { useReadAllQuery } from '../../features/actions/capAPI'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/Cart/CartSlice'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import { AiTwotoneEdit, AiOutlineDelete  } from "react-icons/ai";
import { useDeleteProductMutation } from '../../features/actions/product';
import Spinner from '../Spinner/Spinner';


export default function Cap() {

  const navigate = useNavigate()
  const userID = useSelector(state => state.user.id)
  const user   = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { 
    data: caps,
    isSuccess,
    isLoading
    
  } = useReadAllQuery()

  let data = []
  if (isSuccess) {
    data = caps.response
  }

  const addCart = (item) => {
    if(userID !== null){
      dispatch(addToCart(item))
    }else{
      swal({
        title: "Inicia sesion para agregar al carrito!",
        icon: "warning",
        buttons:{
          ok: 'Ok!',
          iniciarSesion: {
            text: "Inicia Sesion!",
            value: "singIn"
          },
        }
      }).then((value) => {
        switch (value) {
      
          case "singIn":
            navigate('/signin')
            break;
      
          default:
            console.log('');
        }
      });
    }
  }

   // delete Product
   const [deleteProduct] = useDeleteProductMutation()

   const handleDelete = (id) => {
    swal({
      title: "Estas seguro que desea Borrar el producto?",
      icon: "warning",
      buttons:{
        no: 'No',
        iniciarSesion: {
          text: "Si",
          value: "Si"
        },
      }
    }).then((value) => {
      switch (value) {
        case "Si":
          deleteProduct({id: id})
          swal({
            title: "Borraste el producto",
            icon: "success",
            buttons:{
              ok: 'Ok!'
            }
          })
          break;
        default:
          console.log('');
      }
    });
   }

function generateCard(item){
  return(
        <div key={item._id} className='cardProduct'>
        <Link className='cardPhoto'  to={`/shoppingcart/${item._id}`}>
          <img src={item.photo} alt='tshirt'/>
        </Link>
          <div className='cardBody'>
            <div className='cardInfo'>
              {/* //_____________Admin___________________ */}
            { user.role !== "user" && user.email !== null ?
                <div  style={{cursor: "pointer", color: "black" }}>
                  <Link style={{color: "black" }} to={`/editproduc/${item._id}`}> <AiTwotoneEdit size="30"/> </Link>  
                  <AiOutlineDelete  onClick={() => handleDelete(item._id)} size="30"  /> 
                </div> 
              :
                <></>
            }
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
console.log(isLoading);

  return (
    <div className="pageContainer">
    <div className='productsContainer'>
      {isLoading && <Spinner />}
      {data.map(generateCard)}
    </div>
  </div>
  )
}
