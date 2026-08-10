import React from 'react'
import { Ellipsis, FolderOpen, Pencil,Clock } from "lucide-react";


const Notes = () => {
    return (
        <div className='bg-white text-black rounded-lg shadow-md p-6'>
            <div className="title">
                <h2 className="text-2xl font-bold">My Notes</h2>
                <div className="filters flex gap-9 mt-4 text-sm text-gray-500">
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">Today</button>
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer ">This Week</button>
                    <button className="filter-btn active:border-b-2 active:border-blue-500 cursor-pointer">This Month</button>
                </div>
                <div className="folders grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-4">
                    {/* Note 1 */}
                    <div className="folder w-62 bg-[#E2F197] p-5 rounded-2xl flex flex-col gap-2 h-80 cursor-pointer transition-all hover:shadow-sm">
                        <div className="flex flex-col items-start justify-between w-full">
                            <p className="date text-xs font-medium text-slate-400 mt-1">12/12/2024</p>
                            <div className="title action flex items-center justify-between w-full border-b-2 border-b-slate-300 py-2">
                                <h3 className="folder-name font-bold text-slate-800 text-base leading-snug">Javascript Note</h3>
                                <div className="action">
                                    <Pencil size={17} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full content h-40 overflow-hidden mt-2">
                            <textarea
                                className="w-full min-h-[300px] resize-none bg-transparent border-none focus:outline-none [scrollbar-width:none]"
                                name="note"
                                defaultValue="Softened the harsh grey #eeecec background to bg-slate-50 with subtle border separation."
                            />
                        </div>
                        <div className="time flex items-center gap-2 mt-2">
                            <Clock size={15} color='gray' strokeWidth={2.5} />
                            <p className="text-xs font-medium text-slate-400">12:30 PM, Monday</p>
                        </div>
                    </div>
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
