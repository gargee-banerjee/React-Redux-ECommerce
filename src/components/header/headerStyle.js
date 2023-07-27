import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  image: {
    height: "45px",
    [theme.breakpoints.down("sm")]: {
      height: "25px",
    },
  },
  helpContainer: {
    display: "flex",
    alignItems: "center",
    "& >*": {
      marginRight: theme.spacing(2),
    },
  },

  // ********************** Account section*******************
  headerAccountSection: {
    display: "flex",
  },
  headerAccountSectionTitle: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  //Account dropdown
  accountDropdown: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&:hover $accountDropdownMenu": {
      opacity: 1,
    },
  },
  accountLink: {
    "&:hover": {
      color: "black",
    },
  },
  accountDropdownMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    top: "100%",
    right: "50%",
    boxShadow: "0 5px 5px 2px rgba(0,0,0,0.2)",
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    transition: "opacity 0.2s ease-in-out",
    opacity: 0,
    zIndex: 1,
    "& ul li": {
      listStyle: "none",
      marginBottom: theme.spacing(0.5),
      whiteSpace: "nowrap",
    },
    "& ul li:hover > *": {
      fontWeight: "bold",
    },
  },
  signInButton: {
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "1.3rem",
    padding: "1rem 9rem",
    whiteSpace: "nowrap",
  },
  divider:{
    margin: theme.spacing(1,0,2,0),
  },

  headerProductNavigationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerProductCategory: {
    display: "flex",
    "& >*": { marginRight: theme.spacing(2) },
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #000",
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
  searchInput: {
    fontSize: "1.5rem",
  },
  cartSectionIcons: {
    fontSize: "3rem",
    stroke: "#ffffff",
    strokeWidth: 1,
  },
  linkActive: {
    color: "#000",
    borderBottom: "2px solid #000",
  },
}));
