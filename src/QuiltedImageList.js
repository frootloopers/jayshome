import * as React from 'react';
import { useState, useEffect } from 'react';
import Hoverable from './Hoverable';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList({itemData}) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  var maxCols = 4
  var listWidth = 1080

  if (windowSize.width < 1240){
    maxCols = 2
    listWidth = 540
  }


  useEffect(() => {
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <ImageList className="App-Table"
      sx={{ minWidth: "300px", width: "70%", maxWidth: listWidth }}
      variant="quilted"
      cols={maxCols}
    >
      {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img className="Tile-vignette"
              {...srcset('Vignette.png', 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              className="Tile-img"
              alt={item.title}
              loading="lazy"
            />
            <a href={item.link}>
            <Hoverable title={item.title} date={item.date} desc={item.desc} type={item.type}/>
            </a>
          </ImageListItem>
      ))}
    </ImageList>
  );
}