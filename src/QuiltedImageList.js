import * as React from 'react';
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
  return (
    <ImageList className="App-Table"
      sx={{ minWidth: 1080, width: "70%", maxWidth: 1280 }}
      variant="quilted"
      cols={4}
    >
      {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img className="Tile-vignette"
              {...srcset('/Vignette.png', 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{
                minHeight: 400, height: "40%", maxHeight: 400
              }}
            />
            <a href={item.link}>
            <Hoverable title={item.title} date={item.date} desc={item.desc} type={item.type}/>
            </a>
          </ImageListItem>
      ))}
    </ImageList>
  );
}