import React from 'react'
import { useGetHoodieQuery } from '../../features/actions/hoodieAPI';
import './product.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/Cart/CartSlice';
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import { AiTwotoneEdit, AiOutlineDelete  } from "react-icons/ai";
import { useDeleteProductMutation } from '../../features/actions/product';

export default function Hoodie() {

  const navigate = useNavigate()
  const userID = useSelector(state => state.user.id)
  const user   = useSelector(state => state.user)
  console.log(user)
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

    const PrintHoodie = (hoodie) => {
        return(
              <div key={hoodie._id} className='cardProduct'>
              <Link className='cardPhoto'  to={`/shoppingcart/${hoodie._id}`}>
                <img src={hoodie.photo} alt='tshirt'/>
              </Link>
                <div className='cardBody'>
                  <div className='cardInfo'>
                  {/* //_____________Admin___________________ */}
                  { user.role !== "user" && user !== null ?
                      <div  style={{cursor: "pointer", color: "black" }}>
                      <Link  style={{color: "black" }} to={`/editproduc/${hoodie._id}`}> <AiTwotoneEdit size="30"/> </Link>  
                        <AiOutlineDelete onClick={() => handleDelete(hoodie._id)} size="30"  /> 
                      </div> 
                    :
                      <></>
                  }
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
