import { Component } from "react";
import { Welcome } from "./Welcome";

export class App extends Component {

    
    render(){
        return <Welcome name="John" age={2}/>
    }
}