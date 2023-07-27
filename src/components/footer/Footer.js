import { Container, Toolbar } from "@material-ui/core";
import React from "react";
import useStyle from "./footerStyle";

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerContainer}>
      <div>&copy; 2021 H&M Hennes & Mauritz AB</div>
    </div>
  );
};

export default Footer;
