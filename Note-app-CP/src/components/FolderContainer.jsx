import React, { useContext } from 'react'
import { Ellipsis, FolderOpen, Pencil, Clock } from "lucide-react";
import { Outlet, useParams } from 'react-router-dom'
import { NoteContextData } from '../context/NoteContext'
const FolderContainer = () => {
  const selectedFolderId = useParams();
  const { Note } = useContext(NoteContextData);
  let NoteData = null;
  if(Note.length > 0){
    NoteData =  Note.filter((note) => note.folderId === selectedFolderId.id);
  }
  return (
    <div className='folders grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-5 mt-4'>
      {NoteData != null && NoteData.map((note) => (
        <div
          key={note.id}
          className={`folder w-full p-5 rounded-2xl ${note.color} flex flex-col gap-2 h-80 cursor-pointer transition-all hover:shadow-sm`}>
          <div className="flex flex-col items-start justify-between w-full">
            <p className="date text-xs font-medium text-slate-400 mt-1">{note.date}</p>
            <div className="title action flex items-center justify-between gap-2 w-full border-b-2 border-b-slate-300 py-2">
              <input className="folder-name flex-1 outline-none text-slate-800 text-base leading-snug bg-transparent"
                defaultValue={note.title}
                readOnly={true} />
              <div className="action shrink-0">
                <button className="action-btn p-1 rounded-lg hover:bg-gray-200 transition-all"
                // onClick={() => {
                //   setEditMode(!editMode);
                // }}
                >
                  {/* <Pencil size={15} strokeWidth={2.5} /> */}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full content h-40 overflow-hidden mt-2">
            <textarea
              className="w-full min-h-[300px] resize-none bg-transparent border-none focus:outline-none [scrollbar-width:none]"
              name="note"
              defaultValue={note.description}
              readOnly={true}
            />
          </div>
          <div className="time flex items-center gap-2 mt-2">
            <Clock size={15} color='gray' strokeWidth={2.5} />
            <p className="text-xs font-medium text-slate-400">12:30 PM, Monday</p>
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  )
}

export default FolderContainer
