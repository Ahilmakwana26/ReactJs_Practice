import React from 'react'
import { Menu ,Search} from "lucide-react";

const Navbar = () => {
  return (
    <div className='w-full h-15 text-black p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold title'>MY NOTES</h1>
      <div className="link flex items-center gap-4">
            <div className="search flex items-center gap-2">
               <Search />
                <input type="text" placeholder="Search..." className="bg-gray-700 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="profile flex items-center gap-2">
                <h3 className="name">Ahil Makwana</h3>
                <img src="" alt="" className="rounded-full w-10 h-10" />
                <div className="menu">
                    <Menu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
