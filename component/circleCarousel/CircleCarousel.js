import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    '@keyframes animate' : {
      '0%': {
        transform:'perspective(1000px) rotateY(0deg)'
        },
      '100%':{
        transform:'perspective(1000px) rotateY(360deg)'
      }  
  },
    '@keyframes txt' : {
      'from': {
       opacity:0
      },
      'to': {
        opacity:1
       
      }
  },
  container: {

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh',
    width:'100%',
    background: 'black',
    overflow:'hidden',
    flexDirection:'column',
    position:'relative',
    
  },
  box: {

  
    height:'350px',
    width:'550px',
    position:'relative',
    transformOrigin:'center',
    transformStyle:'preserve-3d',
    animation:'$animate 20s linear infinite',
    WebkitBoxReflect:'below 0px linear-gradient(transparent,transparent,#0009)',
        
  },
  span: {
    position:'absolute',
    top:'0',
    left:0,
    
    width:'100%',
    height:'100%',
    transformOrigin:'center',
    transformStyle:'preserve-3d',
    overflowX:'hidden'
  


  },
  img: {
    position:'absolute',
    top:'0',
    left:0,
    width:'100%',
    height:'100%',
    // maxWidth:'150px',
    // maxHeight:'150px',
    
  objectFit:'contain'


  },
  captivating: {
   margin:0,
   marginTop:'-50px',
    backgroundImage: 'linear-gradient(-225deg,#231557 0%,#44107a 29%,#ff1361 67%,#fff800 100%)',
    justifySelf:'start',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitTextFillColor: 'transparent',
    fontSize: '100px',
    animation:'$txt 1s linear forward',


  },
  km: {
   margin:0,

    backgroundImage: 'linear-gradient(-225deg,#ff1361 15%,#fff800 100%)',
    
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitTextFillColor: 'transparent',
    fontSize: '100px',
    animation:'$txt 1s linear forward',
    position:'absolute',
    bottom:'5%',
    right:'30%'


  },
  unit: {
  
   
    backgroundImage: 'linear-gradient(-225deg,#ff1361 15%,#fff800 100%)',
    
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitTextFillColor: 'transparent',
    
    animation:'$txt 1s linear forward',
   
    position:'absolute',
    bottom:'15%',
    right:'27%',
 


  },
 
}));

 function CircleCarousel({header,desc}) {
  
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <h3 className={classes.captivating}>IT'S CAPTIVATING</h3>
    <div className={classes.box}>
      <span  className={classes.span} ><img  className={classes.img} src={'/images/NXE Blue.png'} alt={'img'}/></span>
    </div>

    <h3 className={classes.km}>25</h3>
    <span className={classes.unit}>KM/H</span>
    </div>
  );
}
export default CircleCarousel
//style={{transform:'rotateY(45deg) translateZ(400px)'}}  