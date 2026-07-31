import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';
const App = () => {
  const [userData,setUserData] = useState([]);
  const [getIndex,setIndex] = useState(2);
  const [loading,setLoading] = useState(false);
  const [hasMore,setHasMore] = useState(true);

  let printData = "No Record Avaible";
  const getData = async () =>{

    if(loading) return; // not do this in production instead use , useRef()
    
    setLoading(true);
    const response = await axios.get(`https://picsum.photos/v2/list?page=${getIndex}&limit=10`);

    if(response.data.length === 0){
      setHasMore(false);

    }else{

      setUserData(prev=>[...prev,...response.data])
    }

    console.log('Api called');
    setLoading(false);
    
  }
   useEffect(function(){

    const handleScroll = () =>{
      let CurrentScroll = window.scrollY;
      let windowHeight = window.innerHeight;
      let documentHeight = document.documentElement.scrollHeight;

      if(CurrentScroll + windowHeight >=documentHeight-100 && hasMore){
       setIndex(prev=>prev+1);
      }
    }
    window.addEventListener('scroll',handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
   },[hasMore]);

    useEffect(() => {
      getData();
    }, [getIndex]);

  return (
    <div className='bg-blue-50 h-screen'>

        <div className="w-full overflow-x-hidden p-4 flex flex-wrap gap-4 justify-center">
            {userData.length===0 ? "No Data Found" : userData.map((e)=>(
              <Card 
                key={e.id}
                prop = {e}
              />
            ))}
        </div>
        <h2 className="flex justify-center font-bold text-2xl" style={{ opacity: !hasMore ? 1 : 0 }}>No More Data {userData.length}</h2>
        {/* Pagination */}
        {/* <Pagination setindex={setIndex} getIndex={getIndex}/> */}
    </div>
  )
}

export default App
