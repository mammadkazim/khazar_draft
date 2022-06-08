import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";

import "./Drawer.css";
import { useSelector } from "react-redux";
import drawerHeaderLogo from "../../Assets/icons/drawer-header-logo.svg";
import coworkersIcon from "../../Assets/icons/coworkers-icon.svg";
import inquiryIcon from "../../Assets/icons/inquiry-icon.svg";
import announceIcon from "../../Assets/icons/announce-icon.svg";
import settingsIcon from "../../Assets/icons/settings-icon.svg";
import { themeCustom } from "../../Assets/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import Header from "./Header";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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
  // necessary for content to be below app bar
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

export default function MiniDrawer({ children }) {
  const user = useSelector((state) => state.userr.user);
  console.log(user)
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  const [collapseInquiry, setCollapseInquiry] = React.useState(false);
  const [collapseAnnounce, setCollapseAnnounce] = React.useState(false);
  const [collapseParam, setCollapseParam] = React.useState(false);

  const handleClickInquiry = () => {
    setCollapseInquiry((prev) => !prev);
  };
  const handleClickAnnounce = () => {
    setCollapseAnnounce((prev) => !prev);
  };
  const handleClickParam = () => {
    setCollapseParam((prev) => !prev);
  };
  return (
    <ThemeProvider theme={themeCustom}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            backgroundColor: "#fff",
            borderBottom: "1.5px solid #e8cccc",
          }}
        >
          <Toolbar
          variant="dense"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
            }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{
                color: "#424242",
                marginRight: 5,
                width: "25px",
                height: "25px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#BDBDBD",
                  marginRight: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {user.firstName.slice(0, 1)}
                {user.lastName.slice(0, 1)}
              </div>
              <Typography
                variant="h1"
                noWrap
                component="div"
                sx={{
                  color: "#424242",
                }}
              >
                {user.firstName} {user.lastName}
              </Typography>
            </Box>
          </Toolbar>
          <Header/>
        </AppBar>
        <Drawer id="drawer" variant="permanent" open={open}>
          <DrawerHeader
            sx={{
              py:"32px",
              px:"26px",
              display: "flex",
              justifyContent: "start",
              backgroundColor: "#9B5AE1",
            }}
          >
            <img
              alt="drawer-header-logo"
              src={drawerHeaderLogo}
            ></img>
          </DrawerHeader>
          <List
            sx={{
              backgroundColor: "#9B5AE1",
              height:"120vh",
              color: "#fff",
            }}
          >
            <Link to="/homepage">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton sx={{ px: 2.5 }}>
                  <ListItemIcon
                    className="list-item-icon"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Əsas səhifə"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/employees">
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton sx={{ px: 2.5 }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img src={coworkersIcon} alt="coworkers-icon"></img>
                  </ListItemIcon>
                  <ListItemText
                    primary="Əməkdaşlar"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton onClick={handleClickInquiry} sx={{ px: 2.5 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={inquiryIcon} alt="inquiry-icon"></img>
                </ListItemIcon>
                <ListItemText
                  primary="Sorğular"
                  sx={{ opacity: open ? 1 : 0 }}
                />
                {open ? (
                  collapseInquiry ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
              <Collapse in={collapseInquiry} timeout="auto" unmountOnExit>
                <List>
                  <Link to="/inquiry/dayoff">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Day off"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="/inquiry/ezam">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Ezamiyyət"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="inquiry/vacation">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Məzuniyyət"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="inquiry/guest">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Qonaq"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="inquiry/it">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="IT təchizat"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="inquiry/procurement">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Satınalma"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton onClick={handleClickAnnounce} sx={{ px: 2.5 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <img src={announceIcon} alt="announce-icon"></img>
                </ListItemIcon>
                <ListItemText
                  primary="Elanlar"
                  sx={{ color: "#ffffff", opacity: open ? 1 : 0 }}
                />
                {open ? (
                  collapseAnnounce ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
              <Collapse in={collapseAnnounce} timeout="auto" unmountOnExit>
                <List>
                  <Link to="/announcements/announcement">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Elan"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton onClick={handleClickParam} sx={{ px: 2.5 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <img src={settingsIcon} alt="settings-icon"></img>
                </ListItemIcon>
                <ListItemText
                  primary="Parametrlər"
                  sx={{ color: "#ffffff", opacity: open ? 1 : 0 }}
                />
                {open ? collapseParam ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItemButton>
              <Collapse in={collapseParam} timeout="auto" unmountOnExit>
                <List>
                  <Link to="/parameters/users">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Istifadəçilər"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link to="/parameters/userroles">
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton sx={{ px: 2.5 }}>
                        <ListItemText
                          primary="Istifadəçi rolları"
                          sx={{
                            color: "#ffffff",
                            opacity: open ? 1 : 0,
                            mx: 5,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
          </List>
        </Drawer>
        <Box sx={{ width: "100%", flexGrow: 1, mt: 8 }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
