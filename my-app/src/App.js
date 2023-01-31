import { Component } from "react";
import { Counter } from "./Counter";

export class App extends Component {

    render(){
        return(
            <div>
                <Counter initialValue={25} incrementBy={2} timeout={500}/>
            </div>
        )
    }
}