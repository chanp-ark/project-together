import React from 'react'
import { NavLink, Link } from 'react-router-dom'


import "./navbar.styles.css"

const Navbar = () => {
  
  const [toggle, setToggle] = React.useState(true)
  
  const handleToggle = e => {
    e.preventDefault(0);
    setToggle(!toggle)
  }
  
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link className="home-icon" to='/' 
          onClick={() => {
            if (toggle === false) setToggle(!toggle)
            }
          }> <div>P \ T</div></Link>
        <nav className="navbar-nav">
          <ul className="navbar-ul">
            <li className="dropdown-icon"><Link to="#" onClick={e=>handleToggle(e)}>ICON</Link></li>
            <div className={toggle ? "navbar-others" : "dropdown-navbar"}>
              <li><Link onClick={() => setToggle(!toggle)} to='/login'>Login</Link></li>
              <li><Link onClick={() => setToggle(!toggle)} to='/projects'>Projects</Link></li>
              <li><Link onClick={() => setToggle(!toggle)} to='/about'>About</Link></li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )

  
}
export default Navbar
