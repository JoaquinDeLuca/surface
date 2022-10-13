import React from 'react'
import { Link } from 'react-router-dom'
import './PageProduct.css'

export default function ProductsStore() {

  return (
    <>
      <div className='PageContainer'>
        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/132Q6DjZ/buzo1-removebg-preview.png'} alt='Buzos' />
            <div className=''>
              <h3>Buzos</h3>
              <button className='btn'>
                <Link className='link' to='/hoodie'>Ver más</Link>
              </button>
            </div>
        </div>

        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/NG319J1x/D-NQ-NP-715257-MLA43248628033-082020-W-removebg-preview.png'} alt='Remeras'/>
            <div>
              <h3>Remeras</h3>
              <button className='btn'>
                <Link className='link' to='/tshirt'>Ver más</Link>
              </button>
            </div>
        </div>

        <div className='CardContainer'>
            <img className='img' src={'https://i.postimg.cc/0QmyLfb8/Gorra-removebg-preview.png'} alt='Gorras'/>
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
