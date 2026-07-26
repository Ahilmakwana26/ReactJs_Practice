import React, { useState } from 'react'
import Counter from './components/Counter';
import UseState_Advance from './components/UseState_Advance';
const App = () => {
  
  const [username,setUsername] = useState('Ahil');
  const [userarr,setarr] = useState(['ahil','shan','dev','sahil','shivam']);
  function changeusername(){
    setUsername('dev');
    setarr(['hello friends']);
  }
  return (
    <div>
      {/* <h1>kese ho app {username}</h1>
      <h1>This is my friends {userarr}</h1>
      <button onClick={changeusername}>Click</button> */}


    {/* <Counter /> */}

    <UseState_Advance />
    </div>
  )
}

export default App
