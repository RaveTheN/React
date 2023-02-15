import { Component } from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) =>
    this.setState({
      language: event.target.value,
    });

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        <div>
          <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}
