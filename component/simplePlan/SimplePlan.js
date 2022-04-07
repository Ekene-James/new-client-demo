import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import MiniBoxes from './MiniBoxes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'70vh',
    position:'relative',
    backgroundAttachment : 'fixed'
    



  },
  content: {
    position:'absolute',
    top:'10%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'Cormorant Infant,-apple-system',
    
    flexDirection:'column',
    width:'100%',
    height:'100%'
  },
  innerContent: {
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  
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

 function SimplePlan() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <video autoPlay muted id="heroVideo" src='video-riding-plans-bg.mp4' className={classes.vid} loop  />
    
      
        <div className={classes.content}>
          <Typography variant="h5" color="black" component="p">
                 Simple Plans
          </Typography>
            <div className={classes.innerContent}>
                <MiniBoxes header='Flex' desc='Ride a little or a lot, just pay for the power you use each month.'/>
                <MiniBoxes header='Fixed' desc='Pick options that fit your average monthly riding and save.'/>
                <MiniBoxes header='Fleet' desc='Ride a little or a lot, just pay for the power you use each month.'/>
            </div>
         
        </div>
      
    </div>
  );
}
export default SimplePlan