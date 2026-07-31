import React, { Profiler } from 'react'
import {Route,Routes} from 'react-router-dom';
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Product'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Setting from './Pages/Setting';
import ProductDetails from './Pages/ProductDetails';
import NotFound from './Pages/NotFound';
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/productsDetails' element={<ProductDetails />}/>

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />}/>
          <Route path='setting' element={<Setting />}/>
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
