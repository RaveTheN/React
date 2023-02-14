import { Component } from "react";

export class Container extends Component {
  render() {
    return (
      <div className="container bg-white border-4 border-red-500">
        <div>{this.props.children} </div>
      </div>
    );
  }
}
