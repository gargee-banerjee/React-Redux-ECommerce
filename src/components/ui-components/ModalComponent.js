import React from "react";
import useStyles from "./style";

const ModalComponent = (props) => {
  const classes = useStyles();
  return <div className={classes.loaderWrapper}> {props.children}</div>;
};

export default ModalComponent;
