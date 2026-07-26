import React from 'react'
import {useState} from 'react';
const OnclickFun = () => {
    const [getValue,setValue] = useState('Ahil');
    
    function handleChanging(elem){
        console.log(elem);
    }
  return (
    <div className='bg-black text-amber-50 w-full h-screen'>
   

    {/* <button className='mt-2.5 rounded-full pr-5 pl-5 py-3 text-center text-2xl cursor-pointer border-solid
 bg-white text-black' onClick={function(){
  console.log('hello') }}>
      Click Me
    </button> */}

    <input className='ml-2 text-2xl p-10 border-solid' type="text" placeholder='Enter Your Name' onChange={function(elem){
      handleChanging(elem.target.value)
    }} />
    <h1 className='text-2xl'>{getValue}</h1>


    <div className='bg-green-800 w-140 h-140' onMouseMove={(elem)=>{
      console.log(elem.clientX , elem.clientY)
    }}>
    </div>
    </div>
  )
}

export default OnclickFun
