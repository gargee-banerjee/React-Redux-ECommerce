import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  "product-display-card": {
    width: "302px",
    // height: "333px",
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]:{
      width: "260px",
    },
  },




  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
