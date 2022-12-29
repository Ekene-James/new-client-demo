import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    marginBottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    background: "#333",
    color: "white",
    height: "80vh",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "50px",
    color: "white",
    background: "#333",
    boxShadow: "0 20px 50px rgba(0,0,0,.8)",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  p: {
    [theme.breakpoints.down("sm")]: {
      width: "90%!important",
    },
  },
}));
function UltimateComfort() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 style={{ fontSize: "70px", fontWeight: "500" }}>
          ULTIMATE COMFORT
        </h1>
        <p style={{ width: "30%", textAlign: "center" }} className={classes.p}>
          The Svitch Bike comes with a front suspension which makes the ride
          smooth and comfortable. It’s the Best ebike in Ahmedabad, India
        </p>
      </div>
    </div>
  );
}

export default UltimateComfort;
