import React from 'react'
import { useGetHoodieQuery } from '../../features/hoodieAPI'

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
    console.log(hoodie)


    const PrintHoodie = (hoodie) => {
        return (
            <div key={hoodie._id} className='cardProduct'>
              <img src={hoodie.photo} alt='Hoodie'/>
              <div className='cardBody'>
                <h3>X nombre</h3>
                <p>Descripcion: ${hoodie.decription}</p>
                <p>Precio: ${hoodie.price}</p>
                <p>Stock: {hoodie.stock}</p>
                <div className='addCart'>
                  <div>Futuro select</div>
                  <div>Añadir al carrito</div>
                </div>
              </div>
            </div>
          )
    }

    return (
        <>
            {data.map(PrintHoodie)}
        </>
    )
}
