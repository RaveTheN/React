import { Component, useReducer } from "react";

export class Welcome extends Component {
    render(){
        return <p>Welcome, {this.props.name}!</p>
    }
}

Welcome.defaultProps = {
    name: user,
}