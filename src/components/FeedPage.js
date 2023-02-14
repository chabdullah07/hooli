import React, { useState } from "react";
import Post from "./Post";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PostDetails from "./PostDetails";
import "./FeedPage.css";
const style = {};

function FeedPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = useState([
    {
      username: "Ali",
      caption: "I love Valorant",
      imageUrl:
        "https://img.freepik.com/premium-photo/young-creative-woman-virtual-reality-headset-home-digital-technologies-future_717906-1784.jpg?w=1480",
      likes: 102,
      date: "2d",
    },
    {
      username: "Umair",
      caption: "I love Mountains",
      imageUrl:
        "https://img.freepik.com/premium-photo/view-passu-cones-mountain-peaks-evening-gilgit-baltistan-pakistan_67721-104.jpg?w=2000",
      likes: 241,
      date: "6d",
    },
    {
      username: "Usama",
      caption: "I love React",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000&t=st=1675700133~exp=1675700733~hmac=4e26496a82236067d7c13048763746f620633785d2437ae1529d68165c7069ab",
      likes: 453,
      date: "10d",
    },
  ]);

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
            likes={post.likes}
            date={post.date}
          />
        ))}
      </div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modalStyle">
          <PostDetails />
        </Box>
      </Modal>
    </>
  );
}

export default FeedPage;
