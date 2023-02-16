import { useEffect, useState } from "react"

export function Counter({initialValue = 0}) {
    const [count, setCount] = useState(initialValue)

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCount((count) => count +1 )
        }, 1000)

        return() => {
            clearInterval(intervalId);
        }
    })

    
        return (<h1>Count: {count}</h1>)
    
}