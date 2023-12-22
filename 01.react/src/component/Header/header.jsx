import React from 'react'
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <header>
        <h1>
       <FaHome />  Electrochip</h1>
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#"></a></li>
                <li><a href="#">HOME</a></li>
                <li><a href="#">HOME</a></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Header