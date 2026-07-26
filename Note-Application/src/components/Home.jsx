import {useState,React} from 'react'
import SideBar from './SideBar'
import NoteList from './NoteList';

const Home = () => {

  const [getNewNote , setNewNote] = useState([]);
  const dateString = new Date(Date.now()).toLocaleDateString('en-us',{
      month: 'long',
      day: 'numeric',
      year: 'numeric'
  });
   const noteColors = [
      { id: 1, name: 'yellow', value: 'bg-[#FFC563]' },
      { id: 2, name: 'peach', value: 'bg-[#FF9E79]' },
      { id: 3, name: 'purple', value: 'bg-[#B38BFA]' },
      { id: 4, name: 'cyan', value: 'bg-[#00C4FF]' },
      { id: 5, name: 'lime', value: 'bg-[#E2F197]' },
    ]

    const new_notes = (id) =>{
     const selectedColor = noteColors.find(color => color.id === id);
      setNewNote([...getNewNote,{date:dateString,color:selectedColor.value,Note:'New Note'}]);
    }
  return (
    <div className='p-5 flex w-full h-full'>
      
      <SideBar noteColors={noteColors} newnote={new_notes}/>
      <NoteList note ={getNewNote}/>
    </div>
  )
}

export default Home
