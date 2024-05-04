import './App.css';

import QuiltedImageList from './QuiltedImageList.js';
import LinksRow from './LinksRow.js';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url("Background.png")`,
      }}>
      <div className="Title">
        Jay's Home
      </div>
      <div className="Body-table">
        <QuiltedImageList itemData={itemData}></QuiltedImageList>
      </div>
      <LinksRow></LinksRow>
    </div>
  );
}




const itemData = [
  {
    img: 'JaysBuildingExpansion1.png',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3189275874',
    title: 'Jay\'s Building Expansion',
    desc: 'An expansion pack I made for Project Zomboid\'s base-building system. Introduces dozens of new tiles, including custom art by yours truly. ',
    type: "Mod",
    date: "17/03/2024",
    rows: 2,
    cols: 2,
  },
  {
    img: 'Splashpage_blue.jpg',
    link: 'https://jennyho.itch.io/porous-is-he',
    title: 'Porous Is He',
    desc: 'Team lead for a puzzle-platformer game that revolves around absorption.',
    type: "Game",
    date: "06/12/2023",
    rows: 2,
    cols: 2,
  },
  {
    img: 'DTW1.png',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2891779083',
    title: 'Dive Through Windows',
    desc: 'Mod for Project Zomboid which allows players to throw themselves through windows. Modified animation replication to make the mod work in multiplayer. As seen on multiple youtube channels including Nurse',
    type: "Mod",
    date: "21/11/2022",
    rows: 2,
    cols: 2,
  },
  {
    img: 'JaysPathfindFix.png',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3185310846',
    title: 'Pathfind Fix',
    desc: 'Java mod which fixes an error in the pathfinder of Project Zomboid.',
    type: "Mod",
    date: "15/03/2024",
    rows: 2,
    cols: 2,
  },
];

export default App;
