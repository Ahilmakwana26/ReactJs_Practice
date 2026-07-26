import {useState,React} from 'react';
// Assuming these are from lucide-react based on your previous snippet
import { Plus, Mail, Grip, Tag, Settings } from 'lucide-react'; 
function Sidebar({noteColors,newnote}) {
    const [isOpen, setIsOpen] = useState(false);

    const AddNote = () =>{
        setIsOpen(!isOpen);
      }

  const colorArr = ['bg-[#FFC563]','bg-[#FF9E79]','bg-[#E2F197]'];
  return (
    <div className='w-[15%] min-w-[200px] h-[100vh] flex flex-col gap-10 bg-zinc-50 border-r border-zinc-200 p-6 select-none'>
      {/* Logo Section */}
      <div className="log text-3xl font-extrabold text-zinc-900 tracking-tight">
        Docket
      </div>
      
      {/* Add Button Section */}
      <div className="add flex flex-col gap-3.5">
        <button onClick={AddNote} className="flex items-center justify-center bg-black text-amber-50 rounded-full w-10 h-10 hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shadow-sm">
          <Plus size={20} />
        </button>

        <div className={`flex flex-col ml-1.5 gap-3 transition-all duration-300 ease-in-out origin-top ${
              isOpen ? 'opacity-100 max-h-[300px] scale-100' : 'opacity-0 max-h-0 scale-95 pointer-events-none overflow-hidden'
            }`}
          >
            {noteColors.map((color)=>(
              <button
              key={color.id}
              className={`w-6 h-6 rounded-full ${color.value} cursor-pointer hover:scale-110 active:scale-90 shadow-sm transition-transform`}
              onClick={()=> newnote(color.id)}
              aria-label={`Add ${color.name} note`}
             ></button>
            ))}
               
          </div>      
      </div>
      
      {/* Navigation Actions */}
      <div className="actions flex flex-col gap-2">
        <button className='flex items-center w-full px-3 py-2.5 font-medium rounded-lg hover:bg-zinc-200/60 hover:text-zinc-900 active:bg-zinc-200 transition-colors cursor-pointer group'>
          <Mail size={20} className=" group-hover:text-zinc-900 transition-colors" /> 
          <span className='ml-3'>Inbox</span>
        </button>
        
        <button className='flex items-center w-full px-3 py-2.5 font-medium rounded-lg hover:bg-zinc-200/60 hover:text-zinc-900 active:bg-zinc-200 transition-colors cursor-pointer group'>
          <Grip size={20} className=" group-hover:text-zinc-900 transition-colors" /> 
          <span className='ml-3'>Category</span>
        </button>
        
        <button className='flex items-center w-full px-3 py-2.5  font-medium rounded-lg hover:bg-zinc-200/60 hover:text-zinc-900 active:bg-zinc-200 transition-colors cursor-pointer group'>
          <Tag size={20} className=" group-hover:text-zinc-900 transition-colors" />  
          <span className='ml-3'>Tag</span>
        </button>
        
        <button className='flex items-center w-full px-3 py-2.5  font-medium rounded-lg hover:bg-zinc-200/60 hover:text-zinc-900 active:bg-zinc-200 transition-colors cursor-pointer group mt-auto'>
          <Settings size={20} className=" group-hover:text-zinc-900 transition-colors" /> 
          <span className='ml-3'>Settings</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;