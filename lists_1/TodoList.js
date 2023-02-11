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

  render() {
    return (
      <div>
        <ul>
        <input name="newTask" value={this.state.newTask} onChange={this.handleInputChange}/>
        <button onClick={this.addNewTask}>Add task</button>
          {this.state.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
