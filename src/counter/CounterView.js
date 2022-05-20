
import { useEffect } from "react";

export const CounterView = ({counter}) => {
  useEffect(() => {
    console.log("Calling useEffect in Counter View");

    return () => {
      console.log("Cleanup of Counter View useEffect");
    }
  })

  return (
    <div>
      {counter}
    </div>
  )
}
