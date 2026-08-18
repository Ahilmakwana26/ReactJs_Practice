import React, { useContext, useEffect } from 'react'
import { Ellipsis, FolderOpen } from "lucide-react";
import { NoteContextData } from '../context/NoteContext';
import { NavLink, useNavigate } from 'react-router-dom';

let timer;
const Folder = () => {
  const { Folder, setFolder, updateFolder } = useContext(NoteContextData);
  let navigate = useNavigate();


  let storedFolder = JSON.parse(localStorage.getItem('folder'));
  useEffect(function () {
    if (storedFolder) {
      setFolder(storedFolder);
    }
  }, [])
  return (
    <div className='bg-white text-black rounded-lg shadow-md p-6'>
      <div className="title">
        <h2 className="text-2xl font-bold">Recent Folders</h2>
        <div className="filters flex gap-9 mt-4 text-sm text-gray-500">
          <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">Today</button>
          <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">This Week</button>
          <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer">This Month</button>
        </div>
        <div className="folders grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
          {/* Folder 1 */}
          {Folder.length > 0 && Folder.map((folder) => (

            <NavLink to={`/folder/${folder.id}`}
              key={folder.id}
              // className={`folder w-full ${folder?.folder?.cardBg} ${folder?.folder?.cardHover} p-5 rounded-2xl flex flex-col justify-between h-40 cursor-pointer transition-all hover:shadow-sm`}
              className={({isActive}) => `folder w-full ${folder?.folder?.cardBg} ${isActive ? "ring-2 ring-blue-500" : ""} ${folder?.folder?.cardHover} p-5 rounded-2xl flex flex-col justify-between h-40 cursor-pointer transition-all hover:shadow-sm`}
            >
              <div className="flex items-start justify-between w-full">
                <div className={`w-10 h-10 rounded-xl ${folder?.folder?.iconBg} flex items-center justify-center ${folder?.folder?.iconColor}`}>
                  <FolderOpen size={22} />
                </div>
                <button
                  className={`text-slate-400 ${folder?.folder?.ellipsisHover} p-1 rounded-lg hover:bg-black/5 transition-colors`}>
                  <Ellipsis size={18} />
                </button>
              </div>
              <div>
                <input className="folder-name flex-1 outline-none text-slate-800 text-base leading-snug bg-transparent" onChange={(e) => {
                  let title = e.target.value;
                  updateFolder(title, folder.id)
                }} value={folder.title} />
                <p className="date text-xs font-medium text-slate-400 mt-1">12/12/2024</p>
              </div>
            </NavLink>
          ))}


          {/* New Folder */}
          <div className="folder w-full bg-gray-100/80 hover:bg-gray-100 p-5 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center h-40 cursor-pointer transition-all hover:shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-gray-500/20 flex items-center justify-center text-gray-600">
              <FolderOpen size={22} />
            </div>
            <div>
              <h3 className="folder-name font-bold text-slate-800 text-base leading-snug mt-2">New Folder</h3>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Folder
