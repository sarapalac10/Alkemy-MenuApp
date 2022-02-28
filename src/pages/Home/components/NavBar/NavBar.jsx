import React from 'react'
import { BiFoodMenu  } from "react-icons/bi";
import { GiCookingGlove } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <div className='nav-container'>
        <div className='nav-container'>
            <BiFoodMenu className='icon-title' />
            <Link to="/home" className='nav-link'>Full Recipes</Link>
        </div>
        <div className='nav-container'>
            <GiCookingGlove className='icon-title' />
            <a href="#menudaily" className='nav-link'>Daily Menu</a>
        </div>
    </div>
  )
}

export default NavBar;