import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row text-center gap-3'>
      <button  className='px-3 py-2 my-2 text-amber-50 active:scale-95 cursor-pointer rounded bg-cyan-900'
      
      onClick={()=>{
        navigate('/')
      }}
      >Back to Home</button>
      <button className='px-3 py-2 my-2 text-amber-50 active:scale-95 cursor-pointer rounded bg-cyan-900'
        onClick={()=>{
            navigate(-1);
        }}
      >Back</button>
      <button className='px-3 py-2 my-2 text-amber-50 active:scale-95 cursor-pointer rounded bg-cyan-900'
      onClick={()=>{
        navigate(+1);
      }}
      >Next</button>
    </div>
  )
}

export default Navbar2
