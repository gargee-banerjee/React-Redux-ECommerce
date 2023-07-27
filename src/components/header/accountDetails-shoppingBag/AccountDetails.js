import React from "react";
import useStyles from "../headerStyle";

import { Button, Divider, IconButton, Typography } from "@material-ui/core";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";

const AccountDetails = ({ userName }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const logoutUserHandler = () => {
    signOut(auth)
      .then(() => {
        toast.success("User logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className={classes.accountDropdown}>
      <Typography
        variant="h5"
        color="inherit"
        noWrap
        className={classes.accountLink}
      >
        <IconButton aria-label="Show cart items" color="inherit">
          <PermIdentityOutlinedIcon className={classes.cartSectionIcons} />
        </IconButton>
        <span className={classes.headerAccountSectionTitle}>Profile</span>
      </Typography>

      <div className={classes.accountDropdownMenu}>
        <ul>
          {userName && (
            <li>
              <p>{`Hi ${userName}`}</p>
            </li>
          )}
          {!userName && (
            <li>
              <Link to="/signin">
                <Button variant="contained" className={classes.signInButton}>
                  Sign in
                </Button>
              </Link>
            </li>
          )}
          <Divider className={classes.divider} />
          <li>
            <p>My account</p>
          </li>
          <li>
            <p>Membership info</p>
          </li>
          {userName && (
            <>
              <Divider className={classes.divider} />
              <li>
                <p onClick={logoutUserHandler}>Logout</p>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AccountDetails;
