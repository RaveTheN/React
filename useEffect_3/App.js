import { Component } from "react";
import { GithubUser } from "./GithubUser";

export class App extends Component {

    render(){
        return(
            <div>
                <GithubUser username="ravethen" />
            </div>
        )
    }
}