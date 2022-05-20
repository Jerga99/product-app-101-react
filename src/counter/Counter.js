
import { useState, useEffect } from "react";
import "./Counter.css";
import { CounterView } from "./CounterView";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Calling useEffect in Counter");

    return () => {
      console.log("Cleanup of Counter useEffect");
    }
  })
  
  const increment = (inc) => {
    setCount(count + inc);
  }

  return (
    <div className="counter-container">
      <CounterView counter={count}/>
      <button onClick={() => increment(+100)}>
        Increment
      </button>
      <button onClick={() => increment(-50)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter;