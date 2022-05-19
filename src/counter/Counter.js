
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = (inc) => {
    setCount(count + inc);
  }

  return (
    <div className="counter-container">
      <div>{count}</div>

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