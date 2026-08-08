import React, { useContext } from 'react'
import { themeContextData } from '../context/ThemeContext'

const Nav2 = (prop) => {
  const [theme,setTheme] = useContext(themeContextData);
  return (
    <div className='links'>
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Service</h3>
      <h3>Login</h3>
      <h3 className='theme'>{theme}</h3>
    </div>
  )
}

export default Nav2
