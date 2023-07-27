import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    "filterSectionContainer":{
        padding:theme.spacing(1,0),
        margin:theme.spacing(1,0),
    },
    categoryItems:{
        listStyle: "none",
        margin:theme.spacing(1,0),
        "& li input":{
            marginRight:theme.spacing(1),
        },
        "& li span":{
            fontSize:"14px",
            fontWeight:"300",
        },
    },
}));
