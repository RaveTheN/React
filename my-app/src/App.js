import { Component } from "react";
import { TodoList } from "./TodoList";

export class App extends Component {
  render() {
    return (
      <TodoList
        render={(items, removeTask) => {
          const [...i] = items;

          removeTask = (index) => {
            this.setState({
              [items]: [items.splice(index, 1)]
            })
          }

          return (
            <ul>
              {i.map((i, index) => (
                <li key={i + index}>
                  {i}
                  <button onClick={() => removeTask(index)}>remove</button>
                </li>
              ))}
            </ul>
          );
        }}
      ></TodoList>
    );
  }
}
