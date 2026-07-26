import React from 'react'

const Pagination = ({setindex,getIndex}) => {
  return (
    <>
      <div className="btns flex justify-center gap-3.5 h-[50px] items-center">
        <button className='pl-4 py-1 pr-4 text-xl bg-blue-500 active:scale-110 rounded-2xl font-bold text-amber-50 cursor-pointer'
          onClick={()=>{
           if(getIndex > 1){
            setindex(getIndex - 1);
           }
          }}
        >Prev
        </button>
          <h3>Page {getIndex}</h3>
        <button className='pl-4 py-1 pr-4 text-xl bg-blue-500 active:scale-110 rounded-2xl font-bold text-amber-50 cursor-pointer' 
        onClick={()=>{
          setindex(getIndex + 1);
        }}
        >Next</button>
      </div>
    </>
  )
}

export default Pagination
