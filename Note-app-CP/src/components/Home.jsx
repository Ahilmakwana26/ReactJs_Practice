import React, { useState } from 'react'
import Sidebar from './Sidebar'
import RightContent from './RightContent'
const Home = () => {

  const [currentNote , setCurrentNote] = useState([]);
  const date = new Date(Date.now()).toLocaleDateString('en-us',{
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        Time:'numeric'
    });;
   const noteColors = [
        { id: 1, name: 'yellow', value: 'bg-[#FFC563]' },
        { id: 2, name: 'peach', value: 'bg-[#FF9E79]' },
        { id: 3, name: 'purple', value: 'bg-[#B38BFA]' },
        { id: 4, name: 'cyan', value: 'bg-[#00C4FF]' },
        { id: 5, name: 'lime', value: 'bg-[#E2F197]' },
      ]

  const handleadd = (id) =>{
    //let data = noteColors.filter((color) => color.id === id); //it return array

    let data = noteColors.find((color)=> color.id === id);//it return object
   setCurrentNote(prev => [...prev, {id:data.id, title:'', color:data.value, date:date}])

  }
  return (
    <div className='flex items-center gap-1'>
      <Sidebar colors={noteColors} note={handleadd} />
      <RightContent NewNote={currentNote} setCurrentNote={setCurrentNote} />
    </div>
  )
}

export default Home
