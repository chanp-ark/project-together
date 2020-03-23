import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.styles.css"

const Navbar = () => {
  

  
  

  
  return (
    <header className={`navbar `}>
      <div className="container">
        <Link className="home-icon" to='/'><div>P \ T</div></Link>

        <nav className="navbar-nav">
          <ul className="navbar-ul">
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/signup'>SignUp</Link></li>
              <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
        
      </div>
    </header>
  )

  
}
export default Navbar
