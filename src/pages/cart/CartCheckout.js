import React from "react";
import useStyles from "./cartStyle";
import { Button, Divider, Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const CartCheckout = ({disableButton}) => {
  const classes = useStyles();
  const totalCost = useSelector((state) => state.cart.totalCartAmount);
  const { pathname } = useLocation();
  const cartButtonMessage = !"/shoppingbag".localeCompare(pathname)
    ? "Continue to checkout"
    : "Complete purchase";
  const routePath = !"/shoppingbag".localeCompare(pathname)
    ? "/checkout"
    : "/confirmationPage";
  return (
    <div className={classes.checkoutInnerContainer}>
      <div className={classes.orderDetails}>
        <Typography variant="h5">Order value</Typography>
        <Typography variant="h5" className={classes.alignToEnd}>
          Rs.{totalCost}
        </Typography>
        <Typography variant="h5">Delivery</Typography>
        <Typography variant="h5" className={classes.alignToEnd}>
          FREE
        </Typography>
      </div>
      <Divider />
      <div className={`${classes.total} ${classes.orderDetails}`}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4" className={classes.alignToEnd}>
          Rs.{totalCost}
        </Typography>
      </div>
      <div className={classes.checkOutButtonContainer}>
        <Link to={routePath}>
          <Button variant="contained" disabled={disableButton} className={classes.checkOutButton}>
            {cartButtonMessage}
          </Button>
        </Link>
      </div>
      <div className={classes.deliveryDetails}>
        <Typography variant="body2">
          Prices and delivery costs are not confirmed until you've reached the
          checkout.
        </Typography>
        <Typography variant="body2">
          15 days free returns. Read more about return and refund policy.
        </Typography>
        <Typography variant="body2">
          Customers would receive an SMS/WhatsApp notifications regarding
          deliveries on the registered phone number
        </Typography>
      </div>
    </div>
  );
};

export default CartCheckout;
