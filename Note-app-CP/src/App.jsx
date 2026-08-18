import React from 'react'
import Home from './components/Home' 
import {Route,Routes} from 'react-router-dom';
import FolderContainer from './components/FolderContainer';
import NotFound from './components/NotFound';
import Notes from './components/Notes'
const App = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home />}>
          <Route index path='/' element={<Notes />}/>
          <Route path='folder/:id' element={<FolderContainer />} />
        </Route>
         <Route path='*' element={<NotFound />}/>
    </Routes>

   </>
  )
}

export default App
