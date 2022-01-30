import React, { useState } from "react";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import { Home, ContactMail } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import logo from "./illust58-451.jpg";

const styled = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "25vw",
    background: "#fa9570",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
  },
  listItem: {
    color: "#fff",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <HowToRegIcon />,
    listText: "Register",
  },
  {
    listIcon: <LoginIcon />,
    listText: "LogIn",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = styled();

  const sideList = () => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <Avatar className={classes.avatar} src={logo} />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#00114b" }}>
          <MobilRightMenuSlider
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
          </MobilRightMenuSlider>

          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Avatar style={{ color: "#fff" }} src={logo} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#fff" }}>
              MyBoat
            </Typography>
            <Box sx={{ display: "flex", gap: 10 }}>
              {menuItems.map((listItem, key) => (
                <ListItem button key={key}>
                  <ListItemText
                    className={classes.listItem}
                    primary={listItem.listText}
                  />
                </ListItem>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
