import { Component } from "react";

export class Counter extends Component{
    state = {
        count: this.props.initialValue ?? 0,
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, this.props.timeout ?? 1000)
    }

    render(){
        return <h1>Count: {this.state.count}</h1>
    }
}

Counter.defaultProps = {
    timeout: 1000,
    initialValue: 0,
    incrementBy: 1
}