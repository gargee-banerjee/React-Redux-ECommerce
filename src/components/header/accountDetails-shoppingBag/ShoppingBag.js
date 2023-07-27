import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../headerStyle";

import { Badge, IconButton, Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useSelector } from "react-redux";

const pageArray = [
  {
    title: "Favourites",
    iconClass: FavoriteBorderOutlinedIcon,
    routeName: "/",
    hideBadge: true,
  },
  {
    title: "Shopping bag",
    iconClass: LocalMallOutlinedIcon,
    routeName: "/shoppingbag",
    hideBadge: false,
  },
];

const ShoppingBag = () => {
  const classes = useStyles();
  const totalCartItems = useSelector((state) => state.cart.totalCartItems);
  return (
    <>
      {pageArray.map((key, index) => (
        <Link key={index} to={key.routeName}>
          <Typography key={index} variant="h5" color="inherit" noWrap>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge
                badgeContent={totalCartItems}
                color="secondary"
                invisible={key.hideBadge}
              >
                {React.createElement(
                  //Difficulty : string to component
                  key.iconClass,
                  {
                    key: key.iconClass,
                    className: classes.cartSectionIcons,
                  },
                  null
                )}
              </Badge>
            </IconButton>
            <span className={classes.headerAccountSectionTitle}>
              {key.title}
            </span>
          </Typography>
        </Link>
      ))}
    </>
  );
};

export default ShoppingBag;
