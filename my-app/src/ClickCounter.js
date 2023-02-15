import { useState } from "react"

export function ClickCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue = 0)

    function handleCounterIncrement () {
        setCounter ((c) => c+1)
    }
    
        return (
        <div>
            <h3>Count: {counter}</h3>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
        )
    
} 

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1
}