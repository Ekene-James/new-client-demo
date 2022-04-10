import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'100vh',
    position:'relative',
 
    



  },
  content: {
    position:'absolute',
    top:'10%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'Cormorant Infant,-apple-system',
    color:'white',
    flexDirection:'column',
    width:'100%'
  },
  name: {
    fontFamily: 'Cormorant Infant,-apple-system',

  },
  img: {
    transition : 'transform 1s ease-in, opacity .7s ease-in-out',
    
'&:hover': {
    opacity:0.5,
    transform:'scale(1.1)'
}
  },
  vid: {
    width: '100%',
    height:'100%',
    objectFit: 'cover',
  },
}));

 function Hero() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <video autoPlay muted  src='video-home-kv.mp4' className={classes.vid} loop  />
        <div className={classes.content}>
  
        </div>
    </div>
  );
}
export default Hero