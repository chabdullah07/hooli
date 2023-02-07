import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";

import "./Drawer.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  borderRight: "0.5px solid #eaebed",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  border: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    zIndex: -1,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const menu = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      id: 2,
      name: "Search",
      icon: <SearchIcon />,
      path: "/explore",
    },
    {
      id: 3,
      name: "Explore",
      icon: <ExploreIcon />,
      path: "/explore",
    },
    {
      id: 4,
      name: "Notifications",
      icon: <NotificationsIcon />,
      path: "/explore",
    },
    {
      id: 5,
      name: "Create",
      icon: <AddCircleIcon />,
      path: "/explore",
    },
    {
      id: 6,
      name: "Profile",
      icon: <PersonIcon />,
      path: "/explore",
    },
  ];

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Box sx={{ display: "flex", bgcolor: "black" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: "100px",
              backgroundColor: "black",
              left: 0,
            }}
            open={open}
            elevation={0}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  paddingTop: "30px",
                  ...(open && { display: "none" }),
                  backgroundColor: "transparent",
                }}
              >
                <>
                  <MenuIcon />
                </>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader
              sx={{
                backgroundColor: "black",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        width: "200px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "900",
                          fontSize: "24px",
                        }}
                      >
                        <span style={{ color: "white" }}>hoo</span>
                        <span style={{ color: "#0EB9DB" }}>li</span>
                      </Typography>
                      <ChevronLeftIcon sx={{ color: "white" }} />
                    </div>
                  </>
                )}
              </IconButton>
            </DrawerHeader>

            <List sx={{ backgroundColor: "Black" }}>
              {menu.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{
                    display: "block",
                    paddingTop: "10px",
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    component={Link}
                    to={item.path}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "white",
                        "&:hover": { color: "#0EB9DB" },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "white",
                        "&:hover": { color: "#0EB9DB" },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List
              sx={{
                backgroundColor: "black",
                height: "100vh",
                display: "flex",
                alignItems: "end",
              }}
            >
              {["Logout"].map((text) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "end",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        color: "white",
                        "&:hover": { color: "#0EB9DB" },
                      }}
                    >
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "white",
                        "&:hover": { color: "#0EB9DB" },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </div>
    </>
  );
}
