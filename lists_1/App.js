import { Component } from "react";
import { TodoList } from "./TodoList";

export class App extends Component{
    render(){
        return(
            <div>
                <TodoList />
            </div>
        )
    }
}