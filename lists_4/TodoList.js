import { Component } from "react";

export class TodoList extends Component {
  state = {
    items: ["boil mussels", "cleanse tennerumi", "cut cherry tomatoes"],
    newTask: ''
  };

  handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({
        [name]: value  
    })
}

addNewTask = () => {
    
    this.setState({
        [this.state.items]: [this.state.items.push(this.state.newTask)],
        newTask: '',
    })
}

handleResetState = () => {
  this.setState({
    items: [],
    newTask: ''
  })
}

removeTask = (index) => {
  this.setState({
    [this.state.items]: [this.state.items.splice(index, 1)]
  })
}

  render() {
    return (
      <div>
        <ul>
        <input name="newTask" value={this.state.newTask} onChange={this.handleInputChange}/>
        <button onClick={this.handleResetState}>Reset</button>
        <button onClick={this.addNewTask}>Add task</button>
          {this.state.items.map((item, index) => (
            <li key={item + index}>{item}<button onClick={() => this.removeTask(index)}>remove</button></li>
          ))}
        </ul>
      </div>
    );
  }
}
