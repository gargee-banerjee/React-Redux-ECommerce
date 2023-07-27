import React from "react";
import PaymentForm from "./PaymentForm";
import useStyles from "./checkoutStyle";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "redux/CartSlice";

import commerce from "lib/Commerce";
import { IconButton, Typography } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { Link } from "react-router-dom";

const OrderReview = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const OrderContainer = ({ item }) => {
    console.log(item);
    const handleCartItemDelete = async () => {
      const cart = await commerce.cart.remove(item.id);
      dispatch(cartActions.refreshCart({ cart }));
    };
    return (
      <div className={classes.orderContainer}>
        <div className={classes.imageContainer}>
          <Link to={`/products/${item.product_id}`}>
            <img src={item.image.url} alt="product"></img>
          </Link>
          <div
            className={classes.deleteItemContainer}
            onClick={handleCartItemDelete}
          >
            <IconButton>
              <DeleteOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  };
  const OrderReviewCopmp = () => {
    return (
      <div className={classes.orderReviewContainer}>
        <Typography variant="h4">Order Review</Typography>
        <div className={classes.cartItemsContainer}>
          {cartItems.map((item) => (
            <OrderContainer key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className={classes.orderReviewOuterContainer}>
      <OrderReviewCopmp />
      <PaymentForm />
    </div>
  );
};

export default OrderReview;
