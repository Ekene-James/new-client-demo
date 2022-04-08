import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';
import OnScreenObserver from '../../observerHook';
import CustomizedLinearProgressBars from './ProgressBar';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'linear-gradient(-225deg,#231557 0%,#44107a 29%,#ff1361 67%,#fff800 100%)',
  },
}))(LinearProgress);





const useStyles = makeStyles({
  root: {
  
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   background:'black',
   height:'70vh',
   width:'100%',
   color:'white',
   padding:'0px 100px'
  },
  first: {
  
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
  flexDirection:'column',
   color:'white',
   width:'40%',
   marginRight:'30px',
   textAlign:'start'
  },
  second: {
  
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
  flexDirection:'column',
   color:'white',
   width:'60%'
  },
  calibration: {
  
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
  flexDirection:'column',
  
  },
});

export default function ProgressBarContainer() {
  const classes = useStyles();
  const containerRef = React.useRef(null);


  const isIntersecting = OnScreenObserver(containerRef,0.5)


  return (
    <div className={classes.root} ref={containerRef}>
    <div className={classes.first}>
      <h2>Fastest of all, hands down the best ebike</h2>
      <p>The 250 W motor gives you the speed you need, the electric cycle tops a speed of 25 km/h* once you start pedaling. The uncapped speed of the bike goes way faster than that reaching up to 60km/h but as per the Government Of India mandate, we lock the speed at 25km/h.</p>
    </div>
      <div className={classes.second}>
          <CustomizedLinearProgressBars isIntersecting={isIntersecting} desc={'Pedal Assist Motor'} timeToStop={45}/>
          <CustomizedLinearProgressBars isIntersecting={isIntersecting} desc={'250 Watts Motor'} timeToStop={25}/>
          <div style={{width:'73%',marginLeft:'8%'}} className={classes.calibration}>
              <div className={classes.calibration} style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <small>0km/h</small>
                <small>20km/h</small>
                <small>50km/h</small>
                <small>75km/h</small>
                <small>100km/h</small>
              </div>
            <div style={{ background:'#AA6c39',height:'4px',width:'100%'}}/>
          </div>
      </div>
    </div>
  );
}
