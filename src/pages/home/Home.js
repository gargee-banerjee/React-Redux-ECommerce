import React from "react";
import useStyles from "./homeStyle";
import { Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  HomePageContainer1,
  HomePageImageContainer,
  HomePageProductsDisplayContainer,
} from "./HomePageComponents";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes["main-home-Container"]}>
      <HomePageContainer1 />
      <HomePageImageContainer
        props={{
          caption: "New arrivals",
          description: "Pieces to pull off this season",
          buttonName: "Shop now",
        }}
      />
      <HomePageProductsDisplayContainer/>
      <HomePageImageContainer
        props={{
          caption: "The golden hour",
          description: "Savour the long days of summer on the patio.",
          buttonName: "Shop now",
        }}
      />
    </div>
  );
};

export default Home;
