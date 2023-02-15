import { Component } from "react";

export class TodoList extends Component {
  state = {
    items: ["boil mussels", "cleanse tennerumi", "cut cherry tomatoes"],
    newTask: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  addNewTask = () => {
    this.setState({
      [this.state.items]: [this.state.items.push(this.state.newTask)],
      newTask: "",
    });
  };

  handleResetState = () => {
    this.setState({
      items: [],
      newTask: "",
    });
  };

  

  render() {
    return (
      <div>
        <input
            name="newTask"
            value={this.state.newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleResetState}>Reset</button>
          <button onClick={this.addNewTask}>Add task</button>
          {this.props.render(this.state.items)}
      </div>
    );
  }
}
