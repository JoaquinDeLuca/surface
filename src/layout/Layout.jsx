import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'

export default function Layout(props) {
  return (
    <>
    <Header />
    {props.children}
    <Footer />
    </>
  )
}
