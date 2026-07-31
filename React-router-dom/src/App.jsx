import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar';
import Product from './Pages/Product';
const App = () => {
  return (
    <div>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/product' element={<Product />}/>
    </Routes>

    <div className="footer">
      <h2>@copyRightes</h2>
    </div>
    </div>
  )
}

export default App
