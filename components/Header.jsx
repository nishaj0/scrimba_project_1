import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="site__header">
      <Link to="/" className="site__header-logo">#VanLife</Link>
      <nav className="site__header-nav">
         <NavLink to="host" className={({isActive}) => isActive ? "active-nav" : null }>Host</NavLink>
         <NavLink to="/about" className={({isActive}) => isActive ? "active-nav" : null }>About</NavLink>
         <NavLink to="/vans" className={({isActive}) => isActive ? "active-nav" : null }>Vans</NavLink>
      </nav>
   </header>
  )
}

export default Header