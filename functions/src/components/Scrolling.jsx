import React from 'react'

const Scrolling = () => {
 
    const handleScroll = (value)=>{
        console.log('scrolling speed',value)
    }
  return (
    <div className='main h-full overflow-hidden' onWheel={(elem)=>{
        handleScroll(elem.deltaY)
    }}>
      <div className='w-full h-[100vh] bg-gray-700'>page1</div>
      <div className='w-full h-[100vh] bg-blue-950'></div>
      <div className='w-full h-[100vh] bg-cyan-950'></div>
    </div>
  )
}

export default Scrolling
