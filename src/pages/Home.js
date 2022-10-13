import React from 'react'
import ProductosDestacos from '../components/Home/ProductosDestacos'
import Carousel from '../components/Home/Carousel/Carousel'
import './styles/Home.css'

const Home = () => {
    return (
        <div className='homePage'>
            <div className='homeBanner'>
                <img className='bannerBackground' src="https://media.viajando.travel/p/753eaca03c80afc514cf6ebc2ab8e09f/adjuntos/236/imagenes/000/489/0000489518/1200x675/smart/turismo-estudiantil-crisis-gasoil-nortejpg.jpg" alt="banner"/>
                <div className='bannerText'>
                    <h2 className='bannerTitle'>Seguí tu estilo</h2>
                    <p className='bannerSubtitle'>En SURFACE te damos las mejores opciones para que seas vos mismo</p>
                </div>
            </div>
            {/* <Carousel /> */}
            <ProductosDestacos />
        </div>
    )
}

export default Home