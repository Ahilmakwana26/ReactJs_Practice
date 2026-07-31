import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav flex justify-between py-4 px-7 bg-blue-400 text-amber-50">
        <div className="logo font-bold text-3xl uppercase">Advanced R</div>
        <div className="link flex gap-4">
            {/* <a href="/"  className='font-bold text-xl'>Home</a>
            <a href="/about" className='font-bold text-xl'>About</a>
            <a href="/service" className='font-bold text-xl'>Service</a>
            <a href="/project" className='font-bold text-xl'>Projects</a> */}
            <Link to={'/'} >Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/service'}>Service</Link>
            <Link to={'/project'}>Projects</Link>
            <Link to={'/courses'}>Courses</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
