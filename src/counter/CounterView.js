
import { useEffect } from "react";

export const CounterView = ({counter}) => {
  useEffect(() => {
    console.log("Calling useEffect in Counter View");

    return () => {
      console.log("Cleanup of Counter View useEffect");
    }
  }, [])

  useEffect(() => {
    console.log("counter has been changed!");
  }, [counter])

  return (
    <div>
      {counter}
    </div>
  )
}
