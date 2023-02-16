import "./App.css";
import Drawer from "./components/Drawer";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { Grid } from "@mui/material";
import React from "react";
import Explore from "./components/Explore";
import PostDetails from "./components/PostDetails";
import FeedPage from "./components/FeedPage";
import CreatePost from "./components/CreatePost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
import { Search } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{
            minHeight: "100vh",
            maxWidth: "100vw",
            margin: "auto",
            backgroundColor: "black",
          }}
        >
          <Routes>
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="/" element={<FeedPage />} />
            <Route exact path="explore" element={<Explore />} />
            <Route exact path="explore" element={<Search />} />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="create" element={<CreatePost />} />
          </Routes>
        </Grid>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
