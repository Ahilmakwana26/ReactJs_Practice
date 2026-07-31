import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <div className="nav">
        <div className="logo">
          Hi , ReactJs
        </div>
            <div className="link">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/product'}>Product</Link>
            </div>
      </div>
    </>
  )
}

export default Navbar
