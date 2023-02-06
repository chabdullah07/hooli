import "./App.css";
import Drawer from "./components/Drawer";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import { Grid } from "@mui/material";
import React from "react";
import Explore from "./components/Explore";

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
            maxWidth: "60%",
            margin: "auto",
            backgroundColor: "black",
          }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Post
                  username="Ali"
                  caption="I love Valorant"
                  imageUrl="https://img.freepik.com/premium-photo/young-creative-woman-virtual-reality-headset-home-digital-technologies-future_717906-1784.jpg?w=1480"
                />
              }
            />
            <Route exact path="explore" element={<Explore />} />
          </Routes>
        </Grid>
      </div>
    </div>
  );
}

export default App;
