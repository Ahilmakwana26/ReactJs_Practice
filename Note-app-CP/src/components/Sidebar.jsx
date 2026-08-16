import React, { useState,useContext } from 'react';
import { Plus, Calendar, Archive, Trash2, Sparkles } from 'lucide-react';
import { NoteContextData } from '../context/NoteContext';

const Sidebar = () => {
  const { noteColors,addNewNote,folderColors,addNewFolder } = useContext(NoteContextData);
  const [NoteTheme,ShowNoteTheme] = useState(false);
  const [FolderTheme,ShowFolderTheme] = useState(false);

  const handleShowNoteTheme = () =>{
    ShowNoteTheme(!NoteTheme);
  }
  const handleShowFolderTheme = () =>{
    ShowFolderTheme(!FolderTheme);
  }

  return (
    <aside className="bg-slate-50 border-r border-slate-200/80 w-64 h-screen p-6 flex flex-col justify-between select-none">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-200">
            A
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">AHEXX</h1>
        </div>

        <nav className="flex flex-col gap-2">
            <button onClick={handleShowNoteTheme} className="cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors">
                    <Plus className="w-4 h-4 text-slate-400" />
                    <span>Add New {NoteTheme}</span>
            </button>
            <div className={`flex flex-col ml-1.5 gap-3 transition-all duration-300 ease-in-out origin-top ${NoteTheme ? 'opacity-100 max-h-[300px] scale-100' : 'opacity-0 max-h-0 scale-95 pointer-events-none overflow-hidden'}`}>
            {noteColors.map((color)=>(
              <button
              key={color.id}
              className={`w-6 h-6 rounded-full ${color.value} cursor-pointer hover:scale-90 active:scale-90 shadow-sm transition-transform`}
              onClick={()=>addNewNote(color.id)}
              >
              </button>
            ))}
            </div>
            <button onClick={handleShowFolderTheme} className="cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors">
                    <Plus className="w-4 h-4 text-slate-400" />
                    <span>Add New Folder</span>
            </button>
            <div className={`flex flex-col ml-1.5 gap-3 transition-all duration-300 ease-in-out origin-top ${FolderTheme ? 'opacity-100 max-h-[400]' : 'opacity-0 max-h-0 scale-95 pointer-events-none overflow-hidden' }`}>
              {folderColors.map((color)=>(
                <button
                key={color.id}
                className={`w-6 h-6 rounded-full ${color.cardBg} cursor-pointer hover:scale-90 active:scale-90 shadow-sm transition-transform` }
                onClick={()=>addNewFolder(color.id)}
                >
                
                </button>
              ))}
            </div>
          <a
            href="#calendar"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Calendar</span>
          </a>

          <a
            href="#archive"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            <Archive className="w-4 h-4 text-slate-400" />
            <span>Archive</span>
          </a>

          <a
            href="#trash"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            <Trash2 className="w-4 h-4 text-slate-400" />
            <span>Trash</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;