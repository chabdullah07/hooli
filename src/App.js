import "./App.css";
import Drawer from "./components/Drawer";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import React from "react";
import Explore from "./components/Explore";
import FeedPage from "./components/FeedPage";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="App">
      <Drawer />
      <div style={{ backgroundColor: "black" }}>
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
            <Route exact path="create" element={<CreatePost />} />
          </Routes>
        </Grid>
      </div>
    </div>
  );
}

export default App;
