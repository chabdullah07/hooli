import  React , {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { WidthNormal } from '@mui/icons-material';
import { width } from '@mui/system';
import logo from "../assets/hooli_logo_grey.png"
import { borders } from '@mui/system';
import { toast, ToastContainer } from 'react-toastify';

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { WidthNormal } from "@mui/icons-material";
import { width } from "@mui/system";
import logo from "../assets/hooli_logo_grey.png";
import { borders } from "@mui/system";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Hooli
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //toast function
  const notifyE =(msg) => toast.error(msg)
  const notifyS =(message) => toast.success(message)
  // Regex
  const emailverification = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      passcode: data.get("passcode"),
    });
  };
  const postData=() =>{
    // Email Verification
      if(!emailverification.test(email)){
        notifyE("Invalid Email")
        return
      }
       //Send data to Server
       fetch("http://localhost:5000/login", {
        method: "post",
        headers:{
               "Content-Type":"application/json" 
        },
        body:JSON.stringify({
                email:email,
                password:password
        })
       }).then(res=>res.json())
       .then(data =>{
        if(data.error){
          notifyE(data.msg)
        }else{
          notifyS(data.message)
          // navigate("/Login")
        }
        console.log(data)})
      }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              
            </Avatar> */}

            <Box component="img" sx={{ height: 54 }} alt="Logo" src={logo} />

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address/ User Name"
                name="email"
                onChange={(e) =>{setEmail(e.target.value)}}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="passcode"
                label="Passcode"
                type="password"
                onChange={(e) =>{setPassword(e.target.value)}}
                id="passcode"
                autoComplete="current-passcode"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => {postData()}}
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item sx={{ ml: 1 }}>
                  <Link href="#" variant="body2">
                    forgot passcode
                  </Link>
                </Grid>
                <Grid item xs sx={{ ml: 32 }}>
                  <Link href="#" variant="body2">
                    {"create new accont"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
