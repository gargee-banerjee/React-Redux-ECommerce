import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import sliderImage from "../../../assets/poductDisplaySliderImage1.jpg";

import useStyles from "./style";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const classes = useStyles();
  const productImage = product.image.url;
  const productName = product.name;
  const productPrice = product.price.formatted;
  const productId = product.id;
  return (
    <div className={classes["product-display-card"]}>
      <NavLink to={productId}>
        <img src={productImage} alt="Blazer"></img>
      </NavLink>
      <div className={classes["product-details"]}>
        <Typography gutterBottom variant="h5">
          <NavLink to={productId}>{productName}</NavLink>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Rs. {productPrice}
        </Typography>
      </div>
    </div>
    // <Card className={classes.root}>
    //   <CardMedia
    //     className={classes.media}
    //     image={product.image.url}
    //     title={product.name}
    //   />
    //   <CardContent>
    //     <div className={classes.cardContent}>
    //       <Typography variant="h5" gutterBottom>
    //         {product.name}
    //       </Typography>
    //       <Typography variant="h5">
    //         {product.price.formatted_with_symbol}
    //       </Typography>
    //     </div>
    //     <Typography
    //       variant="h6"
    //       color="textSecondary"
    //       dangerouslySetInnerHTML={{ __html: product.description }}
    //     />
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <IconButton aria-label="Add to Cart">
    //       <AddShoppingCart />
    //     </IconButton>
    //   </CardActions>
    // </Card>
  );
};

export default Product;
