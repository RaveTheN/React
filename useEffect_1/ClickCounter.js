import { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0}) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    onCounterChange()
   }, [counter])

   function onCounterChange(){
    console.log(`counter is ${counter}`)
   }

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  return (
    <div>
      <h3>Count: {counter}</h3>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}
