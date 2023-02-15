import { Component } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CURRENT_LANGUAGE: "English",
  },
  it: {
    CURRENT_LANGUAGE: "Italiano",
  },
};

export class DisplayLanguage extends Component {
 
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(Language) => {
            return (
                <h1>{Strings[Language].CURRENT_LANGUAGE}</h1>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
