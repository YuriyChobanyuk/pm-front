import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { routes } from './routes';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

interface Props {
  hideDrawer: boolean;
  toggleDrawer: (hideDrawer: boolean) => void;
}

const SideMenu: FC<Props> = ({ hideDrawer, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={hideDrawer} onClose={() => toggleDrawer(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          {routes.map(({ Icon, name, path }) => (
            <Link to={path}>
              <ListItem button key={name}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideMenu;
