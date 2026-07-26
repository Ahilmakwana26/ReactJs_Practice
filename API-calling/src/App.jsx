import React, { useState } from 'react'
import axios from 'axios';
const App = () => {
const [data,setdata] = useState([]);
// Fetch method 
//  async  function apicall(){
//    const response = await fetch('https://jsonplaceholder.typicode.com/users');
//    const data = await response.json();
//    console.log(data);
//   }


//Axios
const apicall = async () =>{
  const response =await axios.get('https://jsonplaceholder.typicode.com/users');
  setdata(response.data);
  console.log(response.data);
}

  return (
    <div>
      <h4>Call API</h4>
      <button onClick={apicall}>Click</button>


      {
        data && data.map(function(elem,index){
          return <h1>{elem.name} user : {elem.username}</h1>
        })
      }

    </div>

   
  )
}

export default App
