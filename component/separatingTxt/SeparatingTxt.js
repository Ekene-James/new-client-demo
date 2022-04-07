import React from 'react'
import { makeStyles,Typography,Grid} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        margin:'50px 0',
        
      
    },
 
    
    
  }));
function SeparatingTxt({txt}) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
   
            <Typography style={{textAlign : 'center',}} variant="body2" gutterBottom>
                 {txt}
            </Typography>
        
            
    </div>
    )
}

export default SeparatingTxt
