import { useEffect, useState, useContext } from 'react'
import { Ellipsis, FolderOpen, Pencil, Clock, Trash2 } from "lucide-react";
import { NoteContextData } from '../context/NoteContext';

let timer;
const Notes = () => {
    const { Note, setNote, addNewNote,updateNote,handleDelete, Folder } = useContext(NoteContextData);
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [selectedFolderId, setSelectedFolderId] = useState("");
    const [activeMenuId, setActiveMenuId] = useState(null);


    useEffect(() => {
        if (Folder.length > 0 && !selectedFolderId) {
            setSelectedFolderId(Folder[0].id);
        }
    }, [Folder]);

    //get notes from local storage
    let storedNotes = localStorage.getItem('notes');
    useEffect(function () {
        if (storedNotes) {
            setNote(JSON.parse(storedNotes));
        }
    }, []);//run on page load

    return (
        <div className='bg-white text-black rounded-lg shadow-md p-6'>
            <div className="title">
                <h2 className="text-2xl font-bold">My Notes</h2>
                <div className="filters flex gap-9 mt-4 text-sm text-gray-500">
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">Today</button>
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">This Week</button>
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer">This Month</button>
                </div>
                <div className="folders grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-4">
                    {/* apply map on notes */}
                    {/* Note 1 */}
                    {Note.filter((note)=>note.deleted_at == null).map((note) => (
                        <div
                            key={note.id}
                            className={`folder w-full p-5 rounded-2xl ${note.color} flex flex-col gap-2 h-80 cursor-pointer transition-all hover:shadow-sm`}>
                            <div className="flex flex-col items-start justify-between w-full">
                                <div className="flex items-center justify-between w-full mt-1">
                                    <div className="flex items-center gap-2">
                                        <p className="date text-xs font-medium text-slate-400">{note.date}</p>
                                        {editingNoteId === note.id && (
                                            <select
                                                value={note.folderId}
                                                onChange={(e) => updateNote("folderId", e.target.value, note.id)}
                                                className="p-1 text-[10px] border border-slate-300 rounded bg-transparent outline-none cursor-pointer"
                                            >
                                                {Folder.map((folder) => (
                                                    <option key={folder.id} value={folder.id}>
                                                        {folder.title}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <button
                                            className="action-btn p-1 rounded-lg hover:bg-black/5 transition-all"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveMenuId(activeMenuId === note.id ? null : note.id);
                                            }}
                                        >
                                            <Ellipsis size={18} className="text-slate-400" />
                                        </button>
                                        {activeMenuId === note.id && (
                                            <div className="absolute right-0 mt-1 w-28 bg-white rounded-xl shadow-lg border border-slate-100 z-10 py-1 overflow-hidden">
                                                <button
                                                    className="w-full text-left px-3 py-2 text-xs font-medium hover:bg-slate-50 flex items-center gap-2 text-slate-700 transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setEditingNoteId(editingNoteId === note.id ? null : note.id);//for toggle
                                                        setActiveMenuId(null);
                                                    }}
                                                >
                                                    <Pencil size={14} /> Edit
                                                </button>
                                                <button
                                                    className="w-full text-left px-3 py-2 text-xs font-medium hover:bg-slate-50 flex items-center gap-2 text-red-500 transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDelete(note.id);
                                                        setActiveMenuId(null);
                                                    }}
                                                >
                                                    <Trash2 size={14} /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="title action flex items-center justify-between gap-2 w-full border-b-2 border-b-slate-300 py-2">
                                    <input className="folder-name flex-1 outline-none text-slate-800 text-base leading-snug bg-transparent" onChange={(e) => {
                                        let title = e.target.value;
                                        updateNote("title", title, note.id)
                                    }} value={note.title} readOnly={editingNoteId !== note.id} />
                                </div>
                            </div>
                            <div className="w-full content h-40 overflow-hidden mt-2">
                                <textarea
                                    className="w-full min-h-[300px] resize-none bg-transparent border-none focus:outline-none [scrollbar-width:none]"
                                    name="note"
                                    value={note.description}
                                    onChange={(e) => {
                                        let description = e.target.value;
                                        updateNote("description", description, note.id)
                                    }}
                                    readOnly={editingNoteId !== note.id}
                                />
                            </div>
                            <div className="time flex items-center gap-2 mt-2">
                                <Clock size={15} color='gray' strokeWidth={2.5} />
                                <p className="text-xs font-medium text-slate-400">12:30 PM, Monday</p>
                            </div>
                        </div>
                    ))}

                    {/* New Note */}
                    <div className="flex flex-col gap-3">
                        {/* <select 
                            value={selectedFolderId} 
                            onChange={(e) => setSelectedFolderId(e.target.value)}
                            className="w-full p-2 text-sm border-2 border-gray-200 rounded-xl outline-none focus:border-blue-400 bg-white transition-all cursor-pointer"
                        >
                            <option value="" disabled>Select Folder</option>
                            {Folder.map((folder) => (
                                <option key={folder.id} value={folder.id}>
                                    {folder.title}
                                </option>
                            ))}
                        </select> */}
                        <div
                            onClick={
                                () => addNewNote(1, selectedFolderId)
                            }
                            className="folder w-full bg-gray-100/60 hover:bg-gray-100 p-5 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center h-40 cursor-pointer transition-all hover:shadow-sm">
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
        </div>
    )
}

export default Notes
