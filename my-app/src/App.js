import { useCounter } from "./useCounter"

export function App() {
  const { counter, onIncrement } = useCounter()
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
