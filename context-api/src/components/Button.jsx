import React, { useContext } from 'react'
import { themeContextData } from '../context/ThemeContext'

const Button = () => {
    const [theme,setTheme] = useContext(themeContextData);

    const handleChange = () =>{
        let currenttheme = theme === 'light' ? 'dark' : 'light';
        setTheme(currenttheme);
    }
  return (
    <div>
      <button onClick={handleChange}>Change theme</button>
    </div>
  )
}

export default Button
