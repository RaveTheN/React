import { Component } from "react";
import { Welcome } from "./Welcome";

export class App extends Component {

    render(){
        return(
            <div>
                <Welcome name="Jimmy"/>
            </div>
        )
    }
}