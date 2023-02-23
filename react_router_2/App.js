import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "../../useState_1/ClickCounter";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Wario" />} />
      <Route path="/counter" element={<ClickCounter />} />
    </Routes>
  );
}
