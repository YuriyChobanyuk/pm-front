import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

export const routes: {
  name: string;
  Icon: React.FC;
  path: string;
}[] = [
  {
    name: 'Home',
    path: '/',
    Icon: () => <HomeIcon />,
  },
  {
    name: 'Info',
    path: '/info',
    Icon: () => <InfoIcon />,
  },
];
