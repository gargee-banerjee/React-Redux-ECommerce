import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./homeStyle";
import sliderImage from "../../assets/poductDisplaySliderImage1.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductSliderCard = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes["product-display-card"]}>
      <Link to={`/products/${item.id}`}>
        <img src={item.image.url} alt="Blazer"></img>

        <div className={classes["product-details"]}>
          <Typography gutterBottom variant="h5">
            {item.name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Rs.{item.price.formatted}
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default ProductSliderCard;
