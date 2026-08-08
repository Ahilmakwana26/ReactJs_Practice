import React from 'react'

const Navbar = ({theme , setTheme}) => {
    function changeTheme(){
        let currentTheme = theme == "light" ? 'dark' : 'light'
        setTheme(currentTheme);
    }
  return (
    <div>
      <button onClick={changeTheme}>Chnage theme</button>
    </div>
  )
}

export default Navbar
