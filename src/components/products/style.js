import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  produsctsPageContainer: {
    display: "grid",
    gridTemplateColumns: "0.2fr 1fr",
    minHeight: "725px",
  },
  filterSectionContainer: {
    backgroundColor: theme.palette.background.default,
  },
  filterSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",

    position: "fixed",
    width: "250px",

    minWidth: "150px",
    borderRight: "1px solid #e0e0e0",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      opacity: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: "220px",
    },
  },
  gridContainer: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,

    // display: "flexbox",
    // display: "-webkit-flex",
    // webkitBoxOrient: "horizontal",
    // -ms-flex-direction: row;
    // -ms-flex-wrap: wrap;
    // -webkit-box-pack: start;
    // -ms-flex-pack: start;
    // -webkit-box-align: stretch;
    // -ms-flex-align: stretch;
    // -ms-flex-line-pack: stretch;
    justifyContent: "space-between",
    alignItems: "center",
    // alignContent: "stretch",
    display: "flex",
    flexWrap: "wrap",
    "& >*": {
      margin: theme.spacing(4),
    },
  },
  //Pagination styles*************************************************************************************************
  paginationOuterContainer: {
    width: "100%",
    padding: theme.spacing(1, 4),
    backgroundColor: theme.palette.background.default,
  },
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paginationInfo: {},
  paginationButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& Button": {
      width: "100px",
      height: "30px",
    },
    "& Button:hover": { backgroundColor: "black", color: "white" },
    "& > *": {
      margin: theme.spacing(1, 2),
    },
  },
  pagesContainer: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      border: "1px solid #e0e0e0",
      boxShadow: "-1px 2px 5px 0px #e0e0e0",
    },
    "& span:hover": { backgroundColor: "black", color: "white" },
  },
}));
