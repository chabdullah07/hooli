import "./App.css";
import Drawer from "./components/Drawer";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import { Grid } from "@mui/material";

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
            <Route
              exact
              path="Home"
              element={
                <Post
                  username="Ali"
                  caption="I love Pakistan"
                  imageUrl="https://img.freepik.com/premium-vector/5th-february-kashmir-solidarity-day-translation-urdu-text-5th-february-kashmir-solidarity-day_708934-578.jpg?w=1480"
                />
              }
            />
          </Routes>
        </Grid>
      </div>
    </div>
  );
}

export default App;
