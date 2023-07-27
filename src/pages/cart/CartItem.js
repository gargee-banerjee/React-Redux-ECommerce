import React from "react";
import useStyles from "./cartStyle";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../redux/CartSlice";
import commerce from "../../lib/Commerce";

import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Loader from "components/loader/Loader";

const CartItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sizeArray = [1, 2, 3, 4, 5];
  const [isLoading, setIsLoading] = React.useState(false);

  const productName = item.name;
  const productPrice = item.price.formatted;
  const totalCost = item.line_total.formatted;
  const productSize = "M";
  const prodImage = item.image.url;
  const quantity = +item.quantity;

  const handleCartUpdate = async (event) => {
    const quantity = event.target.value;
    setIsLoading(true);
    const cart = await commerce.cart.update(item.id, { quantity });
    setIsLoading(false);
    dispatch(cartActions.refreshCart({ cart }));
  };

  const handleCartItemDelete = async () => {
    setIsLoading(true);
    const cart = await commerce.cart.remove(item.id);
    setIsLoading(false);
    dispatch(cartActions.refreshCart({ cart }));
  };
  return (
    <>
      {isLoading && <Loader />}

      <div className={classes.cartItemContainer}>
        <div className={classes.productImageContainer}>
          <div className={classes.imageContainer}>
            <img src={prodImage} alt="product"></img>
          </div>
        </div>
        <div className={classes.productDetailsContainer}>
          <div className={classes.detailsContainer}>
            <div className={classes.productDetailsContainer2}>
              <div>
                <Typography variant="h4">{productName}</Typography>
                <Typography variant="h5">Rs. {productPrice}</Typography>
              </div>
              <div className={classes.deleteItem}>
                <IconButton onClick={handleCartItemDelete}>
                  <DeleteOutlinedIcon className={classes.iconSize} />
                </IconButton>
              </div>
            </div>
            <div className={classes.productDetailsContainer3}>
              <Typography variant="h6">Size {productSize}</Typography>
              <Typography variant="h6">Total Rs.{totalCost}</Typography>
            </div>
            <div className={classes.productDetailsContainer4}>
              <div className={classes.addToFavButtonContainer}>
                <IconButton>
                  <FavoriteBorderOutlinedIcon className={classes.iconSize} />
                </IconButton>
              </div>
              <div className={classes.editQuantityButton}>
                <select name="Qty" id="qty" onChange={handleCartUpdate}>
                  {sizeArray.map((size) => (
                    <option
                      key={size}
                      value={size}
                      selected={size === quantity}
                    >
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
