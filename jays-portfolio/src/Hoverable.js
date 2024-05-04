import * as React from 'react';

export default function Hoverable({title, date, desc, type}) {
  return (
    <div className="Tile">
      <div className="Tile-popup" style={{
      backgroundImage: `url("/Tileshadow2.png")`,
      }}>
        <div className="Tile-text Tile-title">
          {title}
        </div>
        <div className="Tile-dateAndType">
          <div className="Tile-text Tile-date">
          Published {date}
          </div>
          <div className="Tile-text Tile-type">
            Type: {type}
          </div>
        </div>
        <div className="Tile-text Tile-desc">
          {desc}
        </div>
      </div>
    </div>
  );
}