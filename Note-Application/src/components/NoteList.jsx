import React from 'react'
import { Search,Pencil } from 'lucide-react'
const NoteList = (note) => {//object
  //const NoteList = ({ notes }) => {
  //This is called Destructuring Props. It means: "Look inside the incoming props object, find the key named notes, and pull it out into its own separate variable."
  
  
  return (
    <div className='w-[80%]  mt-6 p-1'>
      <div className="navbar flex gap-10">
          <div className="search-container relative flex items-center w-full">
            <Search 
              size={18} 
              className="absolute left-3 text-zinc-400 pointer-events-none transition-colors peer-focus:text-zinc-900" 
            />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-100 text-zinc-900 placeholder-zinc-400 border border-transparent rounded-lg outline-none cursor-text transition-all focus:bg-white focus:border-zinc-300 focus:shadow-sm"
            />
        </div>
        <div className="profile flex items-center">
          <div className="text">Good morning, Ahil</div>
          <div className="pro-image w-[50px] h-[50px]"><img className=' rounded-full' src="https://i.pinimg.com/736x/b8/d4/9b/b8d49b88ebb79c9187d82cc8f0fe4e3a.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="Note w-full">
        <h2 className='mt-10 ml-10 font-bold text-5xl'>Notes</h2>
       <div className="notes-container w-full h-[80vh] flex flex-wrap gap-7 p-5 overflow-y-auto">
          {note.note.map((item) => (
            <div 
              key={item.id} 
              className={`note ${item.color} w-[262px] h-[230px] min-w-[260px] rounded-[32px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="description w-full flex-1">
               <textarea 
                    className="w-full h-full bg-transparent resize-none border-none outline-none text-zinc-800 placeholder-zinc-500 font-medium text-sm leading-relaxed focus:ring-0 p-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    placeholder="Type your note here..."
                    defaultValue={item.text}
                  />
               </div>
               <div className="bottom flex justify-between items-center mt-4">
                  <h4 className="date text-xs font-semibold text-zinc-700/70 tracking-wide">
                    {item.date}
                  </h4>
                  <button className="edit bg-black text-white p-2.5 rounded-full hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shadow-sm">
                    <Pencil size={16} />
                  </button>
              </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default NoteList
