import "./App.css";
import Drawer from "./components/Drawer";
import React from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Drawer />
    </div>
  );
}

export default App;
