import React from "react";
import useStyles from "./homeStyle";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ProductSliderCard from "./ProductSliderCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const HomePageContainer1 = () => {
  const classes = useStyles();
  return (
    <Link
      to="/products"
      className={`${classes["container-1"]} ${classes.containers}`}
    >
      <Typography variant="h4" className={classes["content"]}>
        THIS SALE IS BIG!
      </Typography>
      <Typography variant="h1" className={classes["content"]}>
        Up to 60% off
      </Typography>
      <Typography variant="h4" className={classes["content"]}>
        Enjoy fashion at even better prices.
      </Typography>

      <div className={classes["sales-category"]}>
        <ul>
          <Link to="/products">
            <Button
              variant="contained"
              className={classes["white-home-button"]}
            >
              Women
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="contained"
              className={classes["white-home-button"]}
            >
              Men
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="contained"
              className={classes["white-home-button"]}
            >
              Home
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="contained"
              className={classes["white-home-button"]}
            >
              Sports
            </Button>
          </Link>
        </ul>
      </div>
    </Link>
  );
};

export const HomePageImageContainer = (prop) => {
  const classes = useStyles();
  const { caption, description, buttonName } = prop.props;
  return (
    <Link
      to="/products"
      className={`${classes["image-container"]} ${classes.containers}`}
    >
      <Typography
        variant="h2"
        className={`${classes["content"]} ${classes["container2content"]}`}
      >
        {caption}
      </Typography>
      <Typography
        variant="h6"
        className={`${classes["content"]} ${classes["container2content"]}`}
      >
        {description}
      </Typography>
      <Button variant="contained" className={classes["white-home-button"]}>
        {buttonName}
      </Button>
    </Link>
  );
};

export const HomePageProductsDisplayContainer = () => {
  const classes = useStyles();

  let products = useSelector((state) => state.product.products);
  products = products.slice(0, 6);
  return (
    <>
      <div className={classes["products-display-container"]}>
        {products.map((item) => (
          <ProductSliderCard item={item} />
        ))}
      </div>
    </>
  );
};
