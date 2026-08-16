import React from 'react'
import Navbar from './Navbar'
import Folder from './Folder'
import Notes from './Notes'
const RightContent = () => {
  return (
    <div className='bg-gray-100 flex-1 h-screen overflow-y-auto'>
      <Navbar />
      <div className="main-content p-6 flex flex-col gap-6">
        <Folder /> 
        <Notes  />
      </div>
    </div>
  )
}

export default RightContent
