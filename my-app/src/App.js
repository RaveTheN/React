import { Component } from "react";
import { Welcome } from "./Welcome";

export class App extends Component {

    //Whenever a prop is not a string, it can be
    //passed by embedding an expression within curly brackets
    render(){
        return <Welcome name={<strong>Johnny</strong>} age="21"/>
    }
}