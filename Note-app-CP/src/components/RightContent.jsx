import React from 'react'
import Navbar from './Navbar'
import Folder from './Folder'
import Notes from './Notes'
const RightContent = ({NewNote, setCurrentNote}) => {
  return (
    <div className='bg-gray-100 w-full h-screen'>
      <Navbar />
      <div className="main-content p-6 flex flex-col gap-6">
        <Folder /> 
        <Notes  note={NewNote} setCurrentNote={setCurrentNote}/>
      </div>
    </div>
  )
}

export default RightContent
