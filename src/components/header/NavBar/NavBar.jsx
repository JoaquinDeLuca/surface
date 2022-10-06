import React from 'react'
import './NavBar.css'
import User from '../User/User'
import NavDesktop from './navDesktop'
import NavMobile from './navMobile'

export default function NavBar() {

  return (
    <div className="navbar">
      <NavDesktop/>
      <NavMobile/>
      <div className="brand">
        <div className="brand-img">
        </div>
        <div className="brand-name">
          <h1>Surface</h1>
        </div>
      </div>
      <div className="user">
        <User/>
      </div>
    </div>
  )
}
