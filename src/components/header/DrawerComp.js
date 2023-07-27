import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import MenuIcon from "@material-ui/icons/Menu";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import hmLogo from "../../assets/H&MLogo.png";
import useStyle from "./drawerCompStyle";
import { Link } from "react-router-dom";

const DrawerComp = () => {
  const classes = useStyle();
  const [openDrawer, setOpenDrawer] = useState(false);
  const DRAWER_ITEMS = [
    { title: "Sign in", routePath: "/signin" },
    { title: "Ladies", routePath: "/products" },
    { title: "Men", routePath: "/" },
    { title: "Customer Service", routePath: "/" },
    { title: "Newsletter", routePath: "/" },
    { title: "Find a Store", routePath: "/" },
  ];
  // const DRAWER_ITEMS = [
  //   "Sign in",
  //   "Ladies",
  //   "Men",
  //   "Kids",
  //   "Home",
  //   "Sale",
  //   "Sport",
  //   "Divided",
  //   "H&M+",
  //   "Beauty",
  //   "Sustainability",
  //   "Customer Service",
  //   "Newsletter",
  //   "Find a Store",
  // ];

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        className={classes.drawer}
      >
        <List className={classes.drawer}>
          <ListItem className={`${classes.logoContainer} ${classes.drawer}`}>
            <img src={hmLogo} alt="h&m Logo" className={classes.logo} />
            <ListItemIcon
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ClearOutlinedIcon className={classes.drawer} />
            </ListItemIcon>
          </ListItem>

          {DRAWER_ITEMS.map((key, index) => (
            <Link to={key.routePath}>
              <ListItem
                key={index}
                onClick={() => {
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText>{key.title}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
