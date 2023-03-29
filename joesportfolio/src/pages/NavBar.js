import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function NavBar() {
  return (
    <div className="navbar">NavBar
    <div className="toggleButton">
    <button> </button>
    </div>
        <Link to="/"> 
    <div className="links">
        Home
        {/* <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link> */}
     </div>
         </Link>
    </div>

  )
}
