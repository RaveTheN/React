import { Component } from "react";
import { GithubUserList } from "./GithubUserList";

export class App extends Component {

    render(){
        return(
            <div>
                <GithubUserList />
            </div>
        )
    }
}