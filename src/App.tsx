import { useState } from "react";
import Header from "./components/Header";
import Planner from "./pages/Planner";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Planner />
    </>
  );
}

export default App;
