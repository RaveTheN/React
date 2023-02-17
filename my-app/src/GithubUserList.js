import { Component } from "react";
import { GithubUser } from "./GithubUser";

export class GithubUserList extends Component {
  state = {
    usernames: [""],
    newUsername: ''
  };

  handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({
        [name]: value  
    })
}

addnewUsername = () => {
    
    this.setState({
        [this.state.usernames]: [this.state.usernames.push(this.state.newUsername)],
        newUsername: '',
    })
}

handleResetState = () => {
  this.setState({
    usernames: [],
    newUsername: ''
  })
}

removeUser = (index) => {
  this.setState({
    [this.state.usernames]: [this.state.usernames.splice(index, 1)]
  })
}

  render() {
    return (
      <div>
        <ul>
        <input name="newUsername" value={this.state.newUsername} onChange={this.handleInputChange}/>
        <button onClick={this.handleResetState}>Reset</button>
        <button onClick={this.addnewUsername}>Add user</button>
          {this.state.usernames.map((item, index) => (
            <li key={item + index}><GithubUser username={item}/><button onClick={() => this.removeUser(index)}>remove</button></li>
          ))}
        </ul>
      </div>
    );
  }
}
