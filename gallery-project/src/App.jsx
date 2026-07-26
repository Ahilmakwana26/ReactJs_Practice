import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';
const App = () => {
  const [userData,setUserData] = useState([]);
  const [getIndex,setIndex] = useState(1);

  let printData = "No Record Avaible";
  const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${getIndex}&limit=10`);
    setUserData(response.data);
  //  console.log(response.data);
  }
  useEffect(function(){
    getData();
  },[getIndex]);
  if(userData.length > 0){
      printData = userData.map(function(e,index){
        return <Card
          prop = {e}
          key = {index}
        />;
      })
  }
  return (
    <div className='bg-blue-50 h-screen'>

        <div className="w-full overflow-x-hidden p-4 flex flex-wrap gap-4 justify-center">
            {printData}
        </div>
        {/* Pagination */}
        <Pagination setindex={setIndex} getIndex={getIndex}/>
    </div>
  )
}

export default App
