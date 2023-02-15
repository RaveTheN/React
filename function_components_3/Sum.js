export function Sum({numbers = 0 }) {
    
        return (
            <div>
                {<h1>The sum is {numbers.reduce((a,b) => a + b)}</h1>}
            </div>
        )
    
}
