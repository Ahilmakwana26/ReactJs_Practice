import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
       <div>
      <div className="flex gap-3.5 justify-center py-20">
        <Link to="/project/shopping">Shopping</Link>

        <Link to="/project/collection">
          Collection
        </Link>
      </div>
      <Outlet />
{/* <h1>project pagg</h1> */}
    </div>
  )
}

export default Projects
