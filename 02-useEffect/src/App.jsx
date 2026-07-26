import {React,useEffect,useState} from 'react'

const App = () => {

  const [num,setNum] = useState(0);
  const [num2,setNum2] = useState(15);

  // useEffect(function(){
  //   console.log('useEffect method is running....');
  // },[num2])//i added array in useEffect i it depent of num 
          //when change stage of num2 it will be run otherwise no. only on page reload
          //it use for side work means : when someting change on num2 useEffect run


  function ahil(){
    console.log('Hi , i am AHil Makwana');
  }
  function Raj(){
    console.log('Hi , i am Raj Kumar')
  }

  useEffect(function(){
    console.log('useEffect started');
    ahil();
  },[num,num2])
  return (
    <div>
      <h1>Num is {num}</h1>
      <h1>Num2 is {num2}</h1>
      {/* <button
        onMouseEnter={()=>{
          setNum(num+1);
        }}

        onMouseLeave={()=>{
          setNum2(num2+5);
        }}
      >Click</button> */}

      <button onClick={()=>{
        setNum(num+1);
      }}>click1</button>

      <button onClick={()=>{
        setNum2(num2-1);
      }}>Click2</button>
    </div>
  )
}

export default App
