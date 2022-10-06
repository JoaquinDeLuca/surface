import React from 'react'
import { useGetHoodieQuery } from '../../features/hoodieAPI';
import './product.css'
import { Link, useParams } from 'react-router-dom';

export default function Hoodie() {

    let params = ''
    const { 
        data: hoodie,
        isLoading, 
        isSuccess,
        isError
    } = useGetHoodieQuery(params)

    let data = [];

    if(isLoading){
        data = []
    }
    if(isSuccess){
        data = hoodie.response
    }
    // console.log(hoodie)


    const PrintHoodie = (hoodie) => {
        return(
            <div key={hoodie._id} className='cardProduct'>
              <div className='imgContainer'>
                <img src={hoodie.photo} alt='tshirt'/>
              </div>
              <div className='cardBody'>
                <h3>{hoodie.name}</h3>
                <p className='p'>Descripcion: {hoodie.description}</p>
                <div className='cardData'>
                  <p>Stock: {hoodie.stock}</p>
                  <p>Precio: ${hoodie.price}</p>
                </div>
                <div className='addCart'>
                  <div>Futuro select</div>
                  <Link style={{ textDecoration: "none"}}  to={`/shoppingcart/${hoodie._id}`}><div className='buttonAddCart'>Añadir al carrito</div></Link>
                </div>
              </div>
            </div>
        )
    }

    return (
        <div className="container">
            {data.map(PrintHoodie)}
        </div>
    )
}
