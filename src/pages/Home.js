import React from 'react'
import ProductosDestacos from '../components/Home/ProductosDestacos'
import Carousel from '../components/Home/Carousel/Carousel'
import Banner from '../components/Banner/Banner'
import './styles/Home.css'
import { AiFillEdit, AiOutlineShoppingCart, AiOutlineDropbox } from "react-icons/ai";

const Home = () => {
    return (
        <div className='homePage'>
            <Banner title='Seguí tu estilo' subtitle='En SURFACE te damos las mejores opciones para que seas vos mismo' background='https://media.viajando.travel/p/753eaca03c80afc514cf6ebc2ab8e09f/adjuntos/236/imagenes/000/489/0000489518/1200x675/smart/turismo-estudiantil-crisis-gasoil-nortejpg.jpg'/>
            {/* <Carousel /> */}
            <div className='calidad'>                
                <h2>Calidad garantizada</h2>
                <p>Trabajamos con materiales de primera calidad, para que la confección de tus prendas sean más duraderas y fiables</p>
                <div className='galeriaContainer'>
                    <img src="http://www.dasmasegresados.com.ar/wp-content/uploads/2021/01/2.jpg" alt=""/>
                    <img src="http://www.dasmasegresados.com.ar/wp-content/uploads/2021/01/4.jpg" alt=""/>
                    <img src="http://www.dasmasegresados.com.ar/wp-content/uploads/2021/01/1.jpg" alt=""/>
                </div>
            </div>
            <div className='rutaDeCompra'>
                <h3>¿Por qué elegir SURFACE?</h3>
                <h2>¿Qué hacemos?</h2>
                <div className='rutaDeCompraIcons'>
                    <div className='boxIcon'>
                        <AiFillEdit className='icon' size='80'/>
                        <h4>Diseños personalizados</h4>
                    </div>
                    <div className='boxIcon'>
                        <AiOutlineShoppingCart className='icon' size='80'/>
                        <h4>Distintos medios de pago</h4>
                    </div>
                    <div className='boxIcon'>
                        <AiOutlineDropbox className='icon' size='80'/>
                        <h4>Envío gratis</h4>
                    </div>
                </div>
            </div>
            <ProductosDestacos />
        </div>
    )
}

export default Home