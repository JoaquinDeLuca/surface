import React from 'react'
import Layout from '../layout/Layout'
import ProductosDestacos from '../components/Home/ProductosDestacos'
import Carousel from '../components/Home/Carousel/Carousel'

const Home = () => {
    return (
        <Layout>
            <Carousel />
            <ProductosDestacos />
        </Layout>
    )
}

export default Home