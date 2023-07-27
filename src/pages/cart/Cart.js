import React from "react";
import useStyles from "./cartStyle";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const Cart = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isEmpty = !cartItems.length;
  return (
    <>
      <div className={classes.cartOuterContainer}>
        {isEmpty && (
          <div className={classes.emptyCartContainer}>
            <h1>Cart is empty</h1>
          </div>
        )}
        {!isEmpty && (
          <div className={classes.cartContainer}>
            <div className={classes.cartItemsOuterContainer}>
              <div className={classes.cartItemsInnerContainer}>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className={classes.checkoutOuterContainer}>
              <CartCheckout />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
