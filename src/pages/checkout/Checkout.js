import React from "react";
import useStyles from "./checkoutStyle";
import CartCheckout from "pages/cart/CartCheckout";
import AddressForm from "./AddressForm";
import { Typography } from "@material-ui/core";
import OrderReview from "./OrderReview";
const Checkout = () => {
  const [isAddressSaved, setIsAddressSaved] = React.useState(false);
  const classes = useStyles();
  const pageTitle = isAddressSaved ? "Checkout" : "Shipping Address";
  const Form = () => {
    return isAddressSaved ? (
      <OrderReview />
    ) : (
      <AddressForm setIsAddressSaved={setIsAddressSaved} />
    );
  };
  return (
    <div className={classes.cartOuterContainer}>
      <div className={classes.cartContainer}>
        {/* <div className={classes.titleContainer}>
          <Typography variant="h4">{pageTitle}</Typography>
        </div> */}
        <div className={classes.cartItemsOuterContainer}>
          <div className={classes.cartItemsInnerContainer}>
            <Form />
          </div>
        </div>
        <div className={classes.checkoutOuterContainer}>
          <CartCheckout disableButton={!isAddressSaved} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
