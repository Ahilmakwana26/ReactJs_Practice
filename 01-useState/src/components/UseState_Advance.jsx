import React from 'react'
import { useState } from 'react'

const UseState_Advance = () => {
    const [num,setNum] = useState(10);
    const [obje,setArr] = useState({username:"Ahil",age:19});
    const [arr,setArray] = useState([10,20,30,40,50]);
    const getNum = () => {
        //asynchronous
          // setNum(num+5);
          // console.log(num);


        //React doesn't update immediately
        //so it not work as you assume
        setNum(num+1);//0+1
        setNum(num+1);//0+1 
        //so final state become 1 not 2


        //Batch Update
        //it start with current 0 state
        //React executes them one after another:
        setNum(prev=>(prev+1));//retrun 1
        setNum(prev=>(prev+1));//here Final State = 2
        setNum(prev=>(prev+2));

        setNum(prev=>(prev+1));
    }

    const setUsername = () =>{
        //quick update
        setArr(prev=>({...prev,age:222}))
      setArr(prev=>({...prev,age:121}));
       const newusername = {...obje};
       console.log(newusername);
       newusername.username = "AHIL MAKWANA";
     //  newusername.age = 20;
       newusername.position = "Developer";
      setArr(newusername);

    }
    const setArrayFun = () =>{

        const arr_value = [...arr];
       let last_value = arr_value.at(-1);//find last value
       const update_last_value = arr_value.with(-1,44);
      //  console.log(last_value,update_last_value)
       //arr_value.push(last_value+10);//here i append with increament 
        setArray(update_last_value);
    }
  return (
    <div>
        <h1>{obje.username} {obje.age} {obje.position} {num} {arr}</h1>
      <button onClick={setUsername}>click</button>
    </div>
  )
}

export default UseState_Advance
