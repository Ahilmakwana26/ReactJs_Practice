import { createContext } from "react"
import { useState } from "react";
export const themeContextData = createContext();

const ThemeContext = (props) => {
  const  [theme, setTheme] = useState('light');
  return (
    <div>
      <themeContextData.Provider value={[theme,setTheme]}>
     {props.children}
      </themeContextData.Provider>
    </div>
  )
}

export default ThemeContext
