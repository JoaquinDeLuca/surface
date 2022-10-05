import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsStore() {

  return (
    <>
      <div className=''>
        <div className=''>
            <img alt='Buzos'/>
            <div>
              <p>Nombre</p>
              <p>Descripcion</p>
              <Link to='/hoodie'><p>Ver buzos</p></Link>
            </div>
        </div>

        <div className=''>
            <img alt='remeras'/>
            <div>
              <p>Nombre</p>
              <p>Descripcion</p>
              <Link to='/tshirt'><p>Ver Remeras</p></Link>
            </div>
        </div>

        <div className=''>
            <img alt='Gorras'/>
            <div>
              <p>Descripcion</p>
              <Link to='/cap'><p>Ver Gorras</p></Link>
            </div>
        </div>
      </div>
    </>
  )
}
