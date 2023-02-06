import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Divider } from "@mui/material";

function Post({ username, caption, imageUrl }) {
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
        <h4 className="postText">
          <strong>{username}</strong> {caption}
        </h4>
        <Divider className="postDivider" sx={{ borderBottomWidth: 0.1 }} />
      </div>
    </>
  );
}

export default Post;
