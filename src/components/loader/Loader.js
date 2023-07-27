import React from "react";
import useStyles from "./style";
import loaderLogo from "../../assets/loader2.gif";
import ReactDOM from "react-dom";
import ModalComponent from "../ui-components/ModalComponent";

const Loader = () => {
  const classes = useStyles();
  return ReactDOM.createPortal(
    <div className={classes.loaderWrapper}>
      <img src={loaderLogo} alt="Loader gif" className={classes.loaderGif} />
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
