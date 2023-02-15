import { useState } from "react";

export function ClickCounter() {
  const [counter, setCounter] = useState(0);

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
