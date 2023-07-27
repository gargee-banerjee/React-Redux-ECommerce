const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  productDisplayContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    backgroundColor: "#f5f5f5",
    padding: theme.spacing(5),
    "& > *": {
      height: "675px",
      flex:1,
    },
  },
  //Product Image styles *************************************************************************************************
  productImageContainer: {
    display: "flex",
    justifySelf: "flex-end",
    justifyContent: "center",
  },
  imageContainer: {
    height: "100%",
    width: "450px",
    "& img": {
      width: "100%",
    },
  },
  zoomedImageContainer: {
    height: "100%",
    width: "450px",

    overflow: "hidden",
    "& img": {
      width: "200%",
      objectFit: "cover",
      objectPosition: "-172px -25px",
    },
  },
  //Product Details  styles *************************************************************************************************
  productDetailsContainer: {
    maxWidth: "700px",
  },
  detailsContainer: {
    height: "100%",
    padding: theme.spacing(3),

    backgroundColor: "#f5f5f5",
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  sizeContainer: {
    marginTop: theme.spacing(7),
  },
  sizesButtonContainer: {
    display: "flex",
    gap:"1rem",
    "& > Button": {
      flex: 1,
      
    },
    "& Button:focus": {
      color: "#fff",
      backgroundColor: "#000",
    },
  },
  addToCartButton: {
    "& Button": {
      height: "40px",
      width: "100%",
      backgroundColor: "#000",
    },
  },
}));
