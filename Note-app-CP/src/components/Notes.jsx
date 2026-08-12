import React, { useEffect, useState } from 'react'
import { Ellipsis, FolderOpen, Pencil, Clock } from "lucide-react";


const Notes = ({ note,setCurrentNote }) => {
    
    const updateNote = (title,id) => {
        setCurrentNote(prev =>
            prev.map((note)=>
            note.id === id ? {...note, title:title} : note)
        )
    }
    useEffect(function(){
        console.log('user entering title of note...');
    },[])
    return (
        <div className='bg-white text-black rounded-lg shadow-md p-6'>
            <div className="title">
                <h2 className="text-2xl font-bold">My Notes</h2>
                <div className="filters flex gap-9 mt-4 text-sm text-gray-500">
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">Today</button>
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">This Week</button>
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer">This Month</button>
                </div>
                <div className="folders w-full flex gap-5  mt-4">
                    {/* apply map on notes */}
                    {/* Note 1 */}
                    {note.map((note) => (
                        <div
                            key={note.id}
                            className={`folder w-62 p-5 rounded-2xl ${note.color} flex flex-col gap-2 h-80 cursor-pointer transition-all hover:shadow-sm`}>
                            <div className="flex flex-col items-start justify-between w-full">
                                <p className="date text-xs font-medium text-slate-400 mt-1">{note.date}</p>
                                <div className="title action flex items-center justify-between gap-2 w-full border-b-2 border-b-slate-300 py-2">
                                    <input className="folder-name w-70 outline-none text-slate-800 text-base leading-snug" onChange={(e) => {
                                        let title = e.target.value;
                                        updateNote(title,note.id)
                                    }} value={note.title} />
                                    <div className="action w-30">
                                        <Pencil size={15} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full content h-40 overflow-hidden mt-2">
                                <textarea
                                    className="w-full min-h-[300px] resize-none bg-transparent border-none focus:outline-none [scrollbar-width:none]"
                                    name="note"
                                    defaultValue="Write your note here."
                                />
                            </div>
                            <div className="time flex items-center gap-2 mt-2">
                                <Clock size={15} color='gray' strokeWidth={2.5} />
                                <p className="text-xs font-medium text-slate-400">12:30 PM, Monday</p>
                            </div>
                        </div>
                    ))}

                    {/* New Note */}
                    <div className="folder w-50 bg-gray-100/60 hover:bg-gray-100 p-5 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center h-40 cursor-pointer transition-all hover:shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-gray-500/20 flex items-center justify-center text-gray-600">
                            <Pencil size={17} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="folder-name font-bold text-slate-800 text-base leading-snug mt-2">New Note</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Notes
