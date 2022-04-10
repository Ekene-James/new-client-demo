import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width:'70%'
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#AA6c39',
  },
}))(LinearProgress);





const useStyles = makeStyles({
  root: {
   width:'100%',
   display:'flex',
   alignItems:'center',
   justifyContent:'space-between',
   color:'white'
  },
});

export default function ProgressBar({isIntersecting,desc,timeToStop}) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const timer = React.useRef(null)


  React.useEffect(() => {
    if(isIntersecting){
      if(progress > timeToStop) clearInterval(timer.current);
       timer.current = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= timeToStop ? timeToStop : prevProgress + 1));
      }, 50);

    }
    return () => {
      clearInterval(timer.current);
    };
  }, [isIntersecting]);

  return (
    <div className={classes.root}>
      <p>{desc}</p>
          <BorderLinearProgress variant="determinate" value={progress} />
      <p>{progress} KM/H</p>
    </div>
  );
}
