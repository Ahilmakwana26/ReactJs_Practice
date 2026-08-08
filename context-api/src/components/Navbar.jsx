import { useContext } from 'react';
import Nav2 from './Nav2';
import { themeContextData } from '../context/ThemeContext';

const Navbar = (prop) => {
  const [theme,setTheme] = useContext(themeContextData);
  console.log(theme);
  return (
    <div className={`${theme} nav`}>
      <h2>AHI</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
