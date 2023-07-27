import React from "react";
import useStyles from "./checkoutStyle";
import { Divider, Typography } from "@material-ui/core";

const PaymentForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.paymentContainer}>
      <Typography variant="h4">Payment</Typography>
      <Typography variant="h5">How would you like to pay?</Typography>
      <Divider />
      <div className={classes.paymentModeContainer}>
        <input name="paymentMode" type="radio" value="cod" checked />
        <span>Cash on delivery</span>
      </div>
    </div>
  );
};

export default PaymentForm;
