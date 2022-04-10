import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import OnScreenObserver from '../../observerHook';


const useStyles = makeStyles((theme) => ({
    '@keyframes animate' : {
      '0%': {
        transform:'translateX(30%)',
        opacity:0
        },
      '100%':{
        transform:'translateX(0%)',
        opacity:1
      }  
  },
    '@keyframes animateReverse' : {
      '0%': {
        transform:'translateX(-20%)',
        opacity:0
        },
      '100%':{
        transform:'translateX(0%)',
        opacity:1
      }  
  },
 
  container: {

    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    height:'80vh',
    width:'100%',
    background:'black',
    overflow:'hidden',
    padding:'0px 10%'
  
  
    
  },
  box: {
    width:'50%',
    opacity:0,
    display:'flex',
    alignItems:'center',
    
},
animate:{
      justifyContent:'flex-end',
      animation:'$animate 1.5s linear forwards',

    },
  animateReverse:{
    justifyContent:'flex-start',
    animation:'$animateReverse 1.5s linear forwards',

  },

  img: {
    width:'60%',
    height:'60%',
    objectFit:'contain',
    
    
    
  },

  container2: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    color:'white',
    width:'40%',
    background:'black',  
    boxShadow: '0 20px 50px #222',
    textAlign:'center',
    padding:'5%',
    transition:'opacity 2s ease-in-out',
    opacity:0
  },
  animateContainer2: {
    opacity:1
    
  },

 
}));

 function ImageAndTxt({imgSrc,header,desc,direction='row'}) {
  
  const classes = useStyles();
  const containerRef = React.useRef(null);
  const isIntersecting = OnScreenObserver(containerRef,0.5)
  return (
    <div className={classes.container} ref={containerRef} style={{flexDirection:direction}}>
    <div 
    className={clsx(classes.container2, {
        [classes.animateContainer2]: isIntersecting,
          })} >
        <h3>{header}</h3>
        <p>{desc}</p>
    </div>
    <div 
    className={clsx(classes.box, {
      [classes.animate]: isIntersecting && direction === 'row',
      [classes.animateReverse]: isIntersecting && direction === 'row-reverse',
        })}
        >
        <img  
            className={classes.img}
              src={imgSrc} alt={'img'}
              />
    </div>

    </div>
  );
}
export default ImageAndTxt
