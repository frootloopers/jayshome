import './App.css';

import QuiltedImageList from './QuiltedImageList.js';
import LinksRow from './LinksRow.js';

function App() {
  return (
    <div className="App">
      <div className="App-background" style={{
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
    </div>
  );
}




const itemData = [
  {
    img: 'JaysBuildingExpansion1.png',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3189275874',
    title: 'Jay\'s Building Expansion',
    desc: 'Expansion pack made for Project Zomboid\'s building system. \nAdds custom building upgrade mechanic. \nIntroduces many new tiles, including custom art by yours truly.',
    type: "Mod",
    date: "17/03/2024",
    rows: 2,
    cols: 2,
  },
  {
    img: 'Splashpage_blue.jpg',
    link: 'https://jennyho.itch.io/porous-is-he',
    title: 'Porous Is He',
    desc: 'Puzzle-platformer game that revolves around absorption. \nDirector and head programmer',
    type: "Game",
    date: "06/12/2023",
    rows: 2,
    cols: 2,
  },
  {
    img: 'DTW1.png',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2891779083',
    title: 'Dive Through Windows',
    desc: 'Project Zomboid mod that lets players throw themselves through windows. \nUses replication to sync animations in MP. \nSeen on youtube channels including Nurse. 250k+ downloads',
    type: "Mod",
    date: "21/11/2022",
    rows: 2,
    cols: 2,
  },
  {
    img: 'JaysPathfindFix.png',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3185310846',
    title: 'Pathfind Fix',
    desc: 'Java mod which fixes a pathfinding error in Project Zomboid.',
    type: "Mod",
    date: "15/03/2024",
    rows: 2,
    cols: 2,
  },
];

export default App;
