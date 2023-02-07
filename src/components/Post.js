import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ username, caption, imageUrl, likes }) {
  return (
    <>
      <div className="post">
        <div className="postHeader">
          <Avatar
            className="postAvatar"
            alt="Remy Sharp"
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          />
          <h3 className="postUser">{username}</h3>
          <h3 style={{ marginLeft: "10px", color: "white" }}>•</h3>
          <h3 style={{ marginLeft: "10px", color: "grey" }}>2d</h3>
          <MoreHorizIcon className="moreSettings" />
        </div>
        <img className="postImage" src={imageUrl} alt="Post" />
        <div className="postLikes">
          <FavoriteBorderIcon fontSize="large" sx={{ color: "white" }} />
          <h4
            style={{
              color: "white",
              marginLeft: "10px",
              fontSize: "18px",
              padding: 0,
              margin: "10px",
            }}
          >
            {likes} likes
          </h4>
          <BookmarkBorderIcon
            fontSize="large"
            sx={{ color: "white", marginLeft: "auto", justifySelf: "flex-end" }}
          />
        </div>
        <h4 className="postText">
          <strong>{username}</strong> {caption}
        </h4>
        <Divider className="postDivider" sx={{ borderBottomWidth: 0.1 }} />
      </div>
    </>
  );
}

export default Post;
