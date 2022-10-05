import React from 'react'
import { useGetHoodieQuery } from '../../features/hoodieAPI'
import PrintProduct from './PrintProduct'

const HomePage = () => {


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

    return (
        <>
            <h2 className='h3'>Productos Destacados</h2>
            <div className='container'>
                {data.slice(1,5).map( (hoodies, index )=> <PrintProduct className={index %2 === 0 ? 'normal' : 'reverse'} key={hoodies.price} data={hoodies} /> ) }
            </div>
        </>
    )
}

export default HomePage