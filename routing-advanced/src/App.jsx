import React from 'react'
import { Route,Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NotFound from './Components/NotFound'
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Projects from './Pages/Projects';
import Shopping from './Pages/shopping';
import Collection from './Pages/Collection'
import Courses from './Pages/Courses'
import CoursesDetails from './Pages/CoursesDetails'
import Navbar2 from './Components/Navbar2'
const App = () => {
  return (
    <div >
      <Navbar />
      <Navbar2 />
      <Routes>
        {/* Normal/Basic Route */}
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>  
        <Route path='/courses' element={<Courses />}/>
        {/* Default Route */}
        <Route path='/courses/:coursesId' element={<CoursesDetails />}/>
        {/* Nested Route */}
        <Route path='/project' element={<Projects />}> 
            <Route path='shopping' element={<Shopping />}/>
            <Route path='collection' element={<Collection />}/>
        </Route>
        {/* Not Found page Route */}
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
