import { Divider } from "@mui/material";
import React from "react";
import "./CreatePost.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import UploadPost from "./UploadPost";

export default function CreatePost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="cPost">
        <h2 className="cPostHead">Create New Post</h2>
        <Divider
          sx={{ backgroundColor: "lightgray", borderBottomWidth: 0.1 }}
        />
        <div className="cPostContainer">
          <div className="svgPhoto">
            <svg
              style={{ cursor: "pointer" }}
              id="Layer"
              height="150"
              viewBox="0 0 24 24"
              width="150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="image-gallery-plus"
                d="m22.175 5.015a3.45 3.45 0 0 0 -2.388-1.23l-10.56-1.485a3.431 3.431 0 0 0 -2.627.525 3.447 3.447 0 0 0 -1.232 2.386l-.147 1.037h-.554a3.082 3.082 0 0 0 -3.417 3.417v8.668a3.082 3.082 0 0 0 3.417 3.417h10.668c1.909 0 3.072-.914 3.35-2.59a3.014 3.014 0 0 0 2.815-2.937l1.2-8.58a3.427 3.427 0 0 0 -.525-2.628zm-4.922 13.318c0 1.362-.556 1.917-1.918 1.917h-10.668c-1.361 0-1.917-.555-1.917-1.917v-8.668c0-1.362.556-1.917 1.917-1.917h10.668c1.362 0 1.918.555 1.918 1.917zm3.957-10.9-1.2 8.578c-.146 1.007-.524 1.514-1.258 1.638v-7.984a3.082 3.082 0 0 0 -3.418-3.417h-8.6l.118-.826a2.04 2.04 0 0 1 .648-1.4 2.022 2.022 0 0 1 1.517-.232l10.561 1.48a2.048 2.048 0 0 1 1.4.647 2.028 2.028 0 0 1 .232 1.517zm-7.96 6.567a.75.75 0 0 1 -.75.75h-1.75v1.75a.75.75 0 0 1 -1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 .75.75z"
                fill="rgb(255,255,255)"
              />
            </svg>
          </div>
          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: "#0EB9DB",
              marginTop: "20px",
              color: "white",
              fontFamily: "Poppins",
              width: "200px",
              borderRadius: "60px",
              padding: "10px",
              fontWeight: "500",
              "&:hover": { color: "white", backgroundColor: "#097c93" },
            }}
          >
            Create Post
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box className="cPModal">
              <UploadPost />
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}
