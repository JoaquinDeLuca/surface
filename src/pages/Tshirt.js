import React from 'react'
import ProductTshirt from '../components/products/Tshirt'
import Banner from '../components/Banner/Banner'

export default function Tshirt() {

  return (
    <>
      <Banner title='Nuestras Remeras' subtitle='Conocé todo nuestros diseños y elegí el que más te represente' background='https://impronta.ar/wp-content/uploads/2020/10/egresados-primaria-4-1.jpg' />
      <ProductTshirt />
    </>
  )
}
