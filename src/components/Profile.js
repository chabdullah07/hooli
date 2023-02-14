import React from "react";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function Profile() {
  return (
    <>
      <Grid
        className="main"
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <div className="profileHeader">
          <Avatar
            className="postAvatar"
            alt="Remy Sharp"
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          />
        </div>
      </Grid>
    </>
  );
}
