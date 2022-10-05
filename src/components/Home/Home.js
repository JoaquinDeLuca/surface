import React from 'react'
import { useGetHoodieQuery } from '../../features/hoodieAPI'

const Home = () => {


    let params = ''
    const { 
        data: hoodie,
        isLoading,
        isSuccess,
        isError
     } = useGetHoodieQuery(params)


    filter = []
    if(isLoading){
        filter = []
    }else if(isSuccess){
        filter = hoodie.response
        if (filter === []) {
            filter = []
        }
    }

    return (
        <div>Inicio</div>
    )
}

export default Home