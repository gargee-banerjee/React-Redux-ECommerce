import React from "react";
import useStyles from "../headerStyle";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

const PRODUCT_CATEGORY = [
  { title: "Ladies", routePath: "/products" },
  { title: "Men", routePath: "/" },
];
const CategoryComp = () => {
  const classes = useStyles();

  const isActiveLinkStyle = ({ isActive }) =>
    isActive ? classes.linkActive : "";

  return (
    <div className={classes.headerProductCategory}>
      {PRODUCT_CATEGORY.map((key, index) => (
        <NavLink to={key.routePath} className={isActiveLinkStyle}>
          <Typography key={index} variant="h5" color="inherit">
            {key.title}
          </Typography>
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryComp;
