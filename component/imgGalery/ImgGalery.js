import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#333',
    height:'80vh',


  },
  imageList: {
    //height:'100%',
    boxShadow: '0 20px 50px #222',
    //width:'100%',
    margin:0,
    display: 'grid',
    gap:'0.5%',
    //repeat(4, 1fr)
},

img: {
    gridTemplateColumns:'1fr',
    width: 'auto',
   
    objectFit: 'contain',
    objectPosition:'center',
   
  
    transition :'opacity .8s ease-in-out,transform .8s ease-in-out',
    // '&:hover':{
    //   opacity : '0.7',
    //   transform:'scale(1.1)'
    // }
}
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     src: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


 const itemData = [
    {
      src: '/images/gallery/01.jpg',
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      src: '/images/gallery/02.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      src: '/images/gallery/07.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      src: '/images/gallery/05022021_02.jpg',
      title: 'Image',
      author: 'author',
      cols: 3,
    },
    {
      src: '/images/gallery/DSC00575.JPG',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      src: '/images/gallery/DSC00764.JPG',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      src: '/images/gallery/svitch 6-7-2115175.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      src: '/images/gallery/svitch 6-7-2115323.jpg',
      title: 'Image',
      author: 'author',
      cols: 2,
    },
   
  ];
export default function ImgGalery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageList}>
        {itemData.map((item,i) => (
            <img src={item.src} key={i}  className={classes.img} alt={item.title} />
         
        ))}
      </div>
    </div>
  );
}
