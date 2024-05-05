import * as React from 'react';

import { ReactComponent as LinkLogo } from './icon_link.svg';

export default function Hoverable({title, date, desc, type, link}) {
  return (
    <div className="Tile">
      <div className="Tile-popup" style={{
      backgroundImage: `url("Tileshadow2.png")`,
      }}>
        <div className="Tile-titlerow">
          <div className="Tile-text Tile-title">
            {title}
          </div>
          <a href={link}>
            <LinkLogo fill='#00FF00' style={{ height: 50, width: 50 }}/>
          </a>
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