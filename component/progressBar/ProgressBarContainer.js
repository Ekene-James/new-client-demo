import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import OnScreenObserver from "../../observerHook";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "black",
    height: "70vh",
    width: "100%",
    color: "white",
    padding: "0px 100px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  first: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    width: "40%",
    marginRight: "30px",
    textAlign: "start",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  second: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  calibration: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "50vw !important",
    },
  },
  calibrationTxt: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
}));

export default function ProgressBarContainer() {
  const classes = useStyles();
  const containerRef = React.useRef(null);

  const isIntersecting = OnScreenObserver(containerRef, 0.5);

  return (
    <div className={classes.root} ref={containerRef}>
      <div className={classes.first}>
        <h2>Fastest of all, hands down the best ebike</h2>
        <p>
          The 250 W motor gives you the speed you need, the electric cycle tops
          a speed of 25 km/h* once you start pedaling. The uncapped speed of the
          bike goes way faster than that reaching up to 60km/h but as per the
          Government Of India mandate, we lock the speed at 25km/h.
        </p>
      </div>
      <div className={classes.second}>
        <ProgressBar
          isIntersecting={isIntersecting}
          desc={"Pedal Assist Motor"}
          timeToStop={45}
        />
        <ProgressBar
          isIntersecting={isIntersecting}
          desc={"250 Watts Motor"}
          timeToStop={25}
        />
        <div
          style={{ width: "67%", marginLeft: "8%" }}
          className={classes.calibration}
        >
          <div
            className={classes.calibration}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <small className={classes.calibrationTxt}>0km/h</small>
            <small className={classes.calibrationTxt}>20km/h</small>
            <small className={classes.calibrationTxt}>50km/h</small>
            <small className={classes.calibrationTxt}>75km/h</small>
            <small className={classes.calibrationTxt}>100km/h</small>
          </div>
          <div
            style={{ background: "#AA6c39", height: "4px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
