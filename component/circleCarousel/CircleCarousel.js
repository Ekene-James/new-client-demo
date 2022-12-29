import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import OnScreenObserver from "../../observerHook";

const useStyles = makeStyles((theme) => ({
  "@keyframes animate": {
    "0%": {
      transform: "perspective(1000px) rotateY(0deg)",
    },
    "100%": {
      transform: "perspective(1000px) rotateY(360deg)",
    },
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    background: "black",
    overflow: "hidden",
    flexDirection: "column",
    position: "relative",
  },
  box: {
    height: "350px",
    width: "550px",
    position: "relative",
    transformOrigin: "center",
    transformStyle: "preserve-3d",
    WebkitBoxReflect:
      "below 0px linear-gradient(transparent,transparent,#0009)",
    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
  },
  animate: {
    animation: "$animate 20s linear infinite",
  },
  span: {
    position: "absolute",
    top: "0",
    left: 0,

    width: "100%",
    height: "100%",
    transformOrigin: "center",
    transformStyle: "preserve-3d",
    overflowX: "hidden",
  },
  img: {
    position: "absolute",
    top: "0",
    left: 0,
    width: "100%",
    height: "100%",
    // maxWidth:'150px',
    // maxHeight:'150px',

    objectFit: "contain",
  },
  captivating: {
    margin: 0,
    marginTop: "-50px",
    backgroundImage:
      "linear-gradient(-225deg,#231557 0%,#44107a 29%,#ff1361 67%,#fff800 100%)",
    justifySelf: "start",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    WebkitTextFillColor: "transparent",
    fontSize: "100px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },
  km: {
    margin: 0,

    backgroundImage: "linear-gradient(-225deg,#ff1361 15%,#fff800 100%)",

    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    WebkitTextFillColor: "transparent",
    fontSize: "100px",

    position: "absolute",
    bottom: "5%",
    right: "30%",
  },
  unit: {
    backgroundImage: "linear-gradient(-225deg,#ff1361 15%,#fff800 100%)",

    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    WebkitTextFillColor: "transparent",

    position: "absolute",
    bottom: "15%",
    right: "27%",
  },
}));

function CircleCarousel() {
  const classes = useStyles();
  const containerRef = React.useRef(null);
  const isIntersecting = OnScreenObserver(containerRef, 0.5);
  return (
    <div className={classes.container} ref={containerRef}>
      <h3 className={classes.captivating}>IT'S CAPTIVATING</h3>
      <div
        className={clsx(classes.box, {
          [classes.animate]: isIntersecting,
        })}
      >
        <span className={classes.span}>
          <img
            className={classes.img}
            src={"/images/NXE Blue.png"}
            alt={"img"}
          />
        </span>
      </div>

      <h3 className={classes.km}>25</h3>
      <span className={classes.unit}>KM/H</span>
    </div>
  );
}
export default CircleCarousel;
//style={{transform:'rotateY(45deg) translateZ(400px)'}}
