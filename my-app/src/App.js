import { Component } from "react";

export class App extends Component {
    sum = (a, b) => a + b
    render(){
        return(
            <div>
                <h2>The result is {this.sum(11, 22)}</h2>
            </div>
        )
    }
}