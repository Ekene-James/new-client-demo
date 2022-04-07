import React from 'react'
import { makeStyles,Typography,Grid} from '@material-ui/core';
import MiniBoxes from '../simplePlan/MiniBoxes';
const useStyles = makeStyles((theme) => ({
    root: {
        margin:'0',
        marginBottom:0
      
    },
    bg: {
        background: 'url(/images/aab.jpg) no-repeat center center/cover',
        width: '100%',
        height : '700px',
       backgroundAttachment : 'fixed',
       display:'flex',
       justifyContent:'end',
       alignItems:'center'
      
    },
    
    
  }));
function ViewEverything({txt}) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
   
        <div className={classes.bg}>
            <MiniBoxes
                 width='35%'
                header='The Best Speed You Need for your Electric Bicycle'
                desc='Imagine what if you have the power of throttle in your E bike? Well, we give you exactly that! A full-fledged twist throttle, so that your bike rides at your command and your thirst for speed is quenched.'
                />
        </div>
            
    </div>
    )
}

export default ViewEverything
