import React, { useContext, useState } from 'react'
import { NoteContextData } from '../context/NoteContext';
import { Clock, RotateCcw, Trash2, Ellipsis } from 'lucide-react';

const Trash = () => {
    const { Note, setNote,handleRestore,handlePermanentDelete,activeMenuId,setActiveMenuId } = useContext(NoteContextData);
    const deletedNotes = Note.filter(note => note.deleted_at !== null);

    return (
        <div className='bg-white text-black rounded-lg shadow-md p-6'>
            <div className="title">
                <h2 className="text-2xl font-bold text-red-400">Trash</h2>
                <p className="text-sm text-gray-500 mt-1">Notes here will be permanently deleted if you choose to do so.</p>
                
                <div className="folders grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-6">
                    {deletedNotes.length === 0 ? (
                        <div className="col-span-full py-20 text-center text-gray-400">
                            <Trash2 size={48} className="mx-auto mb-4 opacity-20" />
                            <p>Trash is empty</p>
                        </div>
                    ) : (
                        deletedNotes.map((note) => (
                            <div
                                key={note.id}
                                className={`folder w-full p-5 rounded-2xl ${note.color} flex flex-col gap-2 h-80 opacity-80 hover:opacity-100 transition-all hover:shadow-sm`}>
                                <div className="flex flex-col items-start justify-between w-full">
                                    <div className="flex items-center justify-between w-full mt-1">
                                        <p className="date text-xs font-medium text-slate-500">{note.date}</p>
                                        <div className="relative">
                                            <button
                                                className="action-btn p-1 rounded-lg hover:bg-black/5 transition-all"
                                              onClick={(e)=>{
                                                e.stopPropagation();
                                                setActiveMenuId(activeMenuId === note.id ? null : note.id);
                                              }}
                                            >
                                                <Ellipsis size={18} className="text-slate-500" />
                                            </button>
                                            {activeMenuId === note.id && (
                                                <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 z-10 py-1 overflow-hidden">
                                                    <button
                                                        className="w-full text-left px-3 py-2 text-xs font-medium hover:bg-slate-50 flex items-center gap-2 text-slate-700 transition-colors"
                                                        onClick={() => handleRestore(note.id)}
                                                    >
                                                        <RotateCcw size={14} /> Restore
                                                    </button>
                                                    <button
                                                        className="w-full text-left px-3 py-2 text-xs font-medium hover:bg-slate-50 flex items-center gap-2 text-red-500 transition-colors"
                                                        onClick={() => handlePermanentDelete(note.id)}
                                                    >
                                                        <Trash2 size={14} /> Delete Forever
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="title action flex items-center justify-between gap-2 w-full border-b-2 border-b-slate-400/30 py-2">
                                        <h3 className="folder-name flex-1 text-slate-800 text-base font-semibold leading-snug">
                                            {note.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="w-full content h-40 overflow-hidden mt-2">
                                    <p className="text-sm text-slate-700 whitespace-pre-wrap">
                                        {note.description}
                                    </p>
                                </div>
                                <div className="time flex items-center gap-2 mt-auto pt-2 border-t border-slate-400/20">
                                    <Clock size={15} color='gray' strokeWidth={2.5} />
                                    <p className="text-xs font-medium text-slate-500">Deleted on: {new Date(note.deleted_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Trash
