import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cartOuterContainer: {
    backgroundColor: "#faf9f8",
    minHeight: "725px",
  },
  // cartItemsInnerContainer: {
  // },
  cartContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "5rem",
    "& > *": { flex: 1 },
    margin: "2px min(200px,5%)",
  },
  cartItemsInnerContainer: {
    minWidth: "400px",
    margin: theme.spacing(2, 0),
  },
  titleContainer: {
    gridColumn: "1 / 3",
    margin: theme.spacing(2, 0, 0, 0),
  },

  //Field Styles******************************************************
  formContainer: {
    boxShadow: "-1px 3px 10px 0px #cccccc87",
    padding: theme.spacing(2),
  },
  formFieldContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "2rem",
    margin: theme.spacing(2, 0),
  },
  fullWidthField: {
    gridColumn: "1 / 3",
  },
  formFields: {
    backgroundColor: "white",
  },
  saveAddressButton: {
    backgroundColor: "#222",
    color: "white",
    height: "40px",
    fontSize: "1.25rem",
  },

  //Order Review Styles************************************************
  orderReviewOuterContainer:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // "& > *":{flex:1}
  },
  orderReviewContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(3),
    boxShadow: "-1px 3px 10px 0px #cccccc87",
  },
  cartItemsContainer: {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "30%",
    overflowX: "auto",
    overflowBehaviorInline: "contain",
    minWidth: "800px",
    margin: theme.spacing(2, 0),
  },
  imageContainer: {
    position: "relative",
    margin: theme.spacing(1),
    width: "180px",
    "& img": {
      width: "100%",
    },
  },
  deleteItemContainer: {
    position: "absolute",
    bottom: "0",
    right: "0",
    backgroundColor: "white",
    borderRadius: "50%",
  },

  //Payment  Mode Styles******************************************************
  paymentContainer: {
    padding: theme.spacing(3),
    boxShadow: "-1px 3px 10px 0px #cccccc87",
    "& > *": {
      marginBottom: theme.spacing(1.5),
    },
    width:'100%',
  },
  paymentModeContainer: {
    marginTop: theme.spacing(3),
    "& > *": {
      fontSize: "1.25rem",
      marginRight: theme.spacing(1),
    },
    "& input": {
      accentColor: "#222",
    },
  },
}));
