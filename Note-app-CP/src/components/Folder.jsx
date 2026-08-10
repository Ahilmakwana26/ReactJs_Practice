import React from 'react'
import { Ellipsis,FolderOpen } from "lucide-react";
const Folder = () => {
  return (
    <div className='bg-white text-black rounded-lg shadow-md p-6'>
      <div className="title">
        <h2 className="text-2xl font-bold">Recent Folders</h2>
        <div className="filters flex gap-9 mt-4 text-sm text-gray-500">
            <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">Today</button>
            <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">This Week</button>
            <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer">This Month</button>
        </div>
       <div className="folders grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-4">
            {/* Folder 1 */}
            <div className="folder w-62 bg-indigo-100/60 hover:bg-indigo-100 p-5 rounded-2xl flex flex-col justify-between h-40 cursor-pointer transition-all hover:shadow-sm">
              <div className="flex items-start justify-between w-full">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-600">
                  <FolderOpen size={22} />
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-black/5 transition-colors">
                  <Ellipsis size={18} />
                </button>
              </div>
              <div>
                <h3 className="folder-name font-bold text-slate-800 text-base leading-snug">Movie Review</h3>
                <p className="date text-xs font-medium text-slate-400 mt-1">12/12/2024</p>
              </div>
            </div>

            {/* Folder 2 */}
            <div className="folder w-62 bg-rose-100/60 hover:bg-rose-100 p-5 rounded-2xl flex flex-col justify-between h-40 cursor-pointer transition-all hover:shadow-sm">
              <div className="flex items-start justify-between w-full">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-600">
                  <FolderOpen size={22} />
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-black/5 transition-colors">
                  <Ellipsis size={18} />
                </button>
              </div>
              <div>
                <h3 className="folder-name font-bold text-slate-800 text-base leading-snug">Book Reviews</h3>
                <p className="date text-xs font-medium text-slate-400 mt-1">01/01/2024</p>
              </div>
            </div>
            {/* New Folder */}
            <div className="folder w-62 bg-gray-100/80 hover:bg-gray-100 p-5 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center h-40 cursor-pointer transition-all hover:shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gray-500/20 flex items-center justify-center text-gray-600">
                <FolderOpen size={22} />
              </div>
              <div>
                <h3 className="folder-name font-bold text-slate-800 text-base leading-snug mt-2">New Folder</h3>
              </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Folder
