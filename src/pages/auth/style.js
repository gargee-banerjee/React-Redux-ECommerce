import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  signInContainer: {
    position: "relative",
    margin: "auto",
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    padding: theme.spacing(3),
    fontSize: "1.5rem",
    "&>*": {
      marginBottom: theme.spacing(1.2),
    },
  },
  cancelForm: {
    position: "absolute",
    right: "0",
    top: "0",
  },
  cancelButton: {
    fontSize: "2.5rem",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "&>*": {
      marginBottom: theme.spacing(1),
      height: "40px",
    },
  },
  forgotPassword: {
    alignSelf: "flex-start",
  },
  googleLogin: {
    height: "40px",
    width: "100%",
    textAlign: "center",
    padding: theme.spacing(1),
    backgroundColor: "orange",
    marginBottom: theme.spacing(2),
  },
  boldLink: {
    fontWeight: "bold",
  },
  resetButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));
