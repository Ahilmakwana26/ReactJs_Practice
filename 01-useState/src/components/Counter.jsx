import React, { useState } from 'react';

function Counter() {
    const [count,setCount] = useState(0)
    function increase(){
        setCount(count+1);//You're telling React:  "For the next render, please make the state value equal to count + 1."
    }
    function decrease(){
        setCount(count-1); //also i understand what happing here
    }
  return (
   <div className="counter-container">
      <h2 className="counter-title">My React Counter</h2>
      
      {/* Display the current number */}
      <div className="counter-display">{count}</div>
      
      {/* Buttons to trigger the changes */}
      <div className="button-group">
        <button className="counter-btn decrease-btn" onClick={decrease}>
          Decrease
        </button>
        <button className="counter-btn increase-btn" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;