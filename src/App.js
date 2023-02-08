import "./App.css";
import Drawer from "./components/Drawer";
import Login from "./components/Login";
// import images from "./components/images";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      {/* <Drawer /> */}
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
