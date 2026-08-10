import React from 'react'
import Sidebar from './Sidebar'
import RightContent from './RightContent'
const Home = () => {
  return (
    <div className='flex items-center gap-1'>
      <Sidebar />
      <RightContent />
    </div>
  )
}

export default Home
