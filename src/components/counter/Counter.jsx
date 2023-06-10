import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    const incrementData = () =>{
        setCount(count+1);
    }
    const resetData = () =>{
        setCount(0);
    }
    const decrementData = () =>{
        setCount(count-1);
    }
  return (
    <div className="CounterBox">
      <h1 className="countValue">{count}</h1>
      <div className="btns">
        <button className=" btn increment" onClick={incrementData}>Increment</button>
        <button className="btn reset" onClick={resetData}>Reset</button>
        <button className="btn decrement" onClick={decrementData}>Decrement</button>
      </div>
    </div>
  );
};
export default Counter;
