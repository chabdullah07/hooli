import "./App.css";
import Drawer from "./components/Drawer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import React from "react";
import Explore from "./components/Explore";
import FeedPage from "./components/FeedPage";


function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Drawer /> */}
      {/* <div style={{ backgroundColor: "black" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{
            minHeight: "100vh",
            maxWidth: "40%",
            margin: "auto",
            backgroundColor: "black",
          }}
        >
          <Routes>
            <Route exact path="/" element={<FeedPage />} />
            <Route exact path="explore" element={<Explore />} />
          </Routes>
        </Grid>
      </div> */}
    </div>
  );
}

export default App;
