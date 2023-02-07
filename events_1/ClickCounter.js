import { Component } from "react";

export class ClickCounter extends Component{
    
    state = {
        count: this.props.initialValue,
    }

    handleCounterIncrement = (event) => {
        console.log(event)
        
        this.setState((state) =>{
            return {
                count: state.count + this.props.incrementBy,
            }
        })
    }
    render(){ 
        return (
        <div>
            <h3>Count: {this.state.count}</h3>
            <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
        )
    }
} 

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1
}