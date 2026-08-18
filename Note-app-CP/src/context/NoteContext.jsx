import React from 'react'
import { createContext, useState } from 'react'
import App from '../App.jsx'


export  const NoteContextData = createContext();
const date = new Date(Date.now()).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    Time: 'numeric'
});;
const noteColors = [
    { id: 1, name: 'yellow', value: 'bg-[#FFC563]' },
    { id: 2, name: 'peach', value: 'bg-[#FF9E79]' },
    { id: 3, name: 'purple', value: 'bg-[#B38BFA]' },
    { id: 4, name: 'cyan', value: 'bg-[#00C4FF]' },
    { id: 5, name: 'lime', value: 'bg-[#E2F197]' },
]
const folderColors = [
    {
        id: 1,
        name: "Indigo Accent",
        cardBg: "bg-indigo-100/60",
        cardHover: "hover:bg-indigo-100",
        iconBg: "bg-indigo-500/20",
        iconColor: "text-indigo-600",
        ellipsisHover: "hover:bg-indigo-200/50"
    },
    {
        id: 2,
        name: "Rose Pink",
        cardBg: "bg-rose-100/60",
        cardHover: "hover:bg-rose-100",
        iconBg: "bg-rose-500/20",
        iconColor: "text-rose-600",
        ellipsisHover: "hover:bg-rose-200/50"
    },
    {
        id: 3,
        name: "Amber Warm",
        cardBg: "bg-amber-100/60",
        cardHover: "hover:bg-amber-100",
        iconBg: "bg-amber-500/20",
        iconColor: "text-amber-600",
        ellipsisHover: "hover:bg-amber-200/50"
    },
    {
        id: 4,
        name: "Emerald Green",
        cardBg: "bg-emerald-100/60",
        cardHover: "hover:bg-emerald-100",
        iconBg: "bg-emerald-500/20",
        iconColor: "text-emerald-600",
        ellipsisHover: "hover:bg-emerald-200/50"
    },
    {
        id: 5,
        name: "Sky Blue",
        cardBg: "bg-sky-100/60",
        cardHover: "hover:bg-sky-100",
        iconBg: "bg-sky-500/20",
        iconColor: "text-sky-600",
        ellipsisHover: "hover:bg-sky-200/50"
    },
    {
        id: 6,
        name: "Purple Soft",
        cardBg: "bg-purple-100/60",
        cardHover: "hover:bg-purple-100",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-600",
        ellipsisHover: "hover:bg-purple-200/50"
    }
];

const NoteContext = () => {

    const [Note, setNote] = useState([]);
    const [Folder,setFolder] = useState([]);
    const addNewNote = (colorId, folderId) => {
        let data = noteColors.find((color) => color.id === colorId);
        setNote(prev => [...prev, {
            id: Date.now(),
            title: 'Enter title...',
            description: 'Write your note here.',
            color: data.value,
            date: date,
            folderId: folderId || (Folder.length > 0 ? Folder[0].id : null),
            deleted_at:null
        }])
    }
    const addNewFolder = (id) =>{
        let folderdata = folderColors.find((color)=>color.id === id);
        setFolder(prev=>[...prev,{
            id : Date.now(),
            title:'Enter Folder Name.',
            folder:folderdata
        }]);
    }

    return (
        <NoteContextData.Provider value={{ Note, setNote, addNewNote, noteColors, Folder,setFolder,addNewFolder,folderColors }}>
            <App />
        </NoteContextData.Provider>

    )
}

export default NoteContext 
