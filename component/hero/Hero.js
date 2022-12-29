import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },

  vid: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <video
        autoPlay
        muted
        src="video-home-kv.mp4"
        className={classes.vid}
        loop
      />
    </div>
  );
}
export default Hero;
