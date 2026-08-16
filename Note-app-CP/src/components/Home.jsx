import React, { useState } from 'react'
import Sidebar from './Sidebar'
import RightContent from './RightContent'
const Home = () => {

  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <Sidebar />
      <RightContent />
    </div>
  )
}

export default Home
