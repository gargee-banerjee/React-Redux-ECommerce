import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "beige",
    width: "100vw",
    padding: theme.spacing(3),
    "&>*": {
      textAlign: "center",
      fontSize: "1.5rem",
    },
  },
}));
