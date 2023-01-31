import { Component } from "react";
import { Age } from "./Age";

export class Welcome extends Component {
    render(){
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                {this.props.age>18 && <p><Age age={this.props.age}/></p>}
            </div>
        )
    }
}