import React from 'react'
import { makeStyles,Typography,Grid} from '@material-ui/core';
import MiniBoxes from '../miniBoxes/MiniBoxes';

const useStyles = makeStyles((theme) => ({
    root: {
        margin:'0',
        marginBottom:0
      
    },
    bg: {
        background: 'url(/images/DSC00843.JPG) no-repeat center center/cover',
        width: '100%',
        height : '700px',
       backgroundAttachment : 'fixed',
       display:'flex',
       justifyContent:'start',
       alignItems:'center',
      
      
    },
    
    
  }));
function PrimeMovers() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
   
        <div className={classes.bg}>
            <MiniBoxes
                 width='34%'
                header='The Prime Mover'
                desc='The 250W brushless DC motor drives this beast in all types of roads and even to destinations of your adventures. Svitch is a multi-terrain e bikes. Take it wherever your heart says. Be it a beach, a desert, a hilly ride, or to your favorite beaches.

                The ebikes don’t have big engines and gearboxes, the motor is compact and powerful. This will allow you to toy with different shapes and dimensions of the road. Svitch bike comes with various battery options making it the best e bike in the market.
                
                Svitch will be with you.'
                />
        </div>
            
    </div>
    )
}

export default PrimeMovers
