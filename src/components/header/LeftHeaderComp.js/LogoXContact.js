import React from "react";
import { Link } from "react-router-dom";
import DrawerComp from "../DrawerComp";
import hmLogo from "../../../assets/H&MLogo.png";

import {
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

const HELP_DESK_CATEGORIES = [
  "Customer Service",
  " Newsletter",
  "Find a Store",
];

const LogoXContact = ({ classes }) => {
  const theme = useTheme();
  const isScreenSmallSized = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.helpContainer}>
      <Link to="/">
        <img src={hmLogo} className={classes.image} alt="H&M logo" />
      </Link>
      {isScreenSmallSized ? (
        <DrawerComp />
      ) : (
        <>
          {HELP_DESK_CATEGORIES.map((key, index) => (
            <Typography key={index} variant="h5" color="inherit" noWrap>
              {key}
            </Typography>
          ))}
          <IconButton aria-label="display more actions" color="inherit">
            <MoreIcon />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default LogoXContact;
