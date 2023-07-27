import React, { useEffect, useState } from "react";

import { AppBar, Toolbar, useTheme, useMediaQuery } from "@material-ui/core";
import { signOut, onAuthStateChanged } from "firebase/auth";

import useStyles from "./headerStyle";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authActions } from "redux/slice/AuthSlice";

import {
  AccountDetails,
  ShoppingBag,
  CategoryComp,
  SearchComp,
  LogoXContact,
} from "./index";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isScreenSmallSized = useMediaQuery(theme.breakpoints.down("sm"));
  const [userName, setUserName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        let userName = user.displayName;
        if (userName === null) {
          userName = user.email.split("@")[0];
        }
        setUserName(userName);
        dispatch(
          authActions.SET_ACTIVE_USER({
            userName,
            userEmail: user.email,
            userId: user.uid,
          })
        );
      } else {
        setUserName("");
        console.log(user);
      }
    });
  }, []);
  const rightHeaderComp = (
    <div className={classes.headerAccountSection}>
      <AccountDetails userName={userName} />
      <ShoppingBag />
    </div>
  );
  const productCategoryComp = (
    <Toolbar className={classes.headerProductNavigationContainer}>
      <CategoryComp />
      <SearchComp classes={classes} />
    </Toolbar>
  );

  return (
    <AppBar position="fixed" color="inherit" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <LogoXContact classes={classes} />
        {rightHeaderComp}
      </Toolbar>
      {!isScreenSmallSized && productCategoryComp}
    </AppBar>
  );
};

export default Header;
