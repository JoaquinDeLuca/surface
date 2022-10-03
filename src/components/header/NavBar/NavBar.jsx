import React from 'react'
import { Navbar } from 'flowbite-react'
import User from '../User/User'

export default function NavBar() {
  return (
    <Navbar
    fluid={false}
    rounded={true}
    className=''
  >
    <Navbar.Brand href="https://flowbite.com/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Surface Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Surface
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <User/>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true} 
        className="text-red-400"
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Productos
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Concurso
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Contacto
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}
