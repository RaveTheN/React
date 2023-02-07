import { Component } from "react";

export class ClickTracker extends Component{
    state = {
        last: this.props.noneSelected,
    }

    trackClicking = (event) => {
        this.setState((state) =>{
            return {
                last: event.target.name,
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.last}</h1>
                <button name="Red" onClick={this.trackClicking}>RED</button>
                <button name="Green" onClick={this.trackClicking}>GREEN</button>
                <button name="Blue" onClick={this.trackClicking}>Blue</button>
            </div>
        )
    }
}

ClickTracker.defaultProps = {
    noneSelected: "--"
}