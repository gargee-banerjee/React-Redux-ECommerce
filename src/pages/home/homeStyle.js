import { makeStyles } from "@material-ui/core";
import container2Image from "../../assets/homePageImage1.avif";

export default makeStyles((theme) => ({
  //Reusable classes*******************************************************
  "white-home-button": {
    backgroundColor: "white",
    color: "black",
    marginTop: theme.spacing(2),
    fontSize: "1.2rem",
    fontWeight: "bold",
  },

  content: {
    fontWeight: "bold",
    color: "white",
    marginBottom: theme.spacing(1.5),
  },

  containers: {
    width: "800px",
    height: "600px",
    backgroundColor: "#e00126",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  //************************************************************************

  "main-home-Container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "40px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },

  "container-1": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    whiteSpace: "nowrap",
  },

  "sales-category": {
    marginTop: theme.spacing(30),
    "& ul": {
      listStyle: "none",
      display: "flex",
      width: "100%",
    },
    "& ul Button": {
      marginRight: theme.spacing(1.2),
    },
  },
  //Imagecontainer*******************************************************

  "image-container": {
    backgroundImage: `url(${container2Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "container",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    "& $content": {
      textShadow: "8px 10px 20px black",
    },
  },
  //Products display container*******************************************************
  "products-display-container": {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "minmax(250px, 1fr)",
    overflowX: "auto",
    overflowBehaviorInline: "contain",
    // padding: theme.spacing(3),
    margin: theme.spacing(2),
    width: "800px",
    height: "400px",
    // scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      // display: "none",
      width: "80px",
    },
  },
  "product-display-card": {
    width: "222px",
    height: "333px",
    "& img": {
      width: "100%",
    },
  },

  "card-content": {
    padding: theme.spacing(1),
  },
}));
