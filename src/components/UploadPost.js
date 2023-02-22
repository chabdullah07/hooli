import * as React from "react";
import { Box as MuiBox } from "@mui/system";
import "./PostDetails.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./UploadPost.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";

function UploadPost() {
  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState("");
  const [url, setURL] = React.useState("");

  const createPost = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "hooli-app");
    data.append("cloud_name", "hooli");
    fetch("https://api.cloudinary.com/v1_1/hooli/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setURL(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <MuiBox className="mainBox">
        <MuiBox
          className="addImage"
          style={{
            border: "1px solid rgba(230,230,230,0.3)",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            component="label"
            sx={{
              width: "200px",
              height: "50px",
              borderRadius: "60px",
              backgroundColor: "#0EB9DB",
              fontFamily: "Poppins",
              fontWeight: "500",
              "&:hover": { color: "white", backgroundColor: "#097c93" },
            }}
          >
            Upload Picture
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Button>
        </MuiBox>
        <MuiBox className="cPBox" style={{ position: "relative" }}>
          <div className="cP">
            <div className="cPHeader">
              <Avatar
                className="cPAvatar"
                alt="Remy Sharp"
                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
              />
              <Stack className="cPUser">
                <p className="postUser" style={{ fontWeight: "700" }}>
                  username
                </p>
              </Stack>
            </div>
          </div>
          <Stack sx={{ paddingLeft: "25px", paddingRight: "50px" }}>
            <Textarea
              placeholder="Type in here…"
              value={text}
              className="cpTextArea"
              onChange={(event) => setText(event.target.value)}
              minRows={6}
              autoFocus
              maxRows={6}
              endDecorator={
                <Typography
                  level="body3"
                  sx={{ mt: "20px", ml: "auto", color: "white" }}
                >
                  {text.length}/1000
                </Typography>
              }
              sx={{
                minWidth: "100%",
                color: "white",
                "&:hover": { color: "white !important" },
                border: "none",
              }}
            />
          </Stack>
          <Stack
            sx={{
              bottom: "20px",
              right: "0",
              position: "absolute",
            }}
          >
            <Button
              variant="contained"
              size="large"
              disableElevation
              sx={{
                width: "200px",
                height: "50px",
                bottom: 0,
                color: "#0EB9DB",
                backgroundColor: "transparent",
                fontWeight: "700",
                fontFamily: "Poppins",
                "&:hover": { color: "#097c93", backgroundColor: "transparent" },
              }}
              onClick={() => createPost()}
            >
              Create <TrendingFlatIcon sx={{ ml: "10px" }} />
            </Button>
          </Stack>
        </MuiBox>
      </MuiBox>
    </>
  );
}

export default UploadPost;
