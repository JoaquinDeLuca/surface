import React from 'react'
import { Link } from 'react-router-dom'
import './PageProduct.css'

export default function ProductsStore() {

  return (
    <>
      <div className='PageContainer'>
        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/bvZmzn5v/Mi-proyecto.png'} alt='Buzos' />
            <div className=''>
              <h3>Buzos</h3>
              <button className='btn'>
                <Link className='link' to='/hoodie'>Ver más</Link>
              </button>
            </div>
        </div>

        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/Ssm1kd5K/remera5-300x330.png'} alt='Remeras'/>
            <div>
              <h3>Remeras</h3>
              <button className='btn'>
                <Link className='link' to='/tshirt'>Ver más</Link>
              </button>
            </div>
        </div>

        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/VNZwZ2SV/gorra21-removebg-preview.png'} alt='Gorras'/>
            <div>
              <h3>Gorras</h3>
              <button className='btn'>
                <Link className='link' to='/cap'>Ver más</Link>
              </button>
            </div>
        </div>
      </div>
    </>
  )
}
