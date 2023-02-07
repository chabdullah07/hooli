import "./App.css";
import Drawer from "./components/Drawer";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
<<<<<<< Updated upstream
import React from "react";
import Explore from "./components/Explore";
=======
import FeedPage from "./components/FeedPage";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
            <Route exact path="/" element={<FeedPage />} />
>>>>>>> Stashed changes
          </Routes>
        </Grid>
      </div>
    </div>
  );
}

export default App;
