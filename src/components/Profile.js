import React from "react";
import "./Profile.css";
import { Divider, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function Profile() {
  return (
    <>
      <Grid
        className="mainGrid"
        alignItems="center"
        justifyContent="center"
        width="900px"
      >
        <div
          className="profileContainer"
          style={{ display: "flex", width: "100%", marginBottom: "50px" }}
        >
          <div
            className="profileLeft"
            style={{
              width: "40%",
              marginLeft: "auto",
              display: "flex",
              marginRight: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                width: "150px",
                height: "150px",
              }}
              className="postAvatar"
              alt="Remy Sharp"
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            />
          </div>
          <div className="profileRight" style={{ width: "60%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                alignContent: "flex-start",
                paddingBottom: "20px",
              }}
            >
              <h6 style={{ color: "white", marginRight: "30px" }}>hooli</h6>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "#efefef",
                  "&:hover": { backgroundColor: "#efefef" },
                  color: "black",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  borderRadius: "8px",
                  marginRight: "30px",
                }}
              >
                Edit Profile
              </Button>
              <SettingsIcon sx={{ color: "white" }} />
            </div>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                width: "100%",
                paddingBottom: "20px",
              }}
            >
              <h6 style={{ color: "white", marginRight: "30px" }}>
                <span style={{ fontWeight: "bold" }}>63 </span>
                posts
              </h6>
              <h6 style={{ color: "white", marginRight: "30px" }}>
                <span style={{ fontWeight: "bold" }}>163 </span>
                followers
              </h6>
              <h6 style={{ color: "white", marginRight: "30px" }}>
                <span style={{ fontWeight: "bold" }}>263 </span>
                following
              </h6>
            </div>

            <div
              style={{
                textAlign: "left",
                width: "100%",
              }}
            >
              <h6 style={{ color: "white", fontWeight: "bold" }}>Hooli Inc.</h6>
              <h6 style={{ color: "white" }}>
                Value Loyalty Above All Else 🖤
              </h6>
            </div>
          </div>
        </div>

        <Divider className="profileDivider" sx={{ borderBottomWidth: 0.1 }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <AppsIcon
            fontSize="medium"
            sx={{
              color: "white",
              "&:hover": { color: "#0EB9DB" },
              cursor: "pointer",
            }}
          />
          <h4
            style={{
              color: "white",
              marginLeft: "10px",
              fontSize: "16px",
              marginRight: "50px",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Posts
          </h4>
          <BookmarkBorderIcon
            fontSize="medium"
            sx={{
              color: "white",
              "&:hover": { color: "#0EB9DB" },
              cursor: "pointer",
            }}
          />
          <h4
            style={{
              color: "white",
              marginLeft: "10px",
              fontSize: "16px",
              padding: 0,
              cursor: "pointer",
            }}
          >
            Saved
          </h4>
        </div>

        <Box className="profileFeed">
          <ImageList cols={3} gap={20}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
];
