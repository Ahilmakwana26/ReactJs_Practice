import React from 'react'
import { Menu ,Search} from "lucide-react";
import userProfile from '../assets/user-profile.jpg'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='w-full mt-2 h-12 text-black p-6 flex justify-between items-center'>
      <Link to={'/'} className='text-3xl font-medium title'>MY NOTES</Link>
        <div className="search flex items-center gap-2 bg-slate-200 p-1 rounded-lg pl-2">
            <Search color='gray' className='w-5 h-5 text-gray-400'/>
            <input type="text" placeholder="Search" className="w-80 bg-transparent border-none text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      <div className="link flex items-center justify-between gap-4">
            <div className="profile flex items-center gap-6">
                <h3 className="name text-xl text-gray-800">Ahil Makwana</h3>
                <img src={userProfile} alt="User Profile" className="rounded-full w-10 h-10 " />
                <div className="menu cursor-pointer">
                    <Menu size={26}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
