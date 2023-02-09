import {Component} from "react";

export class Welcome extends Component {
    render() {
        return (
            <div>
                {this.props.name ? <h2>Hello, {this.props.name}</h2> : null}
            </div>
        )
    }
}
