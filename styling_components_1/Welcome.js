import {Component} from "react";

export class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                {this.props.name ? <h2>Buongiorno, {this.props.name}</h2> : null}
            </div>
        )
    }
}
