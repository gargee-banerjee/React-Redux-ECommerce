import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    loaderWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "#3f3e3ed1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 8999,
      },
}));