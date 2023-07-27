import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  confirmationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#faf9f8",
    height: "85vh",
  },
  confirmationInnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "300px",
    padding: theme.spacing(3,16),
    boxShadow: "-1px 3px 10px 0px #cccccc87",
    "& > *": {
      marginBottom: theme.spacing(4),
    },
  },
  emailField: {
    width: "380px",
    fontSize: "1.5rem",
  },
  placeOrderButton: {
    backgroundColor: "#222",
    color: "white",
    width: "380px",
    height: "45px",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
}));
