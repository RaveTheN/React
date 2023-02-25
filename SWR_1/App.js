//Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR
//hook to fetch the data of a Github user.

import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<GithubUser username="ravethen" />} />;
      </Routes>
    );
  }
}
