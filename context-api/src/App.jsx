import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
const App = () => {

  return (
    <div>
      {/* parent and their child */}
      {/* <Navbar theme={theme}>
        <h2>hello1</h2>
        <h2>hell02</h2>
      </Navbar > */}

      <Navbar/>
      <Button />
    </div>
  )
}

export default App
