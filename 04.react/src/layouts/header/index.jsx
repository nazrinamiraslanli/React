import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"

function Header() {
  return (
    <div id="header">
        <div className="container">
            <div className="header">
                <h1>Header</h1>
                <nav>
                    <ul>
                    <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header