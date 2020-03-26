import React from 'react'
import { NavLink, Link } from 'react-router-dom'


import "./navbar.styles.css"

const Navbar = () => {
  
  const [toggle, setToggle] = React.useState(false)
  
  const handleClick = e => {
    e.preventDefault()
    setToggle(!toggle)
    console.log(toggle)
  }
  
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link className="home-icon" to='/'><div>P \ T</div></Link>
        <nav className="navbar-nav">
              <div>
                <li className="navbar-icon">
                  <NavLink
                    to="#"
                    onClick={e=>handleClick(e)}
                  >ICON</NavLink>
                </li>
              </div>
              <ul className="navbar-ul">
              <div className={toggle ? "navbar-others" : "navbar-others dropdown-navbar"}>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/about'>About</Link></li>
                
              </div>
              
          </ul>
        </nav>
        
      </div>
    </header>
  )

  
}
export default Navbar
