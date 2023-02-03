import "./App.css";
import Drawer from "./components/Drawer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Drawer />
      <Login/>
    </div>
  );
}

export default App;
