import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.styles.css"

const NavbarDesktop = () => {
  return (
    <header className={"navbar"}>
      <div className="navbar-container">
        <Link className="home-icon" to='/'><div>P \ T</div></Link>
        <nav className="navbar-nav">
          <ul className="navbar-ul">
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><a></a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  )

  
}
export default NavbarDesktop
