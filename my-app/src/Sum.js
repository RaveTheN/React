export function Sum(props) {
    
        return (
            <div>
                {<h1>The sum is {props.numbers.reduce((a,b) => a + b)}</h1>}
            </div>
        )
    
}
