
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(100);
  
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="counter-container">
      <div>{count}</div>

      <button onClick={increment}>
        Increment
      </button>

    </div>
  )
}

export default Counter;