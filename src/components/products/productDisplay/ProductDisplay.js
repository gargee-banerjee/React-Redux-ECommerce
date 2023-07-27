import React from "react";
import useStyles from "./ProductDisplayStyle.js";
import sliderImage from "../../../assets/poductDisplaySliderImage1.jpg";
import sliderImage2 from "../../../assets/productDisplay2.webp";
import sliderImage3 from "../../../assets/hmgoepprod.jpg";
import { useSelector, useDispatch } from "react-redux";
import commerce from "../../../lib/Commerce";

import { cartActions } from "redux/CartSlice.js";
import { addToCart } from "redux/cart-actions";

import { Typography, useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useParams } from "react-router-dom";
import Loader from "components/loader/Loader.js";

const ProductDisplay = () => {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [isLoading, setIsLoading] = React.useState(false);
  const isScreenSmallSized = useMediaQuery("(max-width:1450px)");

  const productId = params.productId;
  const product = products.find((product) => product.id === productId);
  console.log(productId);
  const productName = product.name;
  const productImage = product.image.url;
  const productPrice = product.price.formatted;

  const handleAddToCart = async () => {
    // dispatch(addToCart(productId));
    setIsLoading(true);
    const cart = await commerce.cart.add(productId, 1);
    setIsLoading(false);
    dispatch(cartActions.refreshCart({ cart }));
    //set cart
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={classes.productDisplayContainer}>
        <div className={classes.productImageContainer}>
          <div className={classes.imageContainer}>
            <img src={productImage} alt="product" />
          </div>
          {!isScreenSmallSized && (
            <div
              className={`${classes.imageContainer} ${classes.zoomedImageContainer}`}
            >
              <img src={productImage} alt="product" />
            </div>
          )}
        </div>
        <div className={classes.productDetailsContainer}>
          <div className={classes.detailsContainer}>
            <Typography variant="h4">{productName}</Typography>
            <Typography variant="h4">Rs. {productPrice}</Typography>
            <div className={classes.sizeContainer}>
              <Typography variant="h5">Sizes</Typography>
              <div className={classes.sizesButtonContainer}>
                <Button variant="outlined">XL</Button>
                <Button variant="outlined">L</Button>
                <Button variant="outlined">M</Button>
                <Button variant="outlined">S</Button>
                <Button variant="outlined">XS</Button>
              </div>
            </div>
            <div className={classes.addToCartButton}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                <LocalMallOutlinedIcon />
                Add to bag
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
