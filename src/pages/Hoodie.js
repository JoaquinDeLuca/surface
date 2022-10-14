import React from 'react'
import ProductHoodie from '../components/products/Hoodie'
import Banner from '../components/Banner/Banner'

export default function Hoodie() {
  return (
    <>
      <Banner title='Nuestros Hoodies' subtitle='Conocé todo nuestros diseños y elegí el que más te represente' background='https://www.hoodie-egresados.com/web/images/buzos.png' />
      <ProductHoodie />
    </>
  )
}
