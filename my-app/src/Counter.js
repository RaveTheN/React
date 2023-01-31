import { Component } from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends Component{
    state = {
        count: this.props.initialValue ?? 0,
    }

    constructor(props){
        super(props)
        setInterval(() =>{
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, this.props.timeout ?? 1000)
    }

    render(){
        return <CounterDisplay count={this.state.count}/>
    }
}

Counter.defaultProps = {
    timeout: 1000,
    initialValue: 0,
    incrementBy: 1
}