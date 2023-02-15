import * as React from "react";
import { Box } from "@mui/system";
import FeedPage from "./FeedPage";
import "./PostDetails.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { colors, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Stack from "@mui/material/Stack";

function PostDetails({ username, caption, imageUrl, likes }) {
  return (
    <>
      <Box className="mainBox">
        <Box className="imageBox">
          <img
            className="postImg"
            src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
            alt="car"
          />
        </Box>
        <Box className="contentBox">
          <h1>
            <div className="post">
              <div className="postHeader">
                <Avatar
                  className="postAvatar"
                  alt="Remy Sharp"
                  src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                />
                <Stack className="">
                  <p className="postUser">username bin username</p>
                  <p className="postInfo">2d ago</p>
                </Stack>
              </div>
            </div>
          </h1>
        </Box>
      </Box>
    </>
  );
}

export default PostDetails;
