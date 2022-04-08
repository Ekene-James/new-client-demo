import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'Cormorant Infant,-apple-system',
    background: 'rgba(255,255,255,0.5)',
    backdropFilter: 'blur(18px)',
    flexDirection:'column',
    borderRadius:'30px',
    height:'40%',
  
    border:'2px solid white',
    margin:'0 10px',
    padding:'5px',
    textAlign:'center'
  },
 
}));

 function MiniBoxes({header,desc,width='20%'}) {
  
  const classes = useStyles();

  return (
    <div className={classes.root} style={{width}}>
    <Typography variant="h5" style={{color:'black'}} component="p">
         {header}
    </Typography>
    <Typography variant="body2" style={{color:'black',maxWidth:'90%'}} component="p">
         {desc}
    </Typography>
    

    </div>
  );
}
export default MiniBoxes