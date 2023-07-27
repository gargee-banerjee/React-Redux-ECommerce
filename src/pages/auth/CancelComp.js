import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";

import { IconButton } from "@material-ui/core";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

const CancelComp = () => {
  const classes = useStyles();
  return (
    <div className={classes.cancelForm}>
      <Link to="/">
        <IconButton>
          <ClearOutlinedIcon className={classes.cancelButton} />
        </IconButton>
      </Link>
    </div>
  );
};

export default CancelComp;
