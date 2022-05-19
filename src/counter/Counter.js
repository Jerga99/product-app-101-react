
import "./Counter.css";

function Counter() {
  let count = 100;

  // const increment = (message) => {
  //   count += 1;
  //   console.log(count);

  //   return () => {
  //     console.log(message);
  //   }
  // }

  const increment = () => {
    count += 1;
    console.log(count);
  }

  return (
    <div className="counter-container">
      <div>{count}</div>

      <button onClick={() => {
        increment()
      }}>
        Increment
      </button>

    </div>
  )
}

export default Counter;