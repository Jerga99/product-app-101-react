
import { useState, useEffect } from "react";
import "./Counter.css";
import { CounterView } from "./CounterView";

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1000);

  useEffect(() => {
    console.log("Calling useEffect in Counter");

    return () => {
      console.log("Cleanup of Counter useEffect");
    }
  }, [count, count2])

  useEffect(() => {
    console.log("Reacting to change of count2!");
  }, [count2]);

  useEffect(() => {
    console.log("Calling only once!");
  }, []);
  
  const increment = (inc) => {
    setCount(count + inc);
    setCount2(count + inc);
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