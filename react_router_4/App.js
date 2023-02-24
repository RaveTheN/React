import { Link, Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="users/:username">Github user</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Wario" />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        
      </Routes>
    </div>
  );
}
