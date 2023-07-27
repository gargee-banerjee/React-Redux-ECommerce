import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cartOuterContainer: {
    backgroundColor: "#faf9f8",
    minHeight: "725px",
  },
  emptyCartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: "white",
    boxShadow: "-1px 3px 10px 0px #cccccc87",
  },
  cartContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
    "& > *": { flex: 1 },
    margin: "0 min(100px,5%)",
  },

  cartItemsInnerContainer: {
    margin: theme.spacing(2, 0),
  },
  titleContainer: {
    gridColumn: "1 / 3",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: theme.spacing(2, 0, 0, 0),
  },

  //Cart item styles***********************************************************************************
  cartItemContainer: {
    display: "grid",
    gridTemplateColumns: "0.2fr 1fr",
    gridGap: "1rem",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "white",
    minWidth: "410px",
    boxShadow: "-1px 3px 10px 0px #cccccc87",
  },
  productImageContainer: {},
  imageContainer: {
    width: "112px",
    "& img": {
      width: "100%",
    },
  },

  productDetailsContainer2: {
    display: "flex",
    justifyContent: "space-between",
  },

  productDetailsContainer3: {
    // display: "flex",
    margin: theme.spacing(2, 0, 0, 0),
    // "& > *": {
    //     margin: theme.spacing(0, 4, 0, 0),
    // },
  },
  productDetailsContainer4: {
    display: "flex",
    // justifyContent:'space-between',
    "& > *": {
      margin: theme.spacing(2, 2, 0, 0),
      border: "1px solid #414a4c",
    },
  },
  addToFavButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSize: {
    color: "black",
    fontSize: "2.3rem",
    stroke: "#ffffff",
    strokeWidth: 1,
  },
  editQuantityButton: {
    "& select": {
      border: "none",
      outline: "none",
      padding: theme.spacing(2, 3, 2, 1),
      margin: theme.spacing(0, 1, 0, 0),
      cursor: "pointer",
      backgroundColor: "#fff",
    },
  },
  //Check out styles************************************************************************************
  checkoutContainer: {
    backgroundColor: "#faf9f8",
  },
  checkoutInnerContainer: {
    margin: theme.spacing(2, 0),
    minWidth: "380px",
    backgroundColor: "white",
    padding: theme.spacing(2),
    boxShadow: "-1px 3px 10px 0px #cccccc87",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
    "@media(min-width:1018px)": {
      maxWidth: "600px",
      position: "fixed",
    },
  },

  orderDetails: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // justifyItems:"end",
    // gridGap: "1rem",
    // columnGap: "1rem",
    "& > *": {
      whiteSpace: "nowrap",
    },
  },
  alignToEnd: {
    justifySelf: "end",
  },
  checkOutButton: {
    width: "100%",
    height: "40px",
    color: "#fff",
    fontSize: "1.2rem",
    backgroundColor: "#222",
  },

  deliveryDetails: {
    margin: theme.spacing(3, 0),
    "& > *": {
      marginTop: theme.spacing(1),
      fontSize: "1rem",
    },
  },
}));
