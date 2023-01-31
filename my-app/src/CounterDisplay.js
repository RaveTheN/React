import { Component } from "react";
import { Counter } from "./Counter";

export class CounterDisplay extends Component{
    render(){
        return <h1>Count: {this.props.count}</h1>
    }
}