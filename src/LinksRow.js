import * as React from 'react';

import { ReactComponent as EmailLogo } from './email.svg';
import { ReactComponent as LinkedInLogo } from './linkedin.svg';

const linksData = [
  {
    img: EmailLogo,
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3189275874',
    title: 'LinkedIn',
  },
  {
    img: LinkedInLogo,
    link: 'jayzchen2001@gmail.com',
    title: 'E-mail',
  },
]


export default function LinksRow() {
  return (
    <div className="App-Table">
      <a href='https://www.linkedin.com/in/jian-jia-chen'>
        <LinkedInLogo className={`Iconbutton`} style={{ height: 50, width: 50 }}/>
      </a>
      <a href='mailto: jayzchen2001@gmail.com'>
        <EmailLogo className={`Iconbutton`}/>
      </a>
    </div>
  );
}