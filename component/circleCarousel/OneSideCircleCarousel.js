import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import OnScreenObserver from '../../observerHook';


const useStyles = makeStyles((theme) => ({
    '@keyframes animate' : {
      '0%': {
        transform:'perspective(1000px) rotateY(0deg)'
        },
      '100%':{
        transform:'perspective(1000px) rotateY(360deg)'
      }  
  },
 
  container: {

    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    height:'80vh',
    width:'100%',
    background:'#333',
    overflow:'hidden',
    padding:'0px 10%'
  
  
    
  },
  box: {

  
    height:'350px',
    width:'60%',
    position:'relative',
    transformOrigin:'center',
    transformStyle:'preserve-3d',
    WebkitBoxReflect:'below 0px linear-gradient(transparent,transparent,#0009)',
    
  },
  animate:{
    animation:'$animate 20s linear infinite',

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
  container2: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    color:'white',
    width:'40%',
    background:'#333',  
    boxShadow: '0 20px 50px rgba(0,0,0,.8)',
    textAlign:'center',
    padding:'5%'
  


  },

 
}));

 function OneSideCircleCarousel({imgSrc,header,desc,direction='row'}) {
  
  const classes = useStyles();
  const containerRef = React.useRef(null);
  const isIntersecting = OnScreenObserver(containerRef,0.5)
  return (
    <div className={classes.container} ref={containerRef} style={{flexDirection:direction}}>
    <div className={classes.container2} >
        <h3>{header}</h3>
        <p>{desc}</p>
    </div>
    <div 
    className={clsx(classes.box, {
      [classes.animate]: isIntersecting,
        })}
    >
      <span  className={classes.span} ><img  className={classes.img} src={imgSrc} alt={'img'}/></span>
    </div>

    </div>
  );
}
export default OneSideCircleCarousel
